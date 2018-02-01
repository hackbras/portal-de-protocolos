function validation(par, name) {
    switch (name) {
        case 'name-complete':
            if ($('#' + par).val() == "" || $('#' + par).val() == 0) {
                alert("preencha o nome completo.");
                $('#' + par).focus();

            } else alert("executar ação");

            break;
        case 'cpf':
            if ($('#' + par).val() == "" || $('#' + par).val() == 0) {
                alert("preencha o cpf corretamente.");
                $('#' + par).focus();

            } else alert("executar ação");
            break;
        case 'protocol':
            if ($('#' + par).val() == "" || $('#' + par).val() == 0) {
                alert("Insira o protocolo desejado.");
                $('#' + par).focus();

            } else alert("executar ação");
            break;
    }

}