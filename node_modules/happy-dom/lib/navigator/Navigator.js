"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MimeTypeArray_1 = __importDefault(require("./MimeTypeArray"));
const PluginArray_1 = __importDefault(require("./PluginArray"));
/**
 * Browser Navigator API.
 *
 * Mocked information is taken from FireFox.
 *
 * Reference:
 * https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator.
 */
class Navigator {
    /**
     * False if setting a cookie will be ignored and true otherwise.
     */
    get cookieEnabled() {
        return true;
    }
    /**
     * TODO: Not implemented.
     */
    get credentials() {
        return null;
    }
    /**
     * TODO: Not implemented.
     */
    get geolocation() {
        return null;
    }
    /**
     * String representing the preferred language of the user, usually the language of the browser UI.
     */
    get language() {
        return 'en-US';
    }
    /**
     * Array of string representing the user's preferred languages.
     */
    get languages() {
        return ['en-US', 'en'];
    }
    /**
     * TODO: Not implemented.
     */
    get locks() {
        return null;
    }
    /**
     * Maximum number of simultaneous touch contact points are supported by the current device.
     */
    get maxTouchPoints() {
        return 0;
    }
    /**
     * Number of logical processors available to run threads on the user's computer.
     */
    get hardwareConcurrency() {
        return 8;
    }
    /**
     * Browser app code name.
     */
    get appCodeName() {
        return 'Mozilla';
    }
    /**
     * Browser app name.
     */
    get appName() {
        return 'Netscape';
    }
    /**
     * Browser app version.
     */
    get appVersion() {
        return '5.0 (Windows)';
    }
    /**
     * Browser platform.
     */
    get platform() {
        return 'Win32';
    }
    /**
     * Browser product.
     */
    get product() {
        return 'Gecko';
    }
    /**
     * Browser product sub.
     */
    get productSub() {
        return '20100101';
    }
    /**
     * Browser vendor.
     */
    get vendor() {
        return '';
    }
    /**
     * Browser vendor sub.
     */
    get vendorSub() {
        return '';
    }
    /**
     * Browser user agent.
     *
     * "appCodeName/appVersion number (Platform; Security; OS-or-CPU; Localization; rv: revision-version-number) product/productSub Application-Name Application-Name-version".
     */
    get userAgent() {
        return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0';
    }
    /**
     * Boolean value indicating whether the browser is working online.
     */
    get onLine() {
        return true;
    }
    /**
     * TODO: Not implemented.
     */
    get permissions() {
        return null;
    }
    /**
     * Boolean Indicates whether the user agent is controlled by automation.
     */
    get webdriver() {
        return true;
    }
    /**
     * The user's Do Not Track setting, which indicates whether the user is requesting web sites and advertisers to not track them.
     *
     * The value of the property reflects that of the DNT HTTP header, i.e. Values of "1", "0", or "unspecified".
     */
    get doNotTrack() {
        return 'unspecified';
    }
    /**
     * Browser mime-types.
     */
    get mimeTypes() {
        return new MimeTypeArray_1.default([]);
    }
    /**
     * Browser plugins.
     */
    get plugins() {
        return new PluginArray_1.default([]);
    }
    /**
     * Returns the object as a string.
     *
     * @returns String.
     */
    toString() {
        return '[object Navigator]';
    }
}
exports.default = Navigator;
//# sourceMappingURL=Navigator.js.map