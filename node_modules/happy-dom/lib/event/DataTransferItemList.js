"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataTransferItem_1 = __importDefault(require("./DataTransferItem"));
/**
 *
 */
class DataTransferItemList {
    constructor() {
        this.DataTransferItem = [];
    }
    /**
     * Adds an item.
     *
     * @param item Item.
     */
    add(item) {
        this.DataTransferItem.push(new DataTransferItem_1.default(item));
    }
    /**
     * Removes an item.
     *
     * @param index Index.
     */
    remove(index) {
        this.DataTransferItem.splice(index, 1);
    }
    /**
     * Clears list.
     */
    clear() {
        this.DataTransferItem = [];
    }
}
exports.default = DataTransferItemList;
//# sourceMappingURL=DataTransferItemList.js.map