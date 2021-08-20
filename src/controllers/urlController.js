"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
let UrlController = class UrlController extends route_1.StaticController {
    async getAll() {
        return this.urlCompressManager.getAll();
    }
    async create(url) {
        return this.urlCompressManager.compressUrl(decodeURIComponent(url));
    }
};
tslib_1.__decorate([
    inject_1.inject()
], UrlController.prototype, "urlCompressManager", void 0);
tslib_1.__decorate([
    route_1.get("/")
], UrlController.prototype, "getAll", null);
tslib_1.__decorate([
    route_1.post("/:url"),
    tslib_1.__param(0, route_1.params("url"))
], UrlController.prototype, "create", null);
UrlController = tslib_1.__decorate([
    route_1.controller(),
    inject_1.singleton()
], UrlController);
exports.UrlController = UrlController;
//# sourceMappingURL=urlController.js.map