import IWindow from '../../window/IWindow';
/**
 * Document ready state manager.
 */
export default class DocumentReadyStateManager {
    private totalTasks;
    private readyStateCallbacks;
    private window;
    private timer;
    private isComplete;
    /**
     * Constructor.
     *
     * @param window
     */
    constructor(window: IWindow);
    /**
     * Returns a promise that is fulfilled when ready state is complete.
     *
     * @returns Promise.
     */
    whenComplete(): Promise<void>;
    /**
     * Starts a task.
     */
    startTask(): void;
    /**
     * Ends a task.
     */
    endTask(): void;
}
