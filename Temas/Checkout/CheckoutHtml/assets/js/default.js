let CamposTag = document.getElementsByTagName('input');
let EnviarPagamento = document.getElementById('pgamentsbuttonenv');

const NumeroCartao = new Number(CamposTag[0].value.length);
const Nome = new String(CamposTag[1].value);
const ValidaCupom = CamposTag[5].value;
const CupomDesconto = new String("");

function ErrorCampos(){

	for(let cont = 0; cont <= CamposTag.length; cont++){
		CamposTag[cont].style.border = "1px solid red";
	}
}

	if(CamposTag.value){
		alert("Preencha todos os campos!!!")
		ErrorCampos()
	}else{

		if(NumeroCartao <= 15 || NumeroCartao >= 17){
			alert("Preencha o numero do seu Cartão de Crédito corretamente!!!")
		}
	
		if(Nome === new Number() || Nome == ""){
			alert("Preencha o campo nome corretamente! Ex: (A-Z,a-z)")
		}else if(Nome.length <= 3){
			alert("Seu nome precisa ter no minímo 4 letras!")
		}
	
		if(CupomDesconto){
			alert("Adicione seu cupom desconto!")
			if(ValidaCupom.length !== 8){
				alert("Cupom desconto incorreto!")
			}
		}
	}