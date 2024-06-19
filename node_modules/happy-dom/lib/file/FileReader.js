"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whatwg_mimetype_1 = __importDefault(require("whatwg-mimetype"));
const whatwg_encoding_1 = __importDefault(require("whatwg-encoding"));
const ProgressEvent_1 = __importDefault(require("../event/events/ProgressEvent"));
const DOMException_1 = __importDefault(require("../exception/DOMException"));
const DOMExceptionNameEnum_1 = __importDefault(require("../exception/DOMExceptionNameEnum"));
const FileReaderReadyStateEnum_1 = __importDefault(require("./FileReaderReadyStateEnum"));
const FileReaderFormatEnum_1 = __importDefault(require("./FileReaderFormatEnum"));
const EventTarget_1 = __importDefault(require("../event/EventTarget"));
const FileReaderEventTypeEnum_1 = __importDefault(require("./FileReaderEventTypeEnum"));
/**
 * Reference:
 * https://developer.mozilla.org/sv-SE/docs/Web/API/FileReader.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/FileReader-impl.js (MIT licensed).
 */
class FileReader extends EventTarget_1.default {
    /**
     * Constructor.
     */
    constructor() {
        super();
        this.error = null;
        this.result = null;
        this.readyState = FileReaderReadyStateEnum_1.default.empty;
        this.onabort = null;
        this.onerror = null;
        this.onload = null;
        this.onloadstart = null;
        this.onloadend = null;
        this.onprogress = null;
        this._ownerDocument = null;
        this._isTerminated = false;
        this._loadTimeout = null;
        this._parseTimeout = null;
        this._ownerDocument = this.constructor._ownerDocument;
    }
    /**
     * Reads as ArrayBuffer.
     *
     * @param blob Blob.
     */
    readAsArrayBuffer(blob) {
        this._readFile(blob, FileReaderFormatEnum_1.default.buffer);
    }
    /**
     * Reads as binary string.
     *
     * @param blob Blob.
     */
    readAsBinaryString(blob) {
        this._readFile(blob, FileReaderFormatEnum_1.default.binaryString);
    }
    /**
     * Reads as data URL.
     *
     * @param blob Blob.
     */
    readAsDataURL(blob) {
        this._readFile(blob, FileReaderFormatEnum_1.default.dataURL);
    }
    /**
     * Reads as text.
     *
     * @param blob Blob.
     * @param [encoding] Encoding.
     */
    readAsText(blob, encoding = null) {
        this._readFile(blob, FileReaderFormatEnum_1.default.text, whatwg_encoding_1.default.labelToName(encoding) || 'UTF-8');
    }
    /**
     * Aborts the file reader.
     */
    abort() {
        const window = this._ownerDocument.defaultView;
        window.clearTimeout(this._loadTimeout);
        window.clearTimeout(this._parseTimeout);
        if (this.readyState === FileReaderReadyStateEnum_1.default.empty ||
            this.readyState === FileReaderReadyStateEnum_1.default.done) {
            this.result = null;
            return;
        }
        if (this.readyState === FileReaderReadyStateEnum_1.default.loading) {
            this.readyState = FileReaderReadyStateEnum_1.default.done;
            this.result = null;
        }
        this._isTerminated = true;
        this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.abort));
        this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadend));
    }
    /**
     * Reads a file.
     *
     * @param blob Blob.
     * @param format Format.
     * @param [encoding] Encoding.
     */
    _readFile(blob, format, encoding = null) {
        const window = this._ownerDocument.defaultView;
        if (this.readyState === FileReaderReadyStateEnum_1.default.loading) {
            throw new DOMException_1.default('The object is in an invalid state.', DOMExceptionNameEnum_1.default.invalidStateError);
        }
        this.readyState = FileReaderReadyStateEnum_1.default.loading;
        this._loadTimeout = window.setTimeout(() => {
            if (this._isTerminated) {
                this._isTerminated = false;
                return;
            }
            this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadstart));
            let data = blob._buffer;
            if (!data) {
                data = Buffer.alloc(0);
            }
            this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadstart, {
                lengthComputable: !isNaN(blob.size),
                total: blob.size,
                loaded: data.length
            }));
            this._parseTimeout = window.setTimeout(() => {
                if (this._isTerminated) {
                    this._isTerminated = false;
                    return;
                }
                switch (format) {
                    default:
                    case FileReaderFormatEnum_1.default.buffer: {
                        this.result = new Uint8Array(data).buffer;
                        break;
                    }
                    case FileReaderFormatEnum_1.default.binaryString: {
                        this.result = data.toString('binary');
                        break;
                    }
                    case FileReaderFormatEnum_1.default.dataURL: {
                        // Spec seems very unclear here; see https://github.com/w3c/FileAPI/issues/104.
                        const contentType = whatwg_mimetype_1.default.parse(blob.type) || 'application/octet-stream';
                        (this.result) = `data:${contentType};base64,${data.toString('base64')}`;
                        break;
                    }
                    case FileReaderFormatEnum_1.default.text: {
                        this.result = whatwg_encoding_1.default.decode(data, encoding);
                        break;
                    }
                }
                this.readyState = FileReaderReadyStateEnum_1.default.done;
                this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.load));
                this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadend));
            });
        });
    }
}
exports.default = FileReader;
// Owner document is set by a sub-class in the Window constructor
FileReader._ownerDocument = null;
//# sourceMappingURL=FileReader.js.map