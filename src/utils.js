export function sum(a, b) {
    a = a === '' ? 0 : parseFloat(a);
    b = b === '' ? 0 : parseFloat(b);
    return a + b;
  }