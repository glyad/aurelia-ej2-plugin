import { bindable, TaskQueue, autoinject } from 'aurelia-framework';
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

@autoinject
export class EjButton {

  private _button: Button;
  private guard: boolean = false;

  @bindable value;
  @bindable primary: boolean | string = false;

  // tslint:disable-next-line: no-parameter-properties
  constructor(private element: Element, private taskQueue: TaskQueue) { }

  valueChanged(newValue, oldValue) {
    //
  }

  primaryChanged(newValue, oldValue) {
    
    if (!this._button || this.guard || newValue === oldValue) {
      return;
    }

    if (this._button) {
      this._button.isPrimary = newValue;
    }
  }

  attached() {
    enableRipple(true);
    this._button = new Button();
    let e = this.element.querySelector("button");
    this._button.appendTo(e);
    this._button.isPrimary = (this.primary === true || this.primary === "true");
    this._button.content = this.value;
  }

  detached() {
    this._button.destroy();
  }
}
