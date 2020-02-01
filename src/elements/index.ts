import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

export * from './base/index';
export * from './dropdowns/index';
export * from './inputs/index';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/ej-radio-button'),
  ]);

}
