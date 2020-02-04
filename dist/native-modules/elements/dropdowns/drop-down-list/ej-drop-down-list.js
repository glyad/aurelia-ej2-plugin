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
import { EjDropDownListModel } from './ej-drop-down-list-model';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { customElement, autoinject, processContent } from 'aurelia-framework';
var EjDropDownList = (function (_super) {
    __extends(EjDropDownList, _super);
    function EjDropDownList(element) {
        var _this = _super.call(this) || this;
        _this.element = element;
        return _this;
    }
    EjDropDownList.prototype.attached = function () {
        var innerElement = this.element.querySelector("select");
        this._wrapped = new DropDownList({
            index: this.index,
            placeholder: this.placeholder,
            popupHeight: this.popupHeight,
        }, this.element.querySelector("select"));
    };
    EjDropDownList = __decorate([
        autoinject,
        customElement('ej-drop-down-list'),
        processContent(function (compiler, resources, element, instruction) {
            var componentElement = element;
            var instr = instruction;
            var optionsTemplate = document.createElement("template");
            optionsTemplate.setAttribute("replace-part", "options");
            var options = Array.from(element.querySelectorAll("option"));
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                var optionElement = document.createElement("option");
                optionElement.setAttribute("value", option.value);
                optionElement.text = option.text;
                optionsTemplate.content.appendChild(optionElement);
                element.removeChild(option);
            }
            element.append(optionsTemplate);
            return true;
        }),
        __metadata("design:paramtypes", [Element])
    ], EjDropDownList);
    return EjDropDownList;
}(EjDropDownListModel));
export { EjDropDownList };

//# sourceMappingURL=ej-drop-down-list.js.map
