"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSSUnits_1 = __importDefault(require("./CSSUnits"));
/**
 * CSS unit value.
 */
class CSSUnitValue {
    /**
     * Constructor.
     *
     * @param value Value.
     * @param unit Unit.
     */
    constructor(value, unit) {
        this.unit = null;
        this.value = null;
        if (typeof value !== 'number') {
            throw new TypeError('The provided double value is non-finite');
        }
        if (!CSSUnits_1.default.includes(unit)) {
            throw new TypeError('Invalid unit: ' + unit);
        }
        this.value = value;
        this.unit = unit;
    }
}
exports.default = CSSUnitValue;
//# sourceMappingURL=CSSUnitValue.js.map