class FontManager {

  constructor() {
    this.fonts = {
      Helvetica: {
        name: "Helvetica"
      }
    }

    this.activeFont = "Helvetica"
  }

  registerFont(name, data) {
    this.fonts[name] = data
  }

  setFont(name) {
    if (this.fonts[name]) {
      this.activeFont = name
    }
  }

  getFont() {
    return this.fonts[this.activeFont]
  }

}

export default FontManager