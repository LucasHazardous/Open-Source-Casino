import IDocumentFragment from '../document-fragment/IDocumentFragment';
import IDocument from '../document/IDocument';
import IElement from '../element/IElement';
import IHTMLCollection from '../element/IHTMLCollection';
import INode from '../node/INode';
/**
 * Parent node utility.
 */
export default class ParentNodeUtility {
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param parentNode Parent node.
     * @param nodes List of Node or DOMString.
     */
    static append(parentNode: INode, ...nodes: (INode | string)[]): void;
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param parentNode Parent node.
     * @param nodes List of Node or DOMString.
     */
    static prepend(parentNode: INode, ...nodes: (string | INode)[]): void;
    /**
     * Replaces the existing children of a ParentNode with a specified new set of children.
     *
     * @param parentNode Parent node.
     * @param nodes List of Node or DOMString.
     */
    static replaceChildren(parentNode: INode, ...nodes: (string | INode)[]): void;
    /**
     * Returns an elements by class name.
     *
     * @param parentNode Parent node.
     * @param className Tag name.
     * @returns Matching element.
     */
    static getElementsByClassName(parentNode: INode, className: string): IHTMLCollection<IElement>;
    /**
     * Returns an elements by tag name.
     *
     * @param parentNode Parent node.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    static getElementsByTagName(parentNode: IElement | IDocumentFragment | IDocument, tagName: string): IHTMLCollection<IElement>;
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param parentNode Parent node.
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    static getElementsByTagNameNS(parentNode: IElement | IDocumentFragment | IDocument, namespaceURI: string, tagName: string): IHTMLCollection<IElement>;
    /**
     * Returns the first element matching a tag name.
     * This is not part of the browser standard and is only used internally in the document.
     *
     * @param parentNode Parent node.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    static getElementByTagName(parentNode: IElement | IDocumentFragment | IDocument, tagName: string): IElement;
    /**
     * Returns an element by ID.
     *
     * @param parentNode Parent node.
     * @param id ID.
     * @returns Matching element.
     */
    static getElementById(parentNode: IElement | IDocumentFragment | IDocument, id: string): IElement;
}
