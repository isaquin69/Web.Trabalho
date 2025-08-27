
let calcular = document.getElementById('calcular')


function imc() {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')
    let peso = document.getElementById('peso').value

if (nome !== '' && altura !== '' && peso !== ''){
   
const valorIMC = (peso / (altura * altura)).toFixed(1)

 let classificação = ''

 if (valorIMC < 18.5){
    classificação = 'Abaixo Do Peso'
 }
 
 else if (valorIMC < 25){
    classificação = 'Peso Ideal,Parabés !!'
 }
 else if (valorIMC <30) {
    classificação = 'Você Está Acima do Peso'
 }
else if (valorIMC < 35){
 classificação = 'Com obesidade I'
}
else if (valorIMC < 40){
    classificação = 'Voce esta com obsidade II'
} else {
    classificação = 'Com obsidade III e Morbída'
   
}


 resultado.textContent = `${nome} Seu IMC é ${valorIMC} e Você Está ${classificação} !! `

}else {
    resultado.textContent = 'Prencha todos os campos acima !!'
}
}

calcular.addEventListener('click', imc)


