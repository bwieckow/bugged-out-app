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
var login_service_1 = require("../service/login.service");
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginService = loginService;
        this.users = [];
        this.isWrongCredentials = true;
        this.isLogged = false;
    }
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.loginService.authenticate(this.loginForm.value['email'], this.loginForm.value['password'])) {
            this.router.navigate(['/bugs']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map