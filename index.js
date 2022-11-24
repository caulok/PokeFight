// VARIABLES RANDOM
const random1 = (min,max) => {
    return Math.floor(Math.random() * (max - min)) - min;
}
const random2 = (min,max) => {
    return Math.floor(Math.random() * (max - min)) - min;
}

// CARGA DEL DOM
document.addEventListener("DOMContentLoaded", () => {
    const ramdomUno = random1(0, 152)
    const ramdomDos = random2(0, 152)
    fetchData(ramdomUno)
    fetchData2(ramdomDos)
})

// FETCH DE LA POKEAPI
const fetchData = async (random1) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
        const data = await res.json()
        pintarCard1(data)
    } catch (error) {
        console.log(error)
    }
}
const fetchData2 = async (random2) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
        const data = await res.json()
        pintarCard2(data)
    } catch (error) {
        console.log(error)
    }
}

// PINTAR CARDS CON LA INFORMACIÓN
const pintarCard1 = (pokemon1) => {
    // DEFINIR IMAGEN 
    let imagen1 = pokemon1.sprites.front_default
    const img1 = document.getElementById('imagen1')
    img1.setAttribute('src', imagen1)
    // ATAQUE
    const at1 = document.getElementById('at1')
    const ataque1 = document.createTextNode(` ${pokemon1.stats[1].base_stat}`)
    at1.appendChild(ataque1)
    // DEFENSA
    const df1 = document.getElementById('df1')
    const defensa1 = document.createTextNode(` ${pokemon1.stats[2].base_stat}`)
    df1.appendChild(defensa1)
}

const pintarCard2 = (pokemon2) => {
    // DEFINIR IMAGEN 
    console.log(pokemon2)
    let imagen2 = pokemon2.sprites.front_default
    const img2 = document.getElementById('imagen2')
    img2.setAttribute('src', imagen2)
    // ATAQUE
    const at2 = document.getElementById('at2')
    const ataque2 = document.createTextNode(` ${pokemon2.stats[1].base_stat}`)
    at2.appendChild(ataque2)
    // DEFENSA
    const df2 = document.getElementById('df2')
    const defensa2 = document.createTextNode(` ${pokemon2.stats[2].base_stat}`)
    df2.appendChild(defensa2)
}