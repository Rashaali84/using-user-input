function showResult(event) {
    // read & process user input
    const form = event.target.form;
    const opValue = form['mySelect'].value;
    const firstValue = form.left.value;
    const secondValue = form.right.value;

    // call the core logic
    const results = calc(opValue, firstValue, secondValue);

    // render results for the user
    document.getElementById('program-output').innerText = results;

    // log action for developers
    console.log('\n-- user action --');
    console.log('firstNumber:', '(' + typeof firstValue + ')', firstValue);
    console.log('operation:', '(' + typeof intendedOp + ')', intendedOp);
    console.log('secondNumber:', '(' + typeof secondValue + ')', secondValue);
    console.log('result:', '(' + typeof results + ')', results);

    // for the browser
    return true;
}
