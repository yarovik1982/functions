// function recursion(a, n) {
//     if (n > 10) {
//         return "";
//     } else {
//         return `${a} * ${n} = ${a * n}\n` + recursion(a, n + 1);
//     }
// }

// function out() {
//     let result = "";
//     for (let i = 2; i < 10; i++) {
//         result += recursion(i, 1) + "\n";
//     }
//     return result;
// }
// console.log(out());

function recursion(word, i) {
    if (i === word.length - 1) {
        console.log(word[i]);
    } else {
        console.log(word[i] + "-");
        setTimeout(() => recursion(word, i + 1), 500);
    }
}
console.log(recursion("антананариву", 0));
