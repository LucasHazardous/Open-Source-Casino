import File from '../file/File';
import DataTransferItem from './DataTransferItem';
/**
 *
 */
export default class DataTransferItemList {
    readonly DataTransferItem: DataTransferItem[];
    /**
     * Adds an item.
     *
     * @param item Item.
     */
    add(item: File | string): void;
    /**
     * Removes an item.
     *
     * @param index Index.
     */
    remove(index: number): void;
    /**
     * Clears list.
     */
    clear(): void;
}
