import { bindable, bindingMode } from 'aurelia-framework';
import { EmitType } from '@syncfusion/ej2-base';
import { ComboBoxModel, CustomValueSpecifierEventArgs } from "@syncfusion/ej2-dropdowns"
import { EjDropDownListModel } from './../drop-down-list/ej-drop-down-list-model';

export class EjComboBoxModel extends EjDropDownListModel implements ComboBoxModel {

  /**
   * Specifies whether suggest a first matched item in input when searching. No action happens when no matches found.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  autofill?: boolean;

  /**
   * Specifies whether the component allows user defined value which does not exist in data source.    
   * @default true
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  allowCustom?: boolean;
  
  /**
   * Triggers on set a 
   * [`custom value`](../../combo-box/getting-started#custom-values) to this component.
   * @event
   * @blazorProperty 'CustomValueSpecifier'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  customValueSpecifier?: EmitType<CustomValueSpecifierEventArgs>;

}
