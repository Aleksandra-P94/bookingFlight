import style from "./scss/index2.scss";
import '../vendor/bootstrap-4.5.0/scss/bootstrap.scss';
import icons from "../assets/img/airplane3.jpg";





document.getElementById("from").innerHTML=localStorage.getItem("origin");
document.getElementById("to").innerHTML=localStorage.getItem("destination");

//flights
let theDeparture =[]; 
let theArrival =[]; 
let theDuration =[]; 
let theHour=[]; 
let thePrice=[];

function checkFlight(){
    let originV = localStorage.getItem("origin");
    let destinationV = localStorage.getItem("destination");
    console.log(originV, destinationV);
    if (originV == "Berlin"){
        
    }

};
checkFlight();

fetch("/airports_flights.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function (data) {
            
        console.log(data.Berlin);

        data.Berlin.forEach(function (thePrice) {
            console.log(thePrice.price);   

            
                document.getElementById("price").innerHTML = `<tr> ${thePrice.price} </tr>`;
            }) ;
        data.Berlin.forEach(function (theArrival) {
            console.log(theArrival.arrival)
            for (var i=0; i < data.length; i++){
                document.getElementsByClassName("arrival").innerHTML += `<tr> ${theArrival.arrival} </tr>`;
            }});
        data.Berlin.forEach(function (theDuration) {    
             console.log(theDuration.duration)
             for (var i=0; i < data.length; i++){
                document.getElementsByClassName("duration").innerHTML += `<tr> ${theDuration.duration} </tr>`;
            }});
        data.Berlin.forEach(function (theHour) {     
             console.log(theHour.hour)
             for (var i=0; i < data.length; i++){
                document.getElementsByClassName("hour").innerHTML += `<tr> ${theHour.hour} </tr>`;
            }});
        data.Berlin.forEach(function (theDeparture) {
             console.log(theDeparture.departure) 
             for (var i=0; i < data.length; i++){
                document.getElementsByClassName("departure").innerHTML += `<tr> ${theDeparture.departure} </tr>`;
            }});

             //document.getElementById("price").innerHTML += `<tr> ${thePrice.price} </tr>`;
     
    




//fetch("/airports_flights.json")
    //.then(function(resp){
   //     return resp.json();
   // })
  //  .then(function (data) {
            
   //     console.log(data);
    //     data.forEach(function (thePrice) {
    //         console.log(thePrice.price);
    //         document.getElementById("price").innerHTML += `<tr> ${thePrice.price} </tr>`;
    // }
    //)

//})
        })