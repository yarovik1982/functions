function createResponseFunction(n) {
    let count = 0;

    return function () {
        if (count < n) {
            count++;
            return "нет";
        } else {
            return "да";
        }
    };
}

// const response = createResponseFunction(3);
// console.log(response());
// console.log(response());
// console.log(response());
// console.log(response());
// console.log(response());

function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = 0;
            return count;
        },
        getCount() {
            return count;
        },
    };
}

const counter = createCounter();

const printText = (text) => {
    const arr = text.split("");
    let out = "";
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log((out += arr[i]));
        }, 1000);
    }
};

// console.log(counter.increment()); // Вывод: 1
// console.log(counter.increment()); // Вывод: 2
// console.log(counter.decrement()); // Вывод: 1

// console.log(counter.reset()); // Вывод: 0
// console.log(counter.increment());

// console.log(counter.getCount()); // Вывод: 0

function getCalculator () {
   let result = 0
   return {
      reset(){
         result = 0
         return result
      },
      setStartValue(value){
         result = value
      },
      getSumm(value){
         result += value
         return result
      },
      getMulty(value){
         result *= value
         return result
      },
      getResult(){
         return result
      }
   }
}

function f1() {
    return new Promise((resolve, reject) => {
        const calculator = getCalculator();
        if (calculator) {
            // console.log(calculator.getSum(3)); 
            resolve(console.log(calculator.getSumm(3))); 
        } else {
            console.log("calculator undefined");
            reject("calculator undefined"); 
        }
    });
}

f1();
