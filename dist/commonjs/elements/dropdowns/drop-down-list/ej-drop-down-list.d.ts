import { EjDropDownListModel } from './ej-drop-down-list-model';
import { EmitType } from '@syncfusion/ej2-base';
import { DropDownListModel, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
export declare class EjDropDownList extends EjDropDownListModel implements DropDownListModel {
    private element;
    constructor(element: Element);
    attached(): void;
    change: EmitType<ChangeEventArgs>;
}
