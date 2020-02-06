import {
  bindable,
  autoinject,
  inlineView,
  customElement,
  TaskQueue,
  bindingMode,
} from 'aurelia-framework';
import { CheckBox, CheckBoxModel } from '@syncfusion/ej2-buttons';

@autoinject
@customElement('ej-checkbox')
@inlineView('<template><input type="checkbox" change.delegate="onChange($this)"/></template>')
export class EjCheckbox implements CheckBoxModel {
  private _checkbox: CheckBox;
  private _guard: boolean = false;

  @bindable public label: string = '';
  @bindable public checked: boolean = true;

  constructor(private element: Element, private taskQueue: TaskQueue) {}

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public get disabled() {
    return this._checkbox.disabled;
  }

  public set disabled(value: any) {
    this._checkbox.disabled = value === true || value === 'true';
  }

  private disabledChanged(newValue: boolean, oldValue: any) {
    if (this._checkbox) {
      this._checkbox.disabled = newValue;
    }
  }

  attached() {
    this._checkbox = new CheckBox();
    let e = this.element.querySelector('input');
    this._checkbox.appendTo(e);
    this._checkbox.label = this.label;
    this._checkbox.checked = this.checked;
    //this._checkbox.disabled = (this.disabled === true || this.disabled === "true");
  }

  detached() {
    this._checkbox.destroy();
  }

  checkedChanged(newValue: boolean, oldValue: any) {
    if (!this._checkbox || this._guard || newValue === oldValue) {
      return;
    }

    if (this._checkbox) {
      this._checkbox.checked = newValue;
    }
  }

  //function to handle the CheckBox change event
  private onChange(instance): void {
    this._guard = true;
    this.checked = this._checkbox.checked;
    this.taskQueue.queueMicroTask(() => {
      instance._guard = false;
    });
  }
}
