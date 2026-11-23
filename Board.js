class Board{
    constructor(check){
    this.sx=10;
    this.sy=80;
    


    }
drawBoard(img){
let x=random(0+this.sx,1080-this.sx);
let y=random(0+this.sy,1920-this.sy);

image(img,x,y);    
    }
}






