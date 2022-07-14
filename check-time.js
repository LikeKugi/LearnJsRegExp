let strToCheck = "Завтрак в 09:00 в комнате 123:456. 29:07 37-94 19:64 19-57 25-39 36-54 23-68 23:58";

let answer = strToCheck.match(/\b\d{2}[:-]\d{2}\b/g);

let patternOfTime = /\b([0-1]\d|2[0-3])[:-][0-5]\d\b/g;

let correctAnswer = strToCheck.match(patternOfTime);

console.log(`${answer} - all matches. ${correctAnswer} - Correct matches with time`);

