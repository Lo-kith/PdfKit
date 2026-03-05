class Image {

  constructor(src, x, y, width, height) {
    this.src = src
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  render() {

    // This version assumes src is base64 JPEG
    const imgData = this.src.split(",")[1]

    return `
q
${this.width} 0 0 ${this.height} ${this.x} ${this.y} cm
/Im1 Do
Q
`
  }

}

export default Image