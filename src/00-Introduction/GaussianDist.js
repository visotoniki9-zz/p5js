export default function RandomWalkerSketch(s) {
  s.setup = () => {
    s.createCanvas(640, 240);
    s.background(127);
  };

  s.draw = () => {
    const r = s.randomGaussian();
    // Standard deviation
    const sd = 60;
    const mean = s.width / 2;
    const xloc = (r * sd) + mean;

    s.fill(0, 10);
    s.noStroke();
    s.ellipse(xloc, s.height / 2, 16, 16);
  };
}
