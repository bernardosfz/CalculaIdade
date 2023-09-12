function calculaIdade(anoInformado) {
    anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoInformado;
    return idade;
}

anoInformado = prompt("Digite o ano que você nasceu: ");
console.log(calculaIdade(anoInformado));
