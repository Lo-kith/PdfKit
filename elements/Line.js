class Line {

  constructor(x1,y1,x2,y2){
    this.x1=x1
    this.y1=y1
    this.x2=x2
    this.y2=y2
  }

  render(){
return `
${this.x1} ${this.y1} m
${this.x2} ${this.y2} l
S
`
  }

}

export default Line