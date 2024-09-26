// Solicita um dado para o usuário

var nome = prompt("Digite seu nome:"); //Retorna uma string

var anoNascimento = parseInt(prompt("Ano de Nascimento:"));
// ParseInt: Converte String para Number(INTEIRO);

var idade = 2024 - anoNascimento;

if (idade > 17) {
    alert(nome + " é maior de idade!");
} else if (idade >= 0) {
    alert(nome + " é menor de idade!");
} else {
    alert("Ano inválido!");
}
