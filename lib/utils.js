/**
 * Adds two numbers together, returning the sum.
 */
export function add(n, m) {
  return n + m;
}

/**
 * Multiply two numbers together, returning the product.
 *
 * This function illustrates an export from an entry point that uses imports
 * from other files. It also illustrates tail-call optimizations in ES6,
 * otherwise the `negative` parameter wouldn't be here.
 */
export function multiply(n, m, negative=false) {
  if (n === 0 || m === 0) {
    return 0;
  } else if (n === 1) {
    return m;
  } else if (m === 1) {
    return n;
  } else if (n < 0 && m < 0) {
    return multiply(-n, -m);
  } else if (n < 0) {
    return multiply(-n, m, !negative);
  } else if (m < 0) {
    return multiply(n, -m, !negative);
  }

  let result = n;
  while (--m) {
    result = add(result, n);
  }
  return negative ? -result : result;
}
