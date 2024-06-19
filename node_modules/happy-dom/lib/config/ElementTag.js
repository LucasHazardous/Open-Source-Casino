"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_1 = __importDefault(require("../nodes/html-element/HTMLElement"));
const HTMLTemplateElement_1 = __importDefault(require("../nodes/html-template-element/HTMLTemplateElement"));
const HTMLFormElement_1 = __importDefault(require("../nodes/html-form-element/HTMLFormElement"));
const HTMLInputElement_1 = __importDefault(require("../nodes/html-input-element/HTMLInputElement"));
const HTMLTextAreaElement_1 = __importDefault(require("../nodes/html-text-area-element/HTMLTextAreaElement"));
const SVGSVGElement_1 = __importDefault(require("../nodes/svg-element/SVGSVGElement"));
const SVGElement_1 = __importDefault(require("../nodes/svg-element/SVGElement"));
const HTMLScriptElement_1 = __importDefault(require("../nodes/html-script-element/HTMLScriptElement"));
const HTMLImageElement_1 = __importDefault(require("../nodes/html-image-element/HTMLImageElement"));
const HTMLLinkElement_1 = __importDefault(require("../nodes/html-link-element/HTMLLinkElement"));
const HTMLStyleElement_1 = __importDefault(require("../nodes/html-style-element/HTMLStyleElement"));
const HTMLLabelElement_1 = __importDefault(require("../nodes/html-label-element/HTMLLabelElement"));
const HTMLSlotElement_1 = __importDefault(require("../nodes/html-slot-element/HTMLSlotElement"));
const HTMLMetaElement_1 = __importDefault(require("../nodes/html-meta-element/HTMLMetaElement"));
const HTMLBaseElement_1 = __importDefault(require("../nodes/html-base-element/HTMLBaseElement"));
const HTMLSelectElement_1 = __importDefault(require("../nodes/html-select-element/HTMLSelectElement"));
const HTMLOptionElement_1 = __importDefault(require("../nodes/html-option-element/HTMLOptionElement"));
const HTMLOptGroupElement_1 = __importDefault(require("../nodes/html-opt-group-element/HTMLOptGroupElement"));
const HTMLDialogElement_1 = __importDefault(require("../nodes/html-dialog-element/HTMLDialogElement"));
const HTMLButtonElement_1 = __importDefault(require("../nodes/html-button-element/HTMLButtonElement"));
const HTMLAudioElement_1 = __importDefault(require("../nodes/html-audio-element/HTMLAudioElement"));
const HTMLVideoElement_1 = __importDefault(require("../nodes/html-video-element/HTMLVideoElement"));
const HTMLAnchorElement_1 = __importDefault(require("../nodes/html-anchor-element/HTMLAnchorElement"));
const HTMLIFrameElement_1 = __importDefault(require("../nodes/html-iframe-element/HTMLIFrameElement"));
exports.default = {
    A: HTMLAnchorElement_1.default,
    ABBR: HTMLElement_1.default,
    ADDRESS: HTMLElement_1.default,
    AREA: HTMLElement_1.default,
    ARTICLE: HTMLElement_1.default,
    ASIDE: HTMLElement_1.default,
    AUDIO: HTMLAudioElement_1.default,
    B: HTMLElement_1.default,
    BASE: HTMLBaseElement_1.default,
    BDI: HTMLElement_1.default,
    BDO: HTMLElement_1.default,
    BLOCKQUAOTE: HTMLElement_1.default,
    BODY: HTMLElement_1.default,
    TEMPLATE: HTMLTemplateElement_1.default,
    FORM: HTMLFormElement_1.default,
    INPUT: HTMLInputElement_1.default,
    TEXTAREA: HTMLTextAreaElement_1.default,
    SCRIPT: HTMLScriptElement_1.default,
    IMG: HTMLImageElement_1.default,
    LINK: HTMLLinkElement_1.default,
    STYLE: HTMLStyleElement_1.default,
    LABEL: HTMLLabelElement_1.default,
    SLOT: HTMLSlotElement_1.default,
    SVG: SVGSVGElement_1.default,
    CIRCLE: SVGElement_1.default,
    ELLIPSE: SVGElement_1.default,
    LINE: SVGElement_1.default,
    PATH: SVGElement_1.default,
    POLYGON: SVGElement_1.default,
    POLYLINE: SVGElement_1.default,
    RECT: SVGElement_1.default,
    STOP: SVGElement_1.default,
    USE: SVGElement_1.default,
    META: HTMLMetaElement_1.default,
    BLOCKQUOTE: HTMLElement_1.default,
    BR: HTMLElement_1.default,
    BUTTON: HTMLButtonElement_1.default,
    CANVAS: HTMLElement_1.default,
    CAPTION: HTMLElement_1.default,
    CITE: HTMLElement_1.default,
    CODE: HTMLElement_1.default,
    COL: HTMLElement_1.default,
    COLGROUP: HTMLElement_1.default,
    DATA: HTMLElement_1.default,
    DATALIST: HTMLElement_1.default,
    DD: HTMLElement_1.default,
    DEL: HTMLElement_1.default,
    DETAILS: HTMLElement_1.default,
    DFN: HTMLElement_1.default,
    DIALOG: HTMLDialogElement_1.default,
    DIV: HTMLElement_1.default,
    DL: HTMLElement_1.default,
    DT: HTMLElement_1.default,
    EM: HTMLElement_1.default,
    EMBED: HTMLElement_1.default,
    FIELDSET: HTMLElement_1.default,
    FIGCAPTION: HTMLElement_1.default,
    FIGURE: HTMLElement_1.default,
    FOOTER: HTMLElement_1.default,
    H1: HTMLElement_1.default,
    H2: HTMLElement_1.default,
    H3: HTMLElement_1.default,
    H4: HTMLElement_1.default,
    H5: HTMLElement_1.default,
    H6: HTMLElement_1.default,
    HEAD: HTMLElement_1.default,
    HEADER: HTMLElement_1.default,
    HGROUP: HTMLElement_1.default,
    HR: HTMLElement_1.default,
    HTML: HTMLElement_1.default,
    I: HTMLElement_1.default,
    IFRAME: HTMLIFrameElement_1.default,
    INS: HTMLElement_1.default,
    KBD: HTMLElement_1.default,
    LEGEND: HTMLElement_1.default,
    LI: HTMLElement_1.default,
    MAIN: HTMLElement_1.default,
    MAP: HTMLElement_1.default,
    MARK: HTMLElement_1.default,
    MATH: HTMLElement_1.default,
    MENU: HTMLElement_1.default,
    MENUITEM: HTMLElement_1.default,
    METER: HTMLElement_1.default,
    NAV: HTMLElement_1.default,
    NOSCRIPT: HTMLElement_1.default,
    OBJECT: HTMLElement_1.default,
    OL: HTMLElement_1.default,
    OPTGROUP: HTMLOptGroupElement_1.default,
    OPTION: HTMLOptionElement_1.default,
    OUTPUT: HTMLElement_1.default,
    P: HTMLElement_1.default,
    PARAM: HTMLElement_1.default,
    PICTURE: HTMLElement_1.default,
    PRE: HTMLElement_1.default,
    PROGRESS: HTMLElement_1.default,
    Q: HTMLElement_1.default,
    RB: HTMLElement_1.default,
    RP: HTMLElement_1.default,
    RT: HTMLElement_1.default,
    RTC: HTMLElement_1.default,
    RUBY: HTMLElement_1.default,
    S: HTMLElement_1.default,
    SAMP: HTMLElement_1.default,
    SECTION: HTMLElement_1.default,
    SELECT: HTMLSelectElement_1.default,
    SMALL: HTMLElement_1.default,
    SOURCE: HTMLElement_1.default,
    SPAN: HTMLElement_1.default,
    STRONG: HTMLElement_1.default,
    SUB: HTMLElement_1.default,
    SUMMARY: HTMLElement_1.default,
    SUP: HTMLElement_1.default,
    TABLE: HTMLElement_1.default,
    TBODY: HTMLElement_1.default,
    TD: HTMLElement_1.default,
    TFOOT: HTMLElement_1.default,
    TH: HTMLElement_1.default,
    THEAD: HTMLElement_1.default,
    TIME: HTMLElement_1.default,
    TITLE: HTMLElement_1.default,
    TR: HTMLElement_1.default,
    TRACK: HTMLElement_1.default,
    U: HTMLElement_1.default,
    UL: HTMLElement_1.default,
    VAR: HTMLElement_1.default,
    VIDEO: HTMLVideoElement_1.default,
    WBR: HTMLElement_1.default
};
//# sourceMappingURL=ElementTag.js.map