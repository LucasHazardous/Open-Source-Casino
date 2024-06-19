"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIEvent_1 = __importDefault(require("../UIEvent"));
/**
 *
 */
class InputEvent extends UIEvent_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.data = '';
        this.dataTransfer = null;
        this.inputType = '';
        this.isComposing = false;
        if (eventInit) {
            this.data = eventInit.data || '';
            this.dataTransfer = eventInit.dataTransfer || null;
            this.inputType = eventInit.inputType || '';
            this.isComposing = eventInit.isComposing || false;
        }
    }
}
exports.default = InputEvent;
//# sourceMappingURL=InputEvent.js.map