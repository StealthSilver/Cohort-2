// this is synchronous code

function sum(a, b) {
    return parseInt(a) + parseInt(b);
}

let ans = sum("89", "98");
console.log(ans);

function rec(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;

    }
    return sum;
}

console.log(rec(10));

