"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("../node/Node"));
/**
 * DocumentType.
 */
class DocumentType extends Node_1.default {
    constructor() {
        super(...arguments);
        this.nodeType = Node_1.default.DOCUMENT_TYPE_NODE;
        this.name = null;
        this.publicId = '';
        this.systemId = '';
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return this.name;
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return '[object DocumentType]';
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        clone.name = this.name;
        clone.publicId = this.publicId;
        clone.systemId = this.systemId;
        return clone;
    }
}
exports.default = DocumentType;
//# sourceMappingURL=DocumentType.js.map