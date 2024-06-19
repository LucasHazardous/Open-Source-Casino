"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIEvent_1 = __importDefault(require("../UIEvent"));
/**
 *
 */
class FocusEvent extends UIEvent_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.relatedTarget = null;
        if (eventInit) {
            this.relatedTarget = eventInit.relatedTarget || null;
        }
    }
}
exports.default = FocusEvent;
//# sourceMappingURL=FocusEvent.js.map