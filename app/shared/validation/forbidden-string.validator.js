"use strict";
function forbiddenStringValidator(strReg) {
    return function (control) {
        var str = control.value;
        var invalid = strReg.test(str); //Does the parameter that we are passing in - str - match the pattern of regular expression - strReg
        return invalid ? { 'forbiddenString': { str: str } } : null;
    };
}
exports.forbiddenStringValidator = forbiddenStringValidator;
//# sourceMappingURL=forbidden-string.validator.js.map