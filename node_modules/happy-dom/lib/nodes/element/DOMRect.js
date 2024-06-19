"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bounding rect object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMRect
 */
class DOMRect {
    /**
     * Constructor.
     *
     * @param [x] X position.
     * @param [y] Y position.
     * @param [width] Width.
     * @param [height] Height.
     */
    constructor(x, y, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
    }
}
exports.default = DOMRect;
//# sourceMappingURL=DOMRect.js.map