/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    return function(element) {
        return element > num;
    };
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    return function(element) {
        return element.includes(substr);
    };
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return function(innerNum) {
        return num * innerNum;
    };
}

console.log([1, 2, 3, 4, 5].filter(higherThan(3)));
// [4, 5]

console.log(['ABC', 'abc', 'bca', 'qwe'].filter(hasSubstring('bc')));
// ['abc', 'bca']

console.log(multiply(5)(10));
// 50