var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo9 = /** @class */ (function () {
    function Demo9() {
        this.name = "Thanesh";
        //private salary= 50000; it will be only for sinlge class 
    }
    return Demo9;
}());
var Demo10 = /** @class */ (function (_super) {
    __extends(Demo10, _super);
    function Demo10() {
        var _this = _super.call(this) || this;
        console.log("Name is : " + _this.name);
        return _this;
        //console.log("Salary : "+ this.salary)
    }
    return Demo10;
}(Demo9));
var d1 = new Demo10();
