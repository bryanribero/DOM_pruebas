const div = document.getElementById('container')
const btn = document.getElementById('btn')

const insertarElementos = () => {
  let contador = 1
  return btn.addEventListener('click', () => {
    div.insertAdjacentHTML('beforeend', `<p id='p${contador}' class='p' >Este es el elemento p numero: ${contador}</p>`)

    const p4 = document.getElementById('p4')

    if (p4) {
      p4.style.backgroundColor = 'blue'
    }

    contador++

    const classP = document.getElementsByClassName('p')

    for (let p of classP) {
      p.textContent = 'Nuevo texto cambiado'
    }
  })
}

insertarElementos()
