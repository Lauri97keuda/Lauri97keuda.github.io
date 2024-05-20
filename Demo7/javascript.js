document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = 'kylla';
    if(kirjautunut === 'kylla'){
        document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
    }
}


function Kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}