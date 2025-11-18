// const p = document.getElementsByClassName('texto')
const button = document.querySelector('button')

// button.addEventListener('click', () => {

//     if(p[0].textContent === 'Hola') {

//         p[0].textContent = 'Cambiado'
//     }else {
//         p[0].textContent = 'Hola'
//     }
// })

const pNodeList = document.querySelectorAll('.texto')

button.addEventListener('click', () => {
  if (pNodeList[0].textContent === 'Hola') {
    pNodeList[0].textContent = 'Cambiado'
  } else {
    pNodeList[0].textContent = 'Hola'
  }
})

const imagen = document.querySelector('img')

console.log(imagen.alt)

const btnAdd = document.getElementById('add')

const contenedor = document.getElementById('contenedor')

const btnConContador = () => {
  let contador = 1
  btnAdd.onclick = () => {
    const p = document.createElement('p')
    p.textContent = `Texto Numero ${contador}`
    contador++

    contenedor.appendChild(p)
  }
}

btnConContador()
