"use strict";
var User = (function () {
    function User(id, firstName, lastName, password, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map