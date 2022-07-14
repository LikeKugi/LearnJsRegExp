let regexp = /(Java(Script)?|(PHP)|(C(\+\+)?))/g;

console.log("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C

/* ********************************************************************************* */

let regexp1 = /\[([a-z]+)\].*\[\/\1\]/g;

let str = "..[url][b]http://ya.ru[/b][/url]..";
console.log( str.match(regexp1) ); // [url][b]http://ya.ru[/b][/url]

/* ********************************************************************************* */

let regexp2 = /"(\\.|[^"\\])*"/g;

let str2 = '" \"';
console.log( str2.match(regexp2) );

/* ********************************************************************************* */

let regexp3 = /\<style\b(\>|( [^\<\>]*)*\>)/g;

console.log( '<style> <styler> <style test="...">'.match(regexp3) ); 

// <style>, <style test="...">  
// /<style(>|\s.*?>)/g  -  The answer, but not correct if the string equals '<style <styler> <style test="...">'
// /\<style\b(\>|( [^\<\>]*)*\>)/g  -  This regexp3 doesn't match '<style <styler>' so I prefer this one