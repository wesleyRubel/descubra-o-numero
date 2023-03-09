//Declarações globais
var sorteado=Math.floor(Math.random()*100)+1; //Gerando o número aleatório e armazenando na variável
var erros=[]; //Vetor que irá armazenar os erros
const chances=6; //Constante que ira amarzenar o numero inicial de chances
var numeros=""; //Variável que irá concactenar os núemeros
//alert("O número sorteado é "+sorteado);
//Funções do teclado
function num0(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="0";
    inNumero.value=numeros;
}
var bt0=document.getElementById("bt0");
bt0.addEventListener("click",num0);

function num1(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="1";
    inNumero.value=numeros;
}
var bt1=document.getElementById("bt1");
bt1.addEventListener("click",num1);

function num2(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="2";
    inNumero.value=numeros;
}
var bt2=document.getElementById("bt2");
bt2.addEventListener("click",num2);

function num3(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="3";
    inNumero.value=numeros;
}
var bt3=document.getElementById("bt3");
bt3.addEventListener("click",num3);

function num4(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="4";
    inNumero.value=numeros;
}
var bt4=document.getElementById("bt4");
bt4.addEventListener("click",num4);

function num5(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="5";
    inNumero.value=numeros;
}
var bt5=document.getElementById("bt5");
bt5.addEventListener("click",num5);

function num6(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="6";
    inNumero.value=numeros;
}
var bt6=document.getElementById("bt6");
bt6.addEventListener("click",num6);

function num7(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="7";
    inNumero.value=numeros;
}
var bt7=document.getElementById("bt7");
bt7.addEventListener("click",num7);

function num8(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="8";
    inNumero.value=numeros;
}
var bt8=document.getElementById("bt8");
bt8.addEventListener("click",num8);

function num9(){
    var inNumero=document.getElementById("inNumero");
    if(inNumero.value==""){
        numeros="";
    }
    numeros+="9";
    inNumero.value=numeros;
}
var bt9=document.getElementById("bt9");
bt9.addEventListener("click",num9);

//Função botão limpar
function limparEntrada(){
    var inNumero=document.getElementById("inNumero");
    inNumero.value="";
}
var btLimpar=document.getElementById("btLimpar");
btLimpar.addEventListener("click",limparEntrada);

//Função apostar numero
function apostarNumero(){
    var inNumero=document.getElementById("inNumero");
    var outErros=document.getElementById("outErros");
    var outChances=document.getElementById("outChances");
    var outDica=document.getElementById("outDica");
    var numero=Number(inNumero.value);
    if(numero<1 || numero>100 || isNaN(numero)){
        alert("Digite um valor que seja válido");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    if(numero==sorteado){
        alert("Parabéns!! Você acertou o número!!!");
        btApostar.disabled=true;
        btNovo.className="exibe";
        outDica.textContent="Parabéns!! Você descobriu o número!!! "+sorteado;
    }else{
        if(erros.indexOf(numero)>-1){
            alert("Você já digitou o número "+numero+"\nEscolha outro");
            inNumero.value="";
            inNumero.focus();
            return;
        }
        erros.push(numero);
        var numErros=erros.length;
        var numChances=chances-numErros;
        if(numChances==0){
            btApostar.disabled=true;
            btNovo.className="exibe";
            alert("GAME OVER!!");
            outErros.textContent=numErros+" ( "+erros.join(", ")+" )";
            outChances.textContent=numChances;
            outDica.textContent="Game Over!! O número sorteado era "+sorteado;
        }else{
            outErros.textContent=numErros+" ( "+erros.join(", ")+" )";
            outChances.textContent=numChances;
            if(numero<sorteado){
                outDica.textContent="O número sorteado é maior que "+numero;
            }else{
                outDica.textContent="O número sorteado é menor que "+numero;
            }
            inNumero.value="";
            inNumero.focus();
        }
    }
}
var btApostar=document.getElementById("btApostar");
btApostar.addEventListener("click",apostarNumero);

//Função que carrega um novo jogo
function jogarNovamente(){
    location.reload();
}
var btNovo=document.getElementById("btNovo");
btNovo.addEventListener("click",jogarNovamente);
