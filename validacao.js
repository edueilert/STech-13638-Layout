function validar(){
    /* cria váriavel local recebendo valor do formUser usando name dos inputs */
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var telefone = formUser.telefone.value;
    var endereco = formUser.endereco.value;
    var senha = formUser.senha.value;

    if(nome == "" || nome.length < 3){
        alert("Informe o nome completo");
        formUser.nome.focus();
        return false;
    }
}