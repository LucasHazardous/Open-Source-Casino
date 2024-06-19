"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIEvent_1 = __importDefault(require("../UIEvent"));
/**
 *
 */
class KeyboardEvent extends UIEvent_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.altKey = false;
        this.code = '';
        this.ctrlKey = false;
        this.isComposing = false;
        this.key = '';
        this.location = 0;
        this.metaKey = false;
        this.repeat = false;
        this.shiftKey = false;
        if (eventInit) {
            this.altKey = eventInit.altKey || false;
            this.code = eventInit.code || '';
            this.ctrlKey = eventInit.ctrlKey || false;
            this.isComposing = eventInit.isComposing || false;
            this.key = eventInit.key || '';
            this.location = eventInit.location !== undefined ? eventInit.location : 0;
            this.metaKey = eventInit.metaKey || false;
            this.repeat = eventInit.repeat || false;
            this.shiftKey = eventInit.shiftKey || false;
        }
    }
}
exports.default = KeyboardEvent;
KeyboardEvent.DOM_KEY_LOCATION_STANDARD = 0;
KeyboardEvent.DOM_KEY_LOCATION_LEFT = 1;
KeyboardEvent.DOM_KEY_LOCATION_RIGHT = 2;
KeyboardEvent.DOM_KEY_LOCATION_NUMPAD = 3;
//# sourceMappingURL=KeyboardEvent.js.map