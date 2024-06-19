import HistoryScrollRestorationEnum from './HistoryScrollRestorationEnum';
/**
 * History API.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/History.
 */
export default class History {
    readonly length = 0;
    readonly state: any;
    private _scrollRestoration;
    /**
     * Returns scroll restoration.
     *
     * @returns Sroll restoration.
     */
    get scrollRestoration(): HistoryScrollRestorationEnum;
    /**
     * Sets scroll restoration.
     *
     * @param scrollRestoration Sroll restoration.
     */
    set scrollRestoration(scrollRestoration: HistoryScrollRestorationEnum);
    /**
     * Goes to the previous page in session history.
     */
    back(): void;
    /**
     * Goes to the next page in session history.
     */
    forward(): void;
    /**
     * Load a specific page from the session history.
     *
     * @param delta Delta.
     * @param _delta
     */
    go(_delta: number): void;
    /**
     * Pushes the given data onto the session history stack.
     *
     * @param state State.
     * @param title Title.
     * @param [url] URL.
     * @param _state
     * @param _title
     * @param _url
     */
    pushState(_state: object, _title: any, _url?: string): void;
    /**
     * This method modifies the current history entry, replacing it with a new state.
     *
     * @param state State.
     * @param title Title.
     * @param [url] URL.
     * @param _state
     * @param _title
     * @param _url
     */
    replaceState(_state: object, _title: any, _url?: string): void;
}
