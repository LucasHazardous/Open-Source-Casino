"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../Event"));
/**
 *
 */
class ProgressEvent extends Event_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type);
        this.lengthComputable = false;
        this.loaded = 0;
        this.total = 0;
        if (eventInit) {
            this.lengthComputable = eventInit.lengthComputable || false;
            this.loaded = eventInit.loaded !== undefined ? eventInit.loaded : 0;
            this.total = eventInit.total !== undefined ? eventInit.total : 0;
        }
    }
}
exports.default = ProgressEvent;
//# sourceMappingURL=ProgressEvent.js.map