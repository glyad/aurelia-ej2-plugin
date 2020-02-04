"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var EjComponentModel = (function () {
    function EjComponentModel() {
    }
    EjComponentModel.prototype.enablePersistenceChanged = function (newValue) {
        if (this._wrapped) {
            this._wrapped.enablePersistence = newValue;
        }
    };
    EjComponentModel.prototype.enableRtlChanged = function (newValue) {
        if (this._wrapped) {
            this._wrapped.enableRtl = newValue;
        }
    };
    EjComponentModel.prototype.localeChanged = function (newValue) {
        if (this._wrapped) {
            this._wrapped.locale = newValue;
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjComponentModel.prototype, "enablePersistence", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Boolean)
    ], EjComponentModel.prototype, "enableRtl", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], EjComponentModel.prototype, "locale", void 0);
    return EjComponentModel;
}());
exports.EjComponentModel = EjComponentModel;

//# sourceMappingURL=ej-component-model.js.map
