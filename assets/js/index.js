const adicionarTime = document.querySelector('button');

adicionarTime.onclick = function(){
    alert('Cliquei no botão');
}


function soma(){
    return a + b;
}

function comparar(a,b){
    var a = 2;
    var b = 2;
    const somar = a+b;
    if(somar <= 10){
        console.log("o resultado é menor que 10")
    } else if(somar >= 11){
        console.log("o resultado é menor que 20")
    }
}
function resultado(){
    if(a == b){
        console.log("os números " + a + " e " + b + " são iguais. Sua soma é: " + soma(a,b) + " que é " + comparar(a,b) + " e "+ comparar(a,b))
    } else{
        console.log("os números " + a + " e " + b + " não são iguais. Sua soma é: " + soma(a,b) + " que é " + comparar + " e "+ comparar)
    }

}
resultado()