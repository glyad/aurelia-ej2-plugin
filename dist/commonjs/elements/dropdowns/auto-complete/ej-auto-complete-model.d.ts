import { EjComboBoxModel } from './../combo-box/ej-combo-box-model';
import { AutoCompleteModel } from '@syncfusion/ej2-dropdowns';
export declare class EjAutoCompleteModel extends EjComboBoxModel implements AutoCompleteModel {
    showPopupButton?: boolean;
    highlight?: boolean;
    suggestionCount?: number;
    minLength?: number;
}
