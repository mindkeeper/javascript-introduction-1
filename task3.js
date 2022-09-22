const printTriangle = (num) => {
  if (typeof num !== "number" || num <= 0) {
    return "Data Harus Number";
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
