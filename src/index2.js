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
    
    if (originV == "Berlin" && destinationV == "Warsaw"){
        fetch("/airports_flights.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function (data) {

console.log(data.BerlinWarsaw);
            let json = data.BerlinWarsaw;
            console.log(json);
            let table = document.getElementById('tbody');

            json.forEach(function (row) { 
                let tr = document.createElement('tr'); 
                tr.setAttribute('type', 'button');
                tr.setAttribute('class', 'trBody');
                tr.innerHTML += '<td>'+row.departure+'</td>' + '<td>'+ row.arrival +'</td>'+ '<td>'+ row.duration + '</td>' +'<td>' +row.hour + '</td>' + '<td>' + row.price + '</td>';
                table.append(tr);
                tr.addEventListener('click', function(tr) {
                    console.log(row);
                    localStorage.setItem('duration', row.duration);
                    localStorage.setItem('hour', row.hour);
                    localStorage.setItem('price', row.price);
                    //Select Seats   
                    let nav1 = document.getElementById('nav1');
                    let nav2 = document.getElementById('nav2');
                    let nav3 = document.getElementById('nav3');
                    document.querySelector('tbody').addEventListener('click', function(event) {
                        if(event.target.tagName.toLowerCase() === 'tr'){
                        nav1.className += "pnav1 nav-link disabled";
                        nav2.className += "pnav1 nav-link";
                        document.getElementById('chooseYourFlight').style.display = "none";
                        document.getElementById('selectSeats').style.visibility = "visible";
                        }
                    }, false);
                })
            })
        })
    } else if (originV == "Warsaw" && destinationV == "Berlin"){
        fetch("/airports_flights.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function (data) {

console.log(data.WarsawBerlin);
            let json2 = data.WarsawBerlin;
            console.log(json2);
            let table = document.getElementById('tbody');

            json2.forEach(function (row) { 
                let tr = document.createElement('tr'); 
                tr.setAttribute('type', 'button');
                tr.setAttribute('class', 'trBody');
                tr.innerHTML += '<td>'+row.departure+'</td>' + '<td>'+ row.arrival +'</td>'+ '<td>'+ row.duration + '</td>' +'<td>' +row.hour + '</td>' + '<td>' + row.price + '</td>';
                table.append(tr);
                //Select Seats   
                tr.addEventListener('click', function(tr) {
                    console.log(row);
                    localStorage.setItem('duration', row.duration);
                    localStorage.setItem('hour', row.hour);
                    localStorage.setItem('price', row.price);
                    let nav1 = document.getElementById('nav1');
                    let nav2 = document.getElementById('nav2');
                    let nav3 = document.getElementById('nav3');
                    document.querySelector('tbody').addEventListener('click', function(event) {
                        if(event.target.tagName.toLowerCase() === 'tr'){
                        nav1.className += "pnav1 nav-link disabled";
                        nav2.className += "pnav1 nav-link";
                        document.getElementById('chooseYourFlight').style.display = "none";
                        document.getElementById('selectSeats').style.visibility = "visible";
                    }
                }, false);
            })
        })
    })
    }else if (originV == "Tromso" && destinationV == "Berlin"){
    fetch("/airports_flights.json")
.then(function(resp){
    return resp.json();
})
.then(function (data) {
    console.log(data.TromsoBerlin);
    let json3 = data.TromsoBerlin;
    console.log(json3);

    let table = document.getElementById('tbody');

    json3.forEach(function (row) { 
        let tr = document.createElement('tr'); 
        tr.setAttribute('type', 'button');
        tr.setAttribute('class', 'trBody');
        tr.innerHTML += '<td>'+row.departure+'</td>' + '<td>'+ row.arrival +'</td>'+ '<td>'+ row.duration + '</td>' +'<td>' +row.hour + '</td>' + '<td>' + row.price + '</td>';
        table.append(tr);
        //Select Seats   
        tr.addEventListener('click', function(tr) {
            console.log(row);
            localStorage.setItem('duration', row.duration);
                    localStorage.setItem('hour', row.hour);
                    localStorage.setItem('price', row.price);
            let nav1 = document.getElementById('nav1');
            let nav2 = document.getElementById('nav2');
            let nav3 = document.getElementById('nav3');
            document.querySelector('tbody').addEventListener('click', function(event) {
                if(event.target.tagName.toLowerCase() === 'tr'){
                nav1.className += "pnav1 nav-link disabled";
                nav2.className += "pnav1 nav-link";
                document.getElementById('chooseYourFlight').style.display = "none";
                document.getElementById('selectSeats').style.visibility = "visible";
                }
            }, false);
            
        }, false);
    })
})
}else if (originV == "Berlin" && destinationV == "Tromso"){
    fetch("/airports_flights.json")
.then(function(resp){
    return resp.json();
})
.then(function (data) {
    console.log(data.BerlinTromso);
    let json3 = data.BerlinTromso;
    console.log(json3);

    let table = document.getElementById('tbody');

    json3.forEach(function (row) { 
        let tr = document.createElement('tr'); 
        tr.setAttribute('type', 'button');
        tr.setAttribute('class', 'trBody');
        tr.innerHTML += '<td>'+row.departure+'</td>' + '<td>'+ row.arrival +'</td>'+ '<td>'+ row.duration + '</td>' +'<td>' +row.hour + '</td>' + '<td>' + row.price + '</td>';
        table.append(tr);
        //Select Seats   
        tr.addEventListener('click', function(tr) {
            console.log(row);
            localStorage.setItem('duration', row.duration);
                    localStorage.setItem('hour', row.hour);
                    localStorage.setItem('price', row.price);
            let nav1 = document.getElementById('nav1');
            let nav2 = document.getElementById('nav2');
            let nav3 = document.getElementById('nav3');
            document.querySelector('tbody').addEventListener('click', function(event) {
                if(event.target.tagName.toLowerCase() === 'tr'){
                nav1.className += "pnav1 nav-link disabled";
                nav2.className += "pnav1 nav-link";
                document.getElementById('chooseYourFlight').style.display = "none";
                document.getElementById('selectSeats').style.visibility = "visible";
                }
            }, false);
    }, false);
})
})

}else if (originV == "Warsaw" && destinationV == "Tromso"){
    fetch("/airports_flights.json")
.then(function(resp){
    return resp.json();
})
.then(function (data) {
    console.log(data.WarsawTromso);
    let json3 = data.WarsawTromso;
    console.log(json3);

    let table = document.getElementById('tbody');

    json3.forEach(function (row) { 
        let tr = document.createElement('tr'); 
        tr.setAttribute('type', 'button');
        tr.setAttribute('class', 'trBody');
        tr.innerHTML += '<td>'+row.departure+'</td>' + '<td>'+ row.arrival +'</td>'+ '<td>'+ row.duration + '</td>' +'<td>' +row.hour + '</td>' + '<td>' + row.price + '</td>';
        table.append(tr);
        //Select Seats   
        tr.addEventListener('click', function(tr) {
            console.log(row);
            localStorage.setItem('duration', row.duration);
                    localStorage.setItem('hour', row.hour);
                    localStorage.setItem('price', row.price);
            let nav1 = document.getElementById('nav1');
            let nav2 = document.getElementById('nav2');
            let nav3 = document.getElementById('nav3');
            document.querySelector('tbody').addEventListener('click', function(event) {
                if(event.target.tagName.toLowerCase() === 'tr'){
                nav1.className += "pnav1 nav-link disabled";
                nav2.className += "pnav1 nav-link";
                document.getElementById('chooseYourFlight').style.display = "none";
                document.getElementById('selectSeats').style.visibility = "visible";
                }
            }, false);
    }, false);
})
})
}else if (originV == "Tromso" && destinationV == "Warsaw"){
    fetch("/airports_flights.json")
.then(function(resp){
    return resp.json();
})
.then(function (data) {
    console.log(data.TromsoWarsaw);
    let json3 = data.TromsoWarsaw;
    console.log(json3);

    let table = document.getElementById('tbody');

    json3.forEach(function (row) { 
        let tr = document.createElement('tr'); 
        tr.setAttribute('type', 'button');
        tr.setAttribute('class', 'trBody');
        tr.innerHTML += '<td>'+row.departure+'</td>' + '<td>'+ row.arrival +'</td>'+ '<td>'+ row.duration + '</td>' +'<td>' +row.hour + '</td>' + '<td>' + row.price + '</td>';
        table.append(tr);
        //Select Seats   
        tr.addEventListener('click', function(tr) {
            console.log(row);
            localStorage.setItem('duration', row.duration);
                    localStorage.setItem('hour', row.hour);
                    localStorage.setItem('price', row.price);
            let nav1 = document.getElementById('nav1');
            let nav2 = document.getElementById('nav2');
            let nav3 = document.getElementById('nav3');
            document.querySelector('tbody').addEventListener('click', function(event) {
                if(event.target.tagName.toLowerCase() === 'tr'){
                nav1.className += "pnav1 nav-link disabled";
                nav2.className += "pnav1 nav-link";
                document.getElementById('chooseYourFlight').style.display = "none";
                document.getElementById('selectSeats').style.visibility = "visible";
                }
            }, false);
    }, false);
})
})
}}
checkFlight();

let acceptSeats = document.getElementById('acceptSeats');


acceptSeats.addEventListener('click', function(){
    if (document.querySelectorAll('li.seat:checked')){
        let selected = document.querySelectorAll('input[type=checkbox]:checked');
        let array = [];
       for(let i =0; i<selected.length; i++){
           array.push(selected[i].value);
           console.log(array)
       }
       
       
            localStorage.setItem('seats', array);
            nav2.className += "pnav1 nav-link disabled";
            nav3.className += "pnav1 nav-link";
                document.getElementById('selectSeats').style.display = "none";
                document.getElementById('total').style.visibility = "visible";
                document.getElementById("departureCounry").innerHTML= "Departure: " + localStorage.getItem("origin");
                document.getElementById("arrivalCountry").innerHTML= "Arrival: " + localStorage.getItem("destination");
                document.getElementById("durationConfirm").innerHTML= "Flight duration: " + localStorage.getItem("duration");
                document.getElementById("hourConfirm").innerHTML= "Departure hour: " + localStorage.getItem("hour");
                document.getElementById("passengersConfirm").innerHTML= "Adult: " + localStorage.getItem("adult") + " Child: " + localStorage.getItem("child") + " Infant: " + localStorage.getItem("infant");
                document.getElementById("totalPrice").innerHTML= "TOTAL: " + localStorage.getItem("price")
                
                ;
               
                
                document.getElementById("seatsConfirm").innerHTML= "Your seats: " + localStorage.getItem("seats");

    }
})

//Pobranie danych do localstorage
// let origin = document.getElementById("selectCityOrigin");
// let selectOrigin = origin.options[origin.selectedIndex];
// let lastSelectedOrigin = localStorage.getItem('origin');

// if(lastSelectedOrigin){
//     origin.value = lastSelectedOrigin;
// }
// origin.onchange = function(){
//     lastSelectedOrigin = origin.options[origin.selectedIndex].value;
//     console.log(lastSelectedOrigin);
//     localStorage.setItem('origin', lastSelectedOrigin)


//Select Seats    




