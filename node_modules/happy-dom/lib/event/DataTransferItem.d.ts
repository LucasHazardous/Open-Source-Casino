import File from '../file/File';
/**
 *
 */
export default class DataTransferItem {
    readonly kind: string;
    readonly type: string;
    private _item;
    /**
     * Constructor.
     *
     * @param item Item.
     */
    constructor(item: string | File);
    /**
     * Returns file.
     */
    getAsFile(): File;
    /**
     * Returns string.
     */
    getAsString(): string;
}
