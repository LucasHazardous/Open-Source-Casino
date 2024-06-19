"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../Event"));
/**
 * Message event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent
 */
class MessageEvent extends Event_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit) {
        super(type, eventInit);
        this.data = null;
        this.origin = '';
        this.lastEventId = '';
        this.source = null;
        this.ports = [];
        this.data = eventInit?.data !== undefined ? eventInit.data : null;
        this.origin = eventInit?.origin || '';
        this.lastEventId = eventInit?.lastEventId || '';
        this.source = eventInit?.source || null;
        this.ports = eventInit?.ports || [];
    }
}
exports.default = MessageEvent;
//# sourceMappingURL=MessageEvent.js.map