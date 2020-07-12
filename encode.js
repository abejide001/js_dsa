
var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('')

function encode(num) {
    var base = DICTIONARY.length
    var encoded = ''
    if (num == 0) {
        return DICTIONARY[0]
    }
    while (num > 0) {
        encoded += DICTIONARY[(num % base)]
        num = Math.floor(num / base)
    }
    return encoded.split("").reverse().join("")
}

console.log(encode(59))