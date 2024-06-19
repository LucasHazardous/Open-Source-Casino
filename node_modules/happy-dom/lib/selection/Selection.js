"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../event/Event"));
const DOMException_1 = __importDefault(require("../exception/DOMException"));
const DOMExceptionNameEnum_1 = __importDefault(require("../exception/DOMExceptionNameEnum"));
const NodeTypeEnum_1 = __importDefault(require("../nodes/node/NodeTypeEnum"));
const NodeUtility_1 = __importDefault(require("../nodes/node/NodeUtility"));
const Range_1 = __importDefault(require("../range/Range"));
const RangeUtility_1 = __importDefault(require("../range/RangeUtility"));
const SelectionDirectionEnum_1 = __importDefault(require("./SelectionDirectionEnum"));
/**
 * Selection.
 *
 * Based on logic from:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/selection/Selection-impl.js
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Selection.
 */
class Selection {
    /**
     * Constructor.
     *
     * @param ownerDocument Owner document.
     */
    constructor(ownerDocument) {
        this._ownerDocument = null;
        this._range = null;
        this._direction = SelectionDirectionEnum_1.default.directionless;
        this._ownerDocument = ownerDocument;
    }
    /**
     * Returns range count.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-rangecount
     * @returns Range count.
     */
    get rangeCount() {
        return this._range ? 1 : 0;
    }
    /**
     * Returns collapsed state.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-iscollapsed
     * @returns "true" if collapsed.
     */
    get isCollapsed() {
        return this._range === null || this._range.collapsed;
    }
    /**
     * Returns type.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-type
     * @returns Type.
     */
    get type() {
        if (!this._range) {
            return 'None';
        }
        else if (this._range.collapsed) {
            return 'Caret';
        }
        return 'Range';
    }
    /**
     * Returns anchor node.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-anchornode
     * @returns Node.
     */
    get anchorNode() {
        if (!this._range) {
            return null;
        }
        return this._direction === SelectionDirectionEnum_1.default.forwards
            ? this._range.startContainer
            : this._range.endContainer;
    }
    /**
     * Returns anchor offset.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-anchoroffset
     * @returns Node.
     */
    get anchorOffset() {
        if (!this._range) {
            return null;
        }
        return this._direction === SelectionDirectionEnum_1.default.forwards
            ? this._range.startOffset
            : this._range.endOffset;
    }
    /**
     * Returns anchor node.
     *
     * @deprecated
     * @alias anchorNode
     * @returns Node.
     */
    get baseNode() {
        return this.anchorNode;
    }
    /**
     * Returns anchor offset.
     *
     * @deprecated
     * @alias anchorOffset
     * @returns Node.
     */
    get baseOffset() {
        return this.anchorOffset;
    }
    /**
     * Returns focus node.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-focusnode
     * @returns Node.
     */
    get focusNode() {
        return this.anchorNode;
    }
    /**
     * Returns focus offset.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-focusoffset
     * @returns Node.
     */
    get focusOffset() {
        return this.anchorOffset;
    }
    /**
     * Returns focus node.
     *
     * @deprecated
     * @alias focusNode
     * @returns Node.
     */
    get extentNode() {
        return this.focusNode;
    }
    /**
     * Returns focus offset.
     *
     * @deprecated
     * @alias focusOffset
     * @returns Node.
     */
    get extentOffset() {
        return this.focusOffset;
    }
    /**
     * Adds a range.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-addrange
     * @param newRange Range.
     */
    addRange(newRange) {
        if (!newRange) {
            throw new Error('Failed to execute addRange on Selection. Parameter 1 is not of type Range.');
        }
        if (!this._range && newRange._ownerDocument === this._ownerDocument) {
            this._associateRange(newRange);
        }
    }
    /**
     * Returns Range.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-getrangeat
     * @param index Index.
     * @returns Range.
     */
    getRangeAt(index) {
        if (!this._range || index !== 0) {
            throw new DOMException_1.default('Invalid range index.', DOMExceptionNameEnum_1.default.indexSizeError);
        }
        return this._range;
    }
    /**
     * Removes a range from a selection.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-removerange
     * @param range Range.
     */
    removeRange(range) {
        if (this._range !== range) {
            throw new DOMException_1.default('Invalid range.', DOMExceptionNameEnum_1.default.notFoundError);
        }
        this._associateRange(null);
    }
    /**
     * Removes all ranges.
     */
    removeAllRanges() {
        this._associateRange(null);
    }
    /**
     * Removes all ranges.
     *
     * @alias removeAllRanges()
     */
    empty() {
        this.removeAllRanges();
    }
    /**
     * Collapses the current selection to a single point.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-collapse
     * @param node Node.
     * @param offset Offset.
     */
    collapse(node, offset) {
        if (node === null) {
            this.removeAllRanges();
            return;
        }
        if (node.nodeType === NodeTypeEnum_1.default.documentTypeNode) {
            throw new DOMException_1.default("DocumentType Node can't be used as boundary point.", DOMExceptionNameEnum_1.default.invalidNodeTypeError);
        }
        if (offset > NodeUtility_1.default.getNodeLength(node)) {
            throw new DOMException_1.default('Invalid range index.', DOMExceptionNameEnum_1.default.indexSizeError);
        }
        if (node.ownerDocument !== this._ownerDocument) {
            return;
        }
        const newRange = new Range_1.default();
        newRange._start.node = node;
        newRange._start.offset = offset;
        newRange._end.node = node;
        newRange._end.offset = offset;
        this._associateRange(newRange);
    }
    /**
     * Collapses the current selection to a single point.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-setposition
     * @alias collapse()
     * @param node Node.
     * @param offset Offset.
     */
    setPosition(node, offset) {
        this.collapse(node, offset);
    }
    /**
     * Collapses the selection to the end.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-collapsetoend
     */
    collapseToEnd() {
        if (this._range === null) {
            throw new DOMException_1.default('There is no selection to collapse.', DOMExceptionNameEnum_1.default.invalidStateError);
        }
        const { node, offset } = this._range._end;
        const newRange = new Range_1.default();
        newRange._start.node = node;
        newRange._start.offset = offset;
        newRange._end.node = node;
        newRange._end.offset = offset;
        this._associateRange(newRange);
    }
    /**
     * Collapses the selection to the start.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-collapsetostart
     */
    collapseToStart() {
        if (!this._range) {
            throw new DOMException_1.default('There is no selection to collapse.', DOMExceptionNameEnum_1.default.invalidStateError);
        }
        const { node, offset } = this._range._start;
        const newRange = new Range_1.default();
        newRange._start.node = node;
        newRange._start.offset = offset;
        newRange._end.node = node;
        newRange._end.offset = offset;
        this._associateRange(newRange);
    }
    /**
     * Indicates whether a specified node is part of the selection.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-containsnode
     * @param node Node.
     * @param [allowPartialContainment] Set to "true" to allow partial containment.
     * @returns Always returns "true" for now.
     */
    containsNode(node, allowPartialContainment = false) {
        if (!this._range || node.ownerDocument !== this._ownerDocument) {
            return false;
        }
        const { _start, _end } = this._range;
        const startIsBeforeNode = RangeUtility_1.default.compareBoundaryPointsPosition(_start, { node, offset: 0 }) === -1;
        const endIsAfterNode = RangeUtility_1.default.compareBoundaryPointsPosition(_end, {
            node,
            offset: NodeUtility_1.default.getNodeLength(node)
        }) === 1;
        return allowPartialContainment
            ? startIsBeforeNode || endIsAfterNode
            : startIsBeforeNode && endIsAfterNode;
    }
    /**
     * Deletes the selected text from the document's DOM.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-deletefromdocument
     */
    deleteFromDocument() {
        if (this._range) {
            this._range.deleteContents();
        }
    }
    /**
     * Moves the focus of the selection to a specified point.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-extend
     * @param node Node.
     * @param offset Offset.
     */
    extend(node, offset) {
        if (node.ownerDocument !== this._ownerDocument) {
            return;
        }
        if (!this._range) {
            throw new DOMException_1.default('There is no selection to extend.', DOMExceptionNameEnum_1.default.invalidStateError);
        }
        const anchorNode = this.anchorNode;
        const anchorOffset = this.anchorOffset;
        const newRange = new Range_1.default();
        newRange._start.node = node;
        newRange._start.offset = 0;
        newRange._end.node = node;
        newRange._end.offset = 0;
        if (node.ownerDocument !== this._range._ownerDocument) {
            newRange._start.offset = offset;
            newRange._end.offset = offset;
        }
        else if (RangeUtility_1.default.compareBoundaryPointsPosition({ node: anchorNode, offset: anchorOffset }, { node, offset }) <= 0) {
            newRange._start.node = anchorNode;
            newRange._start.offset = anchorOffset;
            newRange._end.node = node;
            newRange._end.offset = offset;
        }
        else {
            newRange._start.node = node;
            newRange._start.offset = offset;
            newRange._end.node = anchorNode;
            newRange._end.offset = anchorOffset;
        }
        this._associateRange(newRange);
        this._direction =
            RangeUtility_1.default.compareBoundaryPointsPosition({ node, offset }, { node: anchorNode, offset: anchorOffset }) === -1
                ? SelectionDirectionEnum_1.default.backwards
                : SelectionDirectionEnum_1.default.forwards;
    }
    /**
     * Selects all children.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-selectallchildren
     * @param node
     * @param _parentNode Parent node.
     */
    selectAllChildren(node) {
        if (node.nodeType === NodeTypeEnum_1.default.documentTypeNode) {
            throw new DOMException_1.default("DocumentType Node can't be used as boundary point.", DOMExceptionNameEnum_1.default.invalidNodeTypeError);
        }
        if (node.ownerDocument !== this._ownerDocument) {
            return;
        }
        const length = node.childNodes.length;
        const newRange = new Range_1.default();
        newRange._start.node = node;
        newRange._start.offset = 0;
        newRange._end.node = node;
        newRange._end.offset = length;
        this._associateRange(newRange);
    }
    /**
     * Sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.
     *
     * @see https://w3c.github.io/selection-api/#dom-selection-setbaseandextent
     * @param anchorNode Anchor node.
     * @param anchorOffset Anchor offset.
     * @param focusNode Focus node.
     * @param focusOffset Focus offset.
     */
    setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) {
        if (anchorOffset > NodeUtility_1.default.getNodeLength(anchorNode) ||
            focusOffset > NodeUtility_1.default.getNodeLength(focusNode)) {
            throw new DOMException_1.default('Invalid anchor or focus offset.', DOMExceptionNameEnum_1.default.indexSizeError);
        }
        if (anchorNode.ownerDocument !== this._ownerDocument ||
            focusNode.ownerDocument !== this._ownerDocument) {
            return;
        }
        const anchor = { node: anchorNode, offset: anchorOffset };
        const focus = { node: focusNode, offset: focusOffset };
        const newRange = new Range_1.default();
        if (RangeUtility_1.default.compareBoundaryPointsPosition(anchor, focus) === -1) {
            newRange._start = anchor;
            newRange._end = focus;
        }
        else {
            newRange._start = focus;
            newRange._end = anchor;
        }
        this._associateRange(newRange);
        this._direction =
            RangeUtility_1.default.compareBoundaryPointsPosition(focus, anchor) === -1
                ? SelectionDirectionEnum_1.default.backwards
                : SelectionDirectionEnum_1.default.forwards;
    }
    /**
     * Returns string currently being represented by the selection object.
     *
     * @returns Selection as string.
     */
    toString() {
        return this._range ? this._range.toString() : '';
    }
    /**
     * Sets the current range.
     *
     * @param range Range.
     */
    _associateRange(range) {
        const oldRange = this._range;
        this._range = range;
        this._direction =
            range === null ? SelectionDirectionEnum_1.default.directionless : SelectionDirectionEnum_1.default.forwards;
        if (oldRange !== this._range) {
            // https://w3c.github.io/selection-api/#selectionchange-event
            this._ownerDocument.dispatchEvent(new Event_1.default('selectionchange'));
        }
    }
}
exports.default = Selection;
//# sourceMappingURL=Selection.js.map