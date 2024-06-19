"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CSSUnitValue_1 = __importDefault(require("./CSSUnitValue"));
const CSSUnits_1 = __importDefault(require("./CSSUnits"));
const css_escape_1 = __importDefault(require("css.escape"));
/**
 * The CSS interface holds useful CSS-related methods.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CSS.
 */
class CSS {
    /**
     * Constructor.
     */
    constructor() {
        for (const unit of CSSUnits_1.default) {
            this[unit] = (value) => new CSSUnitValue_1.default(value, unit);
        }
    }
    /**
     * Returns a Boolean indicating if the pair property-value, or the condition, given in parameter is supported.
     *
     * TODO: Always returns "true" for now, but it should probably be improved in the future.
     *
     * @param _condition Property name or condition.
     * @param [_value] Value when using property name.
     * @returns "true" if supported.
     */
    supports(_condition, _value) {
        return true;
    }
    /**
     * Escapes a value.
     *
     * @param value Value to escape.
     * @returns Escaped string.
     */
    escape(value) {
        return (0, css_escape_1.default)(value);
    }
}
exports.default = CSS;
//# sourceMappingURL=CSS.js.map