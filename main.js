//pegando o visor da calculadora
const visor = document.querySelector('[data-visor]');
console.log("Resultado: " + visor.textContent);

//pegando o botão de número
const botoesNumericos = document.querySelector('[data-botoes-numeros]');
console.log(botoesNumericos);



botoesNumericos.addEventListener('click', ()=>{
});
    const botaoNumero = document.querySelector('[data-botao-numero]');
    botaoNumero.addEventListener('click', ()=>{
        console.log('fui clicado');
    });



