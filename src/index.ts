import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export * from './elements/index';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/buttons/button/ej-button'),
    PLATFORM.moduleName('./elements/buttons/check-box/ej-checkbox'),
    PLATFORM.moduleName('./elements/buttons/radio-button/ej-radio-button'),
    PLATFORM.moduleName('./elements/buttons/switch/ej-switch'),
    PLATFORM.moduleName('./elements/inputs/textbox/ej-textbox'),
    PLATFORM.moduleName('./elements/inputs/maskedtextbox/ej-masked-textbox'),
    PLATFORM.moduleName('./elements/inputs/numerictextbox/ej-numerictextbox'),
    PLATFORM.moduleName('./elements/dropdowns/auto-complete/ej-auto-complete'),
    PLATFORM.moduleName('./elements/dropdowns/drop-down-list/ej-drop-down-list')
  ])
  // .aurelia.use
  // .plugin('aurelia-highlightjs', config => config
  //      .useLanguage("bash")
  //      .useLanguage("javascript")
  //    );
    ;

}
