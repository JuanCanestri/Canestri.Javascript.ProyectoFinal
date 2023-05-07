// Proyecto Final - Javascript - Juan Canestri

// El objetivo es crear canciones para agregar a una playlist.

// Generamos el constructor.
let id=0
class Cancion {
    constructor(autor, titulo, album, genero){
        this.id=id++
        this.autor=autor
        this.titulo=titulo
        this.album=album
        this.genero=genero
    }
}

// Creamos algunas Canciones
let cancion01 = new Cancion("Guns N Roses","Patience","Greatest Hits","Rock Internacional")
let cancion02 = new Cancion("Guns N Roses","You could be mine","Greatest Hits","Rock Internacional")
let cancion03 = new Cancion("Foo Fighters","DOA","In your honor","Rock Internacional")
let cancion04 = new Cancion("Foo Fighters","No way back","In your honor","Rock Internacional")
let cancion05 = new Cancion("Chemical brothers","Star Guitar","Come with us","Electronica")

// Traemos una Playlist del Local Storage si hay algo guardado, sino se genera una con canciones guardadas
let miPlaylist = JSON.parse(localStorage.getItem("PL"))
if (miPlaylist === null) {
    miPlaylist = [cancion01,cancion02,cancion03,cancion04,cancion05]
}


// Traemos la etiqueta para poder ver la Playlist
let listaPlaylist = document.getElementById("listaPlaylist")

for (const element of miPlaylist) {
    let li = document.createElement("li")
    li.innerHTML = `
        <b>Autor:</b>${element.autor} - 
        <b>Titulo:</b>${element.titulo} - 
        <b>Album:</b>${element.album} - 
        <b>Genero:</b>${element.genero} - 
    `
    listaPlaylist.appendChild(li)
}

// Traigo el form al DOM
let formCancion = document.getElementById("formCancion")


// Funcion para agregar canciones a la Playlist
const agregarCancion = (e) => {
    e.preventDefault()
    id++
    let autor = e.target
    let titulo = e.target
    let album = e.target
    let genero = e.target

    let nuevaCancion = new Cancion(
        autor.children[1].value,
        titulo.children[4].value,
        album.children[7].value,
        genero.children[10].value,
    )

    //Pushear nueva cancion al array
    miPlaylist.push(nuevaCancion)

    // Nuevo resultado
    let listaPlaylist = document.getElementById("listaPlaylist")
    listaPlaylist.innerHTML=""
    miPlaylist.forEach(cancion => {
        let li = document.createElement("li")
        li.innerHTML = `
            <b>Autor:</b>${cancion.autor} - 
            <b>Titulo:</b>${cancion.titulo} - 
            <b>Album:</b>${cancion.album} - 
            <b>Genero:</b>${cancion.genero} - 
        `
        listaPlaylist.appendChild(li)
    })
    localStorage.setItem("PL", JSON.stringify(miPlaylist))
}

// Genero el Evento Submit
formCancion.addEventListener("submit",agregarCancion)

// Alerta cuando agregamos canciones
let btnAgregarToast = document.getElementById("AgCancion")
const AgregarToast = () => {
    Toastify({
        text: "Se agregó la cancion a la Playlist",
        duration: 4500,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#3e8e41",
        },
      }).showToast();
}
btnAgregarToast.addEventListener("click",AgregarToast)
