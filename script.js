const tela = document.getElementById('tela');
const titulo = document.getElementById('titulo')
//inputs
const numeroInput = document.getElementById('numero');
const radios = document.querySelectorAll('#radios label input');

//botoes
const btnLimpar = document.getElementById('btnLimpar');
const btnCalcular = document.getElementById('btnCalc');

// MVC 
// Model - somente calculos

function calcular(num1,num2,operadores){
    switch (operadores){
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !==0? (num1 / num2).toFixed(2) : alert("[ERROR]");
    }
}

// VIEW 

function renderizarLinha(texto){
    const li = document.createElement('li')

    li.innerHTML = texto;
    tela.appendChild(li);
}

// CONTROLLER - Handler

function HandlerTabuada(){
    // validacao rapida
    if(numeroInput.value === ""){
        tela.innerHTML = "Preencha os campos corretamente"
        tela.style.color = 'red'

        return
    }
    // transformar inputs em Number
    const num1 = Number(numeroInput.value);
    if(isNaN(num1)){ 
        alert('Preencha Somente NUMEROS') ;
        return;
    }
    
    //capturar o operador
    let operador;
    for(const radio of radios){
        if(radio.checked){
            operador = radio.value;
            break;
        }

    }

    if (!operador) { // undefined/vazia
    tela.innerHTML = 'Selecione o Operador';
    tela.style.color = 'red'
    return; // 
}
    
     
    tela.innerHTML = ''
    for(let num2 = 1; num2 <= 10; num2++){
       
        const resultado = calcular(num1,num2,operador);
        
        const tabuada = `${num1} ${operador} ${num2} = ${resultado}`

        renderizarLinha(tabuada);
    }
    titulo.innerHTML = `${num1}`;
}

btnCalcular.addEventListener('click', HandlerTabuada);

btnLimpar.addEventListener('click', () =>{
    tela.innerHTML = "";
    numeroInput.value = ""
    radios.forEach(radio => {
        radio.checked = false;
    });
})