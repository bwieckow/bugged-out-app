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
//This is feature module
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var register_routing_module_1 = require('./register-routing.module');
var forms_1 = require('@angular/forms');
//Component
var register_component_1 = require('./component/register.component');
//Service
var user_service_1 = require('../user/service/user.service');
var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                register_routing_module_1.RegisterRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                register_component_1.RegisterComponent
            ],
            exports: [],
            providers: [
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterModule);
    return RegisterModule;
}());
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map