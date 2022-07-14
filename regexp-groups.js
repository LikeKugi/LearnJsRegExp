let REGEXP = /([a-f\d]{2}:){5}[a-f\d]{2}/gi;

function checkMAC(strToCheck) {
    console.log(REGEXP.test(strToCheck));
}

checkMAC('01:32:54:67:89:ab');

/*
 *alert( regexp.test('01:32:54:67:89:AB') ); // true
 *
 *alert( regexp.test('0132546789AB') ); // false (нет двоеточий)
 *
 *alert( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)
 *
 *alert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)
*/

const REGEXP_COLOR = /\#([a-f\d]{3}\b)|([a-f\d]{6}\b)/gi;

function checkColor (colorToCheck) {
    console.log(colorToCheck.match(REGEXP_COLOR));
}

checkColor('color: #3f3; background-color: #AA00ef; and: #abcd');

/* ********************************************************************************* */

let regexp = /\-?\d+(\.?\d+)?\b/g;

let str = "-1.5 0 2 -123.4.";

console.log(str.match(regexp));

/* ********************************************************************************* */

const NUMBERS = /(?<firstNumber>\-?\d+(?:\.?\d+)?\b) (?<operator>[\*\-\+\/]) (?<secondNumber>\-?\d+(?:\.?\d+)?\b)/

function parse(expToCheck) {

        let [expression, first, operator, second] = expToCheck.match(NUMBERS);

        console.log(`expression = ${expression}`);

    return ([first, operator, second]);

}

let [a, op, b] = parse("1.2 * 3.4"); 

console.log (`a = ${a}; op = ${op}; b = ${b};`);

/*
 * "1.2 * 3.4"
 *alert(a); // 1.2
 *alert(op); // *
 *alert(b); // 3.4
*/