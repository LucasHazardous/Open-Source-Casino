"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSSRule_1 = __importDefault(require("../CSSRule"));
const CSSStyleDeclaration_1 = __importDefault(require("../declaration/CSSStyleDeclaration"));
const CSSKeyframeRule_1 = __importDefault(require("./CSSKeyframeRule"));
const CSS_RULE_REGEXP = /([^{]+){([^}]+)}/;
/**
 * CSSRule interface.
 */
class CSSKeyframesRule extends CSSRule_1.default {
    constructor() {
        super(...arguments);
        this.type = CSSRule_1.default.KEYFRAMES_RULE;
        this.cssRules = [];
        this.name = null;
    }
    /**
     * Returns css text.
     *
     * @returns CSS text.
     */
    get cssText() {
        let cssText = '';
        for (const cssRule of this.cssRules) {
            cssText += cssRule.cssText + ' ';
        }
        return `@keyframes ${this.name} { ${cssText}}`;
    }
    /**
     * Appends a rule.
     *
     * @param rule Rule. E.g. "0% { transform: rotate(360deg); }".
     */
    appendRule(rule) {
        const match = rule.match(CSS_RULE_REGEXP);
        if (match) {
            const cssRule = new CSSKeyframeRule_1.default();
            const style = new CSSStyleDeclaration_1.default();
            cssRule.parentRule = this;
            cssRule.keyText = match[1].trim();
            style.cssText = match[2].trim();
            style.parentRule = this;
            cssRule.style = style;
        }
    }
    /**
     * Removes a rule.
     *
     * @param rule Rule. E.g. "0%".
     */
    deleteRule(rule) {
        for (let i = 0, max = this.cssRules.length; i < max; i++) {
            if (this.cssRules[i].keyText === rule) {
                this.cssRules.splice(i, 1);
                break;
            }
        }
    }
}
exports.default = CSSKeyframesRule;
//# sourceMappingURL=CSSKeyframesRule.js.map