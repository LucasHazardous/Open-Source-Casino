/**
 * SVG length.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGLength
 */
export default class SVGLength {
    static SVG_LENGTHTYPE_UNKNOWN: number;
    static SVG_LENGTHTYPE_NUMBER: number;
    static SVG_LENGTHTYPE_PERCENTAGE: number;
    static SVG_LENGTHTYPE_EMS: number;
    static SVG_LENGTHTYPE_EXS: number;
    static SVG_LENGTHTYPE_PX: number;
    static SVG_LENGTHTYPE_CM: number;
    static SVG_LENGTHTYPE_MM: number;
    static SVG_LENGTHTYPE_IN: number;
    static SVG_LENGTHTYPE_PT: number;
    static SVG_LENGTHTYPE_PC: number;
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
