window.addEventListener('load', e => {
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}); 

calcularImob = () => {

    const terreno = document.getElementById('terreno').value;
    const construcao = document.getElementById('construcao').value;

    const resultTotal = ((terreno * 260) + (construcao * 1800));
    const resultPorcent = (0.06 * resultTotal);
    const resultCliente = (((terreno * 260) + (construcao * 1800) - resultPorcent));

    document.getElementById('resultTotal').innerHTML = "O valor total é de:" + resultTotal + "reais.";
    document.getElementById('resultPorcent').innerHTML = "O valor de 6% do valor total é:" + resultPorcent + "reais.";
    document.getElementById('resultCliente').innerHTML = "O valor total contando com a porcentagem é:" + resultCliente + "reais.";
}