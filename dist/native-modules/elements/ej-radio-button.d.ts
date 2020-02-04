import { TaskQueue } from 'aurelia-framework';
import { EjComponentModel } from './base/ej-component-model';
import { RadioButtonModel } from '@syncfusion/ej2-buttons';
export declare class EjRadioButton extends EjComponentModel implements RadioButtonModel {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: TaskQueue);
    attached(): void;
    checked?: boolean;
    cssClass?: string;
    private cssClassChanged;
    disabled?: boolean;
    label?: string;
    private labelChanged;
    position?: string;
    private positionChanged;
    name?: string;
    value?: string;
    enableHtmlSanitizer?: boolean;
    enableHtmlSanitizerChanged(newValue: any, oldValue: any): void;
}
