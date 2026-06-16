switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;//if default is not used, the code will continue to execute the next case except default
  case 3:
    console.log("March");
    break;
  default:
    console.log("Invalid month");
}
