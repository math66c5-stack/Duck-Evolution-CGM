  let sx=10;
  let sy=80;
  let img;


async function setup() {
  img = await loadImage('MAB.jpg');
  createCanvas(1080, 1920);
  

}

function draw() {
  background(220);
  

let x=random(0+this.sx,1080-this.sx);
let y=random(0+this.sy,1920-this.sy);

image(img,545,353);


    }




