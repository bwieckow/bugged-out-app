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
var forms_1 = require('@angular/forms');
var project_service_1 = require('../service/project.service');
var project_1 = require("../model/project");
var constants_1 = require('../../shared/constant/constants');
var forbidden_string_validator_1 = require('../../shared/validation/forbidden-string.validator');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(formBuilder, projectService) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.modalId = "projectModal";
        this.statuses = constants_1.STATUS;
        this.severities = constants_1.SEVERITY;
        this.statusArr = [];
        this.severityArr = [];
        this.currentProject = new project_1.Project("", "", "", "", null);
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.statusArr = Object.keys(this.statuses).filter(Number); //We are changing whole Object this.statuses to an Array - console.log(this.statuses) if you don't know/remember why
        this.severityArr = Object.keys(this.severities).filter(Number); // *.filter(Number) takes only those which are type of number - so first 5 in this case
        this.configureForm();
    };
    ProjectDetailComponent.prototype.configureForm = function (project) {
        if (project) {
            this.currentProject = new project_1.Project(project.id, project.name, project.status, project.description, project.bugs);
        }
        /*this.bugForm = new FormGroup({                                                                            // i means ignore the case
            title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),              //The 'title' matches 'formControlName' property in *.html file and so on
            status: new FormControl(1, Validators.required),                  //'[]' provides an array of validators
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        });*/
        this.projectForm = this.formBuilder.group({
            name: [this.currentProject.name, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(/puppy/i)]],
            status: [this.currentProject.status, forms_1.Validators.required],
            description: [this.currentProject.description, [forms_1.Validators.required]]
        });
    };
    ProjectDetailComponent.prototype.submitForm = function () {
        this.currentProject.name = this.projectForm.value["name"];
        this.currentProject.status = this.projectForm.value["status"];
        this.currentProject.description = this.projectForm.value["description"];
        if (this.currentProject.id) {
            this.updateProject();
        }
        else {
            this.addProject();
        }
    };
    ProjectDetailComponent.prototype.addProject = function () {
        this.projectService.addProject(this.currentProject);
    };
    ProjectDetailComponent.prototype.updateProject = function () {
        this.projectService.updateProject(this.currentProject);
    };
    ProjectDetailComponent.prototype.freshForm = function () {
        this.projectForm.reset({ status: this.statuses.Logged }); //Only 'reset()' will reset all values, although severity and status which we dont want to
        this.cleanProject();
        // TODO: Delete below line
        console.log("ADD PROJECT");
    };
    ProjectDetailComponent.prototype.cleanProject = function () {
        this.currentProject = new project_1.Project(null, "", "", "", null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectDetailComponent.prototype, "currentProject", void 0);
    ProjectDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-detail',
            templateUrl: 'project-detail.component.html',
            styleUrls: ['project-detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, project_service_1.ProjectService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map