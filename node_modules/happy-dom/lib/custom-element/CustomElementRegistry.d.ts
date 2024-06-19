import HTMLElement from '../nodes/html-element/HTMLElement';
import Node from '../nodes/node/Node';
/**
 * Custom elements registry.
 */
export default class CustomElementRegistry {
    _registry: {
        [k: string]: {
            elementClass: typeof HTMLElement;
            extends: string;
        };
    };
    _callbacks: {
        [k: string]: (() => void)[];
    };
    /**
     * Defines a custom element class.
     *
     * @param tagName Tag name of element.
     * @param elementClass Element class.
     * @param [options] Options.
     * @param options.extends
     */
    define(tagName: string, elementClass: typeof HTMLElement, options?: {
        extends: string;
    }): void;
    /**
     * Returns a defined element class.
     *
     * @param tagName Tag name of element.
     * @param HTMLElement Class defined.
     */
    get(tagName: string): typeof HTMLElement;
    /**
     * Upgrades a custom element directly, even before it is connected to its shadow root.
     *
     * Not implemented yet.
     *
     * @param _root Root node.
     */
    upgrade(_root: Node): void;
    /**
     * When defined.
     *
     * @param tagName Tag name of element.
     * @returns Promise.
     */
    whenDefined(tagName: string): Promise<void>;
}
