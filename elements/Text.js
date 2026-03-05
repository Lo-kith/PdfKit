class Text {

  constructor(text,x,y,size){
    this.text=text
    this.x=x
    this.y=y
    this.size=size
  }

  render(){
return `
BT
/F1 ${this.size} Tf
${this.x} ${this.y} Td
(${this.text}) Tj
ET
`
  }

}

export default Text