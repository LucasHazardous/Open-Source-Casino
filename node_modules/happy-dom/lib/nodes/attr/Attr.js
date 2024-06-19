"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("../node/Node"));
/**
 * Attribute node interface.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Attr.
 */
class Attr extends Node_1.default {
    constructor() {
        super(...arguments);
        this.nodeType = Node_1.default.ATTRIBUTE_NODE;
        this.value = null;
        this.name = null;
        this.namespaceURI = null;
        /**
         * @deprecated
         */
        this.ownerElement = null;
        /**
         * @deprecated
         */
        this.specified = true;
    }
    /**
     * Returns local name.
     *
     * @returns Local name.
     */
    get localName() {
        return this.name ? this.name.split(':').reverse()[0] : null;
    }
    /**
     * Returns prefix.
     *
     * @returns Prefix.
     */
    get prefix() {
        return this.name ? this.name.split(':')[0] : null;
    }
    /**
     * @override
     */
    get textContent() {
        return this.value;
    }
}
exports.default = Attr;
//# sourceMappingURL=Attr.js.map