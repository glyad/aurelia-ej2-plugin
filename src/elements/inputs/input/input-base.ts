import { bindable, bindingMode } from 'aurelia-framework';
import { IInput, FloatLabelType } from '@syncfusion/ej2-inputs';

export abstract class EjInputBase implements IInput {
  
  /**
   *  Sets the placeholder value to input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  placeholder: string;

  /**
   *  Sets the css class value to input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  cssClass: string;

  /**
   *  Sets the enabled value to input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enabled?: boolean;

  /**
   *  Sets the readonly value to input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  readonly: boolean;

  /**
   *  Sets the enable rtl value to input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enableRtl: boolean;

  /**
   *  Specifies whether to display the Clear button in the input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  showClearButton?: boolean;

  /**
   * Specifies how the floating label works.
   * Possible values are:
   * * Never - Never float the label in the input when the placeholder is available.
   * * Always - The floating label will always float above the input.
   * * Auto - The floating label will float above the input after focusing or entering a value in the input.
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  floatLabelType?: FloatLabelType | string;

  /**
   *  Sets the change event mapping function to input.
   */
  abstract change: Function;


}
