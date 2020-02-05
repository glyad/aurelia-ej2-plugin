import {
  bindable,
  autoinject,
  inlineView,
  customElement,
  TaskQueue,
  bindingMode,
} from 'aurelia-framework';
import { EjComponentModel } from './base/ej-component-model';
import { RadioButton, RadioButtonModel, RadioLabelPosition } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@autoinject
@customElement('ej-radio-button')
@inlineView(
  '<template><input type="radio" name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"></template>'
)
export class EjRadioButton extends EjComponentModel implements RadioButtonModel {
  // private _wrapped: RadioButton;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    super();
  }

  attached() {
    this._wrapped = new RadioButton(
      {
        checked: this.checked,
        cssClass: this.cssClass,
        disabled: this.disabled,
        name: this.name,
        label: this.label,
        labelPosition: <RadioLabelPosition>(this.position === 'Before' ? 'Before' : 'After'),
        value: this.value,
        enableRtl: this.enableRtl,
        enableHtmlSanitizer: this.enableHtmlSanitizer,
        enablePersistence: this.enablePersistence,
        locale: this.locale,
      },
      this.element.querySelector('input')
    );
  }

  /**
   * Specifies a value that indicates whether the RadioButton is `checked` or not.
   * When set to `true`, the RadioButton will be in `checked` state.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  checked?: boolean;
  // public get checked() {
  //   return this._wrapped.checked;
  // }

  // public set checked(value: boolean) {
  //   this._wrapped.checked = value;
  // }

  // private checkedChanged(newValue, oldValue) {
  //   if (this._wrapped) {
  //     this._wrapped.checked = newValue;
  //   }
  // }

  /**
   * Defines class/multiple classes separated by a space in the RadioButton element.
   * You can add custom styles to the RadioButton by using this property.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public cssClass?: string;

  private cssClassChanged(newValue) {
    if (this._wrapped) {
      (<RadioButton>this._wrapped).cssClass = newValue;
    }
  }
  /**
   * Specifies a value that indicates whether the RadioButton is `disabled` or not.
   * When set to `true`, the RadioButton will be in `disabled` state.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  disabled?: boolean;

  // disabledChanged(newValue: boolean | string) {
  //   if (this._wrapped) {
  //     this._wrapped.disabled =(newValue === true || newValue === "true")
  //   }
  // }
  /**
   * Defines the caption for the RadioButton, that describes the purpose of the RadioButton.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  label?: string;

  private labelChanged(newValue, oldValue) {
    if (this._wrapped) {
      (<RadioButton>this._wrapped).label = newValue;
    }
  }

  /**
   * Positions label `before`/`after` the RadioButton.
   * The possible values are:
   * * Before: The label is positioned to left of the RadioButton.
   * * After: The label is positioned to right of the RadioButton.
   * @default 'After'
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  position?: string;

  private positionChanged(newValue: string, oldValue) {
    if (this._wrapped) {
      (<RadioButton>this._wrapped).labelPosition = newValue === 'Before' ? 'Before' : 'After';
    }
  }
  /**
   * Defines `name` attribute for the RadioButton.
   * It is used to reference form data (RadioButton value) after a form is submitted.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public name?: string;

  // private nameChanged(newValue, oldValue) {
  //   if (this._wrapped) {
  //     (<RadioButton>this._wrapped).name = newValue;
  //   }
  // }

  /**
   * Defines `value` attribute for the RadioButton.
   * It is a form data passed to the server when submitting the form.
   * @default ''
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  value?: string;
  // public valueChanged(newValue: any, oldValue: any) {
  //   if (this._wrapped) {
  //     this._wrapped.value = newValue;
  //   }
  // }

  /**
   * Defines whether to allow the cross-scripting site or not.
   * @default false
   */
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  enableHtmlSanitizer?: boolean;

  public enableHtmlSanitizerChanged(newValue: any, oldValue: any) {
    if (this._wrapped) {
      (<RadioButton>this._wrapped).enableHtmlSanitizer = newValue;
    }
  }
}
