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
var core_1 = require('@angular/core');
var register_service_1 = require("../service/register.service");
var user_1 = require('../../login/model/user');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, registerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.registerService = registerService;
        this.users = [];
        this.isWrongCredentials = true;
        this.isRegistered = false;
        this.currentUser = new user_1.User(null, null, null, null, null);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    RegisterComponent.prototype.configureForm = function (user) {
        if (user) {
            this.currentUser = new user_1.User(user.id, user.firstName, user.lastName, user.email, user.password);
        }
        this.registerForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            password: ['']
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.currentUser.firstName = this.registerForm.value["firstName"];
        this.currentUser.lastName = this.registerForm.value["lastName"];
        this.currentUser.email = this.registerForm.value["email"];
        this.currentUser.password = this.registerForm.value["password"];
        if (this.currentUser.id) {
        }
        else {
            this.addUser();
            this.isRegistered = true;
            this.router.navigate(['/login']);
        }
    };
    RegisterComponent.prototype.addUser = function () {
        this.registerService.addUser(this.currentUser);
    };
    RegisterComponent.prototype.updateUser = function () {
        this.registerService.updateBug(this.currentUser);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "currentUser", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-form',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, register_service_1.RegisterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map