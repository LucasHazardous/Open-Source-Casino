"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
class Storage {
    constructor() {
        this._store = {};
    }
    /**
     * Returns length.
     *
     * @returns Length.
     */
    get length() {
        return Object.keys(this._store).length;
    }
    /**
     * Returns name of the nth key.
     *
     * @param index Index.
     * @returns Name.
     */
    key(index) {
        const name = Object.keys(this._store)[index];
        return name === undefined ? null : name;
    }
    /**
     * Sets item.
     *
     * @param name Name.
     * @param item Item.
     */
    setItem(name, item) {
        this._store[name] = item;
    }
    /**
     * Returns item.
     *
     * @param name Name.
     * @returns Item.
     */
    getItem(name) {
        return this._store[name] === undefined ? null : this._store[name];
    }
    /**
     * Removes item.
     *
     * @param name Name.
     */
    removeItem(name) {
        delete this._store[name];
    }
    /**
     * Clears storage.
     */
    clear() {
        this._store = {};
    }
}
exports.default = Storage;
//# sourceMappingURL=Storage.js.map