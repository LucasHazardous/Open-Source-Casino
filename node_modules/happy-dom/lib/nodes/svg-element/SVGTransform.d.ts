/**
 * SVG transform.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform
 */
export default class SVGTransform {
    static SVG_TRANSFORM_UNKNOWN: number;
    static SVG_TRANSFORM_MATRIX: number;
    static SVG_TRANSFORM_TRANSLATE: number;
    static SVG_TRANSFORM_SCALE: number;
    static SVG_TRANSFORM_ROTATE: number;
    static SVG_TRANSFORM_SKEWX: number;
    static SVG_TRANSFORM_SKEWY: number;
    type: number;
    angle: number;
    /**
     * Set matrix.
     */
    setMatrix(): void;
    /**
     * Set translate.
     */
    setTranslate(): void;
    /**
     * Set scale.
     */
    setScale(): void;
    /**
     * Set rotate.
     */
    setRotate(): void;
    /**
     * Set skew x.
     */
    setSkewX(): void;
    /**
     * Set skew y.
     */
    setSkewY(): void;
}
