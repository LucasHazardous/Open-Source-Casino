"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../Event"));
/**
 *
 */
class AnimationEvent extends Event_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit) {
        super(type, eventInit);
        this.animationName = '';
        this.elapsedTime = 0;
        this.pseudoElement = '';
        this.animationName = eventInit?.animationName || '';
        this.elapsedTime = eventInit?.elapsedTime || 0;
        this.pseudoElement = eventInit?.pseudoElement || '';
    }
}
exports.default = AnimationEvent;
//# sourceMappingURL=AnimationEvent.js.map