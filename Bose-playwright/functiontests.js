let Fruit = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function someTest(text) {
    return Fruit.filter(fruit => fruit.includes(text)).map(fruit => fruit.toUpperCase());
}

someTest('a').forEach(fruit => console.log(fruit));