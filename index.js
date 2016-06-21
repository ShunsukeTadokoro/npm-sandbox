const lexer = require('sql-parser').lexer;
const parser = require('sql-parser').parser;

const tokens = lexer.tokenize('seledct * from my_table');

var result = '';
try {
  result = parser.parse(tokens).toString();
} catch(e) {
  result = e;
}

console.log(result);

