"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLAudioElement_1 = __importDefault(require("./HTMLAudioElement"));
/**
 * Image as constructor.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio.
 */
class Audio extends HTMLAudioElement_1.default {
    /**
     * Constructor.
     *
     * @param [url] source URL.
     */
    constructor(url = null) {
        super();
        if (url !== null) {
            this.src = url;
        }
    }
}
exports.default = Audio;
//# sourceMappingURL=Audio.js.map