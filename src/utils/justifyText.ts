export const justifyText = (text: string) => {
  const maxLineLength = 80; // Maximum length of each line
  const words = text.split(" "); // Split the input text into words
  let result: string[] = []; // Store the final justified lines
  let currentLine: string[] = []; // Store words for the current line
  let currentLength = 0; // Track the length of the current line

  words.forEach((word) => {
    // If adding the current word exceeds the max line length
    if (currentLength + word.length + currentLine.length > maxLineLength) {
      // Add spaces between words (evenly distribute)
      let spacesToAdd = maxLineLength - currentLength; // Extra spaces needed
      let gaps = currentLine.length - 1; // Number of spaces between words
      let spacePerGap = Math.floor(spacesToAdd / gaps); // Spaces per gap
      let extraSpaces = spacesToAdd % gaps; // Extra spaces to distribute

      let justifiedLine = "";
      currentLine.forEach((word, index) => {
        justifiedLine += word; // Add the word
        if (index < gaps) {
          // Add spaces between words
          justifiedLine += " ".repeat(
            spacePerGap + (index < extraSpaces ? 1 : 0),
          );
        }
      });

      // Add the fully justified line to the result
      result.push(justifiedLine);

      // Reset for the next line
      currentLine = [word];
      currentLength = word.length;
    } else {
      // If the word fits, add it to the current line
      currentLine.push(word);
      currentLength += word.length;
    }
  });

  // Add the last line without justification
  result.push(currentLine.join(" "));

  // Join all lines with newlines and return
  return result.join("\n");
};
