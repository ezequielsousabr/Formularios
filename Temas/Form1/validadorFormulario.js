document.querySelector("#enviar").addEventListener("click", function(event) {
    event.preventDefault();

    var nome = document.querySelector(".nome").value;
    var email = document.querySelector(".email").value;
    var telefone = document.querySelector(".telefone").value;
    var cidade = document.querySelector(".cidade").value;
    var descricao = document.querySelector("#descricao").value;
    var empresa = document.querySelector("input[type=text]").value;

    var validacao = true;

    if (!nome) {
        alert("Por favor, preencha o campo Nome.");
        validacao = false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, preencha o campo E-mail com um endereço de e-mail válido.");
        validacao = false;
    }

    if (!validarTelefone(telefone)) {
        alert("Por favor, preencha o campo Telefone com um número de telefone válido.");
        validacao = false;
    }

    if (!cidade) {
        alert("Por favor, preencha o campo Cidade.");
        validacao = false;
    }

    if (!descricao) {
        alert("Por favor, preencha o campo Conte-nos o que você precisa!");
        validacao = false;
    }

    if (validacao) {
        alert("Formulário enviado com sucesso!");
    }
});

function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validarTelefone(telefone) {
    var re = /^\d{2}\s\d{4,5}\-\d{4}$/;
    return re.test(telefone);
}
