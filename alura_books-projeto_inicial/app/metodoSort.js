let btnOrdenarPorPreço = document.getElementById("btnOrdenarPorPreco")
btnOrdenarPorPreço.addEventListener("click", ordenarLivrosPorPreço)

function ordenarLivrosPorPreço() {
  let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livrosOrdernados)
}
