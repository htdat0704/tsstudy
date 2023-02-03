// VARIABLES
// var string
var string1:string = "string";
console.log(string1);

// number
var number:number = 2;
console.log(number);

// Tuple
var tuple:[string,number];
tuple = ["abc",1];
console.log(tuple[0]);
console.log(tuple[1]);

// Enum
enum City {HaNoi = "HaNoi", HoChiMinh = "HoChiMinh", DaNang = "DaNang"};
let cityValue: City = City.HoChiMinh;
console.log(cityValue)

// Array
let listNumber: number[] = [1,2,3,4,5];
let listArray: string[] = ["1","b","c"];
console.log(listArray)
console.log(listNumber)

let listCombined : (string | number)[] = [1,2,3,"abc","false"];
for(var index in listCombined) // sử dụng for in
{ 
    console.log(listCombined[index]); 
}

// Any
let varAny : any;
varAny = 2;
varAny = "23";
varAny = false;
varAny = [1,2,3,4];
varAny = {
    id:1,
    name: "Dat",
    wakeUp: () => {
        console.log("wakeUp");
    }
}
varAny.wakeUp()
//Anonymouse Function
let sum = (a: number, b: number) : number => a + b; 

console.log(sum(3,4))


// function with no parameters

let hello = (name?:string) => {
    if(name){
        console.log("hello " + name)
    }else {
        console.log("Login now")
    }
}

hello()
hello("Dato")