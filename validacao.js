function validar() {
    /* cria váriavel local recebendo valor do formUser usando name dos inputs */
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var telefone = formUser.telefone.value;
    var endereco = formUser.endereco.value;
    var senha = formUser.senha.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;

    if (nome == "" || nome.length < 3) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }
    if (email == "" || email.length < 10) {
        alert("O e-mail não atende os requisitos!");
        formUser.email.focus();
        return false;
    }
    if (telefone == "" || telefone.length < 11 || telefone.length > 11) {
        alert("Digite um número de telefone válido!");
        formUser.telefone.focus();
        return false;
    }
    if (endereco == "" || endereco.length < 3) {
        alert("Digite um endereço válido!");
        formUser.endereco.focus();
        return false;
    }
    if (senha == "" || senha.length < 8) {
        alert("Digite uma senha de pelo menos 8 digitos!");
        formUser.senha.focus();
        return false;
    }
    if(cpf == "" && cnpj == "") {
        alert("Preencha pelo o Cpf ou o Cnpj!");
        return false;
    }
    if(cpf != "" && cnpj != "") {
        alert("Escolha Cpf ou Cnpj!");
        return false;
    }
    if (cpf == "" && cnpj != "") {
        if (cnpj.length != 18) {
            alert("CNPJ incorreto!");
            formUser.cnpj.focus();
            return false;
        }
    } else if (cnpj == "" && cpf != "") {
        if (cpf.length != 14) {
            alert("CPF incorreto!")
            formUser.cpf.focus();
            return false;
        }
    }
}

function mascaraCPF(i) {
    const v = i.value;
    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0,v.length - 1);
        return;
    }
    i.setAttribute("maxlength","14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

function mascaraCNPJ(i) {
    const v = i.value;
    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0,v.length - 1);
        return;
    }
    i.setAttribute("maxlength","18");
    if (v.length == 2) i.value += ".";
    if (v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "/";
    if (v.length == 15) i.value += "-";
}

function mascaraTel(i) {
    const v = i.value;
    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0,v.length - 1);
        return;
    }
    i.setAttribute("maxlength","14");
    if (v.length == 1) i.value = "(" + i.value + "";
    if (v.length == 3) i.value += ")";
    if (v.length == 9) i.value += "-";
}