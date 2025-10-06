// console.log('hii this is my first javascrpit code')
// ----globally scoped var
var age=50;
if(true)
{
    console.log(age);
}
//funtion scoped var
//example 1
function abc()
{
    var name='mahak';
    console.log(name);
}
abc();
//funtion scoped var
//example 2
function XYZ()
{
    if(true)
    {
        var age=21;
    }
    console.log(age);
}
XYZ();

//var is not blocked scoped


function YZ()
{
    if(true)
    {
        var age3=21;
        console.log(age3);
    }
     console.log(age3);
}
//accesible both ways
YZ();




//var reassignment and redifend
//reassignmnet
var num=25;
console.log(num);
num=29;
console.log(num);
//redefine
var x=100;
console.log(x);
var x=900;
console.log(x);


//let
//let if block scoped
//let example 1
//this will throw error
//
// function XY()
// {
//     if(true)
//     {
//         let age1=21;
//     }
//     console.log(age1);
// }
// XY();
//

//let reassignmnt ..redefine is not allowed in let 

let parul='university';
console.log(parul);
parul='college';
console.log(parul);

//const doest not allow reassignment and redefine both


