
var letters = {};

function countLetters(string){
  for(i = 0; i < string.length; i++){
    if(string[i] !== ' '){
      if(letters[string[i]]){
        letters[string[i]] += 1
      }
      else {
        letters[string[i]] = 1;
      }
    }
  }
  return letters;
}

console.log(countLetters('hello world'));
console.log(letters['h'] += 1)