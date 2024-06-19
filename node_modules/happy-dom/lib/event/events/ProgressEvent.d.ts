import Event from '../Event';
import IProgressEventInit from './IProgressEventInit';
/**
 *
 */
export default class ProgressEvent extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IProgressEventInit);
}
