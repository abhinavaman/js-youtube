const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["uperman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allhero = marvel_heros.concat(dc_heros)
// console.log(allhero);

const all_new_hero = [...marvel_heros, ...dc_heros]

//console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5, 6,],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);