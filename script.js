const tela = document.getElementById('tela');
const titulo = document.getElementById('titulo')
//inputs
const numeroInput = document.getElementById('numero');
const radios = document.querySelectorAll('#radios label input');

//botoes
const btnLimpar = document.getElementById('btnLimpar');
const btnCalcular = document.getElementById('btnCalc');


//Criar funcao para gerar tabuada - parametro numero e operador
function gerarTabuada(){
    
    tela.textContent = "";
    const numero = parseInt(numeroInput.value)

    if(isNaN(numero)) {
        alert('Digite um número válido!');
        return;
    }

    // pegar operador selecionado
    let operador;
    for (const radio of radios) {
        if (radio.checked) {
            operador = radio.value;
            break;
        }
    }

    if(!operador) {
        alert('Selecione um operador!');
        return;
    }
        let result;
    // gerar tabuada
    for (let i = 1; i <= 10; i++) {
    
        if (operador === '+') {
            result = numero + i;
        } if (operador === '-') {
            result = numero - i;
        } if (operador === '*') {
            result = numero * i;
        } if (operador === '/') {
            result = (numero / i).toFixed(2);
        }
        titulo.textContent = `${numero}`
        const li = document.createElement('li');
        li.textContent = `${numero} ${operador} ${i} = ${result}`;
        tela.appendChild(li);
        numeroInput.value = ""; 
        
    }

}

function limparTela(){
    tela.textContent = "";
    titulo.textContent = "";
     numeroInput.value = ""; 
}

btnCalcular.addEventListener('click',gerarTabuada);
btnLimpar.addEventListener('click', limparTela)