"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_1 = __importDefault(require("../../exception/DOMException"));
const XMLParser_1 = __importDefault(require("../../xml-parser/XMLParser"));
/**
 * Child node utility.
 */
class ChildNodeUtility {
    /**
     * Removes the node from its parent.
     *
     * @param childNode Child node.
     */
    static remove(childNode) {
        if (childNode.parentNode) {
            childNode.parentNode.removeChild(childNode);
        }
    }
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param childNode Child node.
     * @param nodes List of Node or DOMString.
     */
    static replaceWith(childNode, ...nodes) {
        const parent = childNode.parentNode;
        if (!parent) {
            throw new DOMException_1.default('This element has no parent node.');
        }
        for (const node of nodes) {
            if (typeof node === 'string') {
                const newChildNodes = XMLParser_1.default.parse(childNode.ownerDocument, node).childNodes.slice();
                for (const newChildNode of newChildNodes) {
                    parent.insertBefore(newChildNode, childNode);
                }
            }
            else {
                parent.insertBefore(node, childNode);
            }
        }
        parent.removeChild(childNode);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param childNode Child node.
     * @param nodes List of Node or DOMString.
     */
    static before(childNode, ...nodes) {
        const parent = childNode.parentNode;
        if (!parent) {
            return;
        }
        for (const node of nodes) {
            if (typeof node === 'string') {
                const newChildNodes = XMLParser_1.default.parse(childNode.ownerDocument, node).childNodes.slice();
                for (const newChildNode of newChildNodes) {
                    parent.insertBefore(newChildNode, childNode);
                }
            }
            else {
                parent.insertBefore(node, childNode);
            }
        }
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param childNode Child node.
     * @param nodes List of Node or DOMString.
     */
    static after(childNode, ...nodes) {
        const parent = childNode.parentNode;
        if (!parent) {
            return;
        }
        const nextSibling = childNode.nextSibling;
        for (const node of nodes) {
            if (typeof node === 'string') {
                const newChildNodes = XMLParser_1.default.parse(childNode.ownerDocument, node).childNodes.slice();
                for (const newChildNode of newChildNodes) {
                    if (!nextSibling) {
                        parent.appendChild(newChildNode);
                    }
                    else {
                        parent.insertBefore(newChildNode, nextSibling);
                    }
                }
            }
            else if (!nextSibling) {
                parent.appendChild(node);
            }
            else {
                parent.insertBefore(node, nextSibling);
            }
        }
    }
}
exports.default = ChildNodeUtility;
//# sourceMappingURL=ChildNodeUtility.js.map