import UIEvent from '../UIEvent';
import IErrorEventInit from './IErrorEventInit';
/**
 *
 */
export default class ErrorEvent extends UIEvent {
    readonly message: string;
    readonly filename: string;
    readonly lineno: number;
    readonly colno: number;
    readonly error: object;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IErrorEventInit);
}
