array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
console.log(array);

array.sort ();
console.log(array);

array.push("Kiwi");
console.log(array);

delete array[1];
console.log(array);

console.log (array.reverse());

array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1])