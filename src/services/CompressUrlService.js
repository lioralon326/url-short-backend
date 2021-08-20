"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressUrlService = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
let CompressUrlService = class CompressUrlService {
    constructor() {
        this.OwnedDomain = "http://srt.il";
    }
    async getRandomUrl(length = 6) {
        const guid = await utils_1.Guid.nanoid(length);
        return `${this.OwnedDomain}/${guid}`;
    }
};
CompressUrlService = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], CompressUrlService);
exports.CompressUrlService = CompressUrlService;
//# sourceMappingURL=CompressUrlService.js.map