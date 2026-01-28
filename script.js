// Animação fade-in ao rolar a página
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('aparecer')
    }
  })
})

document.querySelectorAll('section, .projetos-card').forEach((el) => {
  observador.observe(el)
})

// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle')
const menu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('.menu-link')

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('ativo')
  menuToggle.classList.toggle('ativo')
})

// Fechar menu ao clicar em um link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo')
    menuToggle.classList.remove('ativo')
  })
})

// Destacar seção ativa no menu
const sections = document.querySelectorAll('section, main')
const navLinks = document.querySelectorAll('.menu-link')

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove('ativo')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('ativo')
    }
  })
})

// Botão Voltar ao Topo
const voltarTopo = document.getElementById('voltarTopo')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    voltarTopo.classList.add('visivel')
  } else {
    voltarTopo.classList.remove('visivel')
  }
})

voltarTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// Função para enviar mensagem no WhatsApp
function enviarWhats(event) {
  event.preventDefault()

  const nome = document.getElementById('nome').value
  const mensagem = document.getElementById('mensagem').value
  const telefone = '5598991295114' // seu número

  if (nome.trim() === '' || mensagem.trim() === '') {
    alert('Por favor, preencha seu nome e a mensagem.')
    return
  }

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`
  const msgFormatada = encodeURIComponent(texto)

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`

  window.open(url, '_blank')
}
