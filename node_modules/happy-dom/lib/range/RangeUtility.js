"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_1 = __importDefault(require("../exception/DOMException"));
const DOMExceptionNameEnum_1 = __importDefault(require("../exception/DOMExceptionNameEnum"));
const NodeTypeEnum_1 = __importDefault(require("../nodes/node/NodeTypeEnum"));
const NodeUtility_1 = __importDefault(require("../nodes/node/NodeUtility"));
/**
 * Range utility.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/range/boundary-point.js.
 */
class RangeUtility {
    /**
     * Compares boundary points.
     *
     * Based on logic from:
     * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/range/boundary-point.js
     *
     * @see https://dom.spec.whatwg.org/#concept-range-bp-after
     * @param pointA Point A.
     * @param pointB Point B.
     * @returns A number, -1, 0, or 1, indicating whether the corresponding boundary-point of the Range is respectively before, equal to, or after the corresponding boundary-point of sourceRange.
     */
    static compareBoundaryPointsPosition(pointA, pointB) {
        if (pointA.node === pointB.node) {
            if (pointA.offset === pointB.offset) {
                return 0;
            }
            else if (pointA.offset < pointB.offset) {
                return -1;
            }
            return 1;
        }
        if (NodeUtility_1.default.isFollowing(pointA.node, pointB.node)) {
            return this.compareBoundaryPointsPosition(pointB, pointA) === -1 ? 1 : -1;
        }
        if (NodeUtility_1.default.isInclusiveAncestor(pointA.node, pointB.node)) {
            let child = pointB.node;
            while (child.parentNode !== pointA.node) {
                child = child.parentNode;
            }
            if (child.parentNode.childNodes.indexOf(child) < pointA.offset) {
                return 1;
            }
        }
        return -1;
    }
    /**
     * Validates a boundary point.
     *
     * @throws DOMException
     * @param point Boundary point.
     */
    static validateBoundaryPoint(point) {
        if (point.node.nodeType === NodeTypeEnum_1.default.documentTypeNode) {
            throw new DOMException_1.default(`DocumentType Node can't be used as boundary point.`, DOMExceptionNameEnum_1.default.invalidNodeTypeError);
        }
        if (point.offset > NodeUtility_1.default.getNodeLength(point.node)) {
            throw new DOMException_1.default(`Offset out of bound.`, DOMExceptionNameEnum_1.default.indexSizeError);
        }
    }
    /**
     * Returns "true" if contained.
     *
     * @param node Node.
     * @param range Range.
     * @returns "true" if contained.
     */
    static isContained(node, range) {
        return (this.compareBoundaryPointsPosition({ node, offset: 0 }, { node: range.startContainer, offset: range.startOffset }) === 1 &&
            this.compareBoundaryPointsPosition({ node, offset: NodeUtility_1.default.getNodeLength(node) }, { node: range.endContainer, offset: range.endOffset }) === -1);
    }
    /**
     * Returns "true" if partially contained.
     *
     * @param node Node.
     * @param range Range.
     * @returns "true" if partially contained.
     */
    static isPartiallyContained(node, range) {
        return ((NodeUtility_1.default.isInclusiveAncestor(node, range.startContainer) &&
            !NodeUtility_1.default.isInclusiveAncestor(node, range.endContainer)) ||
            (!NodeUtility_1.default.isInclusiveAncestor(node, range.startContainer) &&
                NodeUtility_1.default.isInclusiveAncestor(node, range.endContainer)));
    }
}
exports.default = RangeUtility;
//# sourceMappingURL=RangeUtility.js.map