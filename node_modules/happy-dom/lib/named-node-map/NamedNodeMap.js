"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NamedNodeMap_ownerElement;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * NamedNodeMap.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap.
 */
class NamedNodeMap {
    /**
     * Constructor.
     *
     * @param element Associated element.
     */
    constructor(element) {
        /**
         * Reference to the element.
         */
        _NamedNodeMap_ownerElement.set(this, void 0);
        __classPrivateFieldSet(this, _NamedNodeMap_ownerElement, element, "f");
    }
    /**
     * Returns string.
     *
     * @returns string.
     */
    get [(_NamedNodeMap_ownerElement = new WeakMap(), Symbol.toStringTag)]() {
        return this.constructor.name;
    }
    /**
     * Length.
     *
     * @returns Length.
     */
    get length() {
        return Object.keys(__classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f")._attributes).length;
    }
    /**
     * Returns attribute by index.
     *
     * @param index Index.
     */
    item(index) {
        if (index < 0) {
            return null;
        }
        const attr = Object.values(__classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f")._attributes)[index];
        return attr ? attr : null;
    }
    /**
     * Returns attribute by name.
     *
     * @param qualifiedName Name.
     * @returns Attribute.
     */
    getNamedItem(qualifiedName) {
        return __classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f").getAttributeNode(qualifiedName);
    }
    /**
     * Returns attribute by name and namespace.
     *
     * @param namespace Namespace.
     * @param localName Local name of the attribute.
     * @returns Attribute.
     */
    getNamedItemNS(namespace, localName) {
        return __classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f").getAttributeNodeNS(namespace, localName);
    }
    /**
     * Adds a new attribute node.
     *
     * @param attr Attribute.
     * @returns Replaced attribute.
     */
    setNamedItem(attr) {
        return __classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f").setAttributeNode(attr);
    }
    /**
     * Adds a new namespaced attribute node.
     *
     * @param attr Attribute.
     * @returns Replaced attribute.
     */
    setNamedItemNS(attr) {
        return __classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f").setAttributeNodeNS(attr);
    }
    /**
     * Removes an attribute.
     *
     * @param qualifiedName Name of the attribute.
     * @returns Removed attribute.
     */
    removeNamedItem(qualifiedName) {
        const attr = this.getNamedItem(qualifiedName);
        if (attr) {
            __classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f").removeAttributeNode(attr);
        }
        return attr;
    }
    /**
     * Removes a namespaced attribute.
     *
     * @param namespace Namespace.
     * @param localName Local name of the attribute.
     * @returns Removed attribute.
     */
    removeNamedItemNS(namespace, localName) {
        const attr = this.getNamedItemNS(namespace, localName);
        if (attr) {
            __classPrivateFieldGet(this, _NamedNodeMap_ownerElement, "f").removeAttributeNode(attr);
        }
        return attr;
    }
    /**
     * Iterator.
     *
     * @returns Iterator.
     */
    [Symbol.iterator]() {
        let index = -1;
        return {
            next: () => {
                index++;
                return { value: this.item(index), done: index >= this.length };
            }
        };
    }
}
exports.default = NamedNodeMap;
//# sourceMappingURL=NamedNodeMap.js.map