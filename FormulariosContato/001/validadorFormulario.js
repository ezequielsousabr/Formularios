/*
Criando uma constante para selecionar todos os campos de entrada
do usuário. */

const in_inputs  = document.querySelectorAll( [

    '.nome','.email','.telefone','.cidade','.estado'

]);

/*
Verificar todos as condições de entradas dos campos inputs
para validação de dados do usuário. */

if((in_inputs[0].value.length === "") || (in_inputs[0].value.length <= 4)){
    alert("Preencha seu nome completo corretamente!");
    in_inputs[0].focus();
}

if(in_inputs[1].value.length === ""){
    alert("Preencha o campo email corretamente!");
}

if(in_inputs[3].value.length >= 4){
    in_inputs[4].removeAttribute('disabled');
}else{
    in_inputs[4].setAttribute('disabled', '');
}

/*
Inserir de forma automática todos os ufs de estados.
Cada uf deve estar dentro de da sua tag options. */

var ufList = ["sp","mg","rs","rn","es","ba","ro"];

console.log(ufList);

function ufOptions(ufList){

    let estados = ufList;

    let options = `<options>${estados}</options`;

    console.log(options);

    for(var cont = options; options <= 27; i++){
        console.log(options + 'Listando');
    }
}

ufOptions(ufList);