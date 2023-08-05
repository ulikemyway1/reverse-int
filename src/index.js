module.exports = function reverse (number) {
    let reverseNum =''
    if (number < 0) {
        // reverseNum += '-';
        number = number * (-1);
    }
while (number >=10) {
    reverseNum += number%10;
    number = (number - number%10)/10
}
reverseNum += number;
return +reverseNum 
}
