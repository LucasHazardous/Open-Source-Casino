"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _HTMLIFrameElement_contentWindow;
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const Event_1 = __importDefault(require("../../event/Event"));
const ErrorEvent_1 = __importDefault(require("../../event/events/ErrorEvent"));
const HTMLElement_1 = __importDefault(require("../html-element/HTMLElement"));
const IFrameCrossOriginWindow_1 = __importDefault(require("./IFrameCrossOriginWindow"));
/**
 * HTML Iframe Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement.
 */
class HTMLIFrameElement extends HTMLElement_1.default {
    constructor() {
        super(...arguments);
        // Events
        this.onload = null;
        this.onerror = null;
        // Private
        _HTMLIFrameElement_contentWindow.set(this, null);
    }
    /**
     * Returns source.
     *
     * @returns Source.
     */
    get src() {
        return this.getAttribute('src') || '';
    }
    /**
     * Sets source.
     *
     * @param src Source.
     */
    set src(src) {
        this.setAttribute('src', src);
    }
    /**
     * Returns allow.
     *
     * @returns Allow.
     */
    get allow() {
        return this.getAttribute('allow') || '';
    }
    /**
     * Sets allow.
     *
     * @param allow Allow.
     */
    set allow(allow) {
        this.setAttribute('allow', allow);
    }
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height() {
        return this.getAttribute('height') || '';
    }
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height) {
        this.setAttribute('height', height);
    }
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width() {
        return this.getAttribute('width') || '';
    }
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width) {
        this.setAttribute('width', width);
    }
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name() {
        return this.getAttribute('name') || '';
    }
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * Returns sandbox.
     *
     * @returns Sandbox.
     */
    get sandbox() {
        return this.getAttribute('sandbox') || '';
    }
    /**
     * Sets sandbox.
     *
     * @param sandbox Sandbox.
     */
    set sandbox(sandbox) {
        this.setAttribute('sandbox', sandbox);
    }
    /**
     * Returns srcdoc.
     *
     * @returns Srcdoc.
     */
    get srcdoc() {
        return this.getAttribute('srcdoc') || '';
    }
    /**
     * Sets sandbox.
     *
     * @param srcdoc Srcdoc.
     */
    set srcdoc(srcdoc) {
        this.setAttribute('srcdoc', srcdoc);
    }
    /**
     * Returns content document.
     *
     * @returns Content document.
     */
    get contentDocument() {
        return __classPrivateFieldGet(this, _HTMLIFrameElement_contentWindow, "f")?.document || null;
    }
    /**
     * Returns content window.
     *
     * @returns Content window.
     */
    get contentWindow() {
        return __classPrivateFieldGet(this, _HTMLIFrameElement_contentWindow, "f") || null;
    }
    /**
     * @override
     */
    _connectToNode(parentNode = null) {
        const isConnected = this.isConnected;
        const isParentConnected = parentNode ? parentNode.isConnected : false;
        super._connectToNode(parentNode);
        if (isParentConnected &&
            isConnected !== isParentConnected &&
            !this.ownerDocument.defaultView.happyDOM.settings.disableIframePageLoading) {
            const src = this.src;
            if (src !== null) {
                const contentWindow = new this.ownerDocument.defaultView.constructor({
                    url: src,
                    settings: {
                        ...this.ownerDocument.defaultView.happyDOM.settings
                    }
                });
                contentWindow.parent = this.ownerDocument.defaultView;
                contentWindow.top = this.ownerDocument.defaultView;
                if (src === 'about:blank') {
                    __classPrivateFieldSet(this, _HTMLIFrameElement_contentWindow, contentWindow, "f");
                    return;
                }
                if (src.startsWith('javascript:')) {
                    __classPrivateFieldSet(this, _HTMLIFrameElement_contentWindow, contentWindow, "f");
                    __classPrivateFieldGet(this, _HTMLIFrameElement_contentWindow, "f").eval(src.replace('javascript:', ''));
                    return;
                }
                const originURL = this.ownerDocument.defaultView.location;
                const targetURL = new url_1.URL(src, originURL);
                const isCORS = (originURL.hostname !== targetURL.hostname &&
                    !originURL.hostname.endsWith(targetURL.hostname)) ||
                    originURL.protocol !== targetURL.protocol;
                const onError = (error) => {
                    this.dispatchEvent(new ErrorEvent_1.default('error', {
                        message: error.message,
                        error
                    }));
                    this.ownerDocument.defaultView.dispatchEvent(new ErrorEvent_1.default('error', {
                        message: error.message,
                        error
                    }));
                    if (!this['_listeners']['error'] &&
                        !this.ownerDocument.defaultView['_listeners']['error']) {
                        this.ownerDocument.defaultView.console.error(error);
                    }
                };
                __classPrivateFieldSet(this, _HTMLIFrameElement_contentWindow, null, "f");
                this.ownerDocument.defaultView
                    .fetch(src)
                    .then((response) => {
                    response
                        .text()
                        .then((text) => {
                        __classPrivateFieldSet(this, _HTMLIFrameElement_contentWindow, isCORS
                            ? new IFrameCrossOriginWindow_1.default(this.ownerDocument.defaultView, contentWindow)
                            : contentWindow, "f");
                        contentWindow.document.write(text);
                        this.dispatchEvent(new Event_1.default('load'));
                    })
                        .catch(onError);
                })
                    .catch(onError);
            }
        }
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
}
exports.default = HTMLIFrameElement;
_HTMLIFrameElement_contentWindow = new WeakMap();
//# sourceMappingURL=HTMLIFrameElement.js.map