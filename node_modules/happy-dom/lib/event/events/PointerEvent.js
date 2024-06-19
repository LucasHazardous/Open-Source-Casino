"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MouseEvent_1 = __importDefault(require("./MouseEvent"));
/**
 *
 */
class PointerEvent extends MouseEvent_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.pointerId = 0;
        this.width = 0;
        this.height = 0;
        this.pressure = 0;
        this.tangentialPressure = 0;
        this.tiltX = 0;
        this.tiltY = 0;
        this.twist = 0;
        this.pointerType = '';
        this.isPrimary = false;
        if (eventInit) {
            this.pointerId = eventInit.pointerId !== undefined ? eventInit.pointerId : 0;
            this.width = eventInit.width !== undefined ? eventInit.width : 0;
            this.height = eventInit.height !== undefined ? eventInit.height : 0;
            this.pressure = eventInit.pressure !== undefined ? eventInit.pressure : 0;
            this.tangentialPressure =
                eventInit.tangentialPressure !== undefined ? eventInit.tangentialPressure : 0;
            this.tiltX = eventInit.tiltX !== undefined ? eventInit.tiltX : 0;
            this.tiltY = eventInit.tiltY !== undefined ? eventInit.tiltY : 0;
            this.twist = eventInit.twist !== undefined ? eventInit.twist : 0;
            this.pointerType = eventInit.pointerType !== undefined ? eventInit.pointerType : '';
            this.isPrimary = eventInit.isPrimary || eventInit.isPrimary;
        }
    }
}
exports.default = PointerEvent;
//# sourceMappingURL=PointerEvent.js.map