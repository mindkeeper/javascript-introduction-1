const printTriangle = (num) => {
  if (typeof num !== "number") {
    return "Data Harus Number";
  } else if (num <= 0) {
    return "Input harus lebih besar dari 0";
  } else {
    let result = "";

    for (let i = num; i > 0; i--) {
      for (let j = 1; j <= i; j++) {
        result += j;
      }
      result += "\n";
    }

    return result;
  }
};
console.log(printTriangle(5));
console.log(printTriangle("5"));
console.log(printTriangle(-1));
