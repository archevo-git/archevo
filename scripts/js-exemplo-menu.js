function abrirMenu(){

    if(document.querySelector('#menu-area').style.display != "block"){
        document.querySelector('#menu-area').style.display = "block";
    }else{
        document.querySelector('#menu-area').style.display = "none";
    }
}