import { PLATFORM } from 'aurelia-pal';
export * from './base/index';
export * from './dropdowns/index';
export * from './inputs/index';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/ej-button'),
        PLATFORM.moduleName('./elements/ej-checkbox'),
        PLATFORM.moduleName('./elements/ej-radio-button')
    ]);
}

//# sourceMappingURL=index.js.map
