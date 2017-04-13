var demoBooleans = function () {
    console.log("\ndemoBooleans");
    var isDone = false;
    var isDone2 = true;
};
var demoNumbers = function () {
    console.log("\ndemoNumbers");
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 11;
    var octal = 484;
};
var demoStrings = function () {
    console.log("\ndemoStrings");
    var name = "bob";
    name = 'smith';
    var age = 20;
    var sentence = "Hello, my name is " + name + ".\n  I'll be " + (age + 1) + " years old next month.";
};
var demoArrays = function () {
    console.log("\ndemoArrays");
    var list = [1, 2, 3];
    var list2 = [1, 2, 3, 4,];
    var list3 = [1, 2];
};
var demoTuples = function () {
    console.log("\ndemoTuples");
    var x;
    x = ['hello', 10];
    console.log(x[0]);
    console.log(x[1]);
};
var demoEnums = function () {
    console.log("\ndemoEnums");
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
    console.log(c);
    var cName = Color[c];
    console.log(cName);
    var Months;
    (function (Months) {
        Months[Months["Jan"] = 1] = "Jan";
        Months[Months["Feb"] = 2] = "Feb";
        Months[Months["Mar"] = 3] = "Mar";
    })(Months || (Months = {}));
    ;
    var Days;
    (function (Days) {
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Fri"] = 17] = "Fri";
    })(Days || (Days = {}));
    ;
};
var demoAny = function () {
    console.log("\ndemoAny");
    var notSure = 4;
    notSure.toFixed();
    var x;
};
var demoObject = function () {
    console.log("\ndemoObject");
    var obj = 4;
};
var demoVoid = function () {
    var unusable = undefined;
    var unusable2 = null;
};
var demoTypeAssertion = function () {
    var someValue = "this is a string";
    var strLength = someValue.length;
    console.log(strLength);
    var strLength2 = someValue.length;
    console.log(strLength2);
};
demoBooleans();
demoNumbers();
demoStrings();
demoArrays();
demoTuples();
demoEnums();
demoAny();
demoObject();
demoVoid();
demoTypeAssertion();
