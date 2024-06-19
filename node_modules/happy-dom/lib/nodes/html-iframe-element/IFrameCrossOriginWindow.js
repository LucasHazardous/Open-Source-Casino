"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventTarget_1 = __importDefault(require("../../event/EventTarget"));
const DOMException_1 = __importDefault(require("../../exception/DOMException"));
const DOMExceptionNameEnum_1 = __importDefault(require("../../exception/DOMExceptionNameEnum"));
/**
 * Browser window with limited access due to CORS restrictions in iframes.
 */
class IFrameCrossOriginWindow extends EventTarget_1.default {
    /**
     * Constructor.
     *
     * @param parent Parent window.
     * @param target Target window.
     */
    constructor(parent, target) {
        super();
        this.self = this;
        this.window = this;
        this.parent = parent;
        this.top = parent;
        this.location = new Proxy({}, {
            get: () => {
                throw new DOMException_1.default(`Blocked a frame with origin "${this.parent.location.origin}" from accessing a cross-origin frame.`, DOMExceptionNameEnum_1.default.securityError);
            },
            set: () => {
                throw new DOMException_1.default(`Blocked a frame with origin "${this.parent.location.origin}" from accessing a cross-origin frame.`, DOMExceptionNameEnum_1.default.securityError);
            }
        });
        this._targetWindow = target;
    }
    /**
     * Safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.
     *
     * @param message Message.
     * @param [targetOrigin=*] Target origin.
     * @param transfer Transfer. Not implemented.
     */
    postMessage(message, targetOrigin = '*', transfer) {
        this._targetWindow.postMessage(message, targetOrigin, transfer);
    }
}
exports.default = IFrameCrossOriginWindow;
//# sourceMappingURL=IFrameCrossOriginWindow.js.map