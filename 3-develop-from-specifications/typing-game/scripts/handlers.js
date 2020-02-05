function doTheyMatch(event) {
    // read & process user input
    const form = event.target.form;
    const firstValue = form.visible.value;
    const secondValue = form.obscured.value;


    // call the core logic
    const results = compareThem(firstValue, secondValue);
    // render results for the user
    document.getElementById('program-output').innerText = results;
    document.getElementById('user-interface').className = results;

    // log action for developers
    console.log('\n-- user action --');
    console.log('firstNumber:', '(' + typeof firstValue + ')', firstValue);
    console.log('operation:', '(' + typeof intendedOp + ')', intendedOp);
    console.log('secondNumber:', '(' + typeof secondValue + ')', secondValue);
    console.log('result:', '(' + typeof results + ')', results);

    // for the browser
    return true;
}
