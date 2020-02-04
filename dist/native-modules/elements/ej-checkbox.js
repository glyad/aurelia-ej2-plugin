var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, autoinject, customElement, TaskQueue, bindingMode } from 'aurelia-framework';
import { CheckBox } from '@syncfusion/ej2-buttons';
var EjCheckbox = (function () {
    function EjCheckbox(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this._guard = false;
        this.label = '';
        this.checked = true;
    }
    Object.defineProperty(EjCheckbox.prototype, "disabled", {
        get: function () {
            return this._checkbox.disabled;
        },
        set: function (value) {
            this._checkbox.disabled = (value === true || value === "true");
        },
        enumerable: true,
        configurable: true
    });
    EjCheckbox.prototype.disabledChanged = function (newValue, oldValue) {
        if (this._checkbox) {
            this._checkbox.disabled = newValue;
        }
    };
    EjCheckbox.prototype.attached = function () {
        this._checkbox = new CheckBox();
        var e = this.element.querySelector("input");
        this._checkbox.appendTo(e);
        this._checkbox.label = this.label;
        this._checkbox.checked = this.checked;
    };
    EjCheckbox.prototype.detached = function () {
        this._checkbox.destroy();
    };
    EjCheckbox.prototype.checkedChanged = function (newValue, oldValue) {
        if (!this._checkbox || this._guard || newValue === oldValue) {
            return;
        }
        if (this._checkbox) {
            this._checkbox.checked = newValue;
        }
    };
    EjCheckbox.prototype.onChange = function (instance) {
        this._guard = true;
        this.checked = this._checkbox.checked;
        this.taskQueue.queueMicroTask(function () {
            instance._guard = false;
        });
    };
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], EjCheckbox.prototype, "label", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], EjCheckbox.prototype, "checked", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EjCheckbox.prototype, "disabled", null);
    EjCheckbox = __decorate([
        autoinject,
        customElement("ej-checkbox"),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], EjCheckbox);
    return EjCheckbox;
}());
export { EjCheckbox };

//# sourceMappingURL=ej-checkbox.js.map
