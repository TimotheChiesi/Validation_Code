# Hello World

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install helloworld.

Use node v16 use :
```bash
nvm install 16
```

```bash
npm i
```

## Usage

Start the application dev with :

```bash
npm run start
```

Created the dist with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```


# TP1 : Unit test

1. my_alpha_number_t
  - Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello” (3 ms)
  - Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour” (1 ms)
  - Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “” vide aussi

2. sum
  - Should return the sum of 2+2; which is 4
  - Should return the sum of "2"+"2"; which is 0

3. my_size_alpha_t
  - Should return the length of the string "hello world" which is 11 (1 ms)
  - Should return 0 for non-string inputs (1 ms)

4. my_display_alpha_t function
  - should return a string (1 ms)
  - should return the lowercase alphabet in correct order (1 ms)

5. my_array_alpha_t function
  - should return an array of characters from the input string (2 ms)
  - should handle an empty string input (6 ms)

6. my_is_posi_neg_t function
  - should return "NEGATIVE" for zero or negative numbers (2 ms)
  - should return "POSITIF" for positive numbers (1 ms)

7. fibo function
  - should return 0 for n <= 0 (1 ms)
  - should return 1 for n = 1 or n = 2 (1 ms)
  - should correctly calculate Fibonacci numbers for n > 2 (2 ms)
  - should handle large values of n (7 ms)
  - should return 0 for non-integer inputs (1 ms)
  
8. my_display_alpha_reverse_t function
  - should return the alphabet in reverse order (1 ms)
  - should always return the reverse alphabet, ignoring external input (1 ms)

9. my_length_array_t function
  - should return the correct length of a non-empty array
  - should return 0 for an empty array (1 ms)
  - should handle an array with one element correctly
  - should return 0 when the input is not an array (1 ms)

10. my_display_unicode_t function
  - should correctly convert decimal numbers within specified ranges
  - should return an empty string when given an empty array (1 ms)
  - should ignore values outside the valid ranges and not include them in the result
  - should correctly handle a mixed array with both valid and invalid decimal values (1 ms)
  - should return an empty string for an array of non-matching values

11. quickSort function
  - should correctly sort an array of integers (1 ms)
  - should return the same array if it is already sorted (1 ms)
  - should correctly handle an array with duplicate values (1 ms)
  - should return an empty array when the input is an empty array
  - should return the same array when it contains only one element

12. tspBrutForce function
  - should return the correct minimum distance and path for a small set of cities (1 ms)
  - should return infinity for an empty set of cities
  - should return correct result for a single city (1 ms)
  - should handle a small number of cities correctly

13. permuter function
  - should return all permutations of a small array (1 ms)
  - should return an empty array for an empty input
  - should return the same array for a single-element input

14. Sudoku Solver
  - should solve a solved Sudoku grid correctly
  - should solve an unsolved but solvable Sudoku grid (18 ms)

15. estValide function
  - should return false if the number already exists in the row (1 ms)
  - should return false if the number already exists in the column
  - should return false if the number already exists in the 3x3 subgrid (1 ms)