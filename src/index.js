module.exports = function check(str, bracketsConfig) {
 let stack = [];
 let currentSymbol;
 let topElement;
  for (i = 0; i < str.length; i++) {
    currentSymbol = str[i];

    for (j = 0; j < bracketsConfig.length; j++) {
      topElement = stack[stack.length - 1];
      if (currentSymbol === topElement 
          && currentSymbol === bracketsConfig[j][0] 
          && currentSymbol === bracketsConfig[j][1]) {
            stack.pop();
            break;
      }
      else if (bracketsConfig[j][0] === currentSymbol) {
        stack.push(currentSymbol);
        break;
      }
      else if (bracketsConfig[j][1] === currentSymbol) {
        if (bracketsConfig[j][0] === topElement) {
          stack.pop();
          break;
        } else {
          return false;}
      }
    }
  
  }
  return stack.length === 0;
}
