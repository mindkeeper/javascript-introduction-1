const printTriangle = (num) => {
  if (typeof num !== "number" || num <= 0) {
    return "input Invalid";
  } else {
    let string = "";

    for (let i = num; i > 0; i--) {
      for (let j = 1; j <= i; j++) {
        string += j;
      }
      string += "\n";
    }

    return string;
  }
};

console.log(printTriangle(5));
