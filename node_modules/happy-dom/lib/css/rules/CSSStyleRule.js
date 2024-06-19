"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSSRule_1 = __importDefault(require("../CSSRule"));
const CSSStyleDeclaration_1 = __importDefault(require("../declaration/CSSStyleDeclaration"));
/**
 * CSSRule interface.
 */
class CSSStyleRule extends CSSRule_1.default {
    constructor() {
        super(...arguments);
        this.type = CSSRule_1.default.STYLE_RULE;
        this.selectorText = '';
        this.styleMap = new Map();
        this._cssText = '';
        this._style = null;
    }
    /**
     * Returns style.
     *
     * @returns Style.
     */
    get style() {
        if (!this._style) {
            this._style = new CSSStyleDeclaration_1.default();
            this._style.parentRule = this;
            this._style.cssText = this._cssText;
        }
        return this._style;
    }
    /**
     * Returns css text.
     *
     * @returns CSS text.
     */
    get cssText() {
        return `${this.selectorText} { ${this.style.cssText} }`;
    }
}
exports.default = CSSStyleRule;
//# sourceMappingURL=CSSStyleRule.js.map