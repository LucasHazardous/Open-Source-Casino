"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DOM rect list factory.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
 */
class DOMRectListFactory {
    /**
     * Creates an HTMLCollection.
     *
     * @param list Nodes.
     * @returns HTMLCollection.
     */
    static create(list) {
        list = list ? list.slice() : [];
        Object.defineProperty(list, 'item', {
            value: this.getItem.bind(null, list)
        });
        return list;
    }
    /**
     * Returns node by index.
     *
     * @param list
     * @param index Index.
     */
    static getItem(list, index) {
        return list[index] || null;
    }
}
exports.default = DOMRectListFactory;
//# sourceMappingURL=DOMRectListFactory.js.map