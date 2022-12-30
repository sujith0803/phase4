var Demo = /** @class */ (function () {
    function Demo() {
        console.log("hi");
    }
    Demo.prototype.Display = function () {
        console.log("hello");
    };
    return Demo;
}());
var d = new Demo();
d.Display();
