"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ej_auto_complete_model_1 = require("./ej-auto-complete-model");
var aurelia_framework_1 = require("aurelia-framework");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var EjAutoComplete = (function (_super) {
    __extends(EjAutoComplete, _super);
    function EjAutoComplete(element, taskQueue, ti) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.taskQueue = taskQueue;
        _this.ti = ti;
        return _this;
    }
    EjAutoComplete.prototype.attached = function () {
        var _this = this;
        this._wrapped = new ej2_dropdowns_1.AutoComplete({
            actionBegin: this.actionBegin,
            actionComplete: this.actionComplete,
            actionFailure: this.actionFailure,
            actionFailureTemplate: this.actionFailureTemplate,
            allowCustom: this.allowCustom,
            allowFiltering: this.allowFiltering,
            autofill: this.autofill,
            beforeOpen: this.beforeOpen,
            blur: this.blur,
            change: function (e) {
                var _a;
                if (_this.fields.value && e.itemData && e.itemData.toString() === '[object Object]') {
                    _this.text = e.itemData[_this.fields.value];
                }
                else {
                    _this.text = (_a = e.value) === null || _a === void 0 ? void 0 : _a.toString();
                }
                _this.value = e.itemData;
            },
            close: this.close,
            cssClass: this.cssClass,
            customValueSpecifier: this.customValueSpecifier,
            dataBound: this.dataBound,
            dataSource: this.dataSource,
            destroyed: this.destroyed,
            fields: JSON.parse(this.fields.toString()),
            filterBarPlaceholder: this.filterBarPlaceholder,
            filterType: this.filterType,
            filtering: this.filtering,
            floatLabelType: this.floatLabelType,
            focus: this.focus,
            footerTemplate: this.footerTemplate,
            groupTemplate: this.groupTemplate,
            headerTemplate: (this.headerTemplate = this.element.attributes.getNamedItem('header-template').value),
            highlight: this.highlight,
            htmlAttributes: this.htmlAttributes,
            ignoreAccent: this.ignoreAccent,
            ignoreCase: this.ignoreCase,
            index: this.index,
            itemTemplate: (this.itemTemplate = this.element.attributes.getNamedItem('item-template').value),
            locale: this.locale,
            minLength: this.minLength,
            noRecordsTemplate: this.noRecordsTemplate,
            open: this.open,
            placeholder: this.placeholder,
            popupHeight: this.popupHeight,
            popupWidth: this.popupWidth,
            readonly: this.readonly,
            select: this.select,
            showClearButton: this.showClearButton,
            showPopupButton: this.showPopupButton,
            sortOrder: this.sortOrder,
            suggestionCount: this.suggestionCount,
            text: this.text,
            value: this.value,
            valueTemplate: this.valueTemplate,
            width: this.width,
            zIndex: this.zIndex
        }, this.element.querySelector("input"));
        if (this.value && this.value.toString() === '[object Object]') {
            this.text = this.value[JSON.parse(this.fields).value];
        }
        else {
            this.text = this.value.toString();
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], EjAutoComplete.prototype, "value", void 0);
    EjAutoComplete = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customElement('ej-autocomplete'),
        aurelia_framework_1.inlineView('<template><input type="text" value.to-view="text" tabindex="1"></template>'),
        aurelia_framework_1.processContent(function (compiler, resources, element, instruction) {
            for (var i = 0; i < element.children.length; i++) {
                var tagName = element.children[i].tagName.trim().toUpperCase();
                if (tagName === 'EJ-ITEM-TEMPLATE') {
                    element.setAttribute("item-template", element.children[i].innerHTML);
                }
                if (tagName === 'EJ-HEADER-TEMPLATE') {
                    element.setAttribute("header-template", element.children[i].innerHTML);
                }
            }
            return true;
        }),
        __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue, aurelia_framework_1.TargetInstruction])
    ], EjAutoComplete);
    return EjAutoComplete;
}(ej_auto_complete_model_1.EjAutoCompleteModel));
exports.EjAutoComplete = EjAutoComplete;

//# sourceMappingURL=ej-auto-complete.js.map
