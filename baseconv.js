function baseconv(value, base) {
    let arr = []
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = value
    let rem
    let baseString = ''

    if (!(base >=2 && base <=36)) {
        return ''
    }

    while (number > 0) {
        rem = Math.floor(number%base)
        arr.push(rem) // push the remainder to the array
        number = Math.floor(number/2) // while the the number is still greater than 0
    }

    while (arr.length !== 0) {
        baseString += digits[arr.pop()]
    }

    return baseString
}
console.log(baseconv(10,36))