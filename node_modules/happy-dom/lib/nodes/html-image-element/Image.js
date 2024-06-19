"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLImageElement_1 = __importDefault(require("./HTMLImageElement"));
/**
 * Image as constructor.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image.
 */
class Image extends HTMLImageElement_1.default {
    /**
     * Constructor.
     *
     * @param [width] Width.
     * @param [height] Height.
     */
    constructor(width = null, height = null) {
        super();
        if (width !== null) {
            this.width = width;
        }
        if (height !== null) {
            this.height = height;
        }
    }
}
exports.default = Image;
//# sourceMappingURL=Image.js.map