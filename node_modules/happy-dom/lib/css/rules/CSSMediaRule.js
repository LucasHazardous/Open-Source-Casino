"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSSRule_1 = __importDefault(require("../CSSRule"));
const MediaList_1 = __importDefault(require("../MediaList"));
/**
 * CSSRule interface.
 */
class CSSMediaRule extends CSSRule_1.default {
    constructor() {
        super(...arguments);
        this.type = CSSRule_1.default.MEDIA_RULE;
        this.cssRules = [];
        this.media = new MediaList_1.default();
    }
    /**
     * Returns css text.
     *
     * @returns CSS text.
     */
    get cssText() {
        let cssText = '';
        for (const cssRule of this.cssRules) {
            cssText += cssRule.cssText;
        }
        return `@media ${this.conditionText} { ${cssText} }`;
    }
    /**
     * Returns conditional text.
     *
     * @returns Conditional text.
     */
    get conditionText() {
        return this.media.mediaText;
    }
}
exports.default = CSSMediaRule;
//# sourceMappingURL=CSSMediaRule.js.map