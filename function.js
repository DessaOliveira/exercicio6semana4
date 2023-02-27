class Padaria {
  constructor() {}
  addEstoque(novoEstoque, produto) {
    localStorage.setItem(novoEstoque, produto);
  }
  Compra(item, nome) {
    if (item == localStorage.getItem(nome)) {
      localStorage.removeItem(nome);
    } else {
      return console.log(`Nome do item não existe`);
    }
  }
}

let itens = new Padaria();

console.log(itens.addEstoque("Pão", "Arroz"));
console.log(itens.addEstoque("Bolacha", "Bala"));
console.log(itens.Compra("Pão", "Arroz"));
