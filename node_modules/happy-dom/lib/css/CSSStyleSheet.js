"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_1 = __importDefault(require("../exception/DOMException"));
const DOMExceptionNameEnum_1 = __importDefault(require("../exception/DOMExceptionNameEnum"));
const CSSParser_1 = __importDefault(require("./CSSParser"));
/**
 * CSS StyleSheet.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet.
 */
class CSSStyleSheet {
    /**
     * Constructor.
     *
     * @param [options] Options.
     * @param [options.media] Media.
     * @param [options.title] Title.
     * @param [options.alternate] Alternate.
     * @param [options.disabled] Disabled.
     */
    constructor(options) {
        this.value = null;
        this.name = null;
        this.namespaceURI = null;
        this.cssRules = [];
        this._currentText = null;
        this.media = options && options.media ? options.media : '';
        this.title = options && options.title ? options.title : '';
        this.alternate = options && options.alternate ? options.alternate : false;
        this.disabled = options && options.disabled ? options.disabled : false;
    }
    /**
     * Inserts a rule.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
     * @param rule Rule.
     * @param [index] Index.
     * @returns The newly inserterted rule's index.
     */
    insertRule(rule, index) {
        const rules = CSSParser_1.default.parseFromString(this, rule);
        if (rules.length === 0) {
            throw new DOMException_1.default('Invalid CSS rule.', DOMExceptionNameEnum_1.default.hierarchyRequestError);
        }
        if (rules.length > 1) {
            throw new DOMException_1.default('Only one rule is allowed to be added.', DOMExceptionNameEnum_1.default.syntaxError);
        }
        if (index !== undefined) {
            if (index > this.cssRules.length) {
                throw new DOMException_1.default('Index is more than the length of CSSRuleList.', DOMExceptionNameEnum_1.default.indexSizeError);
            }
            this.cssRules.splice(index, 0, rules[0]);
            return index;
        }
        const newIndex = this.cssRules.length;
        this.cssRules.push(rules[0]);
        return newIndex;
    }
    /**
     * Removes a rule.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule
     * @param index Index.
     */
    deleteRule(index) {
        delete this.cssRules[index];
    }
    /**
     * Replaces all CSS rules.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/replace
     * @param text CSS text.
     * @returns Promise.
     */
    async replace(text) {
        this.replaceSync(text);
    }
    /**
     * Replaces all CSS rules.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/replaceSync
     * @param text CSS text.
     */
    replaceSync(text) {
        if (this._currentText !== text) {
            this._currentText = text;
            this.cssRules = CSSParser_1.default.parseFromString(this, text);
        }
    }
}
exports.default = CSSStyleSheet;
//# sourceMappingURL=CSSStyleSheet.js.map