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

// Conectar a função ao formulário
document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formulario')
  if (formulario) {
    formulario.addEventListener('submit', enviarWhats)
  }
})
