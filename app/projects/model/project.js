"use strict";
var Project = (function () {
    function Project(id, name, status, description, bugs) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.description = description;
        this.bugs = bugs;
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map