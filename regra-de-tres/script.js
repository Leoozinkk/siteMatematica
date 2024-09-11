const botaoCalcular = document.querySelector('#calcular');
const areaResultado = document.querySelector('#textoResult');

function calcular(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let num3 = document.querySelector('#num3').value;
    let num4 = document.querySelector('#num4').value;
    let resultado = 0;

    //tocar alertas sem executar o código principal
    if(num1 != 'x' && num2 != 'x' && num3 != 'x' && num4 != 'x'){
        alert("Não é assim que funciona né caraio");
    }if((num1 == 'x' && num2 == 'x') || (num2 == 'x' && num3 == 'x') || (num3 == 'x' && num4 == 'x') || (num2 == 'x' && num4 == 'x') || (num3 == 'x' && num4 == 'x') || (num1 == 'x' && num3 == 'x')){
        alert("É só UMA incógnita, burrão");
    }else{
    //código principal

        //pôe 1 no lugar do "x" e dá o resultado condizente
        if(num1 == 'x'|| num1 == 'X'){
            num1 = 1;
            resultado = (num2 * num3) / (num1 * num4);
        }if(num2 == 'x'|| num2 == 'X'){
            num2 = 1;
            resultado = (num1 * num4) / (num2 * num3);
        }if(num3 == 'x'|| num3 == 'X'){
            num3 = 1;
            resultado = (num1 * num4) / (num2 * num3);
        }if(num4 == 'x'|| num4 == 'X'){
            num4 = 1;
            resultado = (num2 * num3) / (num1 * num4);
        }

        //arredondar para duas casas decimais caso não for íntegro (inteiro)
        if(Number.isInteger(resultado) == false){
            resultado = `${resultado.toFixed(2)}`
        }
        
        //mostra o resultado lindo
        areaResultado.innerHTML = resultado;
    }
}

botaoCalcular.onclick = function(){
    calcular();
}