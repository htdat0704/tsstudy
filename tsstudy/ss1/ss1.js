// VARIABLES
// var string
var string1 = "string";
console.log(string1);
// number
var number = 2;
console.log(number);
// Tuple
var tuple;
tuple = ["abc", 1];
console.log(tuple[0]);
console.log(tuple[1]);
// Enum
var City;
(function (City) {
    City["HaNoi"] = "HaNoi";
    City["HoChiMinh"] = "HoChiMinh";
    City["DaNang"] = "DaNang";
})(City || (City = {}));
;
var cityValue = City.HoChiMinh;
console.log(cityValue);
// Array
var listNumber = [1, 2, 3, 4, 5];
var listArray = ["1", "b", "c"];
console.log(listArray);
console.log(listNumber);
var listCombined = [1, 2, 3, "abc", "false"];
for (var index in listCombined) // sử dụng for in
 {
    console.log(listCombined[index]);
}
// Any
var varAny;
varAny = 2;
varAny = "23";
varAny = false;
varAny = [1, 2, 3, 4];
varAny = {
    id: 1,
    name: "Dat",
    wakeUp: function () {
        console.log("wakeUp");
    }
};
varAny.wakeUp();
//Anonymouse Function
var sum = function (a, b) { return a + b; };
console.log(sum(3, 4));
// function with no parameters
var hello = function (name) {
    if (name) {
        console.log("hello " + name);
    }
    else {
        console.log("Login now");
    }
};
hello();
hello("Dato");
