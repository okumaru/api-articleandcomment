// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  // write your code here
  const arr = Object.entries(data).map(([key, value]) => ({ key, value }));
  let newarr = [];
  for (let index = 0; index < arr.length; index++) {
    arr[index].value = arr[index].value ?? 0;
    newarr.push(arr[index]);
  }

  newarr.sort(function (a, b) {
    if (a.value === b.value) {
      return 0;
    } else {
      return a.value < b.value ? -1 : 1;
    }
  });

  return newarr;
}

console.log(result(data));
