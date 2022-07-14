let regexp = /\b(?<!\-)\d+/g;

let str = "0 12 -5 123 -18";

console.log( str.match(regexp) ); // 0, 12, 123

/* ****************************************************** */

let regexpCheckBody = /(?<=\<body\b(\>|(\s[^\<\>]*)*\>))/;

let strCode = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

strCode = strCode.replace(regexpCheckBody, `<h1>Hello</h1>`);

console.log(strCode);
