import INodeFilter from './INodeFilter';
import INode from '../nodes/node/INode';
/**
 * The TreeWalker object represents the nodes of a document subtree and a position within them.
 */
export default class TreeWalker {
    root: INode;
    whatToShow: number;
    filter: INodeFilter;
    currentNode: INode;
    /**
     * Constructor.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    constructor(root: INode, whatToShow?: number, filter?: INodeFilter);
    /**
     * Moves the current Node to the next visible node in the document order.
     *
     * @returns Current node.
     */
    nextNode(): INode;
    /**
     * Moves the current Node to the previous visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns null and the current node is not changed.
     *
     * @returns Current node.
     */
    previousNode(): INode;
    /**
     * Moves the current Node to the first visible ancestor node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns null and the current node is not changed.
     *
     * @returns Current node.
     */
    parentNode(): INode;
    /**
     * Moves the current Node to the first visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns null and the current node is not changed.
     *
     * @returns Current node.
     */
    firstChild(): INode;
    /**
     * Moves the current Node to the last visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, null is returned and the current node is not changed.
     *
     * @returns Current node.
     */
    lastChild(): INode;
    /**
     * Moves the current Node to its previous sibling, if any, and returns the found sibling. If there is no such node, return null and the current node is not changed.
     *
     * @returns Current node.
     */
    previousSibling(): INode;
    /**
     * Moves the current Node to its next sibling, if any, and returns the found sibling. If there is no such node, null is returned and the current node is not changed.
     *
     * @returns Current node.
     */
    nextSibling(): INode;
    /**
     * Filters a node.
     *
     * Based on solution:
     * https://gist.github.com/shawndumas/1132009.
     *
     * @param node Node.
     * @returns Child nodes.
     */
    private filterNode;
}
