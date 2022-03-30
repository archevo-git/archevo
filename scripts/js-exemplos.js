document.onload(alert("Nessa página estão alguns exemplos de HTML5!"));

//------------------SELECIONANDO ELEMENTOS----------------------------
function getElementById_ex1(){
    let el = document.getElementById("h1");
    alert("Título Principal: " + el.innerHTML);
}

function getElementById_ex2(){
    let el = document.getElementById("link");
    el.src = "style/style2.css";
}

//Alterando atributos
function getElementById_ex3(){
    let el = document.getElementById("img-#");
    el.setAttribute("src", "#");
    alert(el.getAttribute("src"));
}

//Pegando um elemento pelo ID e alterando seu valor
function querySelector_ex1(){
    let el = document.querySelector("#p-mudar-1");
    el.innerHTML = "Parágrafo alterado!";
}

//Pegando um parágrafo específico que tem mais de uma classe
function querySelector_ex2(){
    let el = document.querySelector("p.info.importante");
    el.innerHTML = "Parágrafo alterado!";
}

//Pegando um link e alterando seu atributo href
function querySelector_ex3(){
    let el = document.querySelector("a");
    alert("Diretório do Arquivo 1: " + el.href);
    el.href = "#";
    alert("Diretório do Arquivo 2: " + el.href);
}

function querySelector_ex4(){
    let el = document.querySelector("header");
    let todosAtributos = el.getAttribute();
    alert("Todos Atributos do <header>: " + todosAtributos);
}

function getElementsByTagName_ex1(){
    let el = document.getElementsByTagName("li");
    alert("Elementos: " + el);
}

function getElementsByTagName_ex2(){
    let el = document.getElementsByTagName("li");
    alert("Elemento 1: " + el[0].innerHTML);
}

//Pegando elementos de 2 classes diferentes
function getElementsByClassName_ex1(){
    let el = document.getElementsByClassName("urgente importante");
    alert("Quantidade de elementos na lista: " + el.length);    
}

//Pegando todos elementos de seletores diferentes
function querySelectorAll_ex2(){
    let el = document.querySelectorAll(".classe1, #1, button");
    alert(el[2].innerHTML);
}

//Adicionar uma classList
function classList_ex1(){
    let el = document.querySelector("p");
    el.classList.add("bg-dark", "font-white");
}

//Remover uma classList
function classList_ex2(){
    let el = document.querySelector("p");
    el.classList.remove("bg-dark", "font-white");
}

//Alternar entre adicionar ou remover classes
function classList_ex3(){
    let el = document.querySelector("p");
    el.classList.toggle("bg-dark", "font-white");
}

//---------------------EVENTOS----------------------------------
/*--geo-location-ex1--*/
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

/*--drag-and-drop-ex1--*/
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*--web-worker-ex1--*/
var w;
function startWorker() {
    alert("Start!");     
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker(timedCount());
        }
        w.onmessage = function(event) {
        document.getElementById("result").innerHTML = event.data;
    };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}