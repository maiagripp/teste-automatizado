function media(numbers){
    let sum = 0;
    for(const number of numbers ){
        sum += number;
    }
    return sum / numbers.length;
}

module.exports = media;