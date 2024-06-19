import DataTransfer from '../DataTransfer';
import UIEvent from '../UIEvent';
import IInputEventInit from './IInputEventInit';
/**
 *
 */
export default class InputEvent extends UIEvent {
    readonly data: string;
    readonly dataTransfer: DataTransfer;
    readonly inputType: string;
    readonly isComposing: boolean;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IInputEventInit);
}
