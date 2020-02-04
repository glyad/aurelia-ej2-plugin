var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, TaskQueue, autoinject } from 'aurelia-framework';
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
var EjButton = (function () {
    function EjButton(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.guard = false;
        this.primary = false;
    }
    EjButton.prototype.valueChanged = function (newValue, oldValue) {
    };
    EjButton.prototype.primaryChanged = function (newValue, oldValue) {
        if (!this._button || this.guard || newValue === oldValue) {
            return;
        }
        if (this._button) {
            this._button.isPrimary = newValue;
        }
    };
    EjButton.prototype.attached = function () {
        enableRipple(true);
        this._button = new Button();
        var e = this.element.querySelector("button");
        this._button.appendTo(e);
        this._button.isPrimary = (this.primary === true || this.primary === "true");
        this._button.content = this.value;
    };
    EjButton.prototype.detached = function () {
        this._button.destroy();
    };
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], EjButton.prototype, "value", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], EjButton.prototype, "primary", void 0);
    EjButton = __decorate([
        autoinject,
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], EjButton);
    return EjButton;
}());
export { EjButton };

//# sourceMappingURL=ej-button.js.map
