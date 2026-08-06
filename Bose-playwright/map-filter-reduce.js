let Fruit= ["apple", "banana", "orange", "kiwi", "grape", "watermelon", "pineapple", "mango", "strawberry", "blueberry"];
// console.log(Fruit.length);
// let filteredfruit = Fruit.filter(fruit => fruit.length > 5);
// console.log(filteredfruit);
// let mappedfruit = Fruit.map(fruit => fruit.toUpperCase());
// console.log(mappedfruit);
// let reducedfruit = Fruit.reduce((acc, fruit) => acc + " " + fruit);
// console.log(reducedfruit);

function filterText(text) {
    return Fruit.filter(fruit => fruit.includes(text));
}

filterText("a").forEach(fruit => console.log(fruit));

function mapText(text) {
    return Fruit.map(fruit => fruit + text);
}
mapText(" is delicious").forEach(fruit => console.log(fruit));