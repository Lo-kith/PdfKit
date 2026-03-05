import Page from "./Page.js"
import Renderer from "./Renderer.js"
import Text from "../elements/Text.js"
import Rect from "../elements/Rect.js"
import Line from "../elements/Line.js"
import Table from "../elements/Table.js"

class Document {

    constructor() {
        this.pages = []
        this.currentPage = null
        this.fontSizeValue = 12
    }

    addPage() {
        const page = new Page()
        this.pages.push(page)
        this.currentPage = page
        return this
    }

    fontSize(size) {
        this.fontSizeValue = size
        return this
    }

    text(content, x, y) {
        this.currentPage.elements.push(
            new Text(content, x, y, this.fontSizeValue)
        )
        return this
    }

    rect(x, y, w, h) {
        this.currentPage.elements.push(
            new Rect(x, y, w, h)
        )
        return this
    }

    line(x1, y1, x2, y2) {
        this.currentPage.elements.push(
            new Line(x1, y1, x2, y2)
        )
        return this
    }

    table(data, x, y) {
        this.currentPage.elements.push(
            new Table(data, x, y)
        )
        return this
    }
    image(src, x, y, width, height) {
        this.currentPage.elements.push(
            new Image(src, x, y, width, height)
        )
        return this
    }

    generate() {
        const renderer = new Renderer(this.pages)
        return renderer.render()
    }

    download(filename = "document.pdf") {
        const blob = new Blob([this.generate()], { type: "application/pdf" })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()
    }

}

export default Document