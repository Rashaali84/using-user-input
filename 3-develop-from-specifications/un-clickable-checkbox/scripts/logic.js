const _Tests = [
  { name: 'first', args: [3, 5], expected: 'left:3px;top:5px;' },
  { name: 'second', args: [333, 522], expected: 'left:333px;top:522px;' },
  { name: 'third', args: [223, 335], expected: 'left:223px;top:335px;' },
  { name: 'fourth', args: [1223, 903], expected: 'left:1223px;top:903px;' },
  { name: 'fifth', args: [35, 55], expected: 'left:35px;top:55px;' },
];

function coordinatesToStyle(x, y) {

  return 'left:' + x + "px;" + 'top:' + y + "px;";
}

//testing(coordinatesToStyle, _Tests);
