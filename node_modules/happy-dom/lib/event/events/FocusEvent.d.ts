import UIEvent from '../UIEvent';
import EventTarget from '../EventTarget';
import IFocusEventInit from './IFocusEventInit';
/**
 *
 */
export default class FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IFocusEventInit);
}
