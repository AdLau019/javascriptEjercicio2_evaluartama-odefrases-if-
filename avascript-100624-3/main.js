/*NECESITAMOS PODER EVALUAR CUALQUIER FRASE, Y DETERMINAR SI ES UNA FRASE CORTA O ES UNA FRASE LARGA, TENIENDO EN CUENTA QUE UNA FRASE CORTA TIENE MENOS DE 20 LETRAS Y UNA LARGA TIENE 20 LETRAS O MÁS*/

let evaluatePhrase = (phrase) => {
  let sentenceLength = phrase.length;

  if (sentenceLength < 20) {
    return "La frase es corta.";
  } else {
    return "La frase es larga.";
  }
};

console.log(evaluatePhrase("Hola koders"));
console.log(evaluatePhrase("Esta es una frase larga ejemplo"));
