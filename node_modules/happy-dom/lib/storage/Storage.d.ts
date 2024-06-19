/**
 *
 */
export default class Storage {
    private _store;
    /**
     * Returns length.
     *
     * @returns Length.
     */
    get length(): number;
    /**
     * Returns name of the nth key.
     *
     * @param index Index.
     * @returns Name.
     */
    key(index: number): string;
    /**
     * Sets item.
     *
     * @param name Name.
     * @param item Item.
     */
    setItem(name: string, item: string): void;
    /**
     * Returns item.
     *
     * @param name Name.
     * @returns Item.
     */
    getItem(name: string): string;
    /**
     * Removes item.
     *
     * @param name Name.
     */
    removeItem(name: string): void;
    /**
     * Clears storage.
     */
    clear(): void;
}
