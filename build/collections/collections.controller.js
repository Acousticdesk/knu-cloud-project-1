"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsController = void 0;
var common_1 = require("@nestjs/common");
var collections_service_1 = require("./collections.service");
var create_collection_dto_1 = require("./dto/create-collection.dto");
var update_collection_dto_1 = require("./dto/update-collection.dto");
var CollectionsController = /** @class */ (function () {
    function CollectionsController(collectionsService) {
        this.collectionsService = collectionsService;
    }
    CollectionsController.prototype.create = function (createCollectionDto) {
        return this.collectionsService.create(createCollectionDto);
    };
    CollectionsController.prototype.findAll = function () {
        return this.collectionsService.findAll();
    };
    CollectionsController.prototype.findOne = function (id) {
        return this.collectionsService.findOne(+id);
    };
    CollectionsController.prototype.update = function (id, updateCollectionDto) {
        return this.collectionsService.update(+id, updateCollectionDto);
    };
    CollectionsController.prototype.remove = function (id) {
        return this.collectionsService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_collection_dto_1.CreateCollectionDto]),
        __metadata("design:returntype", void 0)
    ], CollectionsController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CollectionsController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CollectionsController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_collection_dto_1.UpdateCollectionDto]),
        __metadata("design:returntype", void 0)
    ], CollectionsController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CollectionsController.prototype, "remove", null);
    CollectionsController = __decorate([
        (0, common_1.Controller)('collections'),
        __metadata("design:paramtypes", [collections_service_1.CollectionsService])
    ], CollectionsController);
    return CollectionsController;
}());
exports.CollectionsController = CollectionsController;
//# sourceMappingURL=collections.controller.js.map