import File from '../file/File';
import DataTransferItemList from './DataTransferItemList';
/**
 *
 */
export default class DataTransfer {
    dropEffect: string;
    effectAllowed: string;
    files: File[];
    readonly items: DataTransferItemList;
    readonly types: string[];
}
