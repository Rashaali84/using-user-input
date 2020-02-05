function gooooogle(event) {
  // read & process user input
  const form = event.target.form;
  const searchText = form['search-it'].value;

  // call the core logic
  googleURL(searchText);

  // render results for the user


  // log action for developers
  console.log('\n-- user action --');
  console.log('variable:', '(' + typeof searchText + ')', searchText);

  // tell the browser everything is OK
  return true;
}
