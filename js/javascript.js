// Aqui está você pode interpretar essa expressaão regular:

// ^ - Representa o início da string.
// [0-9] - representa qualquer digito numerico de 0 a 9.
// + - Indica que o digio pode ocorrer ma ou mais vezes.
// $ - Representa o final da string.

// 01 - exemplo
// const regex = /^\d+$/;
// const string1 = "12345";
// const string2 = "abc123";
// const string3 = "987654321";
// console.log(regex.test(string1)); // true
// console.log(regex.test(string2)); // false
// console.log(regex.test(string3)); // true

// 02 - exemplo de string so de letras
// const regex = /^[A-Za-z]+$/
// console.log(regex.test("abcs"))//true
// console.log(regex.test(("abc123")))//false

// 03 - Email[]
// const regex = /^[\w-]+[\.\w]*@([\w-]+\.)+[a-zA=]{2.6$}/;
// console.log(resgex.test)("reste@example.com");;
// console.log(regex.test("inválid_email));

// const regex = /\d+/g:
// const string= "E teno 3 maçã e 5 larangas 
// const numeros = string.match(regex)
// console.log(numeros)

const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
// 1. `^` e `$`: Estes são âncoras que correspondem ao início e ao fim da string, garantindo que toda a string seja verificada.

// 2. `(?:(?:\+|00)?(55)\s?)?`: Esta parte corresponde ao código do país opcional. Explicando:
//    - `(?:(?:\+|00)?(55)\s?)?`: `?:` é um grupo não capturador. `(?:\+|00)?` corresponde a uma ocorrência opcional de "+" ou "00", que pode ser usada para indicar um código de país. `(55)` é o código de país brasileiro. `\s?` corresponde a um espaço opcional após o código do país.

// 3. `(?:\(?([1-9][0-9])\)?\s?)?`: Esta parte corresponde ao DDD opcional. Explicando:
//    - `(?:\(?([1-9][0-9])\)?\s?)?`: Aqui, `\(?` corresponde a um parêntese aberto opcional, `([1-9][0-9])` corresponde ao código de área (DDD), garantindo que seja um número entre 11 e 99, excluindo números que começam com zero. `\)?` corresponde a um parêntese fechado opcional. `\s?` corresponde a um espaço opcional após o DDD.

// 4. `(?:((?:9\d|[2-9])\d{3})-?(\d{4}))`: Esta parte corresponde ao número de telefone. Explicando:
//    - `(?: ... )`: Grupo não capturador.
//    - `((?:9\d|[2-9])\d{3})`: Este grupo captura o prefixo do número de celular. `(?:9\d|[2-9])` corresponde a um número de celular começando com "9" ou qualquer outro número de telefone fixo. `\d{3}` corresponde aos três dígitos seguintes ao prefixo.
//    - `-?`: O hífen é opcional.
//    - `(\d{4})`: Este grupo captura os quatro últimos dígitos do número de telefone.

// Essa expressão regular é relativamente complexa devido à natureza variada dos números de telefone no Brasil, que podem ter ou não código de país, DDD e hífen entre os dígitos.


function verificaNumeroCelular(numero){
    return regex.test(numero)
}

const numeroTelefone = prompt("Digite um número de celular no ormato barsileiro (ex. 95781-8744")

// Verificar se o número de telefone é válido
const ehValido = verificaNumeroCelular(numeroTelefone);

// Exibir o resultado 
if(ehValido){
    console.log("o número de celular é valido.")

} else {
    console.log("O numero de celular é invalido ")
}