import INode from '../nodes/node/INode';
/**
 * Utility for converting an element to string.
 */
export default class XMLSerializer {
    /**
     * Renders an element as HTML.
     *
     * @param root Root element.
     * @param [options] Options.
     * @param [options.includeShadowRoots] Set to "true" to include shadow roots.
     * @returns Result.
     */
    serializeToString(root: INode, options?: {
        includeShadowRoots?: boolean;
    }): string;
    /**
     * Returns attributes as a string.
     *
     * @param element Element.
     * @returns Attributes.
     */
    private _getAttributes;
}
