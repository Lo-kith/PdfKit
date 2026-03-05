# PdfBuilder

PdfBuilder is a lightweight JavaScript PDF generation library inspired by PDFKit.  
It allows developers to create multi-page PDFs with text, shapes, tables, and images using a simple chainable API.

The goal of PdfBuilder is to provide a **simple and extensible PDF engine written in pure JavaScript** that works in the browser.

---

## ✨ Features

- 📄 Multi-page PDF generation
- 📝 Text rendering
- 📐 Shapes (rectangles, lines)
- 📊 Table support
- 🖼 Image embedding
- 🔤 Font management
- 📏 Basic text wrapping
- ⚡ Chainable API
- 🌐 Works in the browser
- 📦 Modular architecture

---

## 📁 Project Structure
│
├── index.js
│
├── core/
│ ├── Document.js
│ ├── Page.js
│ └── Renderer.js
│
├── elements/
│ ├── Text.js
│ ├── Rect.js
│ ├── Line.js
│ ├── Image.js
│ └── Table.js
│
└── utils/
├── TextWrap.js
└── FontManager.js


### Core

| File | Description |
|-----|-------------|
Document.js | Main API used by developers |
Page.js | Represents a single PDF page |
Renderer.js | Converts document structure to PDF format |

### Elements

| File | Description |
|-----|-------------|
Text.js | Text rendering |
Rect.js | Rectangle drawing |
Line.js | Line drawing |
Image.js | Image embedding |
Table.js | Table rendering |

### Utils

| File | Description |
|-----|-------------|
TextWrap.js | Handles text wrapping |
FontManager.js | Manages fonts |

---

## 🚀 Installation

Clone the repository:

https://github.com/Lo-kith/PdfKit.git

Or copy the folder into your project.

---

## 💻 Usage Example

```javascript
import PDF from "./PdfBuilder/index.js"

const pdf = new PDF()

pdf
.addPage()
.fontSize(24)
.text("Hello Loki!",50,750)

.rect(50,650,200,100)

.line(50,620,300,620)

.table([
["Name","Role"],
["Loki","Developer"],
["Arthor","Engineer"]
],50,580)

.download("example.pdf")# PdfKit


📄 Output

The above example will generate a PDF with:

Text

Shapes

Tables

Multiple elements on a page

🔧 API
addPage()

Creates a new page.

pdf.addPage()
text()

Add text to the page.

pdf.text("Hello World",50,700)
rect()

Draw a rectangle.

pdf.rect(50,650,200,100)
line()

Draw a line.

pdf.line(50,600,300,600)
table()

Create a table.

pdf.table(data,startX,startY)
download()

Download the generated PDF.

pdf.download("file.pdf")

Future Improvements

Planned features include:

SVG rendering

Advanced text layout

True font embedding

PDF compression

Node.js file streaming

Layout engine

Contributing

Contributions are welcome!

If you'd like to improve PdfBuilder:

Fork the repository

Create a new branch

Submit a pull request