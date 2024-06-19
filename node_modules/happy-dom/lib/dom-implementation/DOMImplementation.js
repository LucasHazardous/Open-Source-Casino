"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentType_1 = __importDefault(require("../nodes/document-type/DocumentType"));
/**
 * The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the.
 */
class DOMImplementation {
    /**
     * Constructor.
     *
     * @param ownerDocument
     */
    constructor(ownerDocument) {
        this._ownerDocument = null;
        this._ownerDocument = ownerDocument;
    }
    /**
     * Creates and returns an XML Document.
     *
     * TODO: Not fully implemented.
     */
    createDocument() {
        const documentClass = this._ownerDocument.constructor;
        // @ts-ignore
        documentClass._defaultView = this._ownerDocument.defaultView;
        // @ts-ignore
        return new documentClass();
    }
    /**
     * Creates and returns an HTML Document.
     */
    createHTMLDocument() {
        return this.createDocument();
    }
    /**
     * Creates and returns an HTML Document.
     *
     * @param qualifiedName Qualified name.
     * @param publicId Public ID.
     * @param systemId System ID.
     */
    createDocumentType(qualifiedName, publicId, systemId) {
        DocumentType_1.default._ownerDocument = this._ownerDocument;
        const documentType = new DocumentType_1.default();
        documentType.name = qualifiedName;
        documentType.publicId = publicId;
        documentType.systemId = systemId;
        return documentType;
    }
}
exports.default = DOMImplementation;
//# sourceMappingURL=DOMImplementation.js.map