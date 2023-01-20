/* Armazenando dados importantes */

const nome      = document.querySelector('.nome');
const email     = document.querySelector('.email');
const telefone  = document.querySelector('.telefone');
const cidade    = document.querySelector('.cidade');
const estado    = document.querySelector('.estado');
const descricao = document.querySelector('#descricao');

const dados  = [
    '.nome',
    '.email',
    '.telefone',
    '.cidade',
    '.estado'
];

/* Verificar se todos os campos estão preenchidos
corretamente. */

if(dados.value === ""){
    alert("Preencha o formulário!");
}