"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_1 = __importDefault(require("../exception/DOMException"));
/**
 * Custom elements registry.
 */
class CustomElementRegistry {
    constructor() {
        this._registry = {};
        this._callbacks = {};
    }
    /**
     * Defines a custom element class.
     *
     * @param tagName Tag name of element.
     * @param elementClass Element class.
     * @param [options] Options.
     * @param options.extends
     */
    define(tagName, elementClass, options) {
        const upperTagName = tagName.toUpperCase();
        if (!upperTagName.includes('-')) {
            throw new DOMException_1.default("Failed to execute 'define' on 'CustomElementRegistry': \"" +
                tagName +
                '" is not a valid custom element name.');
        }
        this._registry[upperTagName] = {
            elementClass,
            extends: options && options.extends ? options.extends.toLowerCase() : null
        };
        // ObservedAttributes should only be called once by CustomElementRegistry (see #117)
        if (elementClass.prototype.attributeChangedCallback) {
            elementClass._observedAttributes = elementClass.observedAttributes;
        }
        if (this._callbacks[upperTagName]) {
            const callbacks = this._callbacks[upperTagName];
            delete this._callbacks[upperTagName];
            for (const callback of callbacks) {
                callback();
            }
        }
    }
    /**
     * Returns a defined element class.
     *
     * @param tagName Tag name of element.
     * @param HTMLElement Class defined.
     */
    get(tagName) {
        const upperTagName = tagName.toUpperCase();
        return this._registry[upperTagName] ? this._registry[upperTagName].elementClass : undefined;
    }
    /**
     * Upgrades a custom element directly, even before it is connected to its shadow root.
     *
     * Not implemented yet.
     *
     * @param _root Root node.
     */
    upgrade(_root) {
        // Do nothing
    }
    /**
     * When defined.
     *
     * @param tagName Tag name of element.
     * @returns Promise.
     */
    whenDefined(tagName) {
        const upperTagName = tagName.toUpperCase();
        if (this.get(upperTagName)) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            this._callbacks[upperTagName] = this._callbacks[upperTagName] || [];
            this._callbacks[upperTagName].push(resolve);
        });
    }
}
exports.default = CustomElementRegistry;
//# sourceMappingURL=CustomElementRegistry.js.map