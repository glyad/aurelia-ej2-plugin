var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, autoinject, inlineView, customElement, TaskQueue, bindingMode } from 'aurelia-framework';
import { EjComponentModel } from './base/ej-component-model';
import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
var EjRadioButton = (function (_super) {
    __extends(EjRadioButton, _super);
    function EjRadioButton(element, taskQueue) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.taskQueue = taskQueue;
        return _this;
    }
    EjRadioButton.prototype.attached = function () {
        this._wrapped = new RadioButton({
            checked: this.checked,
            cssClass: this.cssClass,
            disabled: this.disabled,
            name: this.name,
            label: this.label,
            labelPosition: (this.position === 'Before' ? 'Before' : 'After'),
            value: this.value,
            enableRtl: this.enableRtl,
            enableHtmlSanitizer: this.enableHtmlSanitizer,
            enablePersistence: this.enablePersistence,
            locale: this.locale
        }, this.element.querySelector("input"));
    };
    EjRadioButton.prototype.cssClassChanged = function (newValue) {
        if (this._wrapped) {
            this._wrapped.cssClass = newValue;
        }
    };
    EjRadioButton.prototype.labelChanged = function (newValue, oldValue) {
        if (this._wrapped) {
            this._wrapped.label = newValue;
        }
    };
    EjRadioButton.prototype.positionChanged = function (newValue, oldValue) {
        if (this._wrapped) {
            this._wrapped.labelPosition = (newValue === 'Before') ? 'Before' : 'After';
        }
    };
    EjRadioButton.prototype.enableHtmlSanitizerChanged = function (newValue, oldValue) {
        if (this._wrapped) {
            this._wrapped.enableHtmlSanitizer = newValue;
        }
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjRadioButton.prototype, "checked", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", String)
    ], EjRadioButton.prototype, "cssClass", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjRadioButton.prototype, "disabled", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", String)
    ], EjRadioButton.prototype, "label", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", String)
    ], EjRadioButton.prototype, "position", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", String)
    ], EjRadioButton.prototype, "name", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", String)
    ], EjRadioButton.prototype, "value", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjRadioButton.prototype, "enableHtmlSanitizer", void 0);
    EjRadioButton = __decorate([
        autoinject,
        customElement("ej-radio-button"),
        inlineView('<template><input type="radio" name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"></template>'),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], EjRadioButton);
    return EjRadioButton;
}(EjComponentModel));
export { EjRadioButton };

//# sourceMappingURL=ej-radio-button.js.map
