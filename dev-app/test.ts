import { bindable, bindingMode } from 'aurelia-framework';
export class Test {


    @bindable({ bindingMode: bindingMode.twoWay}) public content = 'Button #1';
    cssClass: string = '';
    disabled = false;
    enabled = true;
    enableHtmlSanitizer = true;
    enablePersistence = false;
    @bindable({ bindingMode: bindingMode.twoWay})enableRtl = false;
    iconCss = 'e-btn-sb-icon e-prev-icon';
    iconPosition = 'Right';
    isPrimary = true;
    isToggle = true;

    width: number = 250;
}
