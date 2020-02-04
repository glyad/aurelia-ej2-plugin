import { EjAutoCompleteModel } from './ej-auto-complete-model';
import { TargetInstruction, TaskQueue } from 'aurelia-framework';
import { AutoCompleteModel } from '@syncfusion/ej2-dropdowns';
export declare class EjAutoComplete extends EjAutoCompleteModel implements AutoCompleteModel {
    private element;
    private taskQueue;
    private ti;
    constructor(element: Element, taskQueue: TaskQueue, ti: TargetInstruction);
    attached(): void;
    value?: number | string | boolean | any;
}
