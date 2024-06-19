"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIEvent_1 = __importDefault(require("../UIEvent"));
/**
 *
 */
class ErrorEvent extends UIEvent_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.message = '';
        this.filename = '';
        this.lineno = 0;
        this.colno = 0;
        this.error = null;
        if (eventInit) {
            this.message = eventInit.message || '';
            this.filename = eventInit.filename || '';
            this.lineno = eventInit.lineno !== undefined ? eventInit.lineno : 0;
            this.colno = eventInit.colno !== undefined ? eventInit.colno : 0;
            this.error = eventInit.error || null;
        }
    }
}
exports.default = ErrorEvent;
//# sourceMappingURL=ErrorEvent.js.map