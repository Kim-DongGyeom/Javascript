// return, 数値の練習

// sec -> ms変換
const transSec = (min, sec) => {
  var result = (min * 60 + sec) * 1000;
  return result;
};
// console.log(transSec(1, 30));
// console.log(transSec(2, 10));

//
const calculateFinalPrice = (originalPrice, isFirstOrder) => {
  var discountAmount = originalPrice - originalPrice * 0.1;
  if (isFirstOrder) {
    discountAmount -= 1.5;
  }
  return parseFloat(discountAmount.toFixed(2));
};
console.log(calculateFinalPrice(70, false));
console.log(calculateFinalPrice(10, true));
