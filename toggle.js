const div = document.getElementsByClassName('container')
const btn = document.getElementById('btn')
const bandera = document.getElementById('bandera')

btn.addEventListener('click', () => {
  div[0].classList.toggle('primero')
})

bandera.setAttribute('alt', 'Bnadera especial')
