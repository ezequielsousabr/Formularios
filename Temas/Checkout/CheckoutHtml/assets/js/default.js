let CamposTag = document.getElementsByTagName('input');

const NumeroCartao = CamposTag[0].value;
const Nome = CamposTag[1].value;
const CupomDesconto = CamposTag[5].value;

function ErrorCampos(){
    for(let cont = 0; cont <= CamposTag.length; cont++){
        CamposTag[cont].style.border = "1px solid #FF033E";

        console.log(cont)
    }

    return false;
}

function CamposValidos(){
    for(let cont = 0; cont <= CamposTag.length; cont++){
        CamposTag[cont].style.border = "1px solid green";

        console.log(cont);
    }
}

if(NumeroCartao == new String() || NumeroCartao == ""){
    alert("Preencha o numero do seu Cartão de Crédito!")
    ErrorCampos()
}else{
    CamposValidos()
}

if(Nome == new String() || Nome == new Number() || Nome == ""){
    alert("Preencha seu Nome Completo!")
    ErrorCampos()
}else if(Nome.length <= 4){
    alert("Seu nome precisa ter no minímo 5 letras!")
    ErrorCampos()
}else{
    CamposValidos()
}

if(CupomDesconto.length !== 8){
    alert("Seu cupom desconto está incorreto!")
    ErrorCampos()
}else{
    CamposValidos()
}