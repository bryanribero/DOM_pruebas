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
