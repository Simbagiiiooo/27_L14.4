/* let colors = ['yellow', 'blue', 'red', 'orange']; */
/* let i = 0;
let text = "";
while (colors[i]) {
text += colors[i] + ' ';
i++
} 
console.log(colors);
 */




/* for (color of colors) {
    console.log(color);
} */

/* colors.forEach(Element => console.log(Element)); */


let cat = {
    name: "Abyssinian",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
   
  }

  for (property in cat) {
    console.log(`key= ${property} value = ${cat[property]}`)
 }