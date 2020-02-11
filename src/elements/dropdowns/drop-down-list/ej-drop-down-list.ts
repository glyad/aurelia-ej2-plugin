import { EjDropDownListModel } from './ej-drop-down-list-model';
import { IInput } from '@syncfusion/ej2-inputs';
import { EmitType } from '@syncfusion/ej2-base';
import { DropDownList, DropDownListModel, ChangeEventArgs } from '@syncfusion/ej2-dropdowns'
import { customElement, bindable, autoinject, processContent, BehaviorInstruction, bindingMode } from 'aurelia-framework';
import { EjDropDownBaseModel } from '../drop-down-base/ej-drop-down-base-model';

@autoinject
@customElement('ej-drop-down-list')
@processContent((compiler, resources, element: HTMLElement, instruction: BehaviorInstruction) => {
  let componentElement = element;
  let instr = instruction;

  const optionsTemplate = document.createElement("template");
  optionsTemplate.setAttribute("replace-part", "options");

  const options = Array.from(element.querySelectorAll("option"));

  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    // add option
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", option.value);
    optionElement.text = option.text;
    optionsTemplate.content.appendChild(optionElement);

    element.removeChild(option);
  }

  element.append(optionsTemplate);

  return true;
})
export class EjDropDownList extends EjDropDownListModel<DropDownList> implements DropDownListModel {

  // width?: string | number;
  // popupHeight?: string | number;
  // popupWidth?: string | number;
  // filterBarPlaceholder?: string;
  // htmlAttributes?: { [key: string]: string; };
  // valueTemplate?: string;
  // headerTemplate?: string;
  // footerTemplate?: string;
  // allowFiltering?: boolean;
  // text?: string;
  // value?: string | number | boolean;
  // @bindable({ defaultBindingMode: bindingMode.twoWay })
  // index?: number;
  // floatLabelType?: import("@syncfusion/ej2-inputs").FloatLabelType;
  // showClearButton?: boolean;
  // filtering?: import("@syncfusion/ej2-base").EmitType<import("@syncfusion/ej2-dropdowns").FilteringEventArgs>;
  // beforeOpen?: import("@syncfusion/ej2-base").EmitType<Object>;
  // open?: import("@syncfusion/ej2-base").EmitType<import("@syncfusion/ej2-dropdowns").PopupEventArgs>;
  // close?: import("@syncfusion/ej2-base").EmitType<import("@syncfusion/ej2-dropdowns").PopupEventArgs>;
  // blur?: import("@syncfusion/ej2-base").EmitType<Object>;
  // focus?: import("@syncfusion/ej2-base").EmitType<Object>;

  constructor(private element: Element) {
    super();
  }

  attached() {

    let innerElement = this.element.querySelector("select");

    this._wrapped = new DropDownList({
      index: this.index,
      placeholder: this.placeholder,
      popupHeight: this.popupHeight,
    }, this.element.querySelector("select"));
  }


  /**
   * Triggers when an item in a popup is selected or when the model value is changed by user.
   * Use change event to
   * [`Configure the Cascading DropDownList`](../../drop-down-list/how-to/cascading)
   * @event
   * @blazorProperty 'ValueChange'
   */
  change: EmitType<ChangeEventArgs>;



}
