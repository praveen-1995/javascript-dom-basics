/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateTotal, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

 */

const calculateTotal = function random(subTotal, tax) {
  // const total = subTotal + tax;
  // return total;
  return subTotal + tax;
};

// console.log(calculateTotal(200, 20));

const order1 = calculateTotal(5, 1);
const order2 = calculateTotal(10, 2);
const order3 = calculateTotal(20, 3);

const orders = [order1, order2, order3];
console.log(orders);
