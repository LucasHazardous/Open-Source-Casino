import IMutationObserverInit from './IMutationObserverInit';
import MutationRecord from './MutationRecord';
/**
 * MutationObserverListener is a model for what to listen for on a Node.
 */
export default class MutationListener {
    options: IMutationObserverInit;
    callback: (record: MutationRecord[]) => void;
}
