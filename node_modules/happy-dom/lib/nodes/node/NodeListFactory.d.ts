import INode from './INode';
import INodeList from './INodeList';
/**
 *
 */
export default class NodeListFactory {
    /**
     * Creates a NodeList.
     *
     * @param nodes Nodes.
     * @returns NodeList.
     */
    static create(nodes?: INode[]): INodeList<INode>;
    /**
     * Returns node by index.
     *
     * @param nodes
     * @param index Index.
     */
    private static getItem;
}
