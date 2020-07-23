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
        fetch("/airports_flights.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function (data) {

console.log(data.Berlin);
            let json = data.Berlin;
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
    } else if (originV == "Warsaw"){
        fetch("/airports_flights.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function (data) {

console.log(data.Warsaw);
            let json2 = data.Warsaw;
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
    }else if (originV == "Tromso"){
    fetch("/airports_flights.json")
.then(function(resp){
    return resp.json();
})
.then(function (data) {
    console.log(data.Tromso);
    let json3 = data.Tromso;
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
};

} 
checkFlight();

let acceptSeats = document.getElementById('acceptSeats');


acceptSeats.addEventListener('click', function(){
    if (document.querySelectorAll('li.seat:checked')){
        let selected = document.querySelectorAll('li.seat:checked');
       
       
        selected.forEach(function (selected) {
            localStorage.setItem('seats', selected.textContent)
    })}
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




