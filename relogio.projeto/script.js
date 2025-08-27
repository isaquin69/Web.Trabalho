function ChamarTempo() {
    let display = document.querySelector('.display')

    let agora = new Date
    let horas = CorrigirNumeros( agora.getHours()) + ':' + CorrigirNumeros( agora.getMinutes()) +
     ':' + CorrigirNumeros( agora.getSeconds())
    display.textContent = horas
    console.log(horas)

}
function CorrigirNumeros(numero) {
    if (numero < 10) {
        numero = '0' + numero

    } return numero
}
ChamarTempo()
setInterval(ChamarTempo, 1000)