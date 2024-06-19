"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_1 = __importDefault(require("../exception/DOMException"));
const MutationListener_1 = __importDefault(require("./MutationListener"));
/**
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
class MutationObserver {
    /**
     * Constructor.
     *
     * @param callback Callback.
     */
    constructor(callback) {
        this.target = null;
        this.listener = null;
        this.callback = callback;
    }
    /**
     * Starts observing.
     *
     * @param target Target.
     * @param options Options.
     */
    observe(target, options) {
        if (!target) {
            throw new DOMException_1.default('Failed to observer. The first parameter "target" should be of type "Node".');
        }
        options = Object.assign({}, options, {
            attributeFilter: options.attributeFilter
                ? options.attributeFilter.map((name) => name.toLowerCase())
                : null
        });
        this.target = target;
        this.listener = new MutationListener_1.default();
        this.listener.options = options;
        this.listener.callback = this.callback.bind(this);
        target._observe(this.listener);
    }
    /**
     * Disconnects.
     */
    disconnect() {
        if (this.target) {
            this.target._unobserve(this.listener);
            this.target = null;
        }
    }
    /**
     * Takes records.
     */
    takeRecords() {
        return [];
    }
}
exports.default = MutationObserver;
//# sourceMappingURL=MutationObserver.js.map