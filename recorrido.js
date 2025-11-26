const div = document.getElementById('container')
const fragment = document.createDocumentFragment()

const list = [
  { content: 'LinkedIn', link: 'https://www.linkedin.com/notifications/?filter=all' },
  { content: 'GitHub', link: 'https://github.com/bryanribero' },
  { content: 'ChatGPT', link: 'https://chatgpt.com/c/692744bb-90e0-8325-84b4-e1efd49a76a5' }
]
div.style.display = 'flex'
div.style.flexDirection = 'column'

list.forEach((e) => {
  const a = document.createElement('a')

  a.textContent = e.content
  a.href = e.link
  a.style.marginBottom = '10px'

  fragment.appendChild(a)
})

div.appendChild(fragment)

div.lastElementChild.textContent = 'Cambie el contenido del ultimo hijo'
