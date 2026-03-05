class Renderer {

  constructor(pages){
    this.pages = pages
  }

  render(){

    let pdf = "%PDF-1.4\n"
    let offsets = []
    let objIndex = 1

    const addObject = (content)=>{
      offsets.push(pdf.length)
      pdf += `${objIndex} 0 obj\n${content}\nendobj\n`
      objIndex++
    }

    addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    const fontObj = objIndex-1

    let pageObjects=[]

    this.pages.forEach(page=>{

      let content=""

      page.elements.forEach(el=>{
        content += el.render()
      })

      const stream=
`<< /Length ${content.length} >>
stream
${content}
endstream`

      addObject(stream)
      const contentObj=objIndex-1

      addObject(`<<
/Type /Page
/MediaBox [0 0 612 792]
/Contents ${contentObj} 0 R
/Resources << /Font << /F1 ${fontObj} 0 R >> >>
>>`)

      pageObjects.push(objIndex-1)

    })

    const kids=pageObjects.map(i=>`${i} 0 R`).join(" ")

    addObject(`<< /Type /Pages /Kids [${kids}] /Count ${pageObjects.length} >>`)
    const pagesObj=objIndex-1

    addObject(`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`)
    const catalogObj=objIndex-1

    const xref=pdf.length

    pdf += `xref
0 ${objIndex}
0000000000 65535 f \n`

    offsets.forEach(o=>{
      pdf += `${String(o).padStart(10,"0")} 00000 n \n`
    })

    pdf += `
trailer
<< /Size ${objIndex} /Root ${catalogObj} 0 R >>
startxref
${xref}
%%EOF`

    return pdf

  }

}

export default Renderer