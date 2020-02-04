import { TaskQueue } from 'aurelia-framework';
export declare class EjButton {
    private element;
    private taskQueue;
    private _button;
    private guard;
    value: any;
    primary: boolean | string;
    constructor(element: Element, taskQueue: TaskQueue);
    valueChanged(newValue: any, oldValue: any): void;
    primaryChanged(newValue: any, oldValue: any): void;
    attached(): void;
    detached(): void;
}
