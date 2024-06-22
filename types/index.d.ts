// Type definitions for Apache Cordova AltBrowser plugin
// Project: https://github.com/apache/cordova-plugin-altbrowser
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.
// TypeScript Version: 2.3
type channel = "loadstart" | "loadstop" | "loaderror" | "exit" | "message" | "customscheme";

/**
 * The object returned from a call to cordova.AltBrowser.open.
 * NOTE: The AltBrowser window behaves like a standard web browser, and can't access Cordova APIs.
 */
interface AltBrowser {

    /**
     * Opens a URL in a new AltBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the AltBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: string, options?: string): AltBrowser;

    onloadstart(type: Event): void;
    onloadstop(type: AltBrowserEvent): void;
    onloaderror(type: AltBrowserEvent): void;
    onexit(type: AltBrowserEvent): void;
    // addEventListener overloads
    /**
     * Adds a listener for an event from the AltBrowser.
     * @param type      loadstart: event fires when the AltBrowser starts to load a URL.
     *                  loadstop: event fires when the AltBrowser finishes loading a URL.
     *                  loaderror: event fires when the AltBrowser encounters an error when loading a URL.
     *                  exit: event fires when the AltBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an AltBrowserEvent object as a parameter.
     */
    addEventListener(type: channel, callback: AltBrowserEventListenerOrEventListenerObject): void;
    /**
     * Adds a listener for an event from the AltBrowser.
     * @param type      any custom event that might occur.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an AltBrowserEvent object as a parameter.
     */
    addEventListener(type: string, callback: AltBrowserEventListenerOrEventListenerObject): void;
    // removeEventListener overloads
    /**
     * Removes a listener for an event from the AltBrowser.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the AltBrowser starts to load a URL.
     *                  loadstop: event fires when the AltBrowser finishes loading a URL.
     *                  loaderror: event fires when the AltBrowser encounters an error when loading a URL.
     *                  exit: event fires when the AltBrowser window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an AltBrowserEvent object as a parameter.
     */
    removeEventListener(type: channel, callback: AltBrowserEventListenerOrEventListenerObject): void;
    /** Closes the AltBrowser window. */
    close(): void;
    /** Hides the AltBrowser window. Calling this has no effect if the AltBrowser was already hidden. */
    hide(): void;
    /**
     * Displays an AltBrowser window that was opened hidden. Calling this has no effect
     * if the AltBrowser was already visible.
     */
    show(): void;
    /**
     * Injects JavaScript code into the AltBrowser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the JavaScript code is injected.
     *                  If the injected script is of type code, the callback executes with
     *                  a single parameter, which is the return value of the script, wrapped in an Array.
     *                  For multi-line scripts, this is the return value of the last statement,
     *                  or the last expression evaluated.
     */
    executeScript(script: { code: string } | { file: string }, callback: (result: any) => void): void;
    /**
     * Injects CSS into the AltBrowser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: { code: string } | { file: string }, callback: () => void): void;
}

type AltBrowserEventListenerOrEventListenerObject = AltBrowserEventListener | AltBrowserEventListenerObject;

type AltBrowserEventListener = (evt: AltBrowserEvent) => void;

interface AltBrowserEventListenerObject {
    handleEvent(evt: AltBrowserEvent): void;
}

interface AltBrowserEvent extends Event {
    /** the eventname, either loadstart, loadstop, loaderror, or exit. */
    type: string;
    /** the URL that was loaded. */
    url: string;
    /** the error code, only in the case of loaderror. */
    code: number;
    /** the error message, only in the case of loaderror. */
    message: string;
}

interface Cordova {
    AltBrowser: AltBrowser;
}
