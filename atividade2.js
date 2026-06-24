const valorOriginal = 1000.00;
let cupom = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");
let porcentagemDesconto = 0;
let cupomValido = true;
switch (cupom) {
    case "DESC1":
        porcentagemDesconto = 0.05; // 5%
        console.log("05% de desconto aplicado.");
        break;
    case "DESC2":
        porcentagemDesconto = 0.10; // 10%
        console.log("10% de desconto aplicado.");
        break;
    case "DESC3":
        porcentagemDesconto = 0.15; // 15%
        break;
    case "DESC4":
        porcentagemDesconto = 0.20; // 20%
        console.log("20% de desconto aplicado.");
        break;
    case "DESC5":
        porcentagemDesconto = 0.25; // 25%
        console.log("25% de desconto aplicado.");
        break;
    default:cupomValido = false;
    console.log("Erro: O código informado não é um cupom válido.");
    break;
}
if (cupomValido) {
    let valorDesconto = valorOriginal * porcentagemDesconto;
    let valorFinal = valorOriginal - valorDesconto;    console.log(1000 : R$ ${valorOriginal.toFixed(2)});
    console.log(Valor_com_desconto: R$ ${valorFinal.toFixed(2)});
}
// Definição do valor original do produto
const valorOriginal = 1000.00;

// Solicita o código promocional ao usuário
let cupom = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");

// Variável para armazenar a porcentagem de desconto
let porcentagem_Desconto = 0;
let cupom_Valido = true;

// Estrutura switch para identificar o cupom informado
switch (cupom) {
    case "DESC1":
        porcentagemDesconto = 0.05; // 5%
        console.log("05% de desconto aplicado.");
        break;
    case "DESC2":
        porcentagemDesconto = 0.10; // 10%
        console.log("10% de desconto aplicado.");
        break;
    case "DESC3":
        porcentagemDesconto = 0.15; // 15%
        console.log("15% de desconto aplicado."); // <-- Corrigido aqui
        break;
    case "DESC4":
        porcentagemDesconto = 0.20; // 20%
        console.log("20% de desconto aplicado.");
        break;
    case "DESC5":
        porcentagemDesconto = 0.25; // 25%
        console.log("25% de desconto aplicado.");
        break;
    default:
        cupomValido = false;
        console.log("Erro: O código informado não é um cupom válido.");
        break;
}

// Se o cupom for válido, calcula e exibe os valores
if (cupomValido) {
    let valorDesconto = valorOriginal * porcentagemDesconto;
    let valorFinal = valorOriginal - valorDesconto;

    console.log(Valor_original_do produto: R$ ${valorOriginal.toFixed(2)});
    console.log(Valor_com_desconto: R$ ${valor})
}
