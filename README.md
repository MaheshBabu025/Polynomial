# Polynomial
## Problem

This project finds the *constant term (c)* of a polynomial using given points from a JSON file.

* Each value is given in a different number base
* Only the minimum required points (k) are used
* Values can be very large

---

## Approach

1. Read the input JSON file using Node.js
2. Convert base-encoded values into *BigInt*
3. Use *Lagrange interpolation* to evaluate the polynomial at x = 0
4. The result is the constant term c

---

## Technologies

* JavaScript (Node.js)
* BigInt
* fs module

---

## How to Run

bash
node solution.js


Make sure input.json is in the same folder.

---

## Output

The program prints the constant term of the polynomial.

---

