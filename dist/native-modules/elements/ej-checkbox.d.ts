import { TaskQueue } from 'aurelia-framework';
import { CheckBoxModel } from '@syncfusion/ej2-buttons';
export declare class EjCheckbox implements CheckBoxModel {
    private element;
    private taskQueue;
    private _checkbox;
    private _guard;
    label: string;
    checked: boolean;
    constructor(element: Element, taskQueue: TaskQueue);
    get disabled(): any;
    set disabled(value: any);
    private disabledChanged;
    attached(): void;
    detached(): void;
    checkedChanged(newValue: boolean, oldValue: any): void;
    private onChange;
}
