"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIEvent_1 = __importDefault(require("../UIEvent"));
/**
 *
 */
class WheelEvent extends UIEvent_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.deltaX = 0;
        this.deltaY = 0;
        this.deltaZ = 0;
        this.deltaMode = 0;
        if (eventInit) {
            this.deltaX = eventInit.deltaX !== undefined ? eventInit.deltaX : 0;
            this.deltaY = eventInit.deltaY !== undefined ? eventInit.deltaY : 0;
            this.deltaZ = eventInit.deltaZ !== undefined ? eventInit.deltaZ : 0;
            this.deltaMode = eventInit.deltaMode !== undefined ? eventInit.deltaMode : 0;
        }
    }
}
exports.default = WheelEvent;
WheelEvent.DOM_DELTA_PIXEL = 0;
WheelEvent.DOM_DELTA_LINE = 1;
WheelEvent.DOM_DELTA_PAGE = 2;
//# sourceMappingURL=WheelEvent.js.map