import { EmitType } from '@syncfusion/ej2-base';
import { FloatLabelType } from '@syncfusion/ej2-inputs';
import { MultiSelectModel, FilteringEventArgs, visualMode, MultiSelectChangeEventArgs, RemoveEventArgs, ISelectAllEventArgs, TaggingEventArgs, CustomValueEventArgs, PopupEventArgs } from '@syncfusion/ej2-dropdowns';
export declare class EJMultiSelectModel implements MultiSelectModel {
    enableGroupCheckBox?: boolean;
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
    changeOnBlur?: boolean;
    allowCustomValue?: boolean;
    showClearButton?: boolean;
    maximumSelectionLength?: number;
    readonly?: boolean;
    text?: string;
    value?: number[] | string[] | boolean[];
    hideSelectedItem?: boolean;
    closePopupOnSelect?: boolean;
    mode?: visualMode;
    delimiterChar?: string;
    showDropDownIcon?: boolean;
    floatLabelType?: FloatLabelType;
    showSelectAll?: boolean;
    selectAllText?: string;
    unSelectAllText?: string;
    enableSelectionOrder?: boolean;
    openOnClick?: boolean;
    change?: EmitType<MultiSelectChangeEventArgs>;
    removing?: EmitType<RemoveEventArgs>;
    removed?: EmitType<RemoveEventArgs>;
    selectedAll?: EmitType<ISelectAllEventArgs>;
    beforeOpen?: EmitType<Object>;
    open?: EmitType<PopupEventArgs>;
    close?: EmitType<PopupEventArgs>;
    blur?: EmitType<Object>;
    focus?: EmitType<Object>;
    chipSelection?: EmitType<Object>;
    filtering?: EmitType<FilteringEventArgs>;
    tagging?: EmitType<TaggingEventArgs>;
    customValueSelection?: EmitType<CustomValueEventArgs>;
}