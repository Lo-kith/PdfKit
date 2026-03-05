import Rect from "./Rect.js"
import Text from "./Text.js"

class Table {

  constructor(data,startX,startY){
    this.data=data
    this.x=startX
    this.y=startY
  }

  render(){

    let output=""
    let rowHeight=20
    let colWidth=120
    let y=this.y

    this.data.forEach(row=>{

      let x=this.x

      row.forEach(cell=>{

        const rect=new Rect(x,y-rowHeight,colWidth,rowHeight)
        output += rect.render()

        const text=new Text(cell,x+5,y-15,12)
        output += text.render()

        x+=colWidth

      })

      y-=rowHeight

    })

    return output
  }

}

export default Table