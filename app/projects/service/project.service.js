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
var ProjectService = (function () {
    //brackets points to root
    function ProjectService(fireService) {
        this.fireService = fireService;
        this.projectsDbRef = this.fireService.database.ref('/projects'); //We can also do this *.ref().child('bugs') -- *ref() with empty
    }
    ProjectService.prototype.getAddedProjects = function () {
    };
    ProjectService.prototype.changedListener = function () {
    };
    ProjectService.prototype.addProject = function (project) {
        var newProjectRef = this.projectsDbRef.push();
        newProjectRef.set({
            name: project.name,
            status: project.status,
            description: project.description,
            owner: 'Bartek',
            createdDate: Date.now()
        })
            .catch(function (err) { return console.error("Unable to add bug to firebase - ", err); });
    };
    ProjectService.prototype.updateProject = function (project) {
        var currentProjectRef = this.projectsDbRef.child(project.id);
        project.id = null;
        // project.updatedBy = "Ryszard"; // TODO: In case having users
        // project.updatedDate = Date.now();
        currentProjectRef.update(project);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map