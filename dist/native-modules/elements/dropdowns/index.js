import { PLATFORM } from 'aurelia-pal';
export * from './drop-down-base/index';
export * from './drop-down-list/index';
export * from './combo-box/index';
export * from './auto-complete/index';
export * from './multi-select/index';
export * from './list-box/index';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./auto-complete/ej-auto-complete'),
        PLATFORM.moduleName('./drop-down-list/ej-drop-down-list')
    ]);
}

//# sourceMappingURL=index.js.map
