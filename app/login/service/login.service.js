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
var firebase_config_service_1 = require('../../core/service/firebase-config.service');
var user_service_1 = require('../../user/service/user.service');
var LoginService = (function () {
    function LoginService(fireService, userServive) {
        var _this = this;
        this.fireService = fireService;
        this.userServive = userServive;
        this.usersDbRef = this.fireService.database.ref('/users'); //We can also do this *.ref().child('bugs') -- *ref() with empty
        //brackets points to root
        this.users = [];
        this.isLogged = false;
        this.userServive.getUsers().subscribe(function (user) {
            _this.users.push(user);
        }, function (err) {
            console.error("Unable to get added users - ", err);
        });
    }
    LoginService.prototype.authenticate = function (email, password) {
        var _this = this;
        this.users.forEach(function (user) {
            if (user.email == email && user.password == password) {
                _this.isLogged = true;
            }
        });
        return this.isLogged;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService, user_service_1.UserService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map