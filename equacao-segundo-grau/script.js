const botaoCalcular = document.querySelector('#calcular');
const areaDelta = document.querySelector('#textoDelta');
const areaRaiz1 = document.querySelector('#textoResult1');
const areaRaiz2 = document.querySelector('#textoResult2');

function bhaskara(){
  let termoA = document.querySelector('#inputA').value;
  let termoB = document.querySelector('#inputB').value;
  let termoC = document.querySelector('#inputC').value;

  let resultadoDelta = 0;
  let x1 = 0;
  let x2 = 0;
  
  //tocar alerta sem executar o código principal
  if(termoA == 0){
    alert("Põe o valor de A, né animal!");
  }else{
    //calculando o delta
    resultadoDelta = (termoB**2 - (4*termoA*termoC));

    //delta negativo n tem raíz
    if(resultadoDelta < 0){
      x1 = "⦰";
      x2  = "⦰";
      areaDelta.innerHTML = resultadoDelta;
      areaRaiz1.innerHTML = x1;
      areaRaiz2.innerHTML = x2;
    }else{
      //se a raíz quadrada do delta for inteiro, faz a conta normal
      if(Number.isInteger(Math.sqrt(resultadoDelta))){
        x1 = ((termoB*-1) + (resultadoDelta**(1/2)))/(2*termoA);
        x2 = ((termoB*-1) - (resultadoDelta**(1/2)))/(2*termoA);
      }else{//se a raíz quadrada não for inteira aí n tem oq fazer mesmo, mostra tudo de uma vez
        x1 = `(${termoB*-1} + √${resultadoDelta})/${2*termoA}`;
        x2 = `(${termoB*-1} - √${resultadoDelta})/${2*termoA}`;
      }
      areaDelta.innerHTML = resultadoDelta;
      areaRaiz1.innerHTML = x1;
      areaRaiz2.innerHTML = x2;
    }
  }
}

botaoCalcular.onclick = function(){
  bhaskara();
}