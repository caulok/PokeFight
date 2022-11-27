// DOM
const container = document.querySelector('.container')
// DOM CARD1 
const card1 = document.getElementById('card1')
const p1 = document.querySelector('#p1')
const nm1 = document.getElementById('nm1')
const img1 = document.getElementById('imagen1')
const at1 = document.getElementById('at1')
const df1 = document.getElementById('df1')
const tt1 = document.getElementById('tt1')
const btn1 = document.querySelector('#btn1')
// DOM CARD2 
const card2 = document.getElementById('card2')
const p2 = document.querySelector('#p2')
const nm2 = document.getElementById('nm2')
const img2 = document.getElementById('imagen2')
const at2 = document.getElementById('at2')
const df2 = document.getElementById('df2')
const tt2 = document.getElementById('tt2')
const btn2 = document.querySelector('#btn2')
let valores = []

class Pokemon {
    constructor(nombre, imagen, ataque, defensa, total) {
        this.nombre = nombre,
            this.imagen = imagen,
            this.ataque = ataque,
            this.defensa = defensa,
            this.total = total
    }
}

// CAMBIAR NOMBRE PLAYERS
const cambiarNombres = () => {
    p1.addEventListener('click', () => {
        const primerPlayer = prompt('PLAYER 1 NAME?')
        p1.innerHTML = primerPlayer.toUpperCase()
    })
    p2.addEventListener('click', () => {
        const segundoPlayer = prompt('PLAYER 2 NAME?')
        p2.innerHTML = segundoPlayer.toUpperCase()
    })
}

// BOTONES GO
const clickBtn1 = btn1.addEventListener('click', () => {
    const randomUno = random1(0, 152)
    fetchData(randomUno)
    btn1.setAttribute('disabled', '')
    btn2.removeAttribute('disabled')
    botonRestart()
})
const clickBtn2 = btn2.addEventListener('click', () => {
    const randomDos = random2(0, 152)
    fetchData2(randomDos)
    btn2.setAttribute('disabled', '')
    botonRestart()
})

// BOTON RESTART
const botonRestart = () => {
    if (btn1.hasAttribute('disabled') && btn2.hasAttribute('disabled')) {
        resultadoListo();
        const restart = document.createElement('input')
        restart.setAttribute('value', 'RESTART')
        restart.setAttribute('type', 'button')
        restart.classList.add('restart')
        container.appendChild(restart)
        restart.addEventListener('click', () => {
            location.reload()
        })
    }
}

// OBTENER NUMEROS RANDOM
const random1 = (min, max) => {
    return Math.floor(Math.random() * (max - min)) - min;
}
const random2 = (min, max) => {
    return Math.floor(Math.random() * (max - min)) - min;
}

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
    const poke1 = new Pokemon(pokemon1.name, pokemon1.sprites.front_default, pokemon1.stats[1].base_stat, pokemon1.stats[2].base_stat, (pokemon1.stats[1].base_stat + pokemon1.stats[2].base_stat))

    // NOMBRE
    const nombre1 = document.createTextNode(`${poke1.nombre}`)
    nm1.appendChild(nombre1)
    // // DEFINIR IMAGEN 
    img1.setAttribute('src', poke1.imagen)
    // // ATAQUE
    const ataque1 = document.createTextNode(` ${poke1.ataque}`)
    at1.appendChild(ataque1)
    // // DEFENSA
    const defensa1 = document.createTextNode(` ${poke1.defensa}`)
    df1.appendChild(defensa1)
    // // TOTAL
    const total1 = document.createTextNode(` ${poke1.total}`)
    tt1.appendChild(total1)
    // // COLOREAR
    colorearAtaque(poke1.ataque, at1)
    colorearDefensa(poke1.defensa, df1)
    console.log(poke1)
    valores.push(poke1.total)
}
const pintarCard2 = (pokemon2) => {
    const poke2 = new Pokemon(pokemon2.name, pokemon2.sprites.front_default, pokemon2.stats[1].base_stat, pokemon2.stats[2].base_stat, (pokemon2.stats[1].base_stat + pokemon2.stats[2].base_stat))

    // NOMBRE
    const nombre2 = document.createTextNode(`${poke2.nombre}`)
    nm2.appendChild(nombre2)
    // // DEFINIR IMAGEN 
    img2.setAttribute('src', poke2.imagen)
    // // ATAQUE
    const ataque2 = document.createTextNode(` ${poke2.ataque}`)
    at2.appendChild(ataque2)
    // // DEFENSA
    const defensa2 = document.createTextNode(` ${poke2.defensa}`)
    df2.appendChild(defensa2)
    // // TOTAL
    const total2 = document.createTextNode(` ${poke2.total}`)
    tt2.appendChild(total2)
    // // COLOREAR
    colorearAtaque(poke2.ataque, at2)
    colorearDefensa(poke2.defensa, df2)
    console.log(poke2)
    valores.push(poke2.total)
}

// OBTENER RESULTADOS
const resultado = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(valores)
            try {
                const total1 = valores[0]
                const total2 = valores[1]
                total1 > total2 ? card1.classList.add('pintar') : card2.classList.add('pintar')
            } catch (error) {
                console.log(error)
            }
        }, 1000);
    });
}
const resultadoListo = async () => {
    const result = await resultado();
}

const main = () => {
    cambiarNombres()
}
main()