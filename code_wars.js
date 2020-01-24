// Multiply
function multiply(a, b){
    return (a * b);
  }
  multiply(2,2);

// return masked string
function maskify(cc) {
    let maskedCC = "";
     for (var i = 0; i < cc.length - 4; i++){
     maskedCC += "#";
     }
    for (var j = 4; j >= 1; j --){
      let finalCharacter = cc.charAt(cc.length - j);
      let newfinalCharacter = finalCharacter;
      maskedCC += newfinalCharacter;
      }
      
      return maskedCC;
     
   }
   
   console.log(maskify('1234234325231'));

// Square Every Digit
function squareDigits(num){
    var strNum = String(num);
    var newNum = '';
    for (var i = 0; i <=strNum.length - 1; i ++){
    newNum += strNum[i]*strNum[i];
    }
    
    return Number(newNum);
    }
    squareDigits(1234);

// Find the Odd Int
function findOdd(A) { 
    var count = 0;
    for(var i = 0; i < A.length; i++) {
      // var count = 0;
      for(var j = 0; j < A.length; j++) {
            if(A[i] == A[j]) {
              count++;
            }
          }
      if (count % 2 !== 0) {
          return A[i];
      }
    }
    count = 0;
  }

// Find the next perfect square
function findNextSquare(sq) {
    var ogSquareroot = Math.sqrt(sq);
    if (Number.isInteger(ogSquareroot)){
      var newInt = ogSquareroot + 1;
      return Math.pow(newInt, 2);
    } else {
      return -1;
    }
  }