"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
__export(require("./base/index"));
__export(require("./dropdowns/index"));
__export(require("./inputs/index"));
function configure(config) {
    config.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./elements/ej-button'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/ej-checkbox'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/ej-radio-button')
    ]);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
