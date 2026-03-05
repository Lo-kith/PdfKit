export function wrapText(text, maxChars = 40) {

  const words = text.split(" ")
  let lines = []
  let currentLine = ""

  words.forEach(word => {

    if ((currentLine + word).length > maxChars) {
      lines.push(currentLine.trim())
      currentLine = ""
    }

    currentLine += word + " "

  })

  if (currentLine) {
    lines.push(currentLine.trim())
  }

  return lines
}