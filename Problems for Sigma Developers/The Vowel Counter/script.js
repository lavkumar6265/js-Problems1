let str = "lovekumarAjko";

let arr = ['a','e','i','o','u','A','E','I','O','U'];

function countVowel(str){

    const vowelRegex = /[aeiouAEIOU]/g;

    const vowelMatches = str.match(vowelRegex);

    let ans = vowelMatches.length;

    return ans;

}

let a = countVowel(str);

console.log(a);
