"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../Event"));
/**
 *
 */
class MediaQueryListEvent extends Event_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.matches = false;
        this.media = '';
        if (eventInit) {
            this.matches = eventInit.matches || false;
            this.media = eventInit.media || '';
        }
    }
}
exports.default = MediaQueryListEvent;
//# sourceMappingURL=MediaQueryListEvent.js.map