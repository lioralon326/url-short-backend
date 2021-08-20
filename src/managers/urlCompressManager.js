"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlCompressManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
let UrlCompressManager = class UrlCompressManager {
    constructor() {
        this.activeDurationSeconds = 60 * 60 * 24;
    }
    async getAll() {
        return this.redisProvider.scanKeysValues("*");
    }
    async compressUrl(url) {
        const compressedUrl = await this.compressUrlService.getRandomUrl();
        await this.redisProvider.setWithExpire(compressedUrl, url, this.activeDurationSeconds);
        return compressedUrl;
    }
};
tslib_1.__decorate([
    inject_1.inject()
], UrlCompressManager.prototype, "redisProvider", void 0);
tslib_1.__decorate([
    inject_1.inject()
], UrlCompressManager.prototype, "compressUrlService", void 0);
UrlCompressManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], UrlCompressManager);
exports.UrlCompressManager = UrlCompressManager;
//# sourceMappingURL=urlCompressManager.js.map