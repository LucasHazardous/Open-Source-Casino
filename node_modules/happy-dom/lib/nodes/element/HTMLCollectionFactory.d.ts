import IElement from './IElement';
import IHTMLCollection from './IHTMLCollection';
/**
 *
 */
export default class HTMLCollectionFactory {
    /**
     * Creates an HTMLCollection.
     *
     * @param nodes Nodes.
     * @returns HTMLCollection.
     */
    static create(nodes?: IElement[]): IHTMLCollection<IElement>;
    /**
     * Returns node by index.
     *
     * @param nodes
     * @param index Index.
     */
    private static getItem;
}
