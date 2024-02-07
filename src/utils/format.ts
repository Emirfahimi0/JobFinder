export const bulletFormatter = (value: string) => {
  const splitValue = value.split(".");
  const formattedString = splitValue.map((sentence) => {
    return sentence.trim();
  });
  return formattedString;
};

export const toRoman = (num: number) => {
  if (typeof num !== "number" || num < 1 || num > 3999) {
    throw new Error("Invalid input for Roman numeral conversion");
  }
  const romanNumeralMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 3, numeral: "III" },
    { value: 2, numeral: "II" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = num;
  for (const pair of romanNumeralMap) {
    while (remaining >= pair.value) {
      (result += pair.numeral), (remaining -= pair.value);
    }
  }

  return result;
};
