function getSum(a, b) {
    try {
        if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") {
            throw new Error("Один или оба аргумента не являются числом");
        }
        return a + b;
    } catch (error) {
        return "Error: " + error.message;
    }
}
const sum = getSum(2,"2")
console.log(sum);

