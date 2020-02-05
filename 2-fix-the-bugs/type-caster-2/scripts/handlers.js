function typeCastHandler(event) {
  // read & process user input
  const form = event.target.form;
  const selected = form.typeSelected;
  const intendedType = selected.options[selected.selectedIndex].value;
  const stringToCast = form.inputString.value;

  // execute core logic
  const newValue = typeCaster(stringToCast, intendedType.toLowerCase());

  // communicate result to user
  document.getElementById('casted-value').innerText = typeof newValue + ': ' + newValue;

  // log action for developers
  console.log('\n-- user action --');
  console.log('stringToCast:', '(' + typeof stringToCast + ')', stringToCast);
  console.log('intendedType:', '(' + typeof intendedType + ')', intendedType);
  console.log('newValue:', '(' + typeof newValue + ')', newValue);

  // tell the browser everything is OK
  return true;
}

