const _Tests = [
  { name: 'first', args: ['add', 4, 5], expected: 9 },
  { name: 'second', args: ['subtract', 4, 5], expected: -1 },
  { name: 'third', args: ['multiply', 4, 5], expected: 20 },
  { name: 'fourth', args: ['divide', 4, 5], expected: .8 },
  { name: 'fifth', args: ['toad', 4, 5], expected: 'invalid operation' },
  { name: 'sixth', args: ['', 4, 5], expected: 'invalid operation' },
];

function calc(op, a, b) {
  if (op === 'add') {
    return a + b;
  } else if (op === 'subtract') {
    return a - b;
  } else if (op === 'multiply') {
    return a * b;
  } else if (op === 'divide') {
    return a / b;
  } else {
    return 'invalid operation';
  }
}

/*testing(calc, _Tests);*/
