// console.log(Math.random(10));

function getMax(min, max) {
  console.log(Math.round(min + Math.random() * (max - min)));
}

for (i = 0; i < 50; i++) {

  getMax(2, 10);

}
