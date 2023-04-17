///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside.  

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((a, c) => a + c.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) =>
  cartTotal + cartTotal * tax - couponValue;

console.log(calcFinalPrice(summedPrice, 5.0, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    orderType = Used to identify if the order is dine-in or a to-go order.
                Type of 'String('dine-in' or 'to-go') - Names or phrases have to be strings 

    itemName = Used to identify the item in the cart by name
                Type of 'String('dine-in' or 'to-go') - Names or phrases have to be strings

    itemQuantity = Used to identify the quantity of the item to be purchased
                    type of Number - Numbers are used to easily calculate totat of items.

    itemPrice = Used to identify the price of the item
                Type of number - Numbers are used for prices to be able to easily calculate totals or discounts. 

    specialOrder = Used to specify any special directions such as 'No pickles', 'Light onions', or 'None
                Type of array - Special directions can contain multiple phrases. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerCart = [
  {
    orderType: "Dine-In",
    itemName: "Mozarella Sticks",
    itemQuantity: 1,
    itemPrice: 9.99,
    specialOrder: "None",
  },
  {
    orderType: "Dine-In",
    itemName: "Cauliflower Wings",
    itemQuantity: 1,
    itemPrice: 12.99,
    specialOrder: "Mild Sauce",
  },
  {
    orderType: "Dine-In",
    itemName: "Sprite",
    itemQuantity: 1,
    itemPrice: 2.99,
    specialOrder: "No ice",
  },
  {
    orderType: "To-go",
    itemName: "Cheese Burger Combo",
    itemQuantity: 1,
    itemPrice: 15.99,
    specialOrder: "None",
  },
];
