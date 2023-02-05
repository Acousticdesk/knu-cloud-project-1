"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var collections_module_1 = require("./collections/collections.module");
var remarks_module_1 = require("./remarks/remarks.module");
var users_module_1 = require("./users/users.module");
var user_db_entity_1 = require("./users/entities/user.db-entity");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                collections_module_1.CollectionsModule,
                remarks_module_1.RemarksModule,
                users_module_1.UsersModule,
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    entities: [user_db_entity_1.User]
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map