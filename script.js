function contagem(){
    var i =1;
    var num = 10;
    while(i<=10){
        alert(num);
        num--;
        i++;
    }
    alert("Happy New Year!")
}

function tabela(){
    var num = document.getElementById("valor").value
    var num2 = num;
    document.getElementById("p2").innerHTML=" ";
    for (var i = 1; i<=10; i++ ) {
    num2=num*i;
    document.getElementById("p2").innerHTML = document.getElementById("p2").innerHTML+" "+num2
    }
}



function soma(){
    var i = 1;
    var num = 0;
    while(i<=50){
        if(i%2==0){
            var num = num+i;
        }
        i++;
    }
    alert(num);
}

function verificador(){
    num = document.getElementById("text4").value;
    var multiplos = 0;
    for(var i=1; i<=num; i++){
        if(num%i==0){
            multiplos++;
        }
    }
    if(multiplos==2){
        alert("É primo!");
    } else{
        alert("Não é primo")
    }
}

    function sequencia(){
    var quantidade = document.getElementById("sequencia1").value;
    var num1 = 1;
    var num2 = 0;
    var num3 = 0;
    document.getElementById("sequencia5").innerHTML = 0;
    for(var i = 0; i<=quantidade; i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        document.getElementById("sequencia5").innerHTML = document.getElementById("sequencia5").innerHTML + " " + num3;
    }
   
   
}





