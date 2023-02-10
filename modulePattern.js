// Module Pattern using Object Literal Notation
const myModule = {
    _privateVariable: "This is private variable",
    publicVariable: "This is public variable",

    _privateMethod: function () {
        console.log(this._privateVariable);
    },

    publicMethod: function () {
        this._privateMethod();
    }
}

// Module Pattern using IIFEs

const myModule1 = (function () {
    let _privateVariable = "This is a private variable";
    let publicVariable = "This is a public variable";

    function _privateMethod() {
        this.console.log(_privateVariable);
    }
    function publicMethod() {
        _privateMethod();
    }
    return {
        publicVariable, 
        publicMethod
    }
})();
