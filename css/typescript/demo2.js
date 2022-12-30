var Demo3 = /** @class */ (function () {
    function Demo3(id, name, age, pan, desig) {
        if (desig === void 0) { desig = "GET"; }
        console.log("ID :" + id);
        console.log("Name :" + name);
        console.log("Age : " + age);
        console.log("PAN : " + pan);
        console.log("Desig :" + desig);
    }
    return Demo3;
}());
var d3 = new Demo3(100, "Thanesh", 35, "ABCD1234", "Dev");
var d4 = new Demo3("TCS100", "Thanesh", 35, "ABCD1234");
var d5 = new Demo3("TCS200", "Ramesh", 25);
