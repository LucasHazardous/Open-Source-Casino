import CSSRule from './CSSRule';
import CSSStyleSheet from './CSSStyleSheet';
/**
 * CSS parser.
 */
export default class CSSParser {
    /**
     * Parses HTML and returns a root element.
     *
     * @param parentStyleSheet Parent style sheet.
     * @param cssText CSS code.
     * @returns Root element.
     */
    static parseFromString(parentStyleSheet: CSSStyleSheet, cssText: string): CSSRule[];
}
