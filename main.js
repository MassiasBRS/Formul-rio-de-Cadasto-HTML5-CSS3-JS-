let email = document.getElementById('emailID');
let senha = document.getElementById('senha');
let registrar = document.getElementById('registar');

function registarUsuario(){
    let dados = [];

    dados.push(email.value);
    dados.push(senha.value);

    alert('Cadasto realizado com Sucesso!');
    
    email.focus();
}
registrar.onclick = registarUsuario;