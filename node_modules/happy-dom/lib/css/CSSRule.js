"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSSRuleTypeEnum_1 = __importDefault(require("./CSSRuleTypeEnum"));
/**
 * CSSRule interface.
 */
class CSSRule {
    constructor() {
        this.parentRule = null;
        this.parentStyleSheet = null;
        this.type = null;
    }
    /**
     * Returns selector text.
     *
     * @returns Selector text.
     */
    get cssText() {
        return '';
    }
}
exports.default = CSSRule;
CSSRule.CONTAINER_RULE = CSSRuleTypeEnum_1.default.containerRule;
CSSRule.STYLE_RULE = CSSRuleTypeEnum_1.default.styleRule;
CSSRule.IMPORT_RULE = CSSRuleTypeEnum_1.default.importRule;
CSSRule.MEDIA_RULE = CSSRuleTypeEnum_1.default.mediaRule;
CSSRule.FONT_FACE_RULE = CSSRuleTypeEnum_1.default.fontFaceRule;
CSSRule.PAGE_RULE = CSSRuleTypeEnum_1.default.pageRule;
CSSRule.KEYFRAMES_RULE = CSSRuleTypeEnum_1.default.keyframesRule;
CSSRule.KEYFRAME_RULE = CSSRuleTypeEnum_1.default.keyframeRule;
CSSRule.NAMESPACE_RULE = CSSRuleTypeEnum_1.default.namespaceRule;
CSSRule.COUNTER_STYLE_RULE = CSSRuleTypeEnum_1.default.counterStyleRule;
CSSRule.SUPPORTS_RULE = CSSRuleTypeEnum_1.default.supportsRule;
CSSRule.DOCUMENT_RULE = CSSRuleTypeEnum_1.default.documentRule;
CSSRule.FONT_FEATURE_VALUES_RULE = CSSRuleTypeEnum_1.default.fontFeatureValuesRule;
CSSRule.REGION_STYLE_RULE = CSSRuleTypeEnum_1.default.regionStyleRule;
//# sourceMappingURL=CSSRule.js.map