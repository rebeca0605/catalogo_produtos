'use strict'

import produtos from './produtos-atualizados.json' with {type: 'json'}

function classificarProdutos(nota){

    switch(nota){
    case 1:
        return '★☆☆☆☆'
    case 2:
        return '★★☆☆☆'
    case 3:
        return '★★★☆☆'
    case 4:
        return '★★★★☆'
    case 5:
        return '★★★★★'
    default:
        return 'Sem avaliação'
    }
}

function exibirMensagem(nome){
    alert(`tem certeza que deseja comprar ${nome}?`)
}

function criarCard(produtos) {
    const itens = document.getElementById('itens')
    const card = document.createElement('button')
    card.className = 'card'

    const imagem = document.createElement('img')
    const nome = document.createElement('h2')
    const descricao = document.createElement('p')
    const preco = document.createElement('h3')
    const categoria = document.createElement('p')
    const classificacao = document.createElement('h3')
    const button = document.createElement('button')

    imagem.src = `./img/${produtos.imagem}`
    nome.textContent = produtos.nome
    classificacao.textContent = classificarProdutos(produtos.classificacao)
    descricao.textContent = produtos.descricao
    preco.textContent = 'R$' + produtos.preco
    categoria.textContent = produtos.categoria
    button.textContent = `COMPRAR`

    itens.appendChild(card)
    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(descricao)
    card.appendChild(classificacao)
    card.appendChild(preco)
    card.appendChild(categoria)
    card.appendChild(button)

    button.onclick = () => exibirMensagem(produtos.nome)

}

produtos.forEach(criarCard)