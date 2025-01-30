// filter function

// given an input array return all the even values

const input = [1, 2, 3, 4, 5, 6];

function transform(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const ans = input.filter(transform);
console.log(ans);
