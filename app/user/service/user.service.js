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
var Observable_1 = require("rxjs/Observable");
var UserService = (function () {
    function UserService(fireService) {
        this.fireService = fireService;
        this.usersDbRef = this.fireService.database.ref('/users'); //We can also do this *.ref().child('bugs') -- *ref() with empty
        //brackets points to root
        this.users = [];
        this.isLogged = false;
    }
    UserService.prototype.addUser = function (user) {
        var newUserRef = this.usersDbRef.push();
        newUserRef.set({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        })
            .catch(function (err) { return console.error("Unable to add user to firebase - ", err); });
    };
    UserService.prototype.updateUser = function (user) {
        var currentUserRef = this.usersDbRef.child(user.id);
        user.id = null;
        currentUserRef.update(user);
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.usersDbRef.on('child_added', function (user) {
                var newUser = user.val();
                newUser.id = user.key;
                obs.next(newUser);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    UserService.prototype.changedListener = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.usersDbRef.on('child_changed', function (user) {
                var updatedUser = user.val();
                updatedUser.id = user.key;
                obs.next(updatedUser);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map