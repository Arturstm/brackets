module.exports = function check(str, bracketsConfig) {
  // your solution
  const bracketsArr = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    bracketsArr[i] = bracketsConfig[i].join('')
  }
  for(let j = 0; j < bracketsArr.length;){
    if(str.indexOf(bracketsArr[j]) >= 0) {
      str = str.replace(bracketsArr[j], '')
      j = 0;
    }
    else {
      j++;
    }
  }
  if(str.length === 0){
    return true;
  }
  else{
    return false;
  }
}
