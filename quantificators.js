let strToCheck = "Привет!... Как дела?.....";

let answer = strToCheck.match(/\.+/g);

console.log(`${answer} - all matches. `);

let strOfColorsToCheck = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

let answerOfColors = strOfColorsToCheck.match(/\#[0-9a-f]{6}\b/gi);

console.log(`${answerOfColors} - all matches. `);