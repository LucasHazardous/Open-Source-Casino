import IHeaders from './IHeaders';
import IBody from './IBody';
/**
 * Fetch request.
 */
export default interface IRequest extends IBody {
    readonly headers: IHeaders;
    readonly method: string;
    readonly redirect: 'error' | 'follow' | 'manual';
    readonly referrer: string;
    readonly url: string;
    /**
     * Returns a clone.
     *
     * @returns Clone.
     */
    clone(): IRequest;
}
