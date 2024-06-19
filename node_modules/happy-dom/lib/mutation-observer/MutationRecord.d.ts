import INode from '../nodes/node/INode';
/**
 * MutationRecord is a model for a mutation.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
 */
export default class MutationRecord {
    type: string;
    target: INode;
    addedNodes: INode[];
    removedNodes: INode[];
    previousSibling: INode;
    nextSibling: INode;
    attributeName: string;
    attributeNamespace: string;
    oldValue: string;
}
