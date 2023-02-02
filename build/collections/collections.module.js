"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsModule = void 0;
var common_1 = require("@nestjs/common");
var collections_service_1 = require("./collections.service");
var collections_controller_1 = require("./collections.controller");
var CollectionsModule = /** @class */ (function () {
    function CollectionsModule() {
    }
    CollectionsModule = __decorate([
        (0, common_1.Module)({
            controllers: [collections_controller_1.CollectionsController],
            providers: [collections_service_1.CollectionsService]
        })
    ], CollectionsModule);
    return CollectionsModule;
}());
exports.CollectionsModule = CollectionsModule;
//# sourceMappingURL=collections.module.js.map