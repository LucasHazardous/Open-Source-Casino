/**
 * SVG angle.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle
 */
export default class SVGAngle {
    static SVG_ANGLETYPE_UNKNOWN: string;
    static SVG_ANGLETYPE_UNSPECIFIED: string;
    static SVG_ANGLETYPE_DEG: string;
    static SVG_ANGLETYPE_RAD: string;
    static SVG_ANGLETYPE_GRAD: string;
    unitType: string;
    value: number;
    valueInSpecifiedUnits: number;
    valueAsString: string;
    /**
     * New value specific units.
     */
    newValueSpecifiedUnits(): void;
    /**
     * Convert to specific units.
     */
    convertToSpecifiedUnits(): void;
}
