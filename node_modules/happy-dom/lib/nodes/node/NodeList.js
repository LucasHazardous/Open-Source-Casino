"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class list.
 */
class NodeList extends Array {
    /**
     * Returns `Symbol.toStringTag`.
     *
     * @returns `Symbol.toStringTag`.
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    /**
     * Returns item by index.
     *
     * @param index Index.
     */
    item(index) {
        return index >= 0 && this[index] ? this[index] : null;
    }
}
exports.default = NodeList;
//# sourceMappingURL=NodeList.js.map