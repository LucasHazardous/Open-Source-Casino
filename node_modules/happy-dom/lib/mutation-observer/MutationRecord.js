"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MutationRecord is a model for a mutation.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
 */
class MutationRecord {
    constructor() {
        this.type = null;
        this.target = null;
        this.addedNodes = [];
        this.removedNodes = [];
        this.previousSibling = null;
        this.nextSibling = null;
        this.attributeName = null;
        this.attributeNamespace = null;
        this.oldValue = null;
    }
}
exports.default = MutationRecord;
//# sourceMappingURL=MutationRecord.js.map