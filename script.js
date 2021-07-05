const calculate = document.getElementById ('calculate')

function imc(){
    const name = document.getElementById('name').value
    const heigth = document.getElementById('heigth').value
    const weigth = document.getElementById('weigth').value
    const result = document.getElementById('result')

    if (name !== '' && heigth !== '' && weigth !== '') {

        const imcValue = (weigth / (heigth * heigth)).toFixed(1)

        let classification

        if (imcValue < 18.5){
            classification = 'abaixo do peso'
        }else if (imcValue < 25){
            classification = 'com peso ideal'
        }else if (imcValue < 30){
            classification = 'com sobrepeso'
        }else if (imcValue < 35){
            classification = 'com obesidade I'
        }else if (imcValue < 40){
            classification = 'com obesidade II'
        }else{
            classification = 'com obesidade III'
        }

        
        result.textContent = `${name} seu IMC é ${imcValue} e você está ${classification}`

    }else {
        result.textContent = "Preencha todos os campos"
    }

}

calculate.addEventListener('click', imc);