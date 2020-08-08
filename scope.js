let bonus = 20;

function sum(first, second) {
  const result = first + second + bonus;
  console.log(result);
  if (result > 9) {
    const mood = "happy";
    console.log(mood);
  }
  return result;
}

const output = sum(10, 15);
console.log(bonus);
console.log(output);
