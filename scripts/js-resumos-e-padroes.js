//Selecionando e Manipulando Elementos
function vermelho(){
    limparClasse();
    document.querySelector('#add-classes').classList.add('vermelho');
    document.querySelector('#add-classes .img-btn-color-0').src='medias/js/red-submit.gif';
    document.querySelector('#add-classes .img-btn-color-1').src='medias/js/red-submit.gif';
    document.querySelector('#add-classes .img-btn-color-2').src='medias/js/red-submit.gif';
}

function verde(){
    limparClasse();
    document.querySelector('#add-classes').classList.add('verde');
    document.querySelector('#add-classes .img-btn-color-0').src='medias/js/green-submit.gif';
    document.querySelector('#add-classes .img-btn-color-1').src='medias/js/green-submit.gif';
    document.querySelector('#add-classes .img-btn-color-2').src='medias/js/green-submit.gif';
}

function azul(){
    limparClasse();
    document.querySelector('#add-classes').classList.add('azul');
    document.querySelector('#add-classes .img-btn-color-0').src='medias/js/blue-submit.gif';
    document.querySelector('#add-classes .img-btn-color-1').src='medias/js/blue-submit.gif';
    document.querySelector('#add-classes .img-btn-color-2').src='medias/js/blue-submit.gif';
}

function limparClasse(){
    document.querySelector('#add-classes').classList.remove('verde');
    document.querySelector('#add-classes').classList.remove('azul');
}

//Loop for
function for_listandoCarros(){
    let carros = ['Ferrari','Ford','Fiat','McLaren','Suzuki','Nissan','Honda'];
    let html = '<ul>';

    for(let i in carros){
        html += '<li>' + carros[i] + '</li>';
    }
    html += '</ul>';

    document.querySelector(".for-0").style.display = 'block';
    document.querySelector(".for-0").innerHTML = html;
}

//Loop while
function while_listandoCidades(){
    let cidades = ['São Paulo','Oslo','Tóquio','Manaus'];
    let html = '<ul>';
    
    let c = 0;
    while(c < cidades.length){
        html += '<li>' + cidades[c] + '</li>'; 
        c++;
    }
    html += '</ul>';

    document.querySelector(".while-0").style.display = 'block';
    document.querySelector(".while-0").innerHTML = html;
}

//datas
function printTime() {
	
    let d = new Date();
    
    function diaSemana(){
        switch(d.getDay()){
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda';
            case 2:
                return 'Terça';
            case 3:
                return 'Quarta';
            case 4:
                return 'Quinta';
            case 5:
                return 'Sexta';
            case 6:
                return 'Sabádo';
            default: 'nenhum';
        }
    }

    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getUTCFullYear();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let mili = d.getMilliseconds();

    document.getElementById('relogio').innerHTML = 
        `${diaSemana()}, ${day}/${month+1}/${year} - ${hours}:${mins}:${secs}`; 
}
setInterval(printTime, 1);

function setDate(){
    let d = new Date();

    d.setDate(2);
    d.setMonth(4);
    d.setUTCFullYear(1987);

    document.getElementById('setDate').innerHTML = 
        `${d}`; 
}
setDate();

// function dataAtual(){
//     let d = new Date();

//     let day = d.getDate();
//     let month = d.getUTCMonth();
//     let year = d.getUTCFullYear();

//     document.getElementById('data-atual').innerHTML = `${day}/${month+1}/${year}`;
// };
// dataAtual();

function addDate(){
    let d = new Date(document.getElementById('data-0').value);
    if(d != 'Invalid Date'){
        let nros_dias = parseInt(document.getElementById('nro-dias-0').value);
        d.setDate((d.getDate() + 1) + nros_dias);
        let day = d.getDate();
        let month = d.getUTCMonth();
        let year = d.getUTCFullYear();
        document.getElementById('data-alterada-0').style.display = "inline-block";
        document.getElementById('data-alterada-0').innerHTML = `${day}/${month+1}/${year}`;
    } else {
        alert('Você precisa escolher uma data!')
    }
}

function subDate(){
    let d = new Date(document.getElementById('data-1').value);
    if(d != 'Invalid Date'){
        let nros_dias = parseInt(document.getElementById('nro-dias-1').value);
        d.setDate((d.getDate() + 1) - nros_dias);
        let day = d.getDate();
        let month = d.getUTCMonth();
        let year = d.getUTCFullYear();
        document.getElementById('data-alterada-1').style.display = "inline-block";
        document.getElementById('data-alterada-1').innerHTML = `${day}/${month+1}/${year}`;
    } else {
        alert('Você precisa escolher uma data!')
    }
}

//Scroll Suave
function scrollSuave(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

//Intervalos
function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = `${h}:${m}:${s}`;

    document.getElementById('lbl-timer-0').innerHTML = txt;
}

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
    clearInterval(timer_2);
    alert('Task parada!');
}

function recarregar(){
    timer = 0;
    document.getElementById('lbl-timer-1').innerHTML = "";
}

function rodar(){
    timer_2 = setTimeout(()=>{
        document.getElementById('lbl-timer-1').innerHTML = "Task executada!";
    }, 10000);
}

