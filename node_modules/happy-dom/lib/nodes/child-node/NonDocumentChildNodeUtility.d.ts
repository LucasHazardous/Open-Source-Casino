import IElement from '../element/IElement';
import INonDocumentTypeChildNode from './INonDocumentTypeChildNode';
/**
 * Non Document Child node utility.
 */
export default class NonDocumentChildNodeUtility {
    /**
     * Previous element sibling.
     *
     * @param childNode Child node.
     * @returns Element.
     */
    static previousElementSibling(childNode: INonDocumentTypeChildNode): IElement;
    /**
     * Next element sibling.
     *
     * @param childNode Child node.
     * @returns Element.
     */
    static nextElementSibling(childNode: INonDocumentTypeChildNode): IElement;
}
