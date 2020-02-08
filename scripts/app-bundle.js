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
define('__dot_dot__/src/elements/buttons/button/ej-button',["require", "exports", "./ej-button-model", "aurelia-framework", "@syncfusion/ej2-buttons", "@syncfusion/ej2-base"], function (require, exports, ej_button_model_1, aurelia_framework_1, ej2_buttons_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjButton = (function (_super) {
        __extends(EjButton, _super);
        function EjButton(element) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.primary = false;
            _this.toggle = false;
            _this.enabled = true;
            return _this;
        }
        EjButton.prototype.primaryChanged = function (value) {
            if (this._wrapped) {
                this._wrapped.isPrimary = this.primary === true || this.primary === 'true';
            }
        };
        EjButton.prototype.attached = function () {
            ej2_base_1.enableRipple(true);
            this._wrapped = new ej2_buttons_1.Button({
                content: this.content,
                cssClass: this.cssClass,
                disabled: !(this.enabled === true || this.enabled === 'true'),
                enableHtmlSanitizer: this.enableHtmlSanitizer,
                enablePersistence: this.enablePersistence,
                enableRtl: this.enableRtl,
                iconCss: this.iconCss,
                iconPosition: this.iconPosition,
                isPrimary: this.primary === true || this.primary === 'true',
                isToggle: this.isToggle === true || this.toggle === 'true',
                locale: this.locale
            }, this.element.querySelector('button'));
        };
        EjButton.prototype.detached = function () {
            this._wrapped.destroy();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], EjButton.prototype, "primary", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], EjButton.prototype, "toggle", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], EjButton.prototype, "enabled", void 0);
        EjButton = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.inlineView('<template><button></button></template>'),
            __metadata("design:paramtypes", [Element])
        ], EjButton);
        return EjButton;
    }(ej_button_model_1.EjButtonModel));
    exports.EjButton = EjButton;
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
define('__dot_dot__/src/elements/buttons/button/ej-button-model',["require", "exports", "aurelia-framework", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej_component_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjButtonModel = (function (_super) {
        __extends(EjButtonModel, _super);
        function EjButtonModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjButtonModel.prototype, "enablePersistence", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjButtonModel.prototype, "enableRtl", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjButtonModel.prototype, "iconPosition", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjButtonModel.prototype, "iconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjButtonModel.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjButtonModel.prototype, "isPrimary", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjButtonModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjButtonModel.prototype, "content", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjButtonModel.prototype, "isToggle", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjButtonModel.prototype, "enableHtmlSanitizer", void 0);
        return EjButtonModel;
    }(ej_component_model_1.EjComponentModel));
    exports.EjButtonModel = EjButtonModel;
});
;
define('__dot_dot__/src/elements/buttons/button/index',["require", "exports", "./ej-button-model", "./ej-button"], function (require, exports, ej_button_model_1, ej_button_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_button_model_1);
    __export(ej_button_1);
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
define('__dot_dot__/src/elements/buttons/check-box/ej-check-box-model',["require", "exports", "aurelia-framework", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej_component_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjCheckBoxModel = (function (_super) {
        __extends(EjCheckBoxModel, _super);
        function EjCheckBoxModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.checked = false;
            return _this;
        }
        EjCheckBoxModel.prototype.checkedChanged = function (value) {
            if (this._wrapped) {
                this._wrapped.checked = value === true || value === 'true';
            }
        };
        Object.defineProperty(EjCheckBoxModel.prototype, "disabled", {
            get: function () {
                return this._wrapped.disabled;
            },
            set: function (value) {
                this._wrapped.disabled = value === true || value === 'true';
            },
            enumerable: true,
            configurable: true
        });
        EjCheckBoxModel.prototype.disabledChanged = function (newValue, oldValue) {
            if (this._wrapped) {
                this._wrapped.disabled = newValue;
            }
        };
        EjCheckBoxModel.prototype.labelChanged = function (newValue) {
            if (this._wrapped) {
                this._wrapped.label = newValue;
            }
        };
        EjCheckBoxModel.prototype.valueChanged = function (newValue) {
            if (this._wrapped) {
                this._wrapped.value = newValue;
            }
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjCheckBoxModel.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjCheckBoxModel.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjCheckBoxModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], EjCheckBoxModel.prototype, "disabled", null);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjCheckBoxModel.prototype, "indeterminate", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjCheckBoxModel.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjCheckBoxModel.prototype, "labelPosition", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjCheckBoxModel.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjCheckBoxModel.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjCheckBoxModel.prototype, "enableHtmlSanitizer", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjCheckBoxModel.prototype, "htmlAttributes", void 0);
        return EjCheckBoxModel;
    }(ej_component_model_1.EjComponentModel));
    exports.EjCheckBoxModel = EjCheckBoxModel;
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
define('__dot_dot__/src/elements/buttons/check-box/ej-checkbox',["require", "exports", "./ej-check-box-model", "aurelia-framework", "@syncfusion/ej2-buttons"], function (require, exports, ej_check_box_model_1, aurelia_framework_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjCheckbox = (function (_super) {
        __extends(EjCheckbox, _super);
        function EjCheckbox(element) {
            var _this = _super.call(this) || this;
            _this.element = element;
            return _this;
        }
        EjCheckbox.prototype.attached = function () {
            this._wrapped = new ej2_buttons_1.CheckBox({
                change: this.change,
                checked: this.checked,
                cssClass: this.cssClass,
                disabled: this.disabled,
                enableHtmlSanitizer: this.enableHtmlSanitizer,
                enablePersistence: this.enablePersistence,
                enableRtl: this.enableRtl,
                htmlAttributes: this.htmlAttributes,
                indeterminate: this.indeterminate,
                label: this.label,
                labelPosition: this.labelPosition,
                locale: this.locale,
                name: this.name,
                value: this.value
            }, this.element.querySelector('input'));
        };
        EjCheckbox.prototype.detached = function () {
            this._wrapped.destroy();
        };
        EjCheckbox = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement('ej-checkbox'),
            aurelia_framework_1.inlineView('<template><input type="checkbox"  name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"/></template>'),
            __metadata("design:paramtypes", [Element])
        ], EjCheckbox);
        return EjCheckbox;
    }(ej_check_box_model_1.EjCheckBoxModel));
    exports.EjCheckbox = EjCheckbox;
});
;
define('__dot_dot__/src/elements/buttons/check-box/index',["require", "exports", "./ej-check-box-model", "./ej-checkbox"], function (require, exports, ej_check_box_model_1, ej_checkbox_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_check_box_model_1);
    __export(ej_checkbox_1);
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
define('__dot_dot__/src/elements/buttons/chips/ej-chip-list-model',["require", "exports", "aurelia-framework", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej_component_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChipListModel = (function (_super) {
        __extends(ChipListModel, _super);
        function ChipListModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Array)
        ], ChipListModel.prototype, "chips", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "avatarText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "avatarIconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "leadingIconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "trailingIconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ChipListModel.prototype, "enabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], ChipListModel.prototype, "selectedChips", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], ChipListModel.prototype, "selection", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], ChipListModel.prototype, "enableDelete", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], ChipListModel.prototype, "created", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], ChipListModel.prototype, "click", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], ChipListModel.prototype, "delete", void 0);
        return ChipListModel;
    }(ej_component_model_1.EjComponentModel));
    exports.ChipListModel = ChipListModel;
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
define('__dot_dot__/src/elements/buttons/chips/ej-chip-model',["require", "exports", "aurelia-framework", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej_component_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjChipModel = (function (_super) {
        __extends(EjChipModel, _super);
        function EjChipModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjChipModel.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjChipModel.prototype, "avatarText", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjChipModel.prototype, "avatarIconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjChipModel.prototype, "leadingIconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjChipModel.prototype, "trailingIconCss", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjChipModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjChipModel.prototype, "enabled", void 0);
        return EjChipModel;
    }(ej_component_model_1.EjComponentModel));
    exports.EjChipModel = EjChipModel;
});
;
define('__dot_dot__/src/elements/buttons/chips/index',["require", "exports", "./ej-chip-model", "./ej-chip-list-model"], function (require, exports, ej_chip_model_1, ej_chip_list_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_chip_model_1);
    __export(ej_chip_list_model_1);
});
;
define('__dot_dot__/src/elements/buttons/index',["require", "exports", "./button/index", "./check-box/index", "./chips/index", "./radio-button/index"], function (require, exports, index_1, index_2, index_3, index_4) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
    __export(index_2);
    __export(index_3);
    __export(index_4);
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
define('__dot_dot__/src/elements/buttons/radio-button/ej-radio-button',["require", "exports", "aurelia-framework", "../../base/ej-component-model", "@syncfusion/ej2-buttons", "@syncfusion/ej2-base"], function (require, exports, aurelia_framework_1, ej_component_model_1, ej2_buttons_1, ej2_base_1) {
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
                locale: this.locale,
            }, this.element.querySelector('input'));
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
                this._wrapped.labelPosition = newValue === 'Before' ? 'Before' : 'After';
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
            aurelia_framework_1.customElement('ej-radio-button'),
            aurelia_framework_1.inlineView('<template><input type="radio" name.bind="name" checked.bind="checked" value.bind="value" disabled.bind="disabled"></template>'),
            __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
        ], EjRadioButton);
        return EjRadioButton;
    }(ej_component_model_1.EjComponentModel));
    exports.EjRadioButton = EjRadioButton;
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
define('__dot_dot__/src/elements/buttons/radio-button/ej-radio-button-model',["require", "exports", "aurelia-framework", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej_component_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjRadioButtonModel = (function (_super) {
        __extends(EjRadioButtonModel, _super);
        function EjRadioButtonModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjRadioButtonModel.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjRadioButtonModel.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButtonModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjRadioButtonModel.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButtonModel.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButtonModel.prototype, "labelPosition", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButtonModel.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjRadioButtonModel.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjRadioButtonModel.prototype, "enableHtmlSanitizer", void 0);
        return EjRadioButtonModel;
    }(ej_component_model_1.EjComponentModel));
    exports.EjRadioButtonModel = EjRadioButtonModel;
});
;
define('__dot_dot__/src/elements/buttons/radio-button/index',["require", "exports", "./ej-radio-button-model", "./ej-radio-button"], function (require, exports, ej_radio_button_model_1, ej_radio_button_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_radio_button_model_1);
    __export(ej_radio_button_1);
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
define('__dot_dot__/src/elements/buttons/switch/ej-switch-model',["require", "exports", "aurelia-framework", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej_component_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjSwitchModel = (function (_super) {
        __extends(EjSwitchModel, _super);
        function EjSwitchModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], EjSwitchModel.prototype, "change", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjSwitchModel.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjSwitchModel.prototype, "cssClass", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
        ], EjSwitchModel.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjSwitchModel.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjSwitchModel.prototype, "onLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjSwitchModel.prototype, "offLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], EjSwitchModel.prototype, "value", void 0);
        return EjSwitchModel;
    }(ej_component_model_1.EjComponentModel));
    exports.EjSwitchModel = EjSwitchModel;
});
;
define('__dot_dot__/src/elements/buttons/switch/index',["require", "exports", "./ej-switch-model"], function (require, exports, ej_switch_model_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ej_switch_model_1);
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
define('__dot_dot__/src/elements/dropdowns/drop-down-base/ej-drop-down-base-model',["require", "exports", "aurelia-framework", "@syncfusion/ej2-data", "../../base/ej-component-model"], function (require, exports, aurelia_framework_1, ej2_data_1, ej_component_model_1) {
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
    }(ej_component_model_1.EjComponentModel));
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
define('__dot_dot__/src/elements/index',["require", "exports", "./base/index", "./buttons/index", "./dropdowns/index", "./inputs/index"], function (require, exports, index_1, index_2, index_3, index_4) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
    __export(index_2);
    __export(index_3);
    __export(index_4);
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
define('__dot_dot__/src/index',["require", "exports", "aurelia-pal", "./elements/index"], function (require, exports, aurelia_pal_1, index_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(index_1);
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./elements/buttons/button/ej-button'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/buttons/check-box/ej-checkbox'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/buttons/radio-button/ej-radio-button'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/dropdowns/auto-complete/ej-auto-complete'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/dropdowns/drop-down-list/ej-drop-down-list')
        ]);
    }
    exports.configure = configure;
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
                        { route: 'button-getting-started', name: 'button-getting-started', title: 'Buttons', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components/button/button-getting-started'), iconCss: 'icon-microchip icon', nav: true },
                        { route: 'button-types-and-styles', name: 'button-types-and-styles', title: 'Buttons Types and Styles', moduleId: aurelia_pal_1.PLATFORM.moduleName('./components/button/button-types-and-styles'), iconCss: 'icon-microchip icon', nav: true }
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
define('text!app.html',[],function(){return "<template>\n\n  <!-- <require from=\"../dev-app/app.css\"></require> -->\n\n  <div id=\"wrapper\">\n    <!--header-section  declaration -->\n    <div class=\"main-header\" id=\"header-section\">\n      <ul class=\"header-list\">\n        <li class=\"float-left header-style icon-menu\" id=\"hamburger\"></li>\n        <li class=\"float-left header-style nav-pane\">\n          <a class=\"doc-logo-link\"\n            href=\"https://help.syncfusion.com/?_ga=2.135614964.457206101.1580981579-1840676678.1579783186\">\n            <div class=\"doc-logo doc-icons icon-syncfusion\" style=\"margin: 0px; color: white;\"></div>\n          </a>\n        </li>\n        <li class=\"float-left header-style nav-pane\">\n          <a class=\"doc-logo-link\" href=\"https://aurelia.io\">\n            <img src=\"./aurelia.png\" width=\"150px\" class=\"float-left\" style=\"margin-top: -10px;\">\n          </a>\n        </li>\n        <li class=\"header-style float-right support border-left\"><b>Support</b></li>\n      </ul>\n    </div>\n    <!-- end of header-section -->\n\n    <!-- sidebar element declaration -->\n    <aside id=\"sidebar-treeview\">\n      <div class=\"main-menu\">\n        <div class=\"table-content\">\n          <input type=\"text\" placeholder=\"Search...\" class=\"search-icon\">\n          <p class=\"main-menu-header\">TABLE OF CONTENTS</p>\n        </div>\n        <div>\n          <!-- <ul id=\"main-treeview\"></ul> -->\n          <div id=\"main-treeview\"></div>\n        </div>\n      </div>\n    </aside>\n    <!-- end of sidebar element -->\n\n\n    <!-- main-content declaration -->\n    <div class=\"main-content\" id=\"main-text\">\n\n      <div class=\"sidebar-content\">\n\n        <router-view></router-view>\n\n      </div>\n    </div>\n    <!-- end of main-content -->\n  </div>\n\n\n\n\n\n\n\n</template>\n";});;
define('components/button/button-getting-started',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonGettingStarted = (function () {
        function ButtonGettingStarted() {
        }
        return ButtonGettingStarted;
    }());
    exports.ButtonGettingStarted = ButtonGettingStarted;
});
;
define('text!components/button/button-getting-started.html',[],function(){return "<template>\n\n  <div class=\"doc-body-content\">\n    <div id=\"md-content\" class=\"e-view\">\n      <div id=\"md-cnt\">\n        <h1 id=\"getting-started\"><a href=\"#gs\" aria-hidden=\"\" class=\"anchor\"><svg\n              aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Getting started with JavaScript Button control</h1>\n        <p>This section explains how to create a simple Button and to configure the Button\n          component.</p>\n        <h2 id=\"dependencies\"><a href=\"#dependencies\" aria-hidden=\"\" class=\"anchor\" router-ignore data-router-ignore><svg\n              aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Dependencies</h2>\n        <p>The list of dependencies required to use the Button component in your application is\n          given below:</p>\n        <div class=\"gatsby-highlight\" data-language=\"js\">\n          <pre\n            class=\"language-js\"><code class=\"language-js\"><span class=\"token operator\">|</span><span class=\"token operator\">--</span> @syncfusion<span class=\"token operator\">/</span>ej2<span class=\"token operator\">-</span>buttons\n        <span class=\"token operator\">|</span><span class=\"token operator\">--</span> @syncfusion<span class=\"token operator\">/</span>ej2<span class=\"token operator\">-</span>base</code></pre>\n        </div>\n        <h2 id=\"setup-your-development-environment\"><a href=\"#setup-your-development-environment\"\n            aria-hidden=\"\" class=\"anchor\" router-ignore data-router-ignore><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\"\n              viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Setup your development environment</h2>\n        <p>To get started with the Button component, you can clone the\n          <a href=\"https://github.com/syncfusion/ej2-quickstart\">Essential JS 2 quickstart</a>\n          project using the following commands:</p>\n        <div class=\"gatsby-highlight\" data-language=\"bash\">\n          <pre class=\"language-bash\"><code class=\"language-bash\">git clone https://github.com/syncfusion/ej2-quickstart.git quickstart\n    cd quickstart\n    npm install</code></pre>\n        </div>\n        <blockquote>\n          <p>The project is preconfigured with common settings (<code\n              class=\"language-text\">src/styles/styles.css</code>, <code\n              class=\"language-text\">system.config.js</code>)\n            to start all the Essential JS 2 components.</p>\n        </blockquote>\n        <ul>\n          <li>Refer to the <a href=\"/documentation/button/getting-started/#dependencies\">Button\n              component dependencies</a> in <code class=\"language-text\">system.config.js</code>\n            configuration file.</li>\n        </ul>\n        <p><code class=\"language-text\">[src/system.config.js]</code></p>\n        <div class=\"gatsby-highlight\" data-language=\"js\">\n          <pre\n            class=\"language-js\"><code class=\"language-js\">System<span class=\"token punctuation\">.</span><span class=\"token function\">config</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        paths<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token string\">'npm:'</span><span class=\"token operator\">:</span> <span class=\"token string\">'./node_modules/'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">'syncfusion:'</span><span class=\"token operator\">:</span> <span class=\"token string\">'npm:@syncfusion/'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        map<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            app<span class=\"token operator\">:</span> <span class=\"token string\">'app'</span><span class=\"token punctuation\">,</span>\n\n            <span class=\"token comment\">//Syncfusion packages mapping</span>\n            <span class=\"token string\">\"@syncfusion/ej2-base\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-base/dist/ej2-base.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-data\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-data/dist/ej2-data.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-inputs\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-buttons\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-splitbuttons\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-lists\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-lists/dist/ej2-lists.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-popups\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-popups/dist/ej2-popups.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string\">\"@syncfusion/ej2-dropdowns\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        packages<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token string\">'app'</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> main<span class=\"token operator\">:</span> <span class=\"token string\">'app'</span><span class=\"token punctuation\">,</span> defaultExtension<span class=\"token operator\">:</span> <span class=\"token string\">'js'</span> <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    System<span class=\"token punctuation\">.</span><span class=\"token function\">import</span><span class=\"token punctuation\">(</span><span class=\"token string\">'app.ts'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">catch</span><span class=\"token punctuation\">(</span>console<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">.</span><span class=\"token function\">bind</span><span class=\"token punctuation\">(</span>console<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loader'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">.</span>display <span class=\"token operator\">=</span> <span class=\"token string\">\"none\"</span><span class=\"token punctuation\">;</span>\n        document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'container'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">.</span>visibility <span class=\"token operator\">=</span> <span class=\"token string\">\"visible\"</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n        </div>\n        <h2 id=\"add-button-to-the-project\"><a router-ignore data-router-ignore href=\"#add-button-to-the-project\" aria-hidden=\"\"\n            class=\"anchor\"><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\"\n              width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Add Button to the project</h2>\n        <p>Add the HTML Button tag with id attribute as the <code\n            class=\"language-text\">element</code> to your <code\n            class=\"language-text\">index.html</code> file.</p>\n        <p><code class=\"language-text\">[src/index.html]</code></p>\n        <div class=\"gatsby-highlight\" data-language=\"html\">\n          <pre\n            class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>Essential JS 2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0, user-scalable=no<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Essential JS 2<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>shortcut icon<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>resources/favicon.ico<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n\n        <span class=\"token comment\">&lt;!--Style reference from app--&gt;</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/styles/styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n\n        <span class=\"token comment\">&lt;!--System js reference and configuration--&gt;</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>node_modules/systemjs/dist/system.src.js<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text/javascript<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>system.config.js<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text/javascript<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token comment\">&lt;!--Element which is going to render--&gt;</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>element<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n        </div>\n        <p>Then, import the Button component in your <code class=\"language-text\">app.ts</code> file,\n          and initialize it with the <code class=\"language-text\">#element</code>.</p>\n        <p><code class=\"language-text\">[src/app/app.ts]</code></p>\n        <div class=\"gatsby-highlight\" data-language=\"typescript\">\n          <pre\n            class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// Initialize Button component.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'Button'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// Render initialized Button.</span>\n    button<span class=\"token punctuation\">.</span><span class=\"token function\">appendTo</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#element'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n        </div>\n        <h2 id=\"adding-style-sheet-to-the-application\"><a\n            router-ignore data-router-ignore href=\"#adding-style-sheet-to-the-application\" aria-hidden=\"\" class=\"anchor\"><svg\n              aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Adding Style sheet to the Application</h2>\n        <p>To render Button component, need to import Button and its dependent components styles as\n          given below in <code class=\"language-text\">style.css</code>.</p>\n        <div class=\"gatsby-highlight\" data-language=\"css\">\n          <pre\n            class=\"language-css\"><code class=\"language-css\"><span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"../node_modules/@syncfusion/ej2-base/styles/material.css\"</span><span class=\"token punctuation\">;</span></span>\n    <span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"../node_modules/@syncfusion/ej2-buttons/styles/material.css\"</span><span class=\"token punctuation\">;</span></span></code></pre>\n        </div>\n        <h2 id=\"run-the-application\"><a router-ignore data-router-ignore href=\"#run-the-application\" aria-hidden=\"\"\n            class=\"anchor\"><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\"\n              width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Run the application</h2>\n        <p>Run the application in the browser using the following command:</p>\n        <div class=\"gatsby-highlight\" data-language=\"bash\">\n          <pre class=\"language-bash\"><code class=\"language-bash\">npm start</code></pre>\n        </div>\n        <p>The following example shows a basic Button component.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\"\n          role=\"tablist\" aria-disabled=\"false\" aria-activedescendant=\"e-item-ue96o_1\"\n          aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\"\n            aria-disabled=\"false\" aria-haspopup=\"false\" aria-orientation=\"horizontal\" tabindex=\"0\"\n            aria-label=\"tab-header\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 70px; right: 2px;\"></div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-ue96o_0\" role=\"tab\"\n                aria-controls=\"e-content-ue96o_0\" aria-selected=\"true\" aria-disabled=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                      role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\"\n                      title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-ue96o_1\" role=\"tab\"\n                aria-controls=\"e-content-ue96o_1\" aria-selected=\"true\" aria-disabled=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span\n                        data-sample=\"/documentation/samples/button/getting-started-cs1/index.html\"\n                        data-active=\"true\">Preview</span> -->\n                      </span><span class=\"e-icons e-close-icon\"\n                      title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item\" role=\"tabpanel\" aria-labelledby=\"e-item-ue96o_0\"\n              id=\"e-content-ue96o_0\" style=\"\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\"\n                role=\"tablist\" aria-disabled=\"false\" aria-activedescendant=\"e-item-gpz1u_0\"\n                aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\"\n                  aria-disabled=\"false\" aria-haspopup=\"false\" aria-orientation=\"horizontal\"\n                  tabindex=\"0\" aria-label=\"tab-header\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: auto; right: auto;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-gpz1u_0\" role=\"tab\"\n                      aria-controls=\"e-content-gpz1u_0\" aria-selected=\"true\" aria-disabled=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                            role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\"\n                            title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-gpz1u_1\" role=\"tab\"\n                      aria-controls=\"e-content-gpz1u_1\" aria-selected=\"false\" aria-disabled=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                            role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\"\n                            title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-gpz1u_2\" role=\"tab\"\n                      aria-controls=\"e-content-gpz1u_2\" aria-selected=\"false\" aria-disabled=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                            role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\"\n                            title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" role=\"tabpanel\" aria-labelledby=\"e-item-gpz1u_0\"\n                    id=\"e-content-gpz1u_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre\n                        class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// Initialize the Button component.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'Button'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// Render initialized button.</span>\n    button<span class=\"token punctuation\">.</span><span class=\"token function\">appendTo</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#element'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" role=\"tabpanel\" aria-labelledby=\"e-item-gpz1u_1\"\n                    id=\"e-content-gpz1u_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre\n                        class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>element<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" role=\"tabpanel\" aria-labelledby=\"e-item-gpz1u_2\"\n                    id=\"e-content-gpz1u_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item e-active\" role=\"tabpanel\" aria-labelledby=\"e-item-ue96o_1\"\n              id=\"e-content-ue96o_1\" style=\"\">\n              <!-- <iframe class=\"doc-sample-frame\"\n                src=\"/documentation/samples/button/getting-started-cs1/index.html\">\n              </iframe> -->\n            </div>\n          </div>\n        </div>\n        <h2 id=\"change-button-type\"><a router-ignore data-router-ignore href=\"#change-button-type\" aria-hidden=\"\" class=\"anchor\"><svg\n              aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Change Button type</h2>\n        <p>To change the default Button to flat Button, set the <a\n            href=\"/documentation/api/button/#cssclass\"><code\n              class=\"language-text\">cssClass</code></a> property to <code\n            class=\"language-text\">e-flat</code> and text content of the Button is set using <a\n            href=\"/documentation/api/button/#content\"><code class=\"language-text\">content</code></a>\n          property.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\"\n          role=\"tablist\" aria-disabled=\"false\" aria-activedescendant=\"e-item-o0nyz_0\"\n          aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\"\n            aria-disabled=\"false\" aria-haspopup=\"false\" aria-orientation=\"horizontal\" tabindex=\"0\"\n            aria-label=\"tab-header\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 70px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-o0nyz_0\" role=\"tab\"\n                aria-controls=\"e-content-o0nyz_0\" aria-selected=\"true\" aria-disabled=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                      role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\"\n                      title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-o0nyz_1\" role=\"tab\"\n                aria-controls=\"e-content-o0nyz_1\" aria-selected=\"false\" aria-disabled=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\"><span\n                        data-sample=\"/documentation/samples/button/getting-started-cs2/index.html\"\n                        data-active=\"false\">Preview</span></span><span class=\"e-icons e-close-icon\"\n                      title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" role=\"tabpanel\" aria-labelledby=\"e-item-o0nyz_0\"\n              id=\"e-content-o0nyz_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\"\n                role=\"tablist\" aria-disabled=\"false\" aria-activedescendant=\"e-item-3n5dw_0\"\n                aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\"\n                  aria-disabled=\"false\" aria-haspopup=\"false\" aria-orientation=\"horizontal\"\n                  tabindex=\"0\" aria-label=\"tab-header\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 177px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-3n5dw_0\" role=\"tab\"\n                      aria-controls=\"e-content-3n5dw_0\" aria-selected=\"true\" aria-disabled=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                            role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\"\n                            title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-3n5dw_1\" role=\"tab\"\n                      aria-controls=\"e-content-3n5dw_1\" aria-selected=\"false\" aria-disabled=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                            role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\"\n                            title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-3n5dw_2\" role=\"tab\"\n                      aria-controls=\"e-content-3n5dw_2\" aria-selected=\"false\" aria-disabled=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\"\n                            role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\"\n                            title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" role=\"tabpanel\" aria-labelledby=\"e-item-3n5dw_0\"\n                    id=\"e-content-3n5dw_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre\n                        class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//To change the Button type.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> cssClass<span class=\"token operator\">:</span> <span class=\"token string\">'e-flat'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'Button'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    button<span class=\"token punctuation\">.</span><span class=\"token function\">appendTo</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#element'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" role=\"tabpanel\" aria-labelledby=\"e-item-3n5dw_1\"\n                    id=\"e-content-3n5dw_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre\n                        class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>element<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" role=\"tabpanel\" aria-labelledby=\"e-item-3n5dw_2\"\n                    id=\"e-content-3n5dw_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" role=\"tabpanel\" aria-labelledby=\"e-item-o0nyz_1\"\n              id=\"e-content-o0nyz_1\"></div>\n          </div>\n        </div>\n        <h2 id=\"see-also\"><a router-ignore data-router-ignore href=\"#see-also\" aria-hidden=\"\" class=\"anchor\"><svg aria-hidden=\"true\"\n              height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>See Also</h2>\n        <ul>\n          <li><a href=\"/documentation/button/types-and-styles/#button-types\">Types of Button</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"layout__NavButtons-sc-1t3oqgw-1 diJUVI\" id=\"nav-buttons\">\n        <div class=\"layout__NavButton-sc-1t3oqgw-2 fQlslk\" id=\"prev-button\"><a id=\"prev-link\"\n            href=\"/documentation/bullet-chart/tool-tip/\">\n            <div class=\"doc-icons icon-prev_icon nav-prev-icon\"></div>\n            <div class=\"nav-prev-text\">Bullet Chart / Tooltip</div>\n          </a></div>\n        <div class=\"layout__NavButton-sc-1t3oqgw-2 fQlslk\" id=\"next-button\"><a id=\"next-link\"\n            href=\"/documentation/button/types-and-styles/\">\n            <div class=\"doc-icons icon-next_icon nav-next-icon\"></div>\n            <div class=\"nav-next-text\">Button / Types and Styles</div>\n          </a></div>\n      </div>\n      <div id=\"doc-footer\">\n        <div id=\"footer-feedback\">\n          <div class=\"feedback-ques\">\n            <div class=\"feedback-ques-text\">Is this page helpful?</div>\n            <div id=\"feedback-down\" class=\"feedback\">\n              <div class=\"feedback-down-icon\"></div>\n              <div class=\"feedback-down-text\">No</div>\n            </div>\n            <div id=\"feedback-up\" class=\"feedback\">\n              <div class=\"feedback-up-icon\"></div>\n              <div class=\"feedback-up-text\">Yes</div>\n            </div>\n          </div>\n        </div>\n        <div id=\"footer-copyright\"><a id=\"copyright\" target=\"_blank\"\n            href=\"http://www.syncfusion.com/copyright\">Copyright © 2001 - <span id=\"copyright-year\"> <!--DevSkim: ignore DS137138 until 2020-03-07 -->\n              2020</span> Syncfusion Inc. All Rights Reserved</a></div>\n      </div>\n    </div>\n    <div class=\"layout__RightToc-sc-1t3oqgw-0 ixCaAR\">\n      <div id=\"doc-right-toc\"><span>Contents</span>\n        <ul>\n          <li class=\"doc-anchor-h2 select\"><a router-ignore data-router-ignore href=\"#dependencies\">Dependencies</a></li>\n          <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#setup-your-development-environment\">Setup your\n              development environment</a></li>\n          <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#add-button-to-the-project\">Add Button to the\n              project</a></li>\n          <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#adding-style-sheet-to-the-application\">Adding Style\n              sheet to the Application</a></li>\n          <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#run-the-application\">Run the application</a></li>\n          <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#change-button-type\">Change Button type</a></li>\n          <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#see-also\">See Also</a></li>\n        </ul>\n      </div>\n    </div><button class=\"back-to-top\" id=\"scroll-top\" style=\"display: none;\"><span\n        id=\"icon-move-top\"></span></button>\n  </div>\n  <!-- <require from=\"./button.css\"></require> -->\n\n  <!-- <div class=\"doc-body-content\">\n    <div id=\"md-content\" class=\"e-view\">\n      <div id=\"md-cnt\">\n        <h1 id=\"getting-started\"><a router-ignore data-router-ignore href=\"#getting-started\" aria-hidden=\"\" class=\"anchor\"><svg aria-hidden=\"true\"\n              height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Getting started with JavaScript Button control</h1>\n        <p>This section explains how to create a simple Button and to configure the Button\n          component.</p>\n        <h2 id=\"dependencies\"><a router-ignore data-router-ignore href=\"#dependencies\" aria-hidden=\"\" class=\"anchor\"><svg aria-hidden=\"true\" height=\"16\"\n              version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg></a>Dependencies</h2>\n        <p>The list of dependencies required to use the Button component in your application is\n          given below:</p>\n        <div class=\"gatsby-highlight\" data-language=\"js\">\n          <pre\n            class=\"language-js\"><code class=\"language-js\"><span class=\"token operator\">|</span><span class=\"token operator\">--</span> @syncfusion<span class=\"token operator\">/</span>ej2<span class=\"token operator\">-</span>buttons\n                    <span class=\"token operator\">|</span><span class=\"token operator\">--</span> @syncfusion<span class=\"token operator\">/</span>ej2<span class=\"token operator\">-</span>base</code></pre>\n        </div>\n\n      </div>\n    <div class=\"layout__RightToc-sc-1t3oqgw-0 ixCaAR\"><div id=\"doc-right-toc\"><span>Contents</span>\n          <ul>\n            <li class=\"doc-anchor-h2 select\"><a router-ignore data-router-ignore href=\"#dependencies\">Dependencies</a></li>\n            <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#setup-your-development-environment\">Setup your development environment</a></li>\n            <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#add-button-to-the-project\">Add Button to the project</a></li>\n            <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#adding-style-sheet-to-the-application\">Adding Style sheet to the Application</a></li>\n            <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#run-the-application\">Run the application</a></li>\n            <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#change-button-type\">Change Button type</a></li>\n            <li class=\"doc-anchor-h2\"><a router-ignore data-router-ignore href=\"#see-also\">See Also</a></li>\n          </ul>\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div> -->\n</template>\n";});;
define('components/button/button-types-and-styles',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonTypesAndStyles = (function () {
        function ButtonTypesAndStyles() {
        }
        ButtonTypesAndStyles.prototype.clicked = function () {
        };
        return ButtonTypesAndStyles;
    }());
    exports.ButtonTypesAndStyles = ButtonTypesAndStyles;
});
;
define('text!components/button/button-types-and-styles.html',[],function(){return "<template>\n\n  <style>\n    div.doc-body-content #md-cnt table, div.doc-body-content #md-cnt td, div.doc-body-content #md-cnt th {\n      border: 1px solid #c4bdbd;\n      padding: 10px;\n    }\n\n    #md-content table {\n      margin: 14px auto 25px;\n      width: 100%;\n    }\n\n    #md-cnt table {\n      table-layout: fixed;\n    }\n\n    table {\n      border-collapse: collapse;\n    }\n  </style>\n\n  <div class=\"doc-body-content\">\n    <div class=\"e-view\" id=\"md-content\">\n      <div id=\"md-cnt\">\n        <h1 id=\"types-and-styles\"><a class=\"anchor\" href=\"#types-and-styles\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Types and Styles in JavaScript Button control</h1>\n        <p>This section explains the different styles and types of Buttons.</p>\n        <h2 id=\"button-styles\"><a class=\"anchor\" href=\"#button-styles\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Button styles</h2>\n        <p>The Essential JS 2 Button has the following predefined styles that can be defined using\n          the <a href=\"/documentation/api/button/#css-class\"><code class=\"language-text\">css-class</code></a> property.\n        </p>\n        <table>\n          <thead>\n            <tr>\n              <th>Class</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>e-primary</td>\n              <td>Used to represent a primary action.</td>\n            </tr>\n            <tr>\n              <td>e-success</td>\n              <td>Used to represent a positive action.</td>\n            </tr>\n            <tr>\n              <td>e-info</td>\n              <td>Used to represent an informative action.</td>\n            </tr>\n            <tr>\n              <td>e-warning</td>\n              <td>Used to represent an action with caution.</td>\n            </tr>\n            <tr>\n              <td>e-danger</td>\n              <td>Used to represent a negative action.</td>\n            </tr>\n            <tr>\n              <td>e-link</td>\n              <td>Changes the appearance of the Button like a hyperlink.</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div>\n          <ej-button css-class=\"e-primary\"  content=\"primary\"></ej-button>\n          <ej-button css-class=\"e-success\" content=\"success\"></ej-button>\n          <ej-button css-class=\"e-info\" content=\"info\"></ej-button>\n          <ej-button css-class=\"e-warning\" content=\"warning\"></ej-button>\n          <ej-button css-class=\"e-danger\" content=\"danger\"></ej-button>\n          <ej-button css-class=\"e-link\" content=\"link\"></ej-button>\n        </div>\n\n        <br>\n        <div>\n          <ej-button primary=\"true\" toggle=\"true\" content=\"primary\" enabled=\"true\" click.delegate=\"clicked()\"></ej-button>\n        </div>\n\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-1e7wb_1\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 71px; right: 2px;\"></div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-1e7wb_0\" role=\"tab\" aria-controls=\"e-content-1e7wb_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-1e7wb_1\" role=\"tab\" aria-controls=\"e-content-1e7wb_1\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"true\" data-sample=\"/documentation/samples/button/button-style-cs1/index.html\">Preview</span> -->\n                    </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item\" id=\"e-content-1e7wb_0\" role=\"tabpanel\" aria-labelledby=\"e-item-1e7wb_0\" style>\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-1mntx_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: auto; right: auto;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-1mntx_0\" role=\"tab\" aria-controls=\"e-content-1mntx_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-1mntx_1\" role=\"tab\" aria-controls=\"e-content-1mntx_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-1mntx_2\" role=\"tab\" aria-controls=\"e-content-1mntx_2\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-1mntx_0\" role=\"tabpanel\" aria-labelledby=\"e-item-1mntx_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Primary Button - Used to represent a primary action.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-primary</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#primarybtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Success Button - Used to represent a positive action.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-success</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#successbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Info Button - Used to represent an informative action.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-info</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#infobtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Warning Button - Used to represent an action with caution.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-warning</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#warningbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Danger Button - Used to represent a negative action.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-danger</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#dangerbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Link Button - Changes the appearance of the Button like a hyperlink.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-link</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#linkbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-1mntx_1\" role=\"tabpanel\" aria-labelledby=\"e-item-1mntx_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primarybtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>successbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Success<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>infobtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Info<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warningbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Warning<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dangerbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>linkbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"><span class=\"token language-javascript\">\n            <span class=\"token keyword\">let</span> loader <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loader'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">let</span> container <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'container'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>loader<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                loader<span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">.</span>display <span class=\"token operator\">=</span> <span class=\"token string\">\"none\"</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>container<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                container<span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">.</span>visibility <span class=\"token operator\">=</span> <span class=\"token string\">\"visible\"</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        </span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-1mntx_2\" role=\"tabpanel\" aria-labelledby=\"e-item-1mntx_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">button</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 25px 5px 20px 20px<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item e-active\" id=\"e-content-1e7wb_1\" role=\"tabpanel\" aria-labelledby=\"e-item-1e7wb_1\" style>\n              <!-- <iframe class=\"doc-sample-frame\" src=\"/documentation/samples/button/button-style-cs1/index.html\"></iframe> -->\n            </div>\n          </div>\n        </div>\n        <blockquote>\n          <p>Predefined Button styles provide only the visual indication. So, Button content should\n            define the Button style for the users of assistive technologies such as screen readers.\n            Primary action button can also be achieved by setting <a href=\"/documentation/api/button/#isprimary\"><code class=\"language-text\">isPrimary</code></a> property as <code class=\"language-text\">true</code>.</p>\n        </blockquote>\n        <h2 id=\"button-types\"><a class=\"anchor\" href=\"#button-types\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Button types</h2>\n        <p>The types of Essential JS 2 Button are as follows:</p>\n        <ul>\n          <li>Basic types</li>\n          <li>Flat Button</li>\n          <li>Outline Button</li>\n          <li>Round Button</li>\n          <li>Toggle Button</li>\n        </ul>\n        <h3 id=\"basic-types\"><a class=\"anchor\" href=\"#basic-types\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Basic types</h3>\n        <p>The basic Button types are explained below.</p>\n        <table>\n          <thead>\n            <tr>\n              <th>Type</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Button</td>\n              <td>Defines a click Button.</td>\n            </tr>\n            <tr>\n              <td>Submit</td>\n              <td>This Button submits the form data to the server.</td>\n            </tr>\n            <tr>\n              <td>Reset</td>\n              <td>This Button resets all the controls in the form elements to their initial values.\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-fohb5_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 71px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-fohb5_0\" role=\"tab\" aria-controls=\"e-content-fohb5_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-fohb5_1\" role=\"tab\" aria-controls=\"e-content-fohb5_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"false\" data-sample=\"/documentation/samples/button/basic-types-cs1/index.html\">Preview</span> -->\n                    </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" id=\"e-content-fohb5_0\" role=\"tabpanel\" aria-labelledby=\"e-item-fohb5_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-t6q79_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 180px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-t6q79_0\" role=\"tab\" aria-controls=\"e-content-t6q79_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-t6q79_1\" role=\"tab\" aria-controls=\"e-content-t6q79_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-t6q79_2\" role=\"tab\" aria-controls=\"e-content-t6q79_2\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-t6q79_0\" role=\"tabpanel\" aria-labelledby=\"e-item-t6q79_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Submit.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    button<span class=\"token punctuation\">.</span><span class=\"token function\">appendTo</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#submitbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Reset.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    button<span class=\"token punctuation\">.</span><span class=\"token function\">appendTo</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#resetbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-t6q79_1\" role=\"tabpanel\" aria-labelledby=\"e-item-t6q79_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>form</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submitbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>reset<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>resetbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Reset<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>form</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"><span class=\"token language-javascript\">\n            <span class=\"token keyword\">let</span> loader <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loader'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">let</span> container <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'container'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>loader<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                loader<span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">.</span>display <span class=\"token operator\">=</span> <span class=\"token string\">\"none\"</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>container<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                container<span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">.</span>visibility <span class=\"token operator\">=</span> <span class=\"token string\">\"visible\"</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        </span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-t6q79_2\" role=\"tabpanel\" aria-labelledby=\"e-item-t6q79_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">button</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 25px 5px 20px 20px<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" id=\"e-content-fohb5_1\" role=\"tabpanel\" aria-labelledby=\"e-item-fohb5_1\"></div>\n          </div>\n        </div>\n        <h3 id=\"flat-button\"><a class=\"anchor\" href=\"#flat-button\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Flat Button</h3>\n        <p>The Flat Button is styled with no background color. To create a flat Button,\n          set the <a href=\"/documentation/api/button/#css-class\"><code class=\"language-text\">css-class</code></a> property\n          to <code class=\"language-text\">e-flat</code>.</p>\n        <h3 id=\"outline-button\"><a class=\"anchor\" href=\"#outline-button\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Outline Button</h3>\n        <p>An outline Button has a border with transparent background. To create an outline Button,\n          set the <a href=\"/documentation/api/button/#css-class\"><code class=\"language-text\">css-class</code></a> property\n          to <code class=\"language-text\">e-outline</code>.</p>\n        <h3 id=\"round-button\"><a class=\"anchor\" href=\"#round-button\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Round Button</h3>\n        <p>A round Button is shaped like a circle. Usually, it contains an icon representing its\n          action. To create a round Button,\n          set the <a href=\"/documentation/api/button/#css-class\"><code class=\"language-text\">css-class</code></a> property\n          to <code class=\"language-text\">e-round</code>.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-2ug4q_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 71px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-2ug4q_0\" role=\"tab\" aria-controls=\"e-content-2ug4q_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-2ug4q_1\" role=\"tab\" aria-controls=\"e-content-2ug4q_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"false\" data-sample=\"/documentation/samples/button/button-type-cs1/index.html\">Preview</span> -->\n                  </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" id=\"e-content-2ug4q_0\" role=\"tabpanel\" aria-labelledby=\"e-item-2ug4q_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-0f4o2_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 180px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-0f4o2_0\" role=\"tab\" aria-controls=\"e-content-0f4o2_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-0f4o2_1\" role=\"tab\" aria-controls=\"e-content-0f4o2_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-0f4o2_2\" role=\"tab\" aria-controls=\"e-content-0f4o2_2\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-0f4o2_0\" role=\"tabpanel\" aria-labelledby=\"e-item-0f4o2_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Flat Button.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-flat</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#flatbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Outline Button.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-outline</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#outlinebtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Round Button - Icon can be loaded by setting \"e-icons e-plus-icon\" in \"iconCss\" property.</span>\n    <span class=\"token comment\">//Use \"e-icons\" class name to load Essential JS 2 built-in icons.</span>\n    <span class=\"token comment\">//Use \"e-plus-icon\" class name to load plus icon that you can refer in \"styles.css\".</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-round</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span> iconCss<span class=\"token operator\">:</span> <span class=\"token string\">'e-icons e-plus-icon'</span><span class=\"token punctuation\">,</span> isPrimary<span class=\"token operator\">:</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#roundbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-0f4o2_1\" role=\"tabpanel\" aria-labelledby=\"e-item-0f4o2_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>flatbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Flat<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>outlinebtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>Outline<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>roundbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-0f4o2_2\" role=\"tabpanel\" aria-labelledby=\"e-item-0f4o2_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\">/* For Round Button*/</span>\n    <span class=\"token selector\">.e-plus-icon::before</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">content</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'\\e823'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">button</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 25px 5px 20px 20px<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" id=\"e-content-2ug4q_1\" role=\"tabpanel\" aria-labelledby=\"e-item-2ug4q_1\"></div>\n          </div>\n        </div>\n        <h3 id=\"toggle-button\"><a class=\"anchor\" href=\"#toggle-button\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Toggle Button</h3>\n        <p>A toggle Button allows you to change between the two states. The Button is active in\n          toggled state and can be recognized through the <code class=\"language-text\">e-active</code> class.\n          The functionality of the toggle Button is handled by click event. To create a toggle\n          Button,\n          set the <a href=\"/documentation/api/button/#istoggle\"><code class=\"language-text\">isToggle</code></a> property\n          to <code class=\"language-text\">true</code>. In the following code snippet,\n          the toggle Button text changes to play/pause based on the state of the Button with the use\n          of click event.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-tqlnz_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 71px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-tqlnz_0\" role=\"tab\" aria-controls=\"e-content-tqlnz_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-tqlnz_1\" role=\"tab\" aria-controls=\"e-content-tqlnz_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"false\" data-sample=\"/documentation/samples/button/toggle-button-cs1/index.html\">Preview</span> -->\n                    </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" id=\"e-content-tqlnz_0\" role=\"tabpanel\" aria-labelledby=\"e-item-tqlnz_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-cydhp_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 180px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-cydhp_0\" role=\"tab\" aria-controls=\"e-content-cydhp_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-cydhp_1\" role=\"tab\" aria-controls=\"e-content-cydhp_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-cydhp_2\" role=\"tab\" aria-controls=\"e-content-cydhp_2\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-cydhp_0\" role=\"tabpanel\" aria-labelledby=\"e-item-cydhp_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token comment\">//Button is active in toggled state.</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">let</span> togglebtn<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-flat</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span> iconCss<span class=\"token operator\">:</span> <span class=\"token string\">'e-btn-sb-icon e-play-icon'</span><span class=\"token punctuation\">,</span> isToggle<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span><span class=\"token string\">'Play'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#toggelbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Click Event.</span>\n    document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'toggelbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>onclick <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token parameter\"><span class=\"token keyword\">void</span></span> <span class=\"token operator\">=&gt;</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'toggelbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>classList<span class=\"token punctuation\">.</span><span class=\"token function\">contains</span><span class=\"token punctuation\">(</span><span class=\"token string\">'e-active'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                togglebtn<span class=\"token punctuation\">.</span>content <span class=\"token operator\">=</span> <span class=\"token string\">'Pause'</span><span class=\"token punctuation\">;</span>\n                togglebtn<span class=\"token punctuation\">.</span>iconCss <span class=\"token operator\">=</span> <span class=\"token string\">'e-btn-sb-icon e-pause-icon'</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n                togglebtn<span class=\"token punctuation\">.</span>content <span class=\"token operator\">=</span> <span class=\"token string\">'Play'</span><span class=\"token punctuation\">;</span>\n                togglebtn<span class=\"token punctuation\">.</span>iconCss <span class=\"token operator\">=</span> <span class=\"token string\">'e-btn-sb-icon e-play-icon'</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-cydhp_1\" role=\"tabpanel\" aria-labelledby=\"e-item-cydhp_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>toggelbtn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-cydhp_2\" role=\"tabpanel\" aria-labelledby=\"e-item-cydhp_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token atrule\"><span class=\"token rule\">@font-face</span></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'btn-icon'</span><span class=\"token punctuation\">;</span>\n      <span class=\"token property\">src</span><span class=\"token punctuation\">:</span>\n      <span class=\"token url\"><span class=\"token function\">url</span><span class=\"token punctuation\">(</span>data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfgAAAEoAAAAVmNtYXDnH+dzAAABoAAAAEJnbHlm1v48pAAAAfgAAAQYaGVhZBOPfZcAAADQAAAANmhoZWEIUQQJAAAArAAAACRobXR4IAAAAAAAAYAAAAAgbG9jYQN6ApQAAAHkAAAAEm1heHABFQCqAAABCAAAACBuYW1l07lFxAAABhAAAAIxcG9zdK9uovoAAAhEAAAAgAABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAACAABAAAAAQAAJ1LUzF8PPPUACwQAAAAAANg+nFMAAAAA2D6cUwAAAAAD9AP0AAAACAACAAAAAAAAAAEAAAAIAJ4AAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnBgQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAC4AAAAEAAQAAQAA5wb//wAA5wD//wAAAAEABAAAAAEAAgADAAQABQAGAAcAAAAAAAAADgAkADIAhAEuAewCDAAAAAEAAAAAA2ED9AACAAA3CQGeAsT9PAwB9AH0AAACAAAAAAPHA/QAAwAHAAAlIREhASERIQJpAV7+ov3QAV7+ogwD6PwYA+gAAAEAAAAAA4sD9AACAAATARF0AxgCAP4MA+gAAAABAAAAAAP0A/QAQwAAExEfDyE/DxEvDyEPDgwBAgMFBQcICQkLCwwMDQ4NAtoNDg0MDAsLCQkIBwUFAwIBAQIDBQUHCAkJCwsMDA0ODf0mDQ4NDAwLCwkJCAcFBQMCA239Jg4NDQ0LCwsJCQgHBQUDAgEBAgMFBQcICQkLCwsNDQ0OAtoODQ0NCwsLCQkIBwUFAwIBAQIDBQUHCAkJCwsLDQ0NAAIAAAAAA/MDxQADAIwAADczESMBDwMVFw8METM3HwQ3Fz8KPQEvBT8LLwg3NT8INS8FNT8NNS8JByU/BDUvCyMPAQytrQH5AgoEAQEBARghERESEyIJCSgQBiEHNQceOZPbDgUICw0LCQUDBAICBAkGAgEBAQMOBAkIBgcDAwEBAQEDAwMJAgEBAxYLBQQEAwMCAgIEBAoBAQEECgcHBgUFBAMDAQEBAQQFBwkFBQUGEf6tDwkEAwIBAQMDCgwVAwcGDAsNBwdaAYcB3gEFAwN2HwoELDodGxwaLwkIGwz+igEBHwMBAQECAQEDBgoKDAYICAgFCAkICwUEBAQFAwYDBwgIDAgHCAcGBgYFBQkEAgYCBAwJBgUGBwkJCgkICAcLBAIFAwIEBAQFBQcGBwgHBgYGBgoJCAYCAgEBAQFGMRkaGw0NDA0LIh4xBAQCBAEBAgADAAAAAAOKA/MAHABCAJ0AAAEzHwIRDwMhLwIDNzM/CjUTHwcVIwcVIy8HETcXMz8KNScxBxEfDjsBHQEfDTMhMz8OES8PIz0BLw4hA0EDBQQDAQIEBf5eBQQCAW4RDg0LCQgGBQUDBAFeBAMDAwIBAQGL7Y0EAwQCAgIBAYYKChEQDQsJCAcEBAUCYt8BAQIDBAUFBQcHBwgICQgKjQECAgMEBAUFBgYHBgcIBwGcCAcHBwYGBgUFBAQDAgIBAQEBAgIDBAQFBQYGBgcHBwgmAQMDAwUFBgYHBwgICQkJ/tQCiwMEBf3XAwYEAgIEBgFoAQEDBQYGBwgIBw0KhQEiAQEBAgMDAwTV+94BAQECAwMDBAGyAQECBAYHCAgJCgkQCaQC6/47CQkICQcIBwYGBQQEAwICUAgHBwcGBgYFBQQEAwMBAgIBAwMEBAUFBQcGBwcHCAImCAcHBwYGBgUFBAQDAgIBAdUJCQgICAgGBwYFBAQDAgEBAAAAAAIAAAAAA6cD9AADAAwAADchNSElAQcJAScBESNZA078sgGB/uMuAXkBgDb+1EwMTZcBCD3+ngFiPf7pAxMAAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBidG4taWNvblJlZ3VsYXJidG4taWNvbmJ0bi1pY29uVmVyc2lvbiAxLjBidG4taWNvbkZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAYgB0AG4ALQBpAGMAbwBuAFIAZQBnAHUAbABhAHIAYgB0AG4ALQBpAGMAbwBuAGIAdABuAC0AaQBjAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAYgB0AG4ALQBpAGMAbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAgEDAQQBBQEGAQcBCAEJAAptZWRpYS1wbGF5C21lZGlhLXBhdXNlDmFycm93aGVhZC1sZWZ0BHN0b3AJbGlrZS0tLTAxBGNvcHkQLWRvd25sb2FkLTAyLXdmLQAA<span class=\"token punctuation\">)</span></span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'truetype'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-style</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">.e-btn-sb-icon</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'btn-icon'</span> <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>\n      <span class=\"token property\">speak</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 55px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-style</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-variant</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">text-transform</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> 1<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">-webkit-font-smoothing</span><span class=\"token punctuation\">:</span> antialiased<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">-moz-osx-font-smoothing</span><span class=\"token punctuation\">:</span> grayscale<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\">/* Added when toggle button is in active state*/</span>\n    <span class=\"token selector\">.e-play-icon::before</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">content</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'\\e700'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\">/* Added when toggle button is not in active state*/</span>\n    <span class=\"token selector\">.e-pause-icon::before</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">content</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'\\e701'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" id=\"e-content-tqlnz_1\" role=\"tabpanel\" aria-labelledby=\"e-item-tqlnz_1\"></div>\n          </div>\n        </div>\n        <h2 id=\"icons\"><a class=\"anchor\" href=\"#icons\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Icons</h2>\n        <h3 id=\"button-with-font-icons\"><a class=\"anchor\" href=\"#button-with-font-icons\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Button with font icons</h3>\n        <p>The Button can have an icon to provide the visual representation of the action. To place\n          the icon on a Button,\n          set the <a href=\"/documentation/api/button/#iconcss\"><code class=\"language-text\">iconCss</code></a> property\n          with the required icon CSS. By\n          default, the icon is positioned to the left side of the Button.\n          You can customize the icon’s position by using the <a href=\"/documentation/api/button/#iconposition\"><code class=\"language-text\">iconPosition</code></a> property.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-d8bsn_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 71px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-d8bsn_0\" role=\"tab\" aria-controls=\"e-content-d8bsn_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-d8bsn_1\" role=\"tab\" aria-controls=\"e-content-d8bsn_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"false\" data-sample=\"/documentation/samples/button/icon-cs1/index.html\">Preview</span> -->\n                    </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" id=\"e-content-d8bsn_0\" role=\"tabpanel\" aria-labelledby=\"e-item-d8bsn_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-g67to_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 180px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-g67to_0\" role=\"tab\" aria-controls=\"e-content-g67to_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-g67to_1\" role=\"tab\" aria-controls=\"e-content-g67to_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-g67to_2\" role=\"tab\" aria-controls=\"e-content-g67to_2\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-g67to_0\" role=\"tabpanel\" aria-labelledby=\"e-item-g67to_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//To position the icon to the left of the text on a Button.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>iconCss<span class=\"token operator\">:</span> <span class=\"token string\">'e-btn-sb-icon e-prev-icon'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#iconbutton'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//To position the icon to the right of the text on a Button.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>iconCss<span class=\"token operator\">:</span> <span class=\"token string\">'e-btn-sb-icon e-stop-icon'</span><span class=\"token punctuation\">,</span> iconPosition<span class=\"token operator\">:</span> <span class=\"token string\">'Right'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#iconposbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-g67to_1\" role=\"tabpanel\" aria-labelledby=\"e-item-g67to_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>iconbutton<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>Previous<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>iconposbtn<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>Stop<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-g67to_2\" role=\"tabpanel\" aria-labelledby=\"e-item-g67to_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token atrule\"><span class=\"token rule\">@font-face</span></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'btn-icon'</span><span class=\"token punctuation\">;</span>\n        <span class=\"token property\">src</span><span class=\"token punctuation\">:</span>\n        <span class=\"token url\"><span class=\"token function\">url</span><span class=\"token punctuation\">(</span>data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfgAAAEoAAAAVmNtYXDnH+dzAAABoAAAAEJnbHlm1v48pAAAAfgAAAQYaGVhZBOPfZcAAADQAAAANmhoZWEIUQQJAAAArAAAACRobXR4IAAAAAAAAYAAAAAgbG9jYQN6ApQAAAHkAAAAEm1heHABFQCqAAABCAAAACBuYW1l07lFxAAABhAAAAIxcG9zdK9uovoAAAhEAAAAgAABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAACAABAAAAAQAAJ1LUzF8PPPUACwQAAAAAANg+nFMAAAAA2D6cUwAAAAAD9AP0AAAACAACAAAAAAAAAAEAAAAIAJ4AAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnBgQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAC4AAAAEAAQAAQAA5wb//wAA5wD//wAAAAEABAAAAAEAAgADAAQABQAGAAcAAAAAAAAADgAkADIAhAEuAewCDAAAAAEAAAAAA2ED9AACAAA3CQGeAsT9PAwB9AH0AAACAAAAAAPHA/QAAwAHAAAlIREhASERIQJpAV7+ov3QAV7+ogwD6PwYA+gAAAEAAAAAA4sD9AACAAATARF0AxgCAP4MA+gAAAABAAAAAAP0A/QAQwAAExEfDyE/DxEvDyEPDgwBAgMFBQcICQkLCwwMDQ4NAtoNDg0MDAsLCQkIBwUFAwIBAQIDBQUHCAkJCwsMDA0ODf0mDQ4NDAwLCwkJCAcFBQMCA239Jg4NDQ0LCwsJCQgHBQUDAgEBAgMFBQcICQkLCwsNDQ0OAtoODQ0NCwsLCQkIBwUFAwIBAQIDBQUHCAkJCwsLDQ0NAAIAAAAAA/MDxQADAIwAADczESMBDwMVFw8METM3HwQ3Fz8KPQEvBT8LLwg3NT8INS8FNT8NNS8JByU/BDUvCyMPAQytrQH5AgoEAQEBARghERESEyIJCSgQBiEHNQceOZPbDgUICw0LCQUDBAICBAkGAgEBAQMOBAkIBgcDAwEBAQEDAwMJAgEBAxYLBQQEAwMCAgIEBAoBAQEECgcHBgUFBAMDAQEBAQQFBwkFBQUGEf6tDwkEAwIBAQMDCgwVAwcGDAsNBwdaAYcB3gEFAwN2HwoELDodGxwaLwkIGwz+igEBHwMBAQECAQEDBgoKDAYICAgFCAkICwUEBAQFAwYDBwgIDAgHCAcGBgYFBQkEAgYCBAwJBgUGBwkJCgkICAcLBAIFAwIEBAQFBQcGBwgHBgYGBgoJCAYCAgEBAQFGMRkaGw0NDA0LIh4xBAQCBAEBAgADAAAAAAOKA/MAHABCAJ0AAAEzHwIRDwMhLwIDNzM/CjUTHwcVIwcVIy8HETcXMz8KNScxBxEfDjsBHQEfDTMhMz8OES8PIz0BLw4hA0EDBQQDAQIEBf5eBQQCAW4RDg0LCQgGBQUDBAFeBAMDAwIBAQGL7Y0EAwQCAgIBAYYKChEQDQsJCAcEBAUCYt8BAQIDBAUFBQcHBwgICQgKjQECAgMEBAUFBgYHBgcIBwGcCAcHBwYGBgUFBAQDAgIBAQEBAgIDBAQFBQYGBgcHBwgmAQMDAwUFBgYHBwgICQkJ/tQCiwMEBf3XAwYEAgIEBgFoAQEDBQYGBwgIBw0KhQEiAQEBAgMDAwTV+94BAQECAwMDBAGyAQECBAYHCAgJCgkQCaQC6/47CQkICQcIBwYGBQQEAwICUAgHBwcGBgYFBQQEAwMBAgIBAwMEBAUFBQcGBwcHCAImCAcHBwYGBgUFBAQDAgIBAdUJCQgICAgGBwYFBAQDAgEBAAAAAAIAAAAAA6cD9AADAAwAADchNSElAQcJAScBESNZA078sgGB/uMuAXkBgDb+1EwMTZcBCD3+ngFiPf7pAxMAAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBidG4taWNvblJlZ3VsYXJidG4taWNvbmJ0bi1pY29uVmVyc2lvbiAxLjBidG4taWNvbkZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAYgB0AG4ALQBpAGMAbwBuAFIAZQBnAHUAbABhAHIAYgB0AG4ALQBpAGMAbwBuAGIAdABuAC0AaQBjAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAYgB0AG4ALQBpAGMAbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBAgEDAQQBBQEGAQcBCAEJAAptZWRpYS1wbGF5C21lZGlhLXBhdXNlDmFycm93aGVhZC1sZWZ0BHN0b3AJbGlrZS0tLTAxBGNvcHkQLWRvd25sb2FkLTAyLXdmLQAA<span class=\"token punctuation\">)</span></span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'truetype'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n        <span class=\"token property\">font-style</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">.e-btn-sb-icon</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'btn-icon'</span> <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>\n      <span class=\"token property\">speak</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 55px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-style</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">font-variant</span><span class=\"token punctuation\">:</span> normal<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">text-transform</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> 1<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">-webkit-font-smoothing</span><span class=\"token punctuation\">:</span> antialiased<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">-moz-osx-font-smoothing</span><span class=\"token punctuation\">:</span> grayscale<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\">/*For Right Icon Button*/</span>\n    <span class=\"token selector\">.e-stop-icon::before</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">content</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'\\e703'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\">/*For Left Icon Button*/</span>\n    <span class=\"token selector\">.e-prev-icon::before</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">content</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'\\e702'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">button</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 25px 5px 20px 20px<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" id=\"e-content-d8bsn_1\" role=\"tabpanel\" aria-labelledby=\"e-item-d8bsn_1\"></div>\n          </div>\n        </div>\n        <h3 id=\"button-with-svg-image\"><a class=\"anchor\" href=\"#button-with-svg-image\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Button with SVG image</h3>\n        <p>SVG image can be added to the Button using <a href=\"/documentation/api/button/#iconcss\"><code class=\"language-text\">iconCss</code></a>\n          property.</p>\n        <p>In the following example, SVG image is added using the iconCss class <code class=\"language-text\">e-search-icon</code> by setting <code class=\"language-text\">height</code> and <code class=\"language-text\">width</code>.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-30a21_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 71px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-30a21_0\" role=\"tab\" aria-controls=\"e-content-30a21_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-30a21_1\" role=\"tab\" aria-controls=\"e-content-30a21_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"false\" data-sample=\"/documentation/samples/button/svg-cs1/index.html\">Preview</span> -->\n                    </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" id=\"e-content-30a21_0\" role=\"tabpanel\" aria-labelledby=\"e-item-30a21_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-bui0h_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 92px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-bui0h_0\" role=\"tab\" aria-controls=\"e-content-bui0h_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-bui0h_1\" role=\"tab\" aria-controls=\"e-content-bui0h_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-bui0h_0\" role=\"tabpanel\" aria-labelledby=\"e-item-bui0h_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> iconCss<span class=\"token operator\">:</span> <span class=\"token string\">'e-search-icon'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#iconbutton'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-bui0h_1\" role=\"tabpanel\" aria-labelledby=\"e-item-bui0h_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Typescript UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>iconbutton<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" id=\"e-content-30a21_1\" role=\"tabpanel\" aria-labelledby=\"e-item-30a21_1\"></div>\n          </div>\n        </div>\n        <blockquote>\n          <p>The Essential JS 2 provides a set of icons that can be loaded by applying <code class=\"language-text\">e-icons</code> class name to the element.\n            You can also use third party icons on the Button using the <a href=\"/documentation/api/button/#iconcss\"><code class=\"language-text\">iconCss</code></a> property.</p>\n        </blockquote>\n        <h2 id=\"button-size\"><a class=\"anchor\" href=\"#button-size\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>Button size</h2>\n        <p>The two types of Button sizes are default and small. To change the size of the default\n          Button to small Button,\n          set the <a href=\"/documentation/api/button/#css-class\"><code class=\"language-text\">css-class</code></a> property\n          to <code class=\"language-text\">e-small</code>.</p>\n        <div class=\"doc-tab e-control e-tab e-lib e-safari e-template e-keyboard e-nested\" role=\"tablist\" aria-activedescendant=\"e-item-a7keh_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n          <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n\n\n            <div class=\"e-items e-toolbar-items\">\n              <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 71px;\"></div>\n              <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-a7keh_0\" role=\"tab\" aria-controls=\"e-content-a7keh_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">Source</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n              <div class=\"e-item e-toolbar-item\" id=\"e-item-a7keh_1\" role=\"tab\" aria-controls=\"e-content-a7keh_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                  <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">\n                    <!-- <span data-active=\"false\" data-sample=\"/documentation/samples/button/size-cs1/index.html\">Preview</span> -->\n                    </span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n            <div class=\"e-item e-active\" id=\"e-content-a7keh_0\" role=\"tabpanel\" aria-labelledby=\"e-item-a7keh_0\">\n              <div class=\"doc-inner-tab e-control e-tab e-lib e-safari e-template e-keyboard\" role=\"tablist\" aria-activedescendant=\"e-item-bh06x_0\" aria-disabled=\"false\" aria-orientation=\"horizontal\" style=\"width: 100%; height: auto;\">\n                <div class=\"e-tab-header e-control e-toolbar e-lib e-keyboard\" role=\"toolbar\" aria-disabled=\"false\" aria-haspopup=\"false\" aria-label=\"tab-header\" aria-orientation=\"horizontal\" tabindex=\"0\" style=\"height: auto; width: 100%;\">\n                  <div class=\"e-items e-toolbar-items\">\n                    <div class=\"e-indicator e-ignore\" style=\"left: 0px; right: 180px;\"></div>\n                    <div class=\"e-item e-toolbar-item e-active\" id=\"e-item-bh06x_0\" role=\"tab\" aria-controls=\"e-content-bh06x_0\" aria-disabled=\"false\" aria-selected=\"true\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">app.ts</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-bh06x_1\" role=\"tab\" aria-controls=\"e-content-bh06x_1\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">index.html</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                    <div class=\"e-item e-toolbar-item\" id=\"e-item-bh06x_2\" role=\"tab\" aria-controls=\"e-content-bh06x_2\" aria-disabled=\"false\" aria-selected=\"false\">\n                      <div class=\"e-tab-wrap\" tabindex=\"-1\">\n                        <div class=\"e-text-wrap\"><span class=\"e-tab-text\" role=\"presentation\">styles.css</span><span class=\"e-icons e-close-icon\" title=\"Close\"></span></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"e-content e-lib e-touch\" style=\"height: auto;\">\n                  <div class=\"e-item e-active\" id=\"e-content-bh06x_0\" role=\"tabpanel\" aria-labelledby=\"e-item-bh06x_0\">\n                    <div class=\"gatsby-highlight\" data-language=\"typescript\">\n                      <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-buttons'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> enableRipple <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@syncfusion/ej2-base'</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token function\">enableRipple</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Small Button.</span>\n    <span class=\"token keyword\">let</span> button<span class=\"token operator\">:</span> Button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> css-class<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">e-small</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#smallbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">//Normal Button.</span>\n    button <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Button</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    button<span class=\"token punctuation\">.</span><span class=\"token function\">appendTo</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#normalbtn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-bh06x_1\" role=\"tabpanel\" aria-labelledby=\"e-item-bh06x_1\">\n                    <div class=\"gatsby-highlight\" data-language=\"html\">\n                      <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token doctype\">&lt;!DOCTYPE html&gt;</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span> <span class=\"token attr-name\">lang</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>title</span><span\n            class=\"token punctuation\">&gt;</span></span>EJ2 Button<span class=\"token tag\"><span class=\"token tag\"><span\n              class=\"token punctuation\">&lt;/</span>title</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span\n            class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span\n            class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>viewport<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>width=device-width, initial-scale=1.0<span\n              class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span\n            class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>description<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>Typescript\n            UI Controls<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span\n            class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>author<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>Syncfusion<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span\n            class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-base/styles/material.css<span\n              class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span\n            class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span\n            class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>//cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css<span\n              class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span\n            class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span\n            class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>styles.css<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span\n            class=\"token punctuation\">/&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span\n            class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js<span\n              class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span><span\n          class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span\n              class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span\n            class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span\n              class=\"token punctuation\">\"</span>systemjs.config.js<span class=\"token punctuation\">\"</span></span><span\n            class=\"token punctuation\">&gt;</span></span><span class=\"token script\"></span><span class=\"token tag\"><span\n            class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span\n            class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>loader<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>LOADING....<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>container<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>smallbtn<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>Small<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>normalbtn<span class=\"token punctuation\">'</span></span><span class=\"token punctuation\">&gt;</span></span>Normal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">&gt;</span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">&gt;</span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">&gt;</span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">&gt;</span></span></code></pre>\n                    </div>\n                  </div>\n                  <div class=\"e-item\" id=\"e-content-bh06x_2\" role=\"tabpanel\" aria-labelledby=\"e-item-bh06x_2\">\n                    <div class=\"gatsby-highlight\" data-language=\"css\">\n                      <pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">#container</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">visibility</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">#loader</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #008cff<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 40px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> 45%<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 30%<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token selector\">button</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 25px 5px 20px 20px<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span></code></pre>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"copy-tooltip e-control e-tooltip e-lib\">\n                  <div class=\"e-icons copycode\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"e-item\" id=\"e-content-a7keh_1\" role=\"tabpanel\" aria-labelledby=\"e-item-a7keh_1\"></div>\n          </div>\n        </div>\n        <h2 id=\"see-also\"><a class=\"anchor\" href=\"#see-also\" aria-hidden><svg aria-hidden=\"true\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\">\n              <path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path>\n\n            </svg></a>See Also</h2>\n        <ul>\n          <li><a href=\"/documentation/button/how-to/customize-button-appearance/\">Customize Button\n              appearance</a></li>\n          <li><a href=\"/documentation/button/how-to/create-a-block-button/\">How to create block\n              button</a></li>\n          <li><a href=\"/documentation/button/how-to/repeat-button/\">How to create repeat button</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"layout__NavButtons-sc-1t3oqgw-1 diJUVI\" id=\"nav-buttons\">\n        <div class=\"layout__NavButton-sc-1t3oqgw-2 fQlslk\" id=\"prev-button\"><a id=\"prev-link\" href=\"/documentation/button/getting-started/\">\n            <div class=\"doc-icons icon-prev_icon nav-prev-icon\"></div>\n            <div class=\"nav-prev-text\">Button / Getting Started</div>\n          </a></div>\n        <div class=\"layout__NavButton-sc-1t3oqgw-2 fQlslk\" id=\"next-button\"><a id=\"next-link\" href=\"/documentation/button/how-to/add-link-to-a-button/\">\n            <div class=\"doc-icons icon-next_icon nav-next-icon\"></div>\n            <div class=\"nav-next-text\">Button / Add link to a Button</div>\n          </a></div>\n      </div>\n      <div id=\"doc-footer\">\n        <div id=\"footer-feedback\">\n          <div class=\"feedback-ques\">\n            <div class=\"feedback-ques-text\">Is this page helpful?</div>\n            <div class=\"feedback\" id=\"feedback-down\">\n              <div class=\"feedback-down-icon\"></div>\n              <div class=\"feedback-down-text\">No</div>\n            </div>\n            <div class=\"feedback\" id=\"feedback-up\">\n              <div class=\"feedback-up-icon\"></div>\n              <div class=\"feedback-up-text\">Yes</div>\n            </div>\n          </div>\n        </div>\n        <div id=\"footer-copyright\"><a id=\"copyright\" href=\"http://www.syncfusion.com/copyright\" target=\"_blank\">Copyright © 2001 - <span id=\"copyright-year\"> <!--DevSkim: ignore DS137138 until 2020-03-07 -->\n              <!-- -->2020</span> Syncfusion Inc. All Rights Reserved</a></div>\n      </div>\n    </div>\n    <div class=\"layout__RightToc-sc-1t3oqgw-0 ixCaAR\">\n      <div id=\"doc-right-toc\"><span>Contents</span>\n        <ul>\n          <li class=\"doc-anchor-h2 select\"><a href=\"#button-styles\">Button styles</a></li>\n          <li class=\"doc-anchor-h2\"><a href=\"#button-types\">Button types</a></li>\n          <li class=\"doc-anchor-h3\"><a href=\"#basic-types\">Basic types</a></li>\n          <li class=\"doc-anchor-h3\"><a href=\"#flat-button\">Flat Button</a></li>\n          <li class=\"doc-anchor-h3\"><a href=\"#outline-button\">Outline Button</a></li>\n          <li class=\"doc-anchor-h3\"><a href=\"#round-button\">Round Button</a></li>\n          <li class=\"doc-anchor-h3\"><a href=\"#toggle-button\">Toggle Button</a></li>\n          <li class=\"doc-anchor-h2\"><a href=\"#icons\">Icons</a></li>\n          <li class=\"doc-anchor-h3\"><a href=\"#button-with-font-icons\">Button with font icons</a>\n          </li>\n          <li class=\"doc-anchor-h3\"><a href=\"#button-with-svg-image\">Button with SVG image</a></li>\n          <li class=\"doc-anchor-h2\"><a href=\"#button-size\">Button size</a></li>\n          <li class=\"doc-anchor-h2\"><a href=\"#see-also\">See Also</a></li>\n        </ul>\n      </div>\n    </div><button class=\"back-to-top\" id=\"scroll-top\" style=\"display: none;\"><span id=\"icon-move-top\"></span></button>\n  </div>\n</template>\n";});;
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
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Boolean)
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
define('text!getting-started.html',[],function(){return "<template>\n  <require from=\"./json-stringify-value-converter\"></require>\n\n  <h2 class=\"sidebar-heading\"> Responsive Sidebar With Treeview</h2>\n    <p class=\"paragraph-content\">This is a graphical aid for visualising and categorising the site, in the\n        style of an expandable and collapsable treeview component. It auto-expands to display the node(s),\n        if any, corresponding to the currently viewed title, highlighting that node(s) and its ancestors.\n        Load-on-demand when expanding nodes is available where supported (most graphical browsers), falling\n        back to a full-page reload. MediaWiki-supported caching, aside from squid, has been considered so\n        that unnecessary re-downloads of content are avoided where possible. The complete\n        expanded/collapsed state of the treeview persists across page views in most situations.</p>\n    <div class=\"line\"></div>\n\n\n    <h1>Hello, this is the dev app for plugin au-ej2-plugin</h1>\n    <p>This dev app is bundled to scripts/ folder (ignored in .gitignore). If you commit the bundle files to github, this app can serve as a <a href=\"https://pages.github.com\" target=\"_blank\">github page</a>!</p>\n\n    <p>Please read the <a href=\"README.md\">README</a> file in your project for more information.</p>\n\n    <hr>\n\n    <div>\n\n      <div>\n        <ej-drop-down-list index=\"1\">\n          <option value=\"0\">Huy</option>\n          <option value=\"1\">Fuck</option>\n          <option value=\"2\">Pizda</option>\n        </ej-drop-down-list>\n      </div>\n    </div>\n\n    <div style=\"width: 300px;\">\n      <hr>\n        <h2>Custom element \"ej-autocomplete\"</h2>\n        <div>\n          <ej-autocomplete  data-source.bind=\"acData\"\n                            text.bind=\"textFromAutoComplete\"\n                            value.bind=\"valueFromAutoComplete\"\n                            placeholder=\"e.g., Anne Dodsworth\"\n                            fields='{ \"value\": \"Name\" }'>\n            <ej-header-template>\n              <div class=\"header\"> <span>Photo</span> <span class=\"info\">Employee Info</span></div>\n            </ej-header-template>\n            <ej-item-template>\n              <div><img class=\"empImage\" src=\"//ej2.syncfusion.com/demos/src/auto-complete/Employees/${Eimg}.png\" alt=\"employee\"/>\n                <div class=\"ename\"> ${Name} </div><div class=\"job\"> ${Designation} </div> <div class=\"job\"> — <span>${Designation}</span></div></div>\n            </ej-item-template>\n          </ej-autocomplete>\n        </div>\n        <div>\n          <p>Text: ${textFromAutoComplete}</p>\n          <p>Value ${valueFromAutoComplete | jsonStringify}</p>\n        </div>\n    </div>\n    <hr>\n\n\n    <h2>Custom element \"ej-button\"</h2>\n    <ej-button primary=\"true\" content.bind=\"message\"></ej-button>\n    <ej-button primary.bind=\"isPrimary\" content=\"message\"></ej-button>\n\n    <h2>Custom element \"ej-checkbox\"</h2>\n    <ej-checkbox checked.two-way=\"isPrimary\" label=\"${isPrimary}\" disabled.two-way=\"isDisabled\"></ej-checkbox>\n    <ej-checkbox checked.two-way=\"isDisabled\" label=\"Disable checkbox\"></ej-checkbox>\n    <h2>Custom element \"ej-radio-button\"</h2>\n    <div><ej-radio-button name=\"group1\" position=\"After\" label=\"Vasya\" checked=\"true\"></ej-radio-button></div>\n    <div><ej-radio-button name=\"group1\" position=\"Before\" css-class=\"e-info\" label=\"Petya\" disabled.bind=\"isDisabled\"></ej-radio-button></div>\n\n    <div>\n      <form>\n        <h4>Products</h4>\n        <div repeat.for=\"product of products\">\n          <ej-radio-button type=\"radio\" enable-rtl.to-view=\"isRTL\" name=\"group4\" label=\"${product}\" disabled.bind=\"isDisabled\"\n                  value.bind=\"product\" checked.bind=\"selectedProduct\"></ej-radio-button>\n\n        </div>\n        <br>\n        Selected product: ${selectedProduct}\n        <br>\n        <ej-checkbox checked.two-way=\"isRTL\" label=\"Enable RTL\"></ej-checkbox>\n      </form>\n    </div>\n</template>\n";});;
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