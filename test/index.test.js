import {my_alpha_number_t, sum, my_size_alpha_t, my_display_alpha_t, my_array_alpha_t, my_is_posi_neg_t, fibo, my_display_alpha_reverse_t, my_length_array_t, my_display_unicode_t, quickSort, tspBrutForce, permuter, resoudreSudoku, estValide} from '../src/';


describe('my_alpha_number_t', () => {
  it('Je souhaite tester si la fonction my_alpha_number_t renvoi bien “Hello”', () => {
    expect(my_alpha_number_t("Hello")).toBe('Hello');
  });
  it('Je souhaite passer un argument “bonjour” le retour attendu est “Bonjour”', () => {
    expect(my_alpha_number_t("Bonjour")).toBe('Bonjour');
  });
  it('Je souhaite passer un argument avec la valeur “” (vide) le retour attendu sera “” vide aussi', () => {
    expect(my_alpha_number_t("")).toBe('');
  });
});

describe('sum', () => {
    it('Should return the sum of 2+2; which is 4', () => {
        expect(sum(2, 2)).toBe(4);
    });      
    it('Should return the sum of "2"+"2"; which is 0', () => {
        expect(sum('2', '2')).toBe(0);
    });
});

describe('my_size_alpha_t', () => {
    it('Should return the length of the string "hello world" which is 11', () => {
        expect(my_size_alpha_t('hello world')).toBe(11);
    });
    it('Should return 0 for non-string inputs', () => {
    expect(my_size_alpha_t(12345)).toBe(0);
    });
});

describe('my_display_alpha_t function', () => {
    it('should return a string', () => {
      const result = my_display_alpha_t();
      expect(typeof result).toBe('string');
    });
  
    it('should return the lowercase alphabet in correct order', () => {
      const result = my_display_alpha_t();
      expect(result).toBe('abcdefghijklmnopqrstuvwxyz');
    });
  });

  describe('my_array_alpha_t function', () => {
    it('should return an array of characters from the input string', () => {
      const inputString = 'hello';
  
      const result = my_array_alpha_t(inputString);
  
      expect(result).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
  
    it('should handle an empty string input', () => {
      const inputString = '';
  
      const result = my_array_alpha_t(inputString);
  
      expect(result).toEqual([]);
    });
  });

  describe('my_is_posi_neg_t function', () => {
    it('should return "NEGATIVE" for zero or negative numbers', () => {
      expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
      expect(my_is_posi_neg_t(-1)).toBe('NEGATIVE');
      expect(my_is_posi_neg_t(-100)).toBe('NEGATIVE');
    });
  
    it('should return "POSITIF" for positive numbers', () => {
      expect(my_is_posi_neg_t(1)).toBe('POSITIF');
      expect(my_is_posi_neg_t(100)).toBe('POSITIF');
      expect(my_is_posi_neg_t(3.14)).toBe('POSITIF');
    });
  });


describe('fibo function', () => {
    it('should return 0 for n <= 0', () => {
      expect(fibo(0)).toBe(0);
      expect(fibo(-1)).toBe(0);
      expect(fibo(-10)).toBe(0);
    });
  
    it('should return 1 for n = 1 or n = 2', () => {
      expect(fibo(1)).toBe(1);
      expect(fibo(2)).toBe(1);
    });
  
    it('should correctly calculate Fibonacci numbers for n > 2', () => {
      expect(fibo(3)).toBe(2); // 1 + 1
      expect(fibo(4)).toBe(3); // 1 + 2
      expect(fibo(5)).toBe(5); // 2 + 3
      expect(fibo(6)).toBe(8); // 3 + 5
      expect(fibo(10)).toBe(55); // 34 + 21
    });
  
    it('should handle large values of n', () => {
      const largeFibo = fibo(20); // Calculated manually: 6765
      expect(largeFibo).toBe(6765);
    });

    it('should return 0 for non-integer inputs', () => {
        const invalidInputs = [3.5, 'string', [], {}, true, null, undefined];
    
        invalidInputs.forEach(input => {
          const result = fibo(input);
          expect(result).toBe(0);
        });
    });
    
  });

  describe('my_display_alpha_reverse_t function', () => {
    it('should return the alphabet in reverse order', () => {
      const alpha = my_display_alpha_t(); // "abcdefghijklmnopqrstuvwxyz"
      const reverseAlpha = my_display_alpha_reverse_t();
      expect(reverseAlpha).toBe([...alpha].reverse().join(''));
    });
  
    it('should always return the reverse alphabet, ignoring external input', () => {
      const reverseAlpha = my_display_alpha_reverse_t();
      expect(reverseAlpha).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
  });

  describe('my_length_array_t function', () => {
    it('should return the correct length of a non-empty array', () => {
      const arr = [1, 2, 3, 4, 5];
      const length = my_length_array_t(arr);
      expect(length).toBe(5);
    });
  
    it('should return 0 for an empty array', () => {
      const arr = [];
      const length = my_length_array_t(arr);
      expect(length).toBe(0);
    });
  
    it('should handle an array with one element correctly', () => {
      const arr = [42];
      const length = my_length_array_t(arr);
      expect(length).toBe(1);
    });
  
    it('should return 0 when the input is not an array', () => {
      const notAnArray = 'not an array';
      const length = my_length_array_t(notAnArray);
      expect(length).toBe(0);
    });
  });

  describe('my_display_unicode_t function', () => {
    it('should correctly convert decimal numbers within specified ranges', () => {
      const input = [65, 66, 67, 97, 98, 99, 48, 49, 50, 32];
      const expectedOutput = 'ABCabc012 ';
      const result = my_display_unicode_t(input);
      expect(result).toBe(expectedOutput);
    });
  
    it('should return an empty string when given an empty array', () => {
      const input = [];
      const expectedOutput = '';
      const result = my_display_unicode_t(input);
      expect(result).toBe(expectedOutput);
    });
  
    it('should ignore values outside the valid ranges and not include them in the result', () => {
      const input = [50, 32, 150, 200, 60];
      const expectedOutput = '2 ';
      const result = my_display_unicode_t(input);
      expect(result).toBe(expectedOutput);
    });
  
    it('should correctly handle a mixed array with both valid and invalid decimal values', () => {
      const input = [65, 100, 97, 250, 48, 130, 32];
      const expectedOutput = 'Ada0 ';
      const result = my_display_unicode_t(input);
      expect(result).toBe(expectedOutput);
    });
  
    it('should return an empty string for an array of non-matching values', () => {
      const input = [200, 300, 400];
      const expectedOutput = '';
      const result = my_display_unicode_t(input);
      expect(result).toBe(expectedOutput);
    });
  });

  describe('quickSort function', () => {
    it('should correctly sort an array of integers', () => {
      const input = [4, 3, 1, 5, 2];
      const expectedOutput = [1, 2, 3, 4, 5];
      const result = quickSort(input);
      expect(result).toEqual(expectedOutput);
    });
  
    it('should return the same array if it is already sorted', () => {
      const input = [1, 2, 3, 4, 5];
      const expectedOutput = [1, 2, 3, 4, 5];
      const result = quickSort(input);
      expect(result).toEqual(expectedOutput);
    });
  
    it('should correctly handle an array with duplicate values', () => {
      const input = [4, 1, 3, 5, 2, 3];
      const expectedOutput = [1, 2, 3, 3, 4, 5];
      const result = quickSort(input);
      expect(result).toEqual(expectedOutput);
    });
  
    it('should return an empty array when the input is an empty array', () => {
      const input = [];
      const expectedOutput = [];
      const result = quickSort(input);
      expect(result).toEqual(expectedOutput);
    });
  
    it('should return the same array when it contains only one element', () => {
      const input = [42];
      const expectedOutput = [42];
      const result = quickSort(input);
      expect(result).toEqual(expectedOutput);
    });
  });

  describe('tspBrutForce function', () => {
    it('should return the correct minimum distance and path for a small set of cities', () => {
      const distances = {
        A: { B: 10, C: 15, D: 20 },
        B: { A: 10, C: 35, D: 25 },
        C: { A: 15, B: 35, D: 30 },
        D: { A: 20, B: 25, C: 30 }
      };
      const { minDistance, meilleurePermutation } = tspBrutForce(distances);
      expect(minDistance).toBe(80);  // Expected minimal distance
      expect(meilleurePermutation).toEqual(['A', 'B', 'D', 'C']); // Example of expected best path
    });
  
    it('should return infinity for an empty set of cities', () => {
        const distances = {};
        const { minDistance, meilleurePermutation } = tspBrutForce(distances);
        expect(minDistance).toBe(Infinity);
        expect(meilleurePermutation).toEqual([]);
    });
      
    it('should return correct result for a single city', () => {
        const distances = { A: {} };  // Only one city, no distances
        const { minDistance, meilleurePermutation } = tspBrutForce(distances);
        expect(minDistance).toBe(0); // No travel needed
        expect(meilleurePermutation).toEqual(['A']); // Only one city
    });
  
    it('should handle a small number of cities correctly', () => {
      const distances = {
        A: { B: 10 },
        B: { A: 10 }
      };
      const { minDistance, meilleurePermutation } = tspBrutForce(distances);
      expect(minDistance).toBe(20);
      expect(meilleurePermutation).toEqual(['A', 'B']);
    });
  });
  
  describe('permuter function', () => {
    it('should return all permutations of a small array', () => {
      const arr = ['A', 'B', 'C'];
      const result = permuter(arr);
      const expected = [
        ['A', 'B', 'C'],
        ['A', 'C', 'B'],
        ['B', 'A', 'C'],
        ['B', 'C', 'A'],
        ['C', 'A', 'B'],
        ['C', 'B', 'A']
      ];
      expect(result).toEqual(expected);
    });
  
    it('should return an empty array for an empty input', () => {
      const arr = [];
      const result = permuter(arr);
      expect(result).toEqual([[]]);
    });
  
    it('should return the same array for a single-element input', () => {
      const arr = ['A'];
      const result = permuter(arr);
      expect(result).toEqual([['A']]);
    });
  });

  describe('Sudoku Solver', () => {
    it('should solve a solved Sudoku grid correctly', () => {
        const solvedGrid = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];

        const result = resoudreSudoku(solvedGrid);
        expect(result).toBe(true);
        expect(solvedGrid).toEqual([
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]);
    });

    it('should solve an unsolved but solvable Sudoku grid', () => {
        const unsolvedGrid = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];

        const expectedSolution = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];

        const result = resoudreSudoku(unsolvedGrid);
        expect(result).toBe(true);
        expect(unsolvedGrid).toEqual(expectedSolution);
    });
});

describe('estValide function', () => {
    let grille;

    beforeEach(() => {
        // A sample 9x9 grid for testing
        grille = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];
    });

    it('should return false if the number already exists in the row', () => {
        const result = estValide(grille, 0, 0, 5);  // '5' already exists in the first row
        expect(result).toBe(false);
    });

    it('should return false if the number already exists in the column', () => {
        const result = estValide(grille, 0, 0, 6);  // '6' already exists in the first column
        expect(result).toBe(false);
    });

    it('should return false if the number already exists in the 3x3 subgrid', () => {
        const result = estValide(grille, 4, 4, 2);  // '2' already exists in the 3x3 subgrid starting at (3,3)
        expect(result).toBe(false);
    });
});