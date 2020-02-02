function reverseItHandler(event) {
  // read & process user input
  const userInput = event.userInput;

  // execute core logic
  const reversed = reverse(userInput);

  // display results to user
  document.getElementById("output").innerText = reversed;

  // log action for developers
  console.log("\n-- user action --");
  console.log("userInput:", "(" + typeof userInput + ")", userInput);
  console.log("userOutput:", "(" + typeof reversed + ")", reversed);

  // tell the browser everything is OK
  return true;
}
