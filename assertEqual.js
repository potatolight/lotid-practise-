const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [" + actual  + "] === [" + expected + "]");
  } else {
    console.log("Assertion Passed: [" + actual  + "] !== [" + expected + "]");
  }

}

assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);