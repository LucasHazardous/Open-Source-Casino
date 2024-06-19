import HTMLElement from '../html-element/HTMLElement';
import IHTMLImageElement from './IHTMLImageElement';
/**
 * HTML Image Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement.
 */
export default class HTMLImageElement extends HTMLElement implements IHTMLImageElement {
    readonly tagName: string;
    readonly complete = false;
    readonly naturalHeight = 0;
    readonly naturalWidth = 0;
    crossOrigin: any;
    decoding: string;
    loading: string;
    readonly x = 0;
    readonly y = 0;
    /**
     * Returns alt.
     *
     * @returns Alt.
     */
    get alt(): string;
    /**
     * Sets alt.
     *
     * @param alt Alt.
     */
    set alt(alt: string);
    /**
     * Returns current src.
     *
     * @returns Current src.
     */
    get currentSrc(): string;
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height(): number;
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height: number);
    /**
     * Returns is map.
     *
     * @returns Is map.
     */
    get isMap(): boolean;
    /**
     * Sets is map.
     *
     * @param ismap Is map.
     */
    set isMap(isMap: boolean);
    /**
     * Returns referrer policy.
     *
     * @returns Referrer policy.
     */
    get referrerPolicy(): string;
    /**
     * Sets referrer policy.
     *
     * @param referrerPolicy Referrer policy.
     */
    set referrerPolicy(referrerPolicy: string);
    /**
     * Returns sizes.
     *
     * @returns Sizes.
     */
    get sizes(): string;
    /**
     * Sets sizes.
     *
     * @param sizes Sizes.
     */
    set sizes(sizes: string);
    /**
     * Returns source.
     *
     * @returns Source.
     */
    get src(): string;
    /**
     * Sets source.
     *
     * @param source Source.
     */
    set src(src: string);
    /**
     * Returns srcset.
     *
     * @returns Source.
     */
    get srcset(): string;
    /**
     * Sets src set.
     *
     * @param srcset Src set.
     */
    set srcset(srcset: string);
    /**
     * Returns use map.
     *
     * @returns Use map.
     */
    get useMap(): string;
    /**
     * Sets is map.
     *
     * @param useMap Is map.
     */
    set useMap(useMap: string);
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width(): number;
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width: number);
    /**
     * The decode() method of the HTMLImageElement interface returns a Promise that resolves when the image is decoded and it is safe to append the image to the DOM.
     *
     * @returns Promise.
     */
    decode(): Promise<void>;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IHTMLImageElement;
}
