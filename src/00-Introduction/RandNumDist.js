export default function RandomWalkerSketch(s) {
  const randomCounts = [];
  const total = 20;
  s.setup = () => {
    s.createCanvas(640, 240);
    for (let i = 0; i < total; i += 1) {
      randomCounts[i] = 0;
    }
  };

  s.draw = () => {
    s.background(127);
    const index = s.floor(s.random(total));
    randomCounts[index] += 1;

    s.stroke(0);
    s.strokeWeight(2);
    s.fill(255);

    const w = s.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x += 1) {
      s.rect(x * w, s.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };
}
