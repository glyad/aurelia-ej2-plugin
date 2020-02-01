import { bindable, bindingMode } from 'aurelia-framework';
import { EjComboBoxModel } from './../combo-box/ej-combo-box-model';
import { AutoCompleteModel } from '@syncfusion/ej2-dropdowns';

export class EjAutoCompleteModel extends EjComboBoxModel implements AutoCompleteModel {

    /**
     * Allows you to either show or hide the popup button on the component.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    showPopupButton?: boolean;

    /**
     * When set to ‘true’, highlight the searched characters on suggested list items.
     * > For more details about the highlight refer to [`Custom highlight search`](../../auto-complete/how-to/custom-search) documentation.
     * @default false
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    highlight?: boolean;

    /**
     * Supports the [`specified number`](../../auto-complete/filtering#filter-item-count)
     * of list items on the suggestion popup.
     * @default 20
     * @blazorType int
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    suggestionCount?: number;

    /**
     * Allows you to set [`the minimum search character length']
     * (../../auto-complete/filtering#limit-the-minimum-filter-character),
     * the search action will perform after typed minimum characters.
     * @default 1
     * @blazorType int
     */
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    minLength?: number;

}
