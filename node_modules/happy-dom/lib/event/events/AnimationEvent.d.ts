import Event from '../Event';
import IAnimationEventInit from './IAnimationEventInit';
/**
 *
 */
export default class AnimationEvent extends Event {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IAnimationEventInit);
}
