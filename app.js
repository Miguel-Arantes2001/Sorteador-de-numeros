function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value)

    if (de>=ate){
        alert('O campo "Do número" deve ser inferior ao campo "até o número", verifique se inseriu os dados corretamente.')
        return;
    }


    if (quantidade>(ate-de+1)){
        alert('A quantidade de números sorteados não pode ser maior que o intervalo entre os números escolhidos.')
        return;
    }

    let numeros_sorteados=[]
    let numero;
    for (let i=0; i<quantidade;i++){
        numero = obter_número_aleatório(de,ate)
        
        while(numeros_sorteados.includes(numero)){
            numero = obter_número_aleatório(de,ate)
        }
        numeros_sorteados.push(numero)
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Número(s) sorteado(s):  ${numeros_sorteados}</label>`

    alterarStatusbotao();
}


function obter_número_aleatório(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alterarStatusbotao(){
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    }else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}


function reiniciar(){
    document.getElementById('quantidade').value=''
    document.getElementById('de').value=''
    document.getElementById('ate').value=''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusbotao()

}