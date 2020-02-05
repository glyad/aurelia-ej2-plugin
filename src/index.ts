import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export * from './elements/index';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/ej-button'),
    PLATFORM.moduleName('./elements/ej-checkbox'),
    PLATFORM.moduleName('./elements/ej-radio-button'),
    PLATFORM.moduleName('./elements/dropdowns/auto-complete/ej-auto-complete'),
    PLATFORM.moduleName('./elements/dropdowns/drop-down-list/ej-drop-down-list')
  ]);

}
