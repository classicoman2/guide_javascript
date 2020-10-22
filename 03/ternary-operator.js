// Some useful cases for ternary operator

//A Simple conditional
{
  let question = false;
  console.log(question ? "it's true" : "it's false");
}

// Absolute value of a negative number
let value = -10;

//We can use parenthesis in the comparison
let absolute = value > 0 ? value : -value;

console.log("The absolute number of " + value + " is: " + absolute);
