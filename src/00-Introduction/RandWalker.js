class RandomWalker {
  constructor(p5, color) {
    this.p5 = p5;
    this.x = p5.width / 2;
    this.y = p5.height / 2;
    this.color = color || { r: 0, g: 0, b: 0 };
  }

  render() {
    this.p5.stroke(this.color.r, this.color.g, this.color.b);
    this.p5.point(this.x, this.y);
  }

  step() {
    const stepSizeX = this.p5.randomGaussian();
    const stepSizeY = this.p5.randomGaussian();
    const stepX = this.p5.floor(this.p5.random(-1, 2));
    const stepY = this.p5.floor(this.p5.random(-1, 2));

    this.x += stepX * stepSizeX;
    this.y += stepY * stepSizeY;

    this.x = this.p5.constrain(this.x, 0, this.p5.width - 1);
    this.y = this.p5.constrain(this.y, 0, this.p5.height - 1);
  }
}

export default function RandomWalkerSketch(s) {
  let walkerOne;
  let walkerTwo;
  s.setup = () => {
    s.frameRate(300);
    s.createCanvas(600, 600);
    s.background(127);
    walkerOne = new RandomWalker(s, { r: 255, b: 0, g: 0 });
    walkerTwo = new RandomWalker(s, {});
  };

  s.draw = () => {
    walkerOne.step();
    walkerTwo.step();
    walkerOne.render();
    walkerTwo.render();
  };
}
