
const lista = [];

function milista(){
    const peliculas = document.getElementById("movie-cont");
    const peliculasFav = document.getElementById("movie-fav");
    peliculas.style.display = "none";
    peliculasFav.style.display = "flex";
    let temp = "";
    lista.forEach(element => {
        temp += element;
    });
    if(lista.length == 0){
        peliculasFav.innerHTML = "<h2>No hay peliculas en tus favoritos</h2>"
    }else{
        peliculasFav.innerHTML = temp;
    }

}
function anadir(id, botonId){
    const pelicula = document.getElementById(id);
    const boton = document.getElementById(botonId);
    
    boton.style.display = "none";

    lista.push(pelicula.outerHTML);
    
    alert("Añadida correctamente a tu lista")
}
    
function peliculas(){
    const titulos = [{
        titulo: "Arifureta", imagen:"img/portadas/arifureta.webp", link: "www.google.com",
    },{
        titulo: "Attack on titan", imagen:"img/portadas/attack-on-titan.webp", link: "www.google.com"
    },{
        titulo: "Bocchi the rock", imagen:"img/portadas/bocchi-the-rock.webp", link: "www.google.com"
    },{
        titulo: "Chainsaw man", imagen:"img/portadas/chainsaw-man.webp", link: "www.google.com"
    },{
        titulo: "Demon slayer", imagen:"img/portadas/DemonSlayer.webp", link: "www.google.com"
    },{
        titulo: "Nagatoro", imagen:"img/portadas/dont-toy-with-me-miss-nagatoro.webp", link: "www.google.com"
    },{
        titulo: "Dr Stone", imagen:"img/portadas/dr-stone.webp", link: "www.google.com"
    },{
        titulo: "Fire force", imagen:"img/portadas/fire-force.webp", link: "www.google.com"
    },{
        titulo: "Frieren", imagen:"img/portadas/frieren-beyond-journeys-end.webp", link: "www.google.com"
    },{
        titulo: "Goblin slayer", imagen:"img/portadas/GoblinSlayer.webp", link: "www.google.com"
    }]
    const container = document.getElementById("movie-cont")
    container.innerHTML = ""
    titulos.forEach((titulos, indice) => {
        container.innerHTML += `<div class="movie" id="pelicula-${indice}"><a href="${titulos.link}" target="_blank"><img src="${titulos.imagen}" alt=""></a><div class="movie-info"><h2>${titulos.titulo}</h2><button id="boton-${indice}" onclick="anadir('pelicula-${indice}','boton-${indice}')">Añadir</button ></div></div>`
    });
}

peliculas()