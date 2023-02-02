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
exports.RemarksController = void 0;
var common_1 = require("@nestjs/common");
var remarks_service_1 = require("./remarks.service");
var create_remark_dto_1 = require("./dto/create-remark.dto");
var update_remark_dto_1 = require("./dto/update-remark.dto");
var RemarksController = /** @class */ (function () {
    function RemarksController(remarksService) {
        this.remarksService = remarksService;
    }
    RemarksController.prototype.create = function (createRemarkDto) {
        return this.remarksService.create(createRemarkDto);
    };
    RemarksController.prototype.findAll = function () {
        return this.remarksService.findAll();
    };
    RemarksController.prototype.findOne = function (id) {
        return this.remarksService.findOne(+id);
    };
    RemarksController.prototype.update = function (id, updateRemarkDto) {
        return this.remarksService.update(+id, updateRemarkDto);
    };
    RemarksController.prototype.remove = function (id) {
        return this.remarksService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_remark_dto_1.CreateRemarkDto]),
        __metadata("design:returntype", void 0)
    ], RemarksController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RemarksController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], RemarksController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_remark_dto_1.UpdateRemarkDto]),
        __metadata("design:returntype", void 0)
    ], RemarksController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], RemarksController.prototype, "remove", null);
    RemarksController = __decorate([
        (0, common_1.Controller)('remarks'),
        __metadata("design:paramtypes", [remarks_service_1.RemarksService])
    ], RemarksController);
    return RemarksController;
}());
exports.RemarksController = RemarksController;
//# sourceMappingURL=remarks.controller.js.map