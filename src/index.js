import style from "./scss/index.scss";
import '../vendor/bootstrap-4.5.0/scss/bootstrap.scss';
import icons from "../assets/img/airplane3.jpg"
//dodatkowy panel - passengers
var ShowSearchPassenger = document.getElementById('ShowSearchPassenger');

ShowSearchPassenger.addEventListener('click', function () {
    var x = document.getElementById("passengersAmount");

    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}); 

var switchPlus = document.getElementById('plus');
var switchMinus = document.getElementById('minus');
var defaultNumber = document.getElementById('passengers');

switchPlus.addEventListener('click', function () {
    defaultNumber.value = addOne () +1;

    if (defaultNumber.value > 9) {
        defaultNumber.value = 9;
    }
}); 

switchMinus.addEventListener(
    'click', function () {
                        defaultNumber.value = addOne () -1;
                        if (defaultNumber.value <= 0) {
                            defaultNumber.value = 0;
    }})

function addOne() {
    return parseInt(defaultNumber.value || 0, 10);
};                                                          


//FROM_TO
// function selectedValue(){
//     var e = document.getElementById("selectC1").value;
//     document.getElementById("from").innerHTML=e;
// }

//FORM



const inputName = document.getElementById("login").value;
const inputPassword = document.getElementById("password").value;
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
inputPassword.addEventListener("input", function(event)  {
    if(inputPassword.length <= 4){
        inputPassword.setCustomValidity("Password must contain at least 6 characters, including UPPER/lowercase and numbers");
    } else {
        inputPassword.setCustomValidity("");
    }
});
    var data = '{"login": "Aleksandra", "password": "123qwe", "email": "aleksandra@gmail.com" }';
    var mydata = JSON.parse(data);


