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
var bug_service_1 = require("../service/bug.service");
var BugListComponent = (function () {
    function BugListComponent(bugService) {
        this.bugService = bugService;
        this.bugs = [];
    }
    BugListComponent.prototype.ngOnInit = function () {
        this.getAddedBugs();
        this.getUpdatedBugs();
    };
    BugListComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this.bugService.getAddedBugs()
            .subscribe(function (bug) {
            _this.bugs.push(bug);
        }, function (err) {
            console.error("Unable to get added bugs - ", err);
        });
    };
    BugListComponent.prototype.getUpdatedBugs = function () {
        var _this = this;
        this.bugService.changedListener()
            .subscribe(function (updatedBug) {
            //BELOW: we are trying to get an index for the bug that matches our updated bug based on id value
            //on array we use map to go throug every element in our array and it returns everything it finds as a array
            //it looks for the element with value 'updatedBug['id']' of any property
            var bugIndex = _this.bugs.map(function (index) { return index.id; }).indexOf(updatedBug['id']);
            _this.bugs[bugIndex] = updatedBug;
        }, function (err) {
            console.error("Unable to get updated bug - ", err);
        });
    };
    BugListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-list',
            templateUrl: 'bug-list.component.html',
            styleUrls: ['bug-list.component.css']
        }), 
        __metadata('design:paramtypes', [bug_service_1.BugService])
    ], BugListComponent);
    return BugListComponent;
}());
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug-list.component.js.map