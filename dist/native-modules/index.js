import { PLATFORM } from 'aurelia-pal';
export * from './elements/index';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/dropdowns/auto-complete/ej-auto-complete'),
        PLATFORM.moduleName('./elements/dropdowns/drop-down-list/ej-drop-down-list'),
        PLATFORM.moduleName('./elements/hello-world'),
        PLATFORM.moduleName('./elements/ej-button'),
        PLATFORM.moduleName('./elements/ej-checkbox'),
        PLATFORM.moduleName('./elements/ej-radio-button')
    ]);
}

//# sourceMappingURL=index.js.map
