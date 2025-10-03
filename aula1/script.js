// Variáveis
let saudacao = "Olá mundo"
saudacao = "EcmaScript ES+6"

const empresa = "Unect é impacto"
console.log(empresa)

let isAprovado = true
console.log("Está aprovado? ", isAprovado)

let data = 2
console.log(`Hoje é dia ${data}`) // Formas de escrever strings: " " ' ' ` `

// Estrutura de Dados
// Array (Lista de itens)
const tecnologias = ["HTML", "CSS", "JS"]
console.log("Tecnologias: ", tecnologias)
console.log("A segunda tecnologia é: ", tecnologias[1]) // Acessar o item

// Objeto - Coleçõa de propriedades separadas por chave e valor
const trainee = {
    nome: "João",
    idade: 21,
    curso: "Engenharia de Software"
}
console.log("Objeto Trainee: ", trainee)
console.log("O curso do João é: ", trainee.curso)

// Operações e Lógica Básica
// Aritméticos
let num1 = 10;
let num2 = 5.8;
console.log("Soma: ", num1 + num2)
console.log("Multiplicação: ", num1 * num2)

// Comparação
let numeroSorte = 10
console.log("O número da sorte é 7?", numeroSorte === '7')
console.log("O número da sorte é diferente de 10", numeroSorte !== '10')

// Lógicos
let temCafe = false
let temPao = true
console.log("Tem café e pão?", temCafe && temPao)
console.log("Tem café e pão?", temCafe || temPao)
console.log("Não tem pão?", !temPao)

// Desestruturação (Destructuring)
const pessoa = {
    nome: "João",
    idade: 21,
    curso: "Engenharia de Software",
    endereco: {
        rua: "Av. Paulista",
        numero: 1000
    }
}

const { nome: primeiroNome } = pessoa
console.log("O nome da pessoa é: ", primeiroNome)

const { endereco: { rua } } = pessoa
console.log("A rua é: ", rua)

const Lista = [1, 'Hello', 3, 'Unect', 5]
const [ zero, um ] = Lista

console.log("Primeiro:", zero)
console.log("Segundo:", um)

// Estruturas de Controle
let horaAtual = 19

if(horaAtual < 12) {
    console.log("Bom dia!")
} else if (horaAtual < 18) {
    console.log("Boa tarde!")
} else {
    console.log('Boa noite!')
}

// Estrutura de Repetição
let i
for(i = 5; i >= 1; i--) {
    console.log("Contagem FOR:" + i)
}

while(i <= 5) {
    console.log("Contagem While:" + i)
    i++
}

const frutas = ["Maçã", "Banana", "Morango"]
console.log("Listando as frutas com ForEach")
frutas.forEach((fruta) => {
    console.log(fruta)
})

// Funções
function cumprimentar(nome) {
    return "Olá " + nome + " Seja bem-vindo a Unect!"
}

console.log(cumprimentar('José'))

const dividir = (a, b) => {
    return a / b;
}

console.log("Resultado da divisão (arrow function): ", dividir(90, 3))

function processar(callback) {
    console.log("Iniciando o processamento...")

    setTimeout(() => {
        callback()
    }, 3500)
}

processar(() => {
    console.log("Processamento finalizado!")
})