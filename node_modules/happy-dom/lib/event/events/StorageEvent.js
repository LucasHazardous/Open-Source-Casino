"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../Event"));
/**
 *
 */
class StorageEvent extends Event_1.default {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type);
        this.key = null;
        this.newValue = null;
        this.oldValue = null;
        this.storageArea = null;
        if (eventInit) {
            this.key = eventInit.key !== undefined ? eventInit.key : null;
            this.newValue = eventInit.newValue !== undefined ? eventInit.newValue : null;
            this.oldValue = eventInit.oldValue !== undefined ? eventInit.oldValue : null;
            this.storageArea = eventInit.storageArea !== undefined ? eventInit.storageArea : null;
        }
    }
}
exports.default = StorageEvent;
//# sourceMappingURL=StorageEvent.js.map