import 'jest-preset-angular';
// eslint-disable-next-line  ordered-imports/ordered-imports
import '@angular-extensions/pretty-html-log';
// eslint-disable-next-line  ordered-imports/ordered-imports
import * as jestJqueryMatchers from 'jest-jquery-matchers';

jest.addMatchers(jestJqueryMatchers);

// avoiding jsdom error message about form submission
const origErrorConsole = window.console.error;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.console.error = (...args: any[]) => {
    const firstArg: string | undefined = args.length > 0 && args[0];

    const ignoredErrors = ['Not implemented: HTMLFormElement.prototype.submit', 'Not implemented: HTMLCanvasElement.prototype.getContext'];

    const shouldBeIgnored = ignoredErrors.some((error: string) => firstArg?.includes(error));

    if (!shouldBeIgnored) {
        origErrorConsole(...args);
    }
};

Object.defineProperty(window, 'CSS', { value: undefined });
Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            display: 'none',
            appearance: ['-webkit-appearance'],
        };
    },
});

Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>',
});

Object.defineProperty(document.body.style, 'transform', {
    value: () => {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});
