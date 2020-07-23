import style from "./scss/index.scss";
import '../vendor/bootstrap-4.5.0/scss/bootstrap.scss';
import icons from "../assets/img/airplane3.jpg"

//dodatkowy panel - passengers
let ShowSearchPassenger = document.getElementById('ShowSearchPassenger');

ShowSearchPassenger.addEventListener('click', function () {
    let x = document.getElementById("passengersAmount");

    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}); 

let switchPlus = document.getElementById('plus');
let switchMinus = document.getElementById('minus');
let defaultNumber = document.getElementById('passengers');
let switchPlus2 = document.getElementById('plus2');
let switchMinus2 = document.getElementById('minus2');
let defaultNumber2 = document.getElementById('passengers2');
let switchPlus3 = document.getElementById('plus3');
let switchMinus3 = document.getElementById('minus3');
let defaultNumber3 = document.getElementById('passengers3');
//Dates
let today = new Date();
document.getElementById("departure").setAttribute("min", today);
let day = today.getDay();
let month =today.getMonth();
let year= today.getFullYear();

//Adults
switchPlus.addEventListener('click', function () {
    defaultNumber.value = addOne () +1;
    
    if (defaultNumber.value > 9) {
        defaultNumber.value = 9;
    }
});
switchMinus.addEventListener('click', function () {
    defaultNumber.value = addOne () -1;
    
    if (defaultNumber.value <= 0) {
        defaultNumber.value = 0;
    }})
//Children
switchPlus2.addEventListener('click', function () {
    defaultNumber2.value = addOne2 () +1;
    
    if (defaultNumber2.value > 9) {
        defaultNumber2.value = 9;
    }
    });
switchMinus2.addEventListener('click', function () {
    defaultNumber2.value = addOne2 () -1;
    
    if (defaultNumber2.value <= 0) {
        defaultNumber2.value = 0;
    }})
//Infant
switchPlus3.addEventListener('click', function () {
    defaultNumber3.value = addOne3 () +1;
            
    if (defaultNumber3.value > 9) {
        defaultNumber3.value = 9;
    }
        });
switchMinus3.addEventListener('click', function () {
    defaultNumber3.value = addOne3 () -1;
            
    if (defaultNumber3.value <= 0) {
        defaultNumber3.value = 0;
    }})

function addOne() {
    return parseInt(defaultNumber.value || 0, 10);
};                                                          
function addOne2() {
    return parseInt(defaultNumber2.value || 0, 10);
};     
function addOne3() {
    return parseInt(defaultNumber3.value || 0, 10);
};   

//confirm passengers
let confirmPassengers=document.getElementById('okButton');


confirmPassengers.addEventListener('click', function(){
    document.getElementById('passengersAmount').style.display = "none";
    let passengersAll = document.getElementById('passengersAll');
    if (defaultNumber.value>0 || defaultNumber2.value>0 || defaultNumber3.value>0){
        
         passengersAll.innerHTML= defaultNumber.value + " adult " + defaultNumber2.value + " child " + defaultNumber3.value +" infant ";
         localStorage.setItem('adult', defaultNumber.value);
         localStorage.setItem('child', defaultNumber2.value);
         localStorage.setItem('infant', defaultNumber3.value);
     } });




//zapisanie danych origin

let origin = document.getElementById("selectCityOrigin");
let selectOrigin = origin.options[origin.selectedIndex];
let lastSelectedOrigin = localStorage.getItem('origin');

if(lastSelectedOrigin){
    origin.value = lastSelectedOrigin;
}
origin.onchange = function(){
    lastSelectedOrigin = origin.options[origin.selectedIndex].value;
    console.log(lastSelectedOrigin);
    localStorage.setItem('origin', lastSelectedOrigin)
};
//zapisanie danych destination

let destination = document.getElementById("selectCityDestination");
let selectDestination = destination.options[origin.selectedIndex];
let lastSelectedDestination = localStorage.getItem('destination');

if(lastSelectedDestination){
    destination.value = lastSelectedDestination;
}
destination.onchange = function(){
    lastSelectedDestination = destination.options[destination.selectedIndex].value;
    console.log(lastSelectedDestination);
    localStorage.setItem('destination', lastSelectedDestination)
};


//FORM



const inputName = document.getElementById("login").value;
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//Email validation
inputEmail.addEventListener("input", function (event) {
    if (inputEmail.validity.typeMismatch) {
        inputEmail.setCustomValidity("It's not an e-mail address!");
    } else {
        inputEmail.setCustomValidity("");
    }
});
//Password validation
inputPassword.addEventListener("input", function (event) {
    if(inputPassword.validity.typeMismatch && length <= 4){
        inputPassword.setCustomValidity("Password must contain at least 6 characters, including UPPER/lowercase and numbers");
    } else {
        inputPassword.setCustomValidity("");
    }
});
    let data = '{"login": "Aleksandra", "password": "123qwe", "email": "aleksandra@gmail.com" }';
    let mydata = JSON.parse(data);


