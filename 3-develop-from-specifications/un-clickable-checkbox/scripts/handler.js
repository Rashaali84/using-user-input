
function shaddowMouse(event) {
    // read & process user input
    cursorX = event.pageX;
    cursorY = event.pageY;

    // call the core logic
    const results = coordinatesToStyle(cursorX, cursorY);
    // render results for the user
    //document.getElementById('program-output').innerText = results;

    document.getElementById('follower').setAttribute("style", results);

    // log action for developers
    console.log('\n-- user action --');
    console.log('result:', '(' + typeof results + ')', results);

    // for the browser
    return true;
}
