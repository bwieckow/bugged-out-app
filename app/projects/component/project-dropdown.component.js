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
var project_service_1 = require('../service/project.service');
var ProjectDropdownComponent = (function () {
    function ProjectDropdownComponent(projectService) {
        this.projectService = projectService;
        this.projects = [];
        this.dropdownBtn = "Select project";
        this.projectDesc = "";
        this.projectId = "";
    }
    ProjectDropdownComponent.prototype.ngOnInit = function () {
        this.getAddedProjects();
        this.getUpdatedProjects();
    };
    ProjectDropdownComponent.prototype.getAddedProjects = function () {
        var _this = this;
        this.projectService.getAddedProjects()
            .subscribe(function (project) {
            _this.projects.push(project);
        }, function (err) {
            console.error("Unable to get added bugs - ", err);
        });
        console.log("PROJECTS: ");
        console.log(this.projects);
    };
    ProjectDropdownComponent.prototype.getUserProjects = function () {
        // this.projectService.getAddedProjects()
        //     .subscribe(bug => {
        //         this.projects.push(bug);
        //     },
        //     err => {
        //         console.error("Unable to get added bugs - ", err);
        //     });
    };
    ProjectDropdownComponent.prototype.getUpdatedProjects = function () {
        // this.projectService.changedListener()
        //     .subscribe(updatedProject => {
        //         //BELOW: we are trying to get an index for the bug that matches our updated bug based on id value
        //         //on array we use map to go throug every element in our array and it returns everything it finds as a array
        //         //it looks for the element with value 'updatedBug['id']' of any property
        //         const projectIndex = this.projects.map(index => index.id).indexOf(updatedProject['id']);
        //         this.projects[projectIndex] = updatedProject;
        //     },
        //     err => {
        //         console.error("Unable to get project bug - ", err);
        //     });
    };
    ProjectDropdownComponent.prototype.selectProject = function (project) {
        this.dropdownBtn = project.name;
        this.projectDesc = project.description;
        this.projectId = project.id;
    };
    ProjectDropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-dropdown',
            templateUrl: 'project-dropdown.component.html',
            styleUrls: ['project-dropdown.component.css']
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectDropdownComponent);
    return ProjectDropdownComponent;
}());
exports.ProjectDropdownComponent = ProjectDropdownComponent;
//# sourceMappingURL=project-dropdown.component.js.map