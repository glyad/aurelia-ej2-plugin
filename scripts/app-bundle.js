var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/base/ej-component-model',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
;
define('__dot_dot__/src/elements/base/index',["require", "exports", "./ej-component-model"], function (require, exports, ej_component_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_component_model_1);
});
;
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
define('__dot_dot__/src/elements/dropdowns/auto-complete/ej-auto-complete',["require", "exports", "./ej-auto-complete-model", "aurelia-framework", "@syncfusion/ej2-dropdowns"], function (require, exports, ej_auto_complete_model_1, aurelia_framework_1, ej2_dropdowns_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
;
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
define('__dot_dot__/src/elements/dropdowns/auto-complete/ej-auto-complete-model',["require", "exports", "aurelia-framework", "./../combo-box/ej-combo-box-model"], function (require, exports, aurelia_framework_1, ej_combo_box_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjAutoCompleteModel = (function (_super) {
        __extends(EjAutoCompleteModel, _super);
        function EjAutoCompleteModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjAutoCompleteModel.prototype, "showPopupButton", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjAutoCompleteModel.prototype, "highlight", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], EjAutoCompleteModel.prototype, "suggestionCount", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], EjAutoCompleteModel.prototype, "minLength", void 0);
        return EjAutoCompleteModel;
    }(ej_combo_box_model_1.EjComboBoxModel));
    exports.EjAutoCompleteModel = EjAutoCompleteModel;
});
;
define('__dot_dot__/src/elements/dropdowns/auto-complete/index',["require", "exports", "./ej-auto-complete"], function (require, exports, ej_auto_complete_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_auto_complete_1);
});
;
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
define('__dot_dot__/src/elements/dropdowns/combo-box/ej-combo-box-model',["require", "exports", "aurelia-framework", "./../drop-down-list/ej-drop-down-list-model"], function (require, exports, aurelia_framework_1, ej_drop_down_list_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjComboBoxModel = (function (_super) {
        __extends(EjComboBoxModel, _super);
        function EjComboBoxModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjComboBoxModel.prototype, "autofill", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjComboBoxModel.prototype, "allowCustom", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjComboBoxModel.prototype, "customValueSpecifier", void 0);
        return EjComboBoxModel;
    }(ej_drop_down_list_model_1.EjDropDownListModel));
    exports.EjComboBoxModel = EjComboBoxModel;
});
;
define('__dot_dot__/src/elements/dropdowns/combo-box/index',["require", "exports", "./ej-combo-box-model"], function (require, exports, ej_combo_box_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_combo_box_model_1);
});
;
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
define('__dot_dot__/src/elements/dropdowns/drop-down-base/ej-drop-down-base-model',["require", "exports", "aurelia-framework", "@syncfusion/ej2-data", "elements/base"], function (require, exports, aurelia_framework_1, ej2_data_1, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjDropDownBaseModel = (function (_super) {
        __extends(EjDropDownBaseModel, _super);
        function EjDropDownBaseModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "fields", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownBaseModel.prototype, "itemTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownBaseModel.prototype, "groupTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownBaseModel.prototype, "noRecordsTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownBaseModel.prototype, "actionFailureTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownBaseModel.prototype, "sortOrder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjDropDownBaseModel.prototype, "enabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "dataSource", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", ej2_data_1.Query)
        ], EjDropDownBaseModel.prototype, "query", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownBaseModel.prototype, "filterType", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjDropDownBaseModel.prototype, "ignoreCase", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], EjDropDownBaseModel.prototype, "zIndex", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjDropDownBaseModel.prototype, "ignoreAccent", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "actionBegin", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "actionComplete", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "actionFailure", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "select", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "dataBound", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownBaseModel.prototype, "destroyed", void 0);
        return EjDropDownBaseModel;
    }(base_1.EjComponentModel));
    exports.EjDropDownBaseModel = EjDropDownBaseModel;
});
;
define('__dot_dot__/src/elements/dropdowns/drop-down-base/index',["require", "exports", "./ej-drop-down-base-model"], function (require, exports, ej_drop_down_base_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_drop_down_base_model_1);
});
;
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
define('__dot_dot__/src/elements/dropdowns/drop-down-list/ej-drop-down-list',["require", "exports", "./ej-drop-down-list-model", "@syncfusion/ej2-dropdowns", "aurelia-framework"], function (require, exports, ej_drop_down_list_model_1, ej2_dropdowns_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjDropDownList = (function (_super) {
        __extends(EjDropDownList, _super);
        function EjDropDownList(element) {
            var _this = _super.call(this) || this;
            _this.element = element;
            return _this;
        }
        EjDropDownList.prototype.attached = function () {
            var innerElement = this.element.querySelector("select");
            this._wrapped = new ej2_dropdowns_1.DropDownList({
                index: this.index,
                placeholder: this.placeholder,
                popupHeight: this.popupHeight,
            }, this.element.querySelector("select"));
        };
        EjDropDownList = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement('ej-drop-down-list'),
            aurelia_framework_1.processContent(function (compiler, resources, element, instruction) {
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
    }(ej_drop_down_list_model_1.EjDropDownListModel));
    exports.EjDropDownList = EjDropDownList;
});
;
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
define('__dot_dot__/src/elements/dropdowns/drop-down-list/ej-drop-down-list-model',["require", "exports", "aurelia-framework", "../drop-down-base/ej-drop-down-base-model"], function (require, exports, aurelia_framework_1, ej_drop_down_base_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjDropDownListModel = (function (_super) {
        __extends(EjDropDownListModel, _super);
        function EjDropDownListModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "popupHeight", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "popupWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "filterBarPlaceholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "htmlAttributes", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "valueTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "headerTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "footerTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjDropDownListModel.prototype, "allowFiltering", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjDropDownListModel.prototype, "readonly", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], EjDropDownListModel.prototype, "index", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjDropDownListModel.prototype, "floatLabelType", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjDropDownListModel.prototype, "showClearButton", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "filtering", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "beforeOpen", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "open", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "close", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "blur", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjDropDownListModel.prototype, "focus", void 0);
        return EjDropDownListModel;
    }(ej_drop_down_base_model_1.EjDropDownBaseModel));
    exports.EjDropDownListModel = EjDropDownListModel;
});
;
define('text!__dot_dot__/src/elements/dropdowns/drop-down-list/ej-drop-down-list.html',[],function(){return "<template>\n  <select>\n    <template replaceable part=\"options\"></template>\n  </select>\n</template>\n";});;
define('__dot_dot__/src/elements/dropdowns/drop-down-list/index',["require", "exports", "./ej-drop-down-list-model", "./ej-drop-down-list"], function (require, exports, ej_drop_down_list_model_1, ej_drop_down_list_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_drop_down_list_model_1);
    __export(ej_drop_down_list_1);
});
;
define('__dot_dot__/src/elements/dropdowns/index',["require", "exports", "./drop-down-base/index", "./drop-down-list/index", "./combo-box/index", "./auto-complete/index", "./multi-select/index", "./list-box/index"], function (require, exports, index_1, index_2, index_3, index_4, index_5, index_6) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
    __export(index_2);
    __export(index_3);
    __export(index_4);
    __export(index_5);
    __export(index_6);
    function configure(config) {
        config.globalResources([]);
    }
    exports.configure = configure;
});
;
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
define('__dot_dot__/src/elements/dropdowns/list-box/ej-list-box-model',["require", "exports", "aurelia-framework", "./../drop-down-base/ej-drop-down-base-model"], function (require, exports, aurelia_framework_1, ej_drop_down_base_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjListBoxModel = (function (_super) {
        __extends(EjListBoxModel, _super);
        function EjListBoxModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjListBoxModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], EjListBoxModel.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjListBoxModel.prototype, "allowDragAndDrop", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], EjListBoxModel.prototype, "maximumSelectionLength", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjListBoxModel.prototype, "allowFiltering", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjListBoxModel.prototype, "scope", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "beforeItemRender", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "filtering", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "beforeDrop", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "dragStart", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "drag", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "drop", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "toolbarSettings", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjListBoxModel.prototype, "selectionSettings", void 0);
        return EjListBoxModel;
    }(ej_drop_down_base_model_1.EjDropDownBaseModel));
    exports.EjListBoxModel = EjListBoxModel;
});
;
define('__dot_dot__/src/elements/dropdowns/list-box/index',["require", "exports", "./ej-list-box-model"], function (require, exports, ej_list_box_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_list_box_model_1);
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/dropdowns/multi-select/ej-multi-select-model',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EJMultiSelectModel = (function () {
        function EJMultiSelectModel() {
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "enableGroupCheckBox", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "popupHeight", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "popupWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "filterBarPlaceholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "htmlAttributes", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "valueTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "headerTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "footerTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "allowFiltering", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "changeOnBlur", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "allowCustomValue", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "showClearButton", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Number)
        ], EJMultiSelectModel.prototype, "maximumSelectionLength", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "readonly", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], EJMultiSelectModel.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "hideSelectedItem", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "closePopupOnSelect", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "mode", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "delimiterChar", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "showDropDownIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "floatLabelType", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "showSelectAll", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "selectAllText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EJMultiSelectModel.prototype, "unSelectAllText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "enableSelectionOrder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EJMultiSelectModel.prototype, "openOnClick", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "removing", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "removed", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "selectedAll", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "beforeOpen", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "open", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "close", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "blur", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "focus", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "chipSelection", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "filtering", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "tagging", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EJMultiSelectModel.prototype, "customValueSelection", void 0);
        return EJMultiSelectModel;
    }());
    exports.EJMultiSelectModel = EJMultiSelectModel;
});
;
define('__dot_dot__/src/elements/dropdowns/multi-select/index',["require", "exports", "./ej-multi-select-model"], function (require, exports, ej_multi_select_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_multi_select_model_1);
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/ej-button',["require", "exports", "aurelia-framework", "@syncfusion/ej2-buttons", "@syncfusion/ej2-base"], function (require, exports, aurelia_framework_1, ej2_buttons_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            ej2_base_1.enableRipple(true);
            this._button = new ej2_buttons_1.Button();
            var e = this.element.querySelector("button");
            this._button.appendTo(e);
            this._button.isPrimary = (this.primary === true || this.primary === "true");
            this._button.content = this.value;
        };
        EjButton.prototype.detached = function () {
            this._button.destroy();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], EjButton.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], EjButton.prototype, "primary", void 0);
        EjButton = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
        ], EjButton);
        return EjButton;
    }());
    exports.EjButton = EjButton;
});
;
define('text!__dot_dot__/src/elements/ej-button.html',[],function(){return "<template>\n  <button></button>\n</template>\n";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/ej-checkbox',["require", "exports", "aurelia-framework", "@syncfusion/ej2-buttons"], function (require, exports, aurelia_framework_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this._checkbox = new ej2_buttons_1.CheckBox();
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
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], EjCheckbox.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], EjCheckbox.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], EjCheckbox.prototype, "disabled", null);
        EjCheckbox = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement("ej-checkbox"),
            __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
        ], EjCheckbox);
        return EjCheckbox;
    }());
    exports.EjCheckbox = EjCheckbox;
});
;
define('text!__dot_dot__/src/elements/ej-checkbox.html',[],function(){return "<template>\n  <input type=\"checkbox\" change.delegate=\"onChange($this)\"/>\n</template>\n";});;
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
define('__dot_dot__/src/elements/ej-radio-button',["require", "exports", "aurelia-framework", "./base/ej-component-model", "@syncfusion/ej2-buttons", "@syncfusion/ej2-base"], function (require, exports, aurelia_framework_1, ej_component_model_1, ej2_buttons_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var EjRadioButton = (function (_super) {
        __extends(EjRadioButton, _super);
        function EjRadioButton(element, taskQueue) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.taskQueue = taskQueue;
            return _this;
        }
        EjRadioButton.prototype.attached = function () {
            this._wrapped = new ej2_buttons_1.RadioButton({
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
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjRadioButton.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButton.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjRadioButton.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButton.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButton.prototype, "position", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButton.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButton.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjRadioButton.prototype, "enableHtmlSanitizer", void 0);
        EjRadioButton = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement("ej-radio-button"),
            aurelia_framework_1.inlineView('<template><input type="radio" name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"></template>'),
            __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
        ], EjRadioButton);
        return EjRadioButton;
    }(ej_component_model_1.EjComponentModel));
    exports.EjRadioButton = EjRadioButton;
});
;
define('__dot_dot__/src/elements/index',["require", "exports", "aurelia-pal", "./base/index", "./dropdowns/index", "./inputs/index"], function (require, exports, aurelia_pal_1, index_1, index_2, index_3) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
    __export(index_2);
    __export(index_3);
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./elements/ej-button'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/ej-checkbox'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/ej-radio-button'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/dropdowns/auto-complete/ej-auto-complete'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/dropdowns/drop-down-list/ej-drop-down-list')
        ]);
    }
    exports.configure = configure;
});
;
define('__dot_dot__/src/elements/inputs/index',["require", "exports", "./input/index"], function (require, exports, index_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
});
;
define('__dot_dot__/src/elements/inputs/input/index',["require", "exports", "./input-base"], function (require, exports, input_base_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(input_base_1);
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/inputs/input/input-base',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjInputBase = (function () {
        function EjInputBase() {
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjInputBase.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjInputBase.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjInputBase.prototype, "enabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjInputBase.prototype, "readonly", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjInputBase.prototype, "enableRtl", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjInputBase.prototype, "showClearButton", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjInputBase.prototype, "floatLabelType", void 0);
        return EjInputBase;
    }());
    exports.EjInputBase = EjInputBase;
});
;
define('__dot_dot__/src/index',["require", "exports", "./elements/index"], function (require, exports, index_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define('app',["require", "exports", "aurelia-pal", "aurelia-framework", "aurelia-router", "@syncfusion/ej2-navigations", "@syncfusion/ej2-base", "@syncfusion/ej2-navigations"], function (require, exports, aurelia_pal_1, aurelia_framework_1, aurelia_router_1, ej2_navigations_1, ej2_base_1, ej2_navigations_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    function hasChildren(node) {
        return (typeof node === 'object')
            && (typeof node.children !== 'undefined')
            && (node.children.length > 0);
    }
    function flatten(routes, output) {
        routes.forEach(function (route) {
            output.push(route);
            if (hasChildren(route)) {
                return flatten(route.children, output);
            }
        });
        return __spreadArrays(output);
    }
    var App = (function () {
        function App(router) {
            this.router = router;
            this.routes = [
                {
                    route: 'getting-started', name: 'getting-started', title: 'Getting Started', moduleId: aurelia_pal_1.PLATFORM.moduleName('./getting-started'), iconCss: 'icon-microchip icon', nav: true
                },
                {
                    route: 'components', name: 'components', title: 'Components', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components'), iconCss: 'icon-microchip icon', nav: false,
                    children: [
                        {
                            route: 'editors', name: 'components-editors', title: 'Editors', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components/editors'), iconCss: 'icon-microchip icon', nav: false,
                            children: [
                                { route: 'buttons', name: 'components-editors-buttons', title: 'Buttons', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components/editors/buttons/default'), iconCss: 'icon-microchip icon', nav: true }
                            ]
                        },
                        {
                            route: 'dropdowns', name: 'components-dropdowns', title: 'DropDowns', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components/dropdowns'), iconCss: 'icon-microchip icon', nav: false,
                            children: [
                                { route: 'auto-complete', name: 'components-dropdowns-auto-complete', title: 'AutoComplete', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components/dropdowns/auto-complete/default'), iconCss: 'icon-microchip icon', nav: true }
                            ]
                        }
                    ]
                }
            ];
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia Syncfusion Bridge';
            var tmp = [];
            config.map(__spreadArrays([{ route: '', redirect: 'getting-started' }], flatten(this.routes, [])));
        };
        App.prototype.attached = function () {
            var _this = this;
            var sidebarMenu = new ej2_navigations_1.Sidebar({
                width: '290px',
                target: '.main-content',
                mediaQuery: '(min-width: 600px)',
            });
            sidebarMenu.appendTo('#sidebar-treeview');
            document.getElementById('hamburger').onclick = function () {
                sidebarMenu.toggle();
            };
            var mainTreeView = new ej2_navigations_2.TreeView({
                fields: { dataSource: this.routes, id: 'route', text: 'title', child: 'children' },
                expandOn: 'Click',
                nodeSelected: function (eargs) {
                    if (_this.router.routes.find(function (route) { return route.route === eargs.nodeData.id; }).nav) {
                        _this.router.navigate(eargs.nodeData.id.toString());
                    }
                }
            });
            mainTreeView.appendTo('#main-treeview');
        };
        App = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_router_1.Router])
        ], App);
        return App;
    }());
    exports.App = App;
});
;
define('text!app.html',[],function(){return "<template>\n  \n  <require from=\"../dev-app/app.css\"></require>\n\n  <div id=\"wrapper\">\n    <!--header-section  declaration -->\n    <div class=\"main-header\" id=\"header-section\">\n      <ul class=\"header-list\">\n        <li class=\"float-left header-style icon-menu\" id=\"hamburger\"></li>\n        <li class=\"float-left header-style nav-pane\"><b>Navigation Pane</b></li>\n        <li class=\"header-style float-right support border-left\"><b>Support</b></li>\n      </ul>\n    </div>\n    <!-- end of header-section -->\n\n    <!-- sidebar element declaration -->\n    <aside id=\"sidebar-treeview\">\n      <div class=\"main-menu\">\n        <div class=\"table-content\">\n          <input type=\"text\" placeholder=\"Search...\" class=\"search-icon\">\n          <p class=\"main-menu-header\">TABLE OF CONTENTS</p>\n        </div>\n        <div>\n          <!-- <ul id=\"main-treeview\"></ul> -->\n          <div id=\"main-treeview\"></div>\n        </div>\n      </div>\n    </aside>\n    <!-- end of sidebar element -->\n\n\n    <!-- main-content declaration -->\n    <div class=\"main-content\" id=\"main-text\">\n      \n      <div class=\"sidebar-content\">\n        \n        <router-view></router-view>\n\n      </div>\n    </div>\n    <!-- end of main-content -->\n  </div>\n\n\n\n  \n  \n\n  \n</template>\n";});;
define('components/dropdowns/auto-complete/default',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Default = (function () {
        function Default() {
        }
        return Default;
    }());
    exports.Default = Default;
});
;
define('text!components/dropdowns/auto-complete/default.html',[],function(){return "<template>\n  \n</template>\n";});;
define('components/dropdowns/combobox/default',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Default = (function () {
        function Default() {
        }
        return Default;
    }());
    exports.Default = Default;
});
;
define('text!components/dropdowns/combobox/default.html',[],function(){return "<template>\n  \n</template>\n";});;
define('components/editors/buttons/default',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Default = (function () {
        function Default() {
        }
        return Default;
    }());
    exports.Default = Default;
});
;
define('text!components/editors/buttons/default.html',[],function(){return "<template> Buttons->Default\n  <iframe\n     src=\"https://codesandbox.io/embed/myfirstejsample-m0063?autoresize=1&codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fapp.html&theme=light&view=preview\"\n     style=\"width:95%; height:500px; border:0; border-radius: 4px; overflow:hidden;\"\n     title=\"MyFirstEjSample\"\n     allow=\"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb\"\n     sandbox=\"allow-modals allow-forms allow-popups allow-scripts allow-same-origin\"\n   ></iframe>\n\n   \n</template>\n";});;
define('text!dataSource.json',[],function(){return "{\n  \"sportsData\":[\n      \"Badminton\", \n      \"Basketball\", \n      \"Cricket\",\n      \"Football\", \n      \"Golf\", \n      \"Gymnastics\",\n      \"Hockey\", \n      \"Rugby\", \n      \"Snooker\", \n      \"Tennis\" \n  ],\n  \"booksData\":[\n      { \"BookName\": \"Support Vector Machines Succinctly\", \"BookID\": \"BOOK1\" }, { \"BookName\": \"Scala Succinctly\", \"BookID\": \"BOOK2\" },\n      { \"BookName\": \"Application Security in .NET Succinctly\", \"BookID\": \"BOOK3\" },\n      { \"BookName\": \"ASP.NET WebHooks Succinctly\", \"BookID\": \"BOOK4\" },\n      { \"BookName\": \"Xamarin.Forms Succinctly\", \"BookID\": \"BOOK5\" }, { \"BookName\": \"Asynchronous Programming Succinctly\", \"BookID\": \"BOOK6\" },\n      { \"BookName\": \"Java Succinctly Part 2\", \"BookID\": \"BOOK7\" }, { \"BookName\": \"Java Succinctly Part 1\", \"BookID\": \"BOOK8\" },\n      { \"BookName\": \"PHP Succinctly\", \"BookID\": \"BOOK9\" }, { \"BookName\": \"Bing Maps V8 Succinctly\", \"BookID\": \"BOOK10\" },\n      { \"BookName\": \"WPF Debugging and Performance Succinctly\", \"BookID\": \"BOOK11\" },\n      { \"BookName\": \"Go Web Development Succinctly\", \"BookID\": \"BOOK12\" },\n      { \"BookName\": \"Go Succinctly\", \"BookID\": \"BOOK13\" }, { \"BookName\": \"More UWP Succinctly\", \"BookID\": \"BOOK14\" },\n      { \"BookName\": \"UWP Succinctly\", \"BookID\": \"BOOK15\" }, { \"BookName\": \"LINQPad Succinctly\", \"BookID\": \"BOOK16\" },\n      { \"BookName\": \"MongoDB 3 Succinctly\", \"BookID\": \"BOOK17\" }, { \"BookName\": \"R Programming Succinctly\", \"BookID\": \"BOOK18\" },\n      { \"BookName\": \"Azure Cosmos DB and DocumentDB Succinctly\", \"BookID\": \"BOOK19\" },\n      { \"BookName\": \"Unity Game Development Succinctly\", \"BookID\": \"BOOK20\" },\n      { \"BookName\": \"Aurelia Succinctly\", \"BookID\": \"BOOK21\" }, { \"BookName\": \"Microsoft Bot Framework Succinctly\", \"BookID\": \"BOOK22\" },\n      { \"BookName\": \"ASP.NET Core Succinctly\", \"BookID\": \"BOOK23\" }, { \"BookName\": \"Twilio with C# Succinctly\", \"BookID\": \"BOOK24\" },\n      { \"BookName\": \"Angular 2 Succinctly\", \"BookID\": \"BOOK25\" }, { \"BookName\": \"Visual Studio 2017 Succinctly\", \"BookID\": \"BOOK26\" },\n      { \"BookName\": \"Camtasia Succinctly\", \"BookID\": \"BOOK27\" }, { \"BookName\": \"SQL Queries Succinctly\", \"BookID\": \"BOOK28\" },\n      { \"BookName\": \"Keystone.js Succinctly\", \"BookID\": \"BOOK29\" }, { \"BookName\": \"Groovy Succinctly\", \"BookID\": \"BOOK30\" },\n      { \"BookName\": \"SQL Server for C# Developers Succinctly\", \"BookID\": \"BOOK31\" },\n      { \"BookName\": \"Ubuntu Server Succinctly\", \"BookID\": \"BOOK32\" },\n      { \"BookName\": \"Statistics Fundamentals Succinctly\", \"BookID\": \"BOOK33\" }, { \"BookName\": \".NET Core Succinctly\", \"BookID\": \"BOOK34\" },\n      { \"BookName\": \"SOLID Principles Succinctly\", \"BookID\": \"BOOK35\" }, { \"BookName\": \"Node.js Succinctly\", \"BookID\": \"BOOK36\" },\n      { \"BookName\": \"Customer Success for C# Developers Succinctly\", \"BookID\": \"BOOK37\" },\n      { \"BookName\": \"Data Capture and Extraction with C# Succinctly\", \"BookID\": \"BOOK38\" },\n      { \"BookName\": \"Hadoop Succinctly\", \"BookID\": \"BOOK39\" }, { \"BookName\": \"SciPy Programming Succinctly\", \"BookID\": \"BOOK40\" },\n      { \"BookName\": \"Hive Succinctly\", \"BookID\": \"BOOK41\" }, { \"BookName\": \"React.js Succinctly\", \"BookID\": \"BOOK42\" },\n      { \"BookName\": \"ECMAScript 6 Succinctly\", \"BookID\": \"BOOK43\" }, { \"BookName\": \"GitHub Succinctly\", \"BookID\": \"BOOK44\" },\n      { \"BookName\": \"Gulp Succinctly\", \"BookID\": \"BOOK45\" }, { \"BookName\": \"Visual Studio Code Succinctly\", \"BookID\": \"BOOK46\" },\n      { \"BookName\": \"Object-Oriented Programming in C# Succinctly\", \"BookID\": \"BOOK47\" },\n      { \"BookName\": \"C# Code Contracts Succinctly\", \"BookID\": \"BOOK48\" },\n      { \"BookName\": \"Leaflet.js Succinctly\", \"BookID\": \"BOOK49\" }, { \"BookName\": \"Delphi Succinctly\", \"BookID\": \"BOOK50\" },\n      { \"BookName\": \"SQL on Azure Succinctly\", \"BookID\": \"BOOK51\" }, { \"BookName\": \"Web Servers Succinctly\", \"BookID\": \"BOOK52\" },\n      { \"BookName\": \"ASP.NET Multitenant Applications Succinctly\", \"BookID\": \"BOOK53\" },\n      { \"BookName\": \"ASP.NET MVC Succinctly\", \"BookID\": \"BOOK54\" },\n      { \"BookName\": \"Windows Azure Websites Succinctly\", \"BookID\": \"BOOK55\" },\n      { \"BookName\": \"Localization for .NET Succinctly\", \"BookID\": \"BOOK56\" },\n      { \"BookName\": \"ASP.NET Web API Succinctly\", \"BookID\": \"BOOK57\" },\n      { \"BookName\": \"ASP.NET MVC 4 Mobile Websites Succinctly\", \"BookID\": \"BOOK58\" },\n      { \"BookName\": \"jQuery Succinctly\", \"BookID\": \"BOOK59\" }, { \"BookName\": \"JavaScript Succinctly\", \"BookID\": \"BOOK60\" }\n  ],\n  \"countries\":[\n      { \"Name\": \"Australia\", \"Code\": \"AU\" },\n      { \"Name\": \"Bermuda\", \"Code\": \"BM\" },\n      { \"Name\": \"Canada\", \"Code\": \"CA\" },\n      { \"Name\": \"Cameroon\", \"Code\": \"CM\" },\n      { \"Name\": \"Denmark\", \"Code\": \"DK\" },\n      { \"Name\": \"France\", \"Code\": \"FR\" },\n      { \"Name\": \"Finland\", \"Code\": \"FI\" },\n      { \"Name\": \"Germany\", \"Code\": \"DE\" },\n      { \"Name\": \"Greenland\", \"Code\": \"GL\" },\n      { \"Name\": \"Hong Kong\", \"Code\": \"HK\" },\n      { \"Name\": \"India\", \"Code\": \"IN\" },\n      { \"Name\": \"Italy\", \"Code\": \"IT\" },\n      { \"Name\": \"Japan\", \"Code\": \"JP\" },\n      { \"Name\": \"Mexico\", \"Code\": \"MX\" },\n      { \"Name\": \"Norway\", \"Code\": \"NO\" },\n      { \"Name\": \"Poland\", \"Code\": \"PL\" },\n      { \"Name\": \"Switzerland\", \"Code\": \"CH\" },\n      { \"Name\": \"United Kingdom\", \"Code\": \"GB\" },\n      { \"Name\": \"United States\", \"Code\": \"US\" }\n  ],\n  \"data\":[\n      \"Águilas\",\n      \"Ajedrez\",\n      \"Ala Delta\",\n      \"Álbumes de Música\",\n      \"Alusivos\",\n      \"Análisis de Escritura a Mano\",\n      \"Dyarbakır\",\n      \"Derepazarı \",\n      \"Gülümsemek \",\n      \"Teşekkürler\",\n      \"Güle güle.\",\n      \"Gülhatmi\",\n      \"Gülünç\"\n  ],\n  \"vegetableData\":[\n      { \"Vegetable\": \"Cabbage\", \"Category\": \"Leafy and Salad\", \"Id\": \"item1\" },\n      { \"Vegetable\": \"Chickpea\", \"Category\": \"Beans\", \"Id\": \"item2\" },\n      { \"Vegetable\": \"Garlic\", \"Category\": \"Bulb and Stem\", \"Id\": \"item3\" },\n      { \"Vegetable\": \"Green bean\", \"Category\": \"Beans\", \"Id\": \"item4\" },\n      { \"Vegetable\": \"Horse gram\", \"Category\": \"Beans\", \"Id\": \"item5\" },\n      { \"Vegetable\": \"Nopal\", \"Category\": \"Bulb and Stem\", \"Id\": \"item6\" },\n      { \"Vegetable\": \"Onion\", \"Category\": \"Bulb and Stem\", \"Id\": \"item7\" },\n      { \"Vegetable\": \"Pumpkins\", \"Category\": \"Leafy and Salad\", \"Id\": \"item8\" },\n      { \"Vegetable\": \"Spinach\", \"Category\": \"Leafy and Salad\", \"Id\": \"item9\" },\n      { \"Vegetable\": \"Wheat grass\", \"Category\": \"Leafy and Salad\", \"Id\": \"item10\" },\n      { \"Vegetable\": \"Yarrow\", \"Category\": \"Leafy and Salad\", \"Id\": \"item11\" }\n  ],\n  \"socialMedia\":[\n      { \"Class\": \"facebook\", \"SocialMedia\": \"Facebook\", \"Id\": \"media1\" },\n      { \"Class\": \"google-plus\", \"SocialMedia\": \"Google Plus\", \"Id\": \"media2\" },\n      { \"Class\": \"instagram\", \"SocialMedia\": \"Instagram\", \"Id\": \"media3\" },\n      { \"Class\": \"linkedin\", \"SocialMedia\": \"LinkedIn\", \"Id\": \"media4\" },\n      { \"Class\": \"skype\", \"SocialMedia\": \"Skype\", \"Id\": \"media5\" },\n      { \"Class\": \"tumblr\", \"SocialMedia\": \"Tumblr\", \"Id\": \"media6\" },\n      { \"Class\": \"twitter\", \"SocialMedia\": \"Twitter\", \"Id\": \"media7\" },\n      { \"Class\": \"vimeo\", \"SocialMedia\": \"Vimeo\", \"Id\": \"media8\" },\n      { \"Class\": \"whatsapp\", \"SocialMedia\": \"WhatsApp\", \"Id\": \"media9\" },\n      { \"Class\": \"youtube\", \"SocialMedia\": \"YouTube\", \"Id\": \"media10\" }\n  ],\n  \"empList\":[\n      { \"Name\": \"Andrew Fuller\", \"Eimg\": \"7\", \"Designation\": \"Team Lead\", \"Country\": \"England\" },\n      { \"Name\": \"Anne Dodsworth\", \"Eimg\": \"1\", \"Designation\": \"Developer\", \"Country\": \"USA\" },\n      { \"Name\": \"Janet Leverling\", \"Eimg\": \"3\", \"Designation\": \"HR\", \"Country\": \"USA\" },\n      { \"Name\": \"Laura Callahan\", \"Eimg\": \"2\", \"Designation\": \"Product Manager\", \"Country\": \"USA\" },\n      { \"Name\": \"Margaret Peacock\", \"Eimg\": \"6\", \"Designation\": \"Developer\", \"Country\": \"USA\" },\n      { \"Name\": \"Michael Suyama\", \"Eimg\": \"9\", \"Designation\": \"Team Lead\", \"Country\": \"USA\" },\n      { \"Name\": \"Nancy Davolio\", \"Eimg\": \"4\", \"Designation\": \"Product Manager\", \"Country\": \"USA\" },\n      { \"Name\": \"Robert King\", \"Eimg\": \"8\", \"Designation\": \"Developer \", \"Country\": \"England\" },\n      { \"Name\": \"Steven Buchanan\", \"Eimg\": \"10\", \"Designation\": \"CEO\", \"Country\": \"England\" }\n  ]\n}\n";});
define('dataSource.json',['text!dataSource.json'],function(m){return JSON.parse(m);});
define('json!dataSource.json',['dataSource.json'],function(m){return m;});
;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('getting-started',["require", "exports", "aurelia-framework", "./dataSource.json"], function (require, exports, aurelia_framework_1, data) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GettingStarted = (function () {
        function GettingStarted() {
            this.message = 'from Aurelia!';
            this.products = ['Motherboard', 'CPU', 'Memory'];
            this.selectedProduct = null;
            this.isPrimary = false;
            this.isDisabled = false;
            this.isRTL = false;
            this.acData = data.empList;
            this.valueFromAutoComplete = { Name: "Laura Callahan", Eimg: 2, Designation: "Product Manager", Country: "USA" };
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "isPrimary", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "isDisabled", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "isRTL", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "radioValue", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "acData", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "textFromAutoComplete", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GettingStarted.prototype, "valueFromAutoComplete", void 0);
        return GettingStarted;
    }());
    exports.GettingStarted = GettingStarted;
});
;
define('text!getting-started.html',[],function(){return "<template>\n  <require from=\"./json-stringify-value-converter\"></require>\n  \n  <h2 class=\"sidebar-heading\"> Responsive Sidebar With Treeview</h2>\n    <p class=\"paragraph-content\">This is a graphical aid for visualising and categorising the site, in the\n        style of an expandable and collapsable treeview component. It auto-expands to display the node(s),\n        if any, corresponding to the currently viewed title, highlighting that node(s) and its ancestors.\n        Load-on-demand when expanding nodes is available where supported (most graphical browsers), falling\n        back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered so\n        that unnecessary re-downloads of content are avoided where possible. The complete\n        expanded/collapsed state of the treeview persists across page views in most situations.</p>\n    <div class=\"line\"></div>          \n\n\n    <h1>Hello, this is the dev app for plugin au-ej2-plugin</h1>\n    <p>This dev app is bundled to scripts/ folder (ignored in .gitignore). If you commit the bundle files to github, this app can serve as a <a href=\"https://pages.github.com\" target=\"_blank\">github page</a>!</p>\n  \n    <p>Please read the <a href=\"README.md\">README</a> file in your project for more information.</p>\n  \n    <hr>\n  \n    <div> \n  \n      <div> \n        <ej-drop-down-list index=\"1\">\n          <option value=\"0\">Huy</option>\n          <option value=\"1\">Fuck</option>\n          <option value=\"2\">Pizda</option>\n        </ej-drop-down-list>\n      </div>\n    </div>\n    \n    <div style=\"width: 300px;\">\n      <hr>\n        <h2>Custom element \"ej-autocomplete\"</h2>\n        <div>\n          <ej-autocomplete  data-source.bind=\"acData\" \n                            text.bind=\"textFromAutoComplete\" \n                            value.bind=\"valueFromAutoComplete\"\n                            placeholder=\"e.g., Anne Dodsworth\"\n                            fields='{ \"value\": \"Name\" }'>\n            <ej-header-template>\n              <div class=\"header\"> <span>Photo</span> <span class=\"info\">Employee Info</span></div>\n            </ej-header-template>\n            <ej-item-template>\n              <div><img class=\"empImage\" src=\"//ej2.syncfusion.com/demos/src/auto-complete/Employees/${Eimg}.png\" alt=\"employee\"/>\n                <div class=\"ename\"> ${Name} </div><div class=\"job\"> ${Designation} </div> <div class=\"job\"> — <span>${Designation}</span></div></div>\n            </ej-item-template>\n          </ej-autocomplete>\n        </div>\n        <div>\n          <p>Text: ${textFromAutoComplete}</p>\n          <p>Value ${valueFromAutoComplete | jsonStringify}</p>\n        </div>\n    </div>\n    <hr>\n    \n    \n    <h2>Custom element \"ej-button\"</h2>\n    <ej-button primary=\"true\" value.bind=\"message\"></ej-button>\n    <ej-button primary.two-way=\"isPrimary\" value=\"message\"></ej-button>\n    \n    <h2>Custom element \"ej-checkbox\"</h2>\n    <ej-checkbox checked.two-way=\"isPrimary\" label=\"Value is ${isPrimary}\" disabled.two-way=\"isDisabled\"></ej-checkbox>\n    <ej-checkbox checked.two-way=\"isDisabled\" label=\"Disable checkbox\"></ej-checkbox>\n    <h2>Custom element \"ej-radio-button\"</h2>\n    <div><ej-radio-button name=\"group1\" position=\"After\" label=\"Vasya\" checked=\"true\"></ej-radio-button></div>\n    <div><ej-radio-button name=\"group1\" position=\"Before\" css-class=\"e-info\" label=\"Petya\" disabled.bind=\"isDisabled\"></ej-radio-button></div>\n    \n    <div>\n      <form>\n        <h4>Products</h4>\n        <div repeat.for=\"product of products\">\n          <ej-radio-button type=\"radio\" enable-rtl.to-view=\"isRTL\" name=\"group4\" label=\"${product}\" disabled.bind=\"isDisabled\"\n                  value.bind=\"product\" checked.bind=\"selectedProduct\"></ej-radio-button>\n          \n        </div>\n        <br>\n        Selected product: ${selectedProduct}\n        <br>\n        <ej-checkbox checked.two-way=\"isRTL\" label=\"Enable RTL\"></ej-checkbox>\n      </form>\n    </div>\n</template>\n";});;
define('json-stringify-value-converter',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JsonStringifyValueConverter = (function () {
        function JsonStringifyValueConverter() {
        }
        JsonStringifyValueConverter.prototype.toView = function (value) {
            return JSON.stringify(value);
        };
        JsonStringifyValueConverter.prototype.fromView = function (value) {
            return JSON.parse(value);
        };
        return JsonStringifyValueConverter;
    }());
    exports.JsonStringifyValueConverter = JsonStringifyValueConverter;
});
;
define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=app-bundle.js.map