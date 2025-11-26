const div = document.getElementById('container')

const listaRandom = ['primero', 'segundo', 'tercero']

const ul = document.createElement('ul')

div.appendChild(ul)

listaRandom.forEach((e) => {
  const li = document.createElement('li')

  li.textContent = e

  ul.appendChild(li)
})

const btn = document.createElement('button')

btn.textContent = 'Eliminar li'

div.appendChild(btn)

let hijosActuales = ul.childNodes
console.log(hijosActuales)
btn.addEventListener('click', () => {
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild)
  }
})
