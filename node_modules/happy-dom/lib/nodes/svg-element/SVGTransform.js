"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SVG transform.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform
 */
class SVGTransform {
    constructor() {
        this.type = 0;
        this.angle = 0;
    }
    /**
     * Set matrix.
     */
    setMatrix() { }
    /**
     * Set translate.
     */
    setTranslate() { }
    /**
     * Set scale.
     */
    setScale() { }
    /**
     * Set rotate.
     */
    setRotate() { }
    /**
     * Set skew x.
     */
    setSkewX() { }
    /**
     * Set skew y.
     */
    setSkewY() { }
}
exports.default = SVGTransform;
SVGTransform.SVG_TRANSFORM_UNKNOWN = 0;
SVGTransform.SVG_TRANSFORM_MATRIX = 1;
SVGTransform.SVG_TRANSFORM_TRANSLATE = 2;
SVGTransform.SVG_TRANSFORM_SCALE = 3;
SVGTransform.SVG_TRANSFORM_ROTATE = 4;
SVGTransform.SVG_TRANSFORM_SKEWX = 5;
SVGTransform.SVG_TRANSFORM_SKEWY = 6;
//# sourceMappingURL=SVGTransform.js.map