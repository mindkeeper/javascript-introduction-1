const checkGrade = (mtk, bahasa, english, ipa) => {
  if (
    typeof mtk !== "number" ||
    typeof bahasa !== "number" ||
    typeof english !== "number" ||
    typeof ipa !== "number"
  ) {
    return "Input Invalid: Please Input Number Only";
  } else if (mtk < 0 || bahasa < 0 || ipa < 0 || english < 0) {
    return "Input Invalid : Please input number higher or equal to 0";
  } else {
    const average = (mtk + bahasa + english + ipa) / 4;
    const grade =
      average <= 100 && average >= 90
        ? "A"
        : average >= 80
        ? "B"
        : average >= 70
        ? "C"
        : average >= 60
        ? "D"
        : "E";
    return `Rata-rata = ${average}
    Grade = ${grade}`;
  }
};
console.log(checkGrade(100, 100, 100, 20));
console.log(checkGrade(-10, 100, 100, 90));
console.log(checkGrade("10", 100, 100, 90));
