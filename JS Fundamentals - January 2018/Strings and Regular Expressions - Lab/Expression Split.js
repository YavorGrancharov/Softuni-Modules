function splitExpression(str) {
    let regex = /[,.;()\s]+/;
    str.split(regex).forEach(el => console.log(el));
}
splitExpression('let sum = 1 + 2;if(sum &gt; 2){\tconsole.log(sum);}');