function media(numbers){
    if ( ! numbers ){
        throw new Error('Por favor, informe os números')
    }
    if(!Array.isArray(numbers) || numbers.length < 1){
        throw new Error('O array não pode estar vazio')
    }
    let sum = 0;
    for(const number of numbers ){
        sum += number;
    }
    return sum / numbers.length;
}

module.exports = media;