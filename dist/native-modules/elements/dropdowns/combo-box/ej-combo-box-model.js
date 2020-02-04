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
import { bindable, bindingMode } from 'aurelia-framework';
import { EjDropDownListModel } from './../drop-down-list/ej-drop-down-list-model';
var EjComboBoxModel = (function (_super) {
    __extends(EjComboBoxModel, _super);
    function EjComboBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjComboBoxModel.prototype, "autofill", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjComboBoxModel.prototype, "allowCustom", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], EjComboBoxModel.prototype, "customValueSpecifier", void 0);
    return EjComboBoxModel;
}(EjDropDownListModel));
export { EjComboBoxModel };

//# sourceMappingURL=ej-combo-box-model.js.map
