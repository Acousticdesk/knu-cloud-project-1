"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsService = void 0;
var common_1 = require("@nestjs/common");
var CollectionsService = /** @class */ (function () {
    function CollectionsService() {
    }
    CollectionsService.prototype.create = function (createCollectionDto) {
        return 'This action adds a new collection';
    };
    CollectionsService.prototype.findAll = function () {
        return "This action returns all collections";
    };
    CollectionsService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " collection");
    };
    CollectionsService.prototype.update = function (id, updateCollectionDto) {
        return "This action updates a #".concat(id, " collection");
    };
    CollectionsService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " collection");
    };
    CollectionsService = __decorate([
        (0, common_1.Injectable)()
    ], CollectionsService);
    return CollectionsService;
}());
exports.CollectionsService = CollectionsService;
//# sourceMappingURL=collections.service.js.map