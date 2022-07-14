let strToCheck = "... <!-- My -- comment test --> ..  <!----> ..";

let strTagsToCheck = '<> <a href="/"> <input type="radio" checked> <b>';


let answer = strToCheck.match(/\<[^\>]+\>/g);

let answerTags = strTagsToCheck.match(/\<[^\>]+\>/g);

//let patternOfTime = /\b([0-1]\d|2[0-4])[:-][0-5]\d\b/g;

//let correctAnswer = strToCheck.match(patternOfTime);

console.log(`${answer} - all matches; ${answerTags} - tags in string`);
