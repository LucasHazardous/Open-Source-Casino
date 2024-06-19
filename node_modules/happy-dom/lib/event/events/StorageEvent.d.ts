import Event from '../Event';
import IStorageEventInit from './IStorageEventInit';
import Storage from '../../storage/Storage';
/**
 *
 */
export default class StorageEvent extends Event {
    readonly key: string;
    readonly newValue: string;
    readonly oldValue: string;
    readonly storageArea: Storage;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IStorageEventInit);
}
