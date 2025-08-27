function enviar(){
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let mensagem = document.getElementById('mensagem').value

if (nome.length == 0){
    alert('Nome não pode ser vazio')
    return;
}
if (email.length == 0){
    alert('Email não pode ser vazio')
    return;
}
if (mensagem.length === 0){
    alert('Escreva uma mensagem')
    return;
}
}
