"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CSS parser.
 */
class CSSStyleDeclarationCSSParser {
    /**
     * Class construtor.
     *
     * @param cssText CSS string.
     * @param callback Callback.
     */
    static parse(cssText, callback) {
        const parts = cssText.split(';');
        for (const part of parts) {
            if (part) {
                const [name, value] = part.trim().split(':');
                if (value) {
                    const trimmedName = name.trim();
                    const trimmedValue = value.trim();
                    if (trimmedName && trimmedValue) {
                        const important = trimmedValue.endsWith(' !important');
                        const valueWithoutImportant = trimmedValue.replace(' !important', '');
                        if (valueWithoutImportant) {
                            callback(trimmedName, valueWithoutImportant, important);
                        }
                    }
                }
            }
        }
    }
}
exports.default = CSSStyleDeclarationCSSParser;
//# sourceMappingURL=CSSStyleDeclarationCSSParser.js.map