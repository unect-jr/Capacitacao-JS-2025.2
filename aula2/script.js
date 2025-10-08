// Representação ilustrativa do DOM como objeto
/* const html = {
    window: {
        head: {
            elements: {
                title: "Nome da página",
            }
        },
        body: {
            elements: {
                h1: "Título de seção",
                p: "Texto",
                button: "Botão de ação",
                acionaBotao: (button) => { button.style.color = 'white' }
            }
        }
    }
}

html.window.body.elements.acionaBotao(botao1) */

const tituloPrincipal = document.getElementById('titulo-principal')
const paragrafoMudar = document.getElementById('paragrafo-mudar')
const btnMudar = document.getElementById('btn-mudar-texto')

btnMudar.addEventListener('click', () => {
    paragrafoMudar.textContent = "O texto foi alterado com sucesso"
    tituloPrincipal.style.color = "red"
})

const inputNome = document.querySelector('#input-nome')
const btnSaudacao = document.querySelector('#btn-saudacao')
const paragrafoSaudacao = document.querySelector('#paragrafo-saudacao')

btnSaudacao.addEventListener('click', () => {
    const nomeDigitado = inputNome.value

    if(nomeDigitado.trim() === '') {
        paragrafoSaudacao.textContent = 'Por favor, digite um nome para a saudação'
        paragrafoSaudacao.style.color = 'red'
    } else {
        paragrafoSaudacao.textContent = `Olá, ${nomeDigitado}: Bem-vindo à capacitação`
        paragrafoSaudacao.style.color = 'green'
    }
})

const btnAlternarClasse = document.getElementById('btn-alternar-classe')

btnAlternarClasse.addEventListener('mouseover', () => {
    btnAlternarClasse.classList.toggle('ativo')

    if(btnAlternarClasse.classList.contains('ativo')) {
        btnAlternarClasse.textContent = "Estilo Ativado!"
    } else {
        btnAlternarClasse.textContent = "Ativar Estilo"
    }
})

const btnTrocarImagem = document.querySelector("#btn-trocar-imagem")
const imagemExemplo = document.querySelector('#imagem-exemplo')

const imagemUrl1 = 'https://placehold.co/400x400/0d6efd/white?text=JS'
const imagemUrl2 = 'https://placehold.co/400x400/198754/white?text=DOM'

btnTrocarImagem.addEventListener('click', () => {
    const srcAtual = imagemExemplo.getAttribute('src')

    if(srcAtual === imagemUrl1) {
        imagemExemplo.setAttribute('src', imagemUrl2)
    } else {
        imagemExemplo.setAttribute('src', imagemUrl1)
    }
})

const btnHighlightAll = document.querySelector('#btn-highlight-all')
const btnClearHighlight = document.querySelector('#btn-clear-highlight')
const allTechTags = document.querySelectorAll('.tech-tag')

btnHighlightAll.addEventListener('click', () => {
    allTechTags.forEach(tag => {
        tag.classList.add('highlight')
    })
})

btnClearHighlight.addEventListener('click', () => {
    allTechTags.forEach(tag => {
        tag.classList.remove('highlight')
    })
})

allTechTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('highlight')
    })
})

const btnScrollTop = document.querySelector('#btn-scroll-top')
const btnScrollBottom = document.querySelector('#btn-scroll-bottom')
const cardFinal = document.querySelector('#card-final')

btnScrollBottom.addEventListener('click', () => {
    cardFinal.scrollIntoView({
        behavior: 'instant'
    })
})

btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    })
})