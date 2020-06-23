import style from "./scss/index.scss";
import '../vendor/bootstrap-4.5.0/scss/bootstrap.scss';
import img from "../assets/img/airplane3.jpg";

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

var pass = document.getElementById("passengers");

//FROM_TO
function selectedValue(){
    var e = document.getElementById("selectC1").value;
    document.getElementById("from").innerHTML=e;
}
