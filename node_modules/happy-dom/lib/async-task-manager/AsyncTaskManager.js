"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handles async tasks.
 */
class AsyncTaskManager {
    constructor() {
        this.runningTasks = {};
        this.runningTimers = [];
        this.queue = [];
    }
    /**
     * Returns a promise that is fulfilled when async tasks are complete.
     * This method is not part of the HTML standard.
     *
     * @returns Promise.
     */
    async whenComplete() {
        return new Promise((resolve, reject) => {
            const timerID = global.setTimeout(() => {
                this.endTimer(timerID);
            }, 0);
            this.startTimer(timerID);
            this.queue.push({ resolve, reject });
        });
    }
    /**
     * Ends all tasks.
     *
     * @param [error] Error.
     */
    cancelAll(error) {
        const runningTimers = this.runningTimers;
        const runningTasks = this.runningTasks;
        const promises = this.queue;
        this.runningTasks = {};
        this.runningTimers = [];
        this.queue = [];
        for (const timer of runningTimers) {
            global.clearTimeout(timer);
        }
        for (const key of Object.keys(runningTasks)) {
            runningTasks[key]();
        }
        for (const promise of promises) {
            if (error) {
                promise.reject(error);
            }
            else {
                promise.resolve();
            }
        }
    }
    /**
     * Starts a timer.
     *
     * @param timerID Timer ID.
     */
    startTimer(timerID) {
        this.runningTimers.push(timerID);
    }
    /**
     * Ends a timer.
     *
     * @param timerID Timer ID.
     */
    endTimer(timerID) {
        const index = this.runningTimers.indexOf(timerID);
        if (index !== -1) {
            this.runningTimers.splice(index, 1);
        }
        if (!Object.keys(this.runningTasks).length && !this.runningTimers.length) {
            this.cancelAll();
        }
    }
    /**
     * Starts an async task.
     *
     * @param abortHandler Abort handler.
     * @returns Task ID.
     */
    startTask(abortHandler) {
        const taskID = this.newTaskID();
        this.runningTasks[taskID] = abortHandler ? abortHandler : () => { };
        return taskID;
    }
    /**
     * Ends an async task.
     *
     * @param taskID Task ID.
     */
    endTask(taskID) {
        if (this.runningTasks[taskID]) {
            delete this.runningTasks[taskID];
            if (!Object.keys(this.runningTasks).length && !this.runningTimers.length) {
                this.cancelAll();
            }
        }
    }
    /**
     * Returns the amount of running tasks.
     *
     * @returns Count.
     */
    getTaskCount() {
        return Object.keys(this.runningTasks).length;
    }
    /**
     * Returns a new task ID.
     *
     * @returns Task ID.
     */
    newTaskID() {
        this.constructor.taskID++;
        return this.constructor.taskID;
    }
}
exports.default = AsyncTaskManager;
AsyncTaskManager.taskID = 0;
//# sourceMappingURL=AsyncTaskManager.js.map