"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
__export(require("./drop-down-base/index"));
__export(require("./drop-down-list/index"));
__export(require("./combo-box/index"));
__export(require("./auto-complete/index"));
__export(require("./multi-select/index"));
__export(require("./list-box/index"));
function configure(config) {
    config.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./auto-complete/ej-auto-complete'),
        aurelia_pal_1.PLATFORM.moduleName('./drop-down-list/ej-drop-down-list')
    ]);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
