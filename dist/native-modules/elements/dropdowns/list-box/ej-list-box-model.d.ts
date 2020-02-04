import { EmitType } from '@syncfusion/ej2-base';
import { EjDropDownBaseModel } from './../drop-down-base/ej-drop-down-base-model';
import { SelectionSettingsModel, ToolbarSettingsModel, ListBoxModel, FilteringEventArgs, BeforeItemRenderEventArgs, ListBoxChangeEventArgs, DropEventArgs, DragEventArgs } from '@syncfusion/ej2-dropdowns';
export declare class EjListBoxModel extends EjDropDownBaseModel implements ListBoxModel {
    cssClass?: string;
    value?: string[] | number[] | boolean[];
    height?: number | string;
    allowDragAndDrop?: boolean;
    maximumSelectionLength?: number;
    allowFiltering?: boolean;
    scope?: string;
    beforeItemRender?: EmitType<BeforeItemRenderEventArgs>;
    filtering?: EmitType<FilteringEventArgs>;
    change?: EmitType<ListBoxChangeEventArgs>;
    beforeDrop?: EmitType<DropEventArgs>;
    dragStart?: EmitType<DragEventArgs>;
    drag?: EmitType<DragEventArgs>;
    drop?: EmitType<DragEventArgs>;
    toolbarSettings?: ToolbarSettingsModel;
    selectionSettings?: SelectionSettingsModel;
}
