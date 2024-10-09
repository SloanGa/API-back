export const justifyText = (text: string) => {
  const maxLineLength = 80;
  const words = text.split(" ");
  let result = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length > maxLineLength) {
      result.push(currentLine);
      currentLine = word;
    } else {
      currentLine += (currentLine ? " " : "") + word;
    }
  });

  if (currentLine) {
    result.push(currentLine);
  }
  return result.join("\n");
};
