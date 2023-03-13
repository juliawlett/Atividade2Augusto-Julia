// ALTERANDO VARIAVEL
// let titulo = document.querySelector('.titulo')
// titulo.textContent = ''

// INFO PACIENTE
let pacientes = document.querySelectorAll('.paciente')
for (let i = 0; i <= pacientes.length; i++) {
    let paciente = pacientes[i]

    // INFO ALTURA
    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent

    // INFO PESO
    let tdPeso = paciente.querySelector('.info-peso')
    let peso = tdPeso.textContent

    let tdImc = paciente.querySelector('.info-imc')

    let imc = calculaImc(peso, altura)

    tdImc.textContent = imc
}

function calculaImc(peso, altura) {
    //CALCULO IMC
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}

