"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SVG angle.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle
 */
class SVGAngle {
    constructor() {
        this.unitType = '';
        this.value = 0;
        this.valueInSpecifiedUnits = 0;
        this.valueAsString = '';
    }
    /**
     * New value specific units.
     */
    newValueSpecifiedUnits() { }
    /**
     * Convert to specific units.
     */
    convertToSpecifiedUnits() { }
}
exports.default = SVGAngle;
SVGAngle.SVG_ANGLETYPE_UNKNOWN = 'unknown';
SVGAngle.SVG_ANGLETYPE_UNSPECIFIED = 'unspecified';
SVGAngle.SVG_ANGLETYPE_DEG = '0deg';
SVGAngle.SVG_ANGLETYPE_RAD = '0rad';
SVGAngle.SVG_ANGLETYPE_GRAD = '0grad';
//# sourceMappingURL=SVGAngle.js.map