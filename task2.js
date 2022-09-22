const checkGrade = (mtk, bahasa, english, ipa) => {
  if (
    typeof mtk === "number" &&
    mtk >= 0 &&
    typeof bahasa === "number" &&
    bahasa >= 0 &&
    typeof english === "number" &&
    english >= 0 &&
    typeof ipa === "number" &&
    ipa >= 0
  ) {
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
  } else {
    return "Input Invalid";
  }
};
console.log(checkGrade(10, 20, 20, -20));
