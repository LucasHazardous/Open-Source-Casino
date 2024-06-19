"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SVGRect_1 = __importDefault(require("./SVGRect"));
/**
 * Rect object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedRect
 */
class SVGAnimatedRect {
    constructor() {
        this.baseVal = new SVGRect_1.default();
        this.animVal = new SVGRect_1.default();
    }
}
exports.default = SVGAnimatedRect;
//# sourceMappingURL=SVGAnimatedRect.js.map