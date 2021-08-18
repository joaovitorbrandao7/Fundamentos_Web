let nome = window.document.getElementById('nome');
let email = window.document.getElementById('email');
let historia = window.document.querySelector('#historia');

// nome.style.width = '100%';
// email.style.width = '100%';

function validaNome(){
    let txt = document.querySelector('#txtNome');
    
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido';
        txt.style.color = 'red'

    }else{
        txt.innerHTML = 'Nome Válido';
        txt.style.color = 'green'
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtEmail');

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1 ){
        txt.innerHTML = 'E-mail Inválido';
        txt.style.color = 'red'

    }else{
        txt.innerHTML = 'Email Válido';
        txt.style.color = 'green'
    }
}

