import { PLATFORM } from 'aurelia-pal';
export * from './base/index';
export * from './dropdowns/index';
export * from './inputs/index';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/ej-radio-button'),
    ]);
}

//# sourceMappingURL=index.js.map
