import { EmitType } from '@syncfusion/ej2-base';
import { ComboBoxModel, CustomValueSpecifierEventArgs } from "@syncfusion/ej2-dropdowns";
import { EjDropDownListModel } from './../drop-down-list/ej-drop-down-list-model';
export declare class EjComboBoxModel extends EjDropDownListModel implements ComboBoxModel {
    autofill?: boolean;
    allowCustom?: boolean;
    customValueSpecifier?: EmitType<CustomValueSpecifierEventArgs>;
}
