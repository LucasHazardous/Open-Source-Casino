import UIEvent from '../UIEvent';
import IKeyboardEventInit from './IKeyboardEventInit';
/**
 *
 */
export default class KeyboardEvent extends UIEvent {
    static DOM_KEY_LOCATION_STANDARD: number;
    static DOM_KEY_LOCATION_LEFT: number;
    static DOM_KEY_LOCATION_RIGHT: number;
    static DOM_KEY_LOCATION_NUMPAD: number;
    readonly altKey: boolean;
    readonly code: string;
    readonly ctrlKey: boolean;
    readonly isComposing: boolean;
    readonly key: string;
    readonly location: number;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly shiftKey: boolean;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IKeyboardEventInit);
}
