//hum nay class 3 ma function para. kay hum function ko onclick par work karwa sakty hai.prompt sy bi hum kara sakty hai etc.or aj hum daka kay value lay kar os value ko pass karwa sakty hai function may . 
function toMiles(value){
    var km = value;
    var result = km * 0.621371;
    document.getElementById("result").innerHTML="This is a result "  + result;

}
//toMiles(3)
function alertUserName(value1,value2){    //yeha par hum nay bracket ma value laki hai jis ko hum nachy use kar rahy hai. jasy ("sheikh","Usama")
    var firstName =value1
    var lastName = value2
    var fullName = firstName + lastName;
    alert('User Full Name :' +fullName)
}
//alertUserName("Mohsin"," Mustafa") //Yeha par hum bracket may jo bi laky gy wo hum ko alert ma show ho ga 
function addTwoNumber(value1,value2){
    var num1 =value1
    var num2 = value2
    var sum = num1 + num2
    document.getElementById("result").innerHTML="sum ="+ sum
}
//addTwoNumber(10,3) 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Equality operator

console.log("1" == 2) //Equailty operator
console.log("1" === 2) //Not Equailty operator
console.log("1" != 2) //identity operator
console.log("2" !== 2)//Not Equailty with identity
console.log(2 > 1) //greater than
console.log(1 < 2)// less than
console.log(1 >= 2)//greater than or equal to
console.log(1 <= 2)//less than or equal to
console.log(typeof 2)

//condition operator

if(2 >= 2 || 2 < 2) {
    console.log("if condition ture with OR Operator")
}
if(2 >= 2 && 2 <= 2) {
    console.log("if condition ture with AND Operator")
}
if("2" != 2 && 2 <= 2) {
    console.log("if condition ture with  NOT Equal Operator")
}


//Data Types:

// 1.String

 console.log("Mohsin")

 //2.Number

 console.log(5)

 //3.Boolean

 console.log( true || false)

 //4.undefined

 console.log(undefined) 
//Examlpe:
var Mohsin;     //var agar hum declared kar dy par abi tak hum nay os ki value set ni ki. jasy var Mohsin =    ;   is taraha sy to ye undefined error  ay ga.
console.log(Mohsin)

//5.Null  //hum chahty hai kay kay hum ek variable decleraed kary  lakin os ki value jo hai  na string ho na number ho na kwe boolean ho na hi undefined ho.to hum phair os ko null kar daty hai.

var Mohsin = null; //Hum null kwe use karty hai. hum is ki base par bhot sari condition laga rahy hoty hai.sometime ap ki website par kabi ap work kary or undefined a jay to ap ki web site hi pori crush ho jati hai is lay hum condition lagaty hai kay agar ye null hoo tab bi ye work kar jy 
console.log(Mohsin)

//6.Function 
                           //Contatenation  text string 
document.getElementById("btn").onclick = function(){
    var massage = "Thank you ";
    var  name = "Mohsin";
    var banger = "!"
    //alert(massage + name + banger )
    toastifySuccess(massage + name + banger )

}
 

//7.Array 
 
var cities = [];


//8.Object
 
var faisalabad = {
    area :123456,
    province : "",
    popualtion : 123456,
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Chapter No 9-10  Prompt and if  Statement

myButton.onclick=function(){   //hum pachy asy lakty a rahy hai kay document.getElementById(" ").onclick= function(){ } is tarha sy.lakin hum singal id ko target kary howy onclick par bi function ko use kar sakty hai is sy hamra code kam lagta hai or agy agy or bi short hand properites use ho ki sab ki working same ho gi saab code short hoo ga.  
    var fName =  prompt("Your Name")
    //alert("Good Morning " + fName) 
    if(fName == "Mohsin"){

        document.getElementById("result").innerHTML= fName
    }

}

//Chapter No 11   Comparsion Operator

myButton1.onclick =function(){
    var num1 = 16;
    var num2 = 15;
    
    if(num1 > num2){
        //alert("Your Condition is true")
        toastifySuccess("Your Condition is true")
    }

    var num3 = 15;
    var num4 = 15;
    if(num3 >= num4){
        // alert("Your condition is true.The 15 = 15.")
        toastifySuccess("Your condition is true.The 15 = 15.")
    }
}

//Chapter No 12   if...else and else if statements 
 
myButton2 .onclick = function(){
    var num1 = 10;
    var num2 =  15;
    if(num1 >= num2){
        // alert("Yes' Your condition is true")
        toastifySuccess("Yes' Your condition is true")
    }else if(num1 <= num2){
        // alert("Yes' Your second  condition is true")
        toastifySuccess("Yes' Your second  condition is true")
    }
    else{
        // alert("Yes' Your condition is false")
        toastifySuccess("Yes' Your condition is false")
    }

}

// chapter No 12 - 13  Testing Sets of conditions

myButton3.onclick = function(){
 
    var age = prompt("Your age ?")
    var weight = prompt("Your weight ?")

    if( age >= 18   &&   weight <= 70){
        // alert("You're a Smart Man.")
        toastifySuccess("You're a Smart Man.")
    }
    else if(age >= 18  && weight > 70){    
        // alert("You' re a Fat Guy.")
        toastifySuccess("You' re a Fat Guy.")
    }
    else{                         
        // alert("You' re a Baby.")
        toastifySuccess("You' re a Baby.")
    }
                        //note: jab hum age hi kam dy rahy hai to os ko weigt ni pochna cahiy.to is kay lay hum nested if statement use karty hai.jo kay nachy bataya hai.

}
 

//chapter No 14 if statement nested

myButton4.onclick =function(){

    var age = prompt("Your age ?")
    if( age  >= 18 ){
      
        var weight = prompt("Your weight ?")
        
        if(  weight <= 70) {
            // alert("You ' re a smart Man.")
            toastifySuccess("You ' re a smart Man.")
        }else{
            // alert("You ' re a  fat guy.")
            toastifySuccess("You ' re a  fat guy.")
        }

     

    }else{
        toastifySuccess("You ' re a baby")
        // alert("You ' re a baby")
    }
    
    


}
  

//Toastify 
const toastifySuccess = (msg) =>{
    Toastify({
    text: msg,
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    
  }).showToast();
} 

// clear output 
document.getElementById("Clear-output").onclick =function(){
    document.getElementById("result").innerHTML=" ";
    toastifySuccess("The output has been cleared")
    
    audio.play();

    
}
//clear statement 
document.getElementById("Clear-statement").onclick = function(){
    document.getElementById("Original").innerHTML = " ";
    toastifySuccess("The orignal statement has been cleared")
    audio.play();
}