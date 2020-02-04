import { FloatLabelType } from '@syncfusion/ej2-inputs';
import { EmitType } from '@syncfusion/ej2-base';
import { DropDownListModel, ChangeEventArgs, FilteringEventArgs, PopupEventArgs } from '@syncfusion/ej2-dropdowns';
import { EjDropDownBaseModel } from '../drop-down-base/ej-drop-down-base-model';
export declare class EjDropDownListModel extends EjDropDownBaseModel implements DropDownListModel {
    cssClass?: string;
    width?: string | number;
    popupHeight?: string | number;
    popupWidth?: string | number;
    placeholder?: string;
    filterBarPlaceholder?: string;
    htmlAttributes?: {
        [key: string]: string;
    };
    valueTemplate?: string;
    headerTemplate?: string;
    footerTemplate?: string;
    allowFiltering?: boolean;
    readonly?: boolean;
    text?: string;
    value?: number | string | boolean;
    index?: number;
    floatLabelType?: FloatLabelType;
    showClearButton?: boolean;
    filtering?: EmitType<FilteringEventArgs>;
    change?: EmitType<ChangeEventArgs>;
    beforeOpen?: EmitType<Object>;
    open?: EmitType<PopupEventArgs>;
    close?: EmitType<PopupEventArgs>;
    blur?: EmitType<Object>;
    focus?: EmitType<Object>;
}
