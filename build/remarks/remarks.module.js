"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemarksModule = void 0;
var common_1 = require("@nestjs/common");
var remarks_service_1 = require("./remarks.service");
var remarks_controller_1 = require("./remarks.controller");
var RemarksModule = /** @class */ (function () {
    function RemarksModule() {
    }
    RemarksModule = __decorate([
        (0, common_1.Module)({
            controllers: [remarks_controller_1.RemarksController],
            providers: [remarks_service_1.RemarksService]
        })
    ], RemarksModule);
    return RemarksModule;
}());
exports.RemarksModule = RemarksModule;
//# sourceMappingURL=remarks.module.js.map