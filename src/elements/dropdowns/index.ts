import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

// export * from './common/index';
export * from './drop-down-base/index';
export * from './drop-down-list/index';
export * from './combo-box/index';
export * from './auto-complete/index';
export * from './multi-select/index';
export * from './list-box/index';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./auto-complete/ej-auto-complete'),
    PLATFORM.moduleName('./drop-down-base/ej-drop-down-base'),    
    PLATFORM.moduleName('./drop-down-list/ej-drop-down-list')
  ]);
}
