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
