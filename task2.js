const checkGrade = (mtk, bahasa, english, ipa) => {
  if (
    typeof mtk === "number" &&
    typeof bahasa === "number" &&
    typeof english === "number" &&
    typeof ipa === "number"
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
    return "Data Harus Number";
  }
};
