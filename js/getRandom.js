function getRandom(min, max){
   return Math.floor(min + Math.random() * (max + 1 - min)) 
}
const random = getRandom(0, 10)

function getRandomBrightColor() {
         function isBright(color) {
            const [r, g, b] = color;
            return (r + g + b) > 400;
         }
   
         while (true) {
            const color = [
               Math.floor(Math.random() * 256),
               Math.floor(Math.random() * 256),
               Math.floor(Math.random() * 256),
            ];
            if (isBright(color)) {
               // return `#${color.map(c => c.toString(16).padStart(2, '0')).join('')}`;
               return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            }
         }
      }

const color = getRandomBrightColor()
console.log(color);
