export function calcularImc(peso, altura) {
    if(!peso || !altura){
        throw new Error('Os valores informados não podem ser zero')
    }
    return peso / (altura * altura);
  }

export function imcClasses(){

    if (calculaImc() < 18.5) {
        return(
          'Você está abaixo do peso!'
        );
      } else if (calculaImc() >= 18.5 && calculaImc() <= 24.9) {
        return(
          'Seu peso está normal'
        );
      } else if (calculaImc() >= 25 && calculaImc() <= 29.9) {
        return(
          'Você está com sobrepeso'
        );
      } else if (calculaImc() >= 30 && calculaImc() <= 34.9) {
        return(
          'Você está com obesidade I'
        );
      } else if (calculaImc() >= 35 && calculaImc() <= 39.9) {
       return(
          'Você está com obesidade II'
        );
      } else {
        return(
          'Você está com obesidade mórbida'
        );
      }
  }

