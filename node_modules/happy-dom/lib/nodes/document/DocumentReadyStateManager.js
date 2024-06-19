"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Document ready state manager.
 */
class DocumentReadyStateManager {
    /**
     * Constructor.
     *
     * @param window
     */
    constructor(window) {
        this.totalTasks = 0;
        this.readyStateCallbacks = [];
        this.window = null;
        this.timer = null;
        this.isComplete = false;
        this.window = window;
    }
    /**
     * Returns a promise that is fulfilled when ready state is complete.
     *
     * @returns Promise.
     */
    whenComplete() {
        return new Promise((resolve) => {
            if (this.isComplete) {
                resolve();
            }
            else {
                this.readyStateCallbacks.push(resolve);
                if (this.totalTasks === 0 && !this.timer) {
                    this.timer = this.window.setTimeout(this.endTask.bind(this));
                }
            }
        });
    }
    /**
     * Starts a task.
     */
    startTask() {
        if (this.isComplete) {
            return;
        }
        if (this.timer) {
            this.window.clearTimeout(this.timer);
            this.timer = null;
        }
        this.totalTasks++;
    }
    /**
     * Ends a task.
     */
    endTask() {
        if (this.isComplete) {
            return;
        }
        if (this.timer) {
            this.window.clearTimeout(this.timer);
            this.timer = null;
        }
        this.totalTasks--;
        if (this.totalTasks <= 0) {
            const callbacks = this.readyStateCallbacks;
            this.readyStateCallbacks = [];
            this.isComplete = true;
            for (const callback of callbacks) {
                callback();
            }
        }
    }
}
exports.default = DocumentReadyStateManager;
//# sourceMappingURL=DocumentReadyStateManager.js.map