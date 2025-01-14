export const my_alpha_number_t = nbr => `${nbr}`;

export const sum = (a, b) => {
  if (typeof a != 'number' || typeof b != 'number' ) {
    return 0;
  }

  return a + b;
};

export const my_size_alpha_t = (str = '') => {
  let count = 0;

  if (typeof str != 'string') {
    return count;
  }

  while(!!str[count]) {
    count++;
  }

  return count;
};

export const my_display_alpha_t = () => 'abcdefghijklmnopqrstuvwxyz';

export const my_array_alpha_t = (str) => {
  const result = [];

  for (let i = 0; i < my_size_alpha_t(str); i += 1) {
    result[i] = str[i];
  }

  return result;
};

export const my_is_posi_neg_t = (nbr) => {
  if (nbr <= 0) {
    return 'NEGATIVE';
  }

  return 'POSITIF';
};

export const fibo = (n) => {
    if (!Number.isInteger(n)) {
      return 0;  // You can throw an error instead: throw new Error('Input must be an integer');
    } else {
        if (n <= 0) {
            return 0;
        }
  
        if (n === 1 || n === 2) {
            return 1;
        }
  
        return fibo(n - 1) + fibo(n - 2);
    }    
  };

export const my_display_alpha_reverse_t = () => {
  const alpha = my_display_alpha_t();
  let reverseAlpha = '';

  for (let i = my_size_alpha_t(alpha); i > 0; i -= 1) {
    reverseAlpha += alpha[i-1];
  }

  return reverseAlpha;
};

export const my_length_array_t = (arr) => {
    if (!Array.isArray(arr)) {
      return 0;  // You could throw an error instead if preferred: throw new Error('Input is not an array');
    }
  
    let i = 0;
  
    while (arr[i] !== undefined) {
      i += 1;
    }
  
    return i;
  };

export const my_display_unicode_t = (arr) => {
  const results = [];

  for (let i = 0; i < arr.length; i += 1) {
    const decimal  = arr[i];

    if ((decimal >= 65 && decimal <= 99)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 97 && decimal <= 122)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 48 && decimal <= 57)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if (decimal === 32) {
      results[i] = String.fromCharCode(arr[i]);
    }
  }

  return results.join('');
};

export function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

export function tspBrutForce(distances) {
    let villes = Object.keys(distances);

    // If there are no cities, return Infinity
    if (villes.length === 0) return { minDistance: Infinity, meilleurePermutation: [] };

    let permutations = permuter(villes);
    let minDistance = Infinity;
    let meilleurePermutation = [];

    permutations.forEach(chemin => {
        let distanceTotale = 0;
        for (let i = 0; i < chemin.length - 1; i++) {
            distanceTotale += distances[chemin[i]][chemin[i + 1]];
        }
        distanceTotale += distances[chemin[chemin.length - 1]][chemin[0]]; // Retour à la ville de départ

        if (distanceTotale < minDistance) {
            minDistance = distanceTotale;
            meilleurePermutation = chemin;
        }
    });
    
    // Handle the case where there is only one city
    if (villes.length === 1) {
        return { minDistance: 0, meilleurePermutation: villes };
    }

    return { minDistance, meilleurePermutation };
}


export function permuter(arr) {
    if (arr.length === 0) return [[]];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let reste = arr.slice(0, i).concat(arr.slice(i + 1));
        let permut = permuter(reste);
        for (let j = 0; j < permut.length; j++) {
            result.push([arr[i]].concat(permut[j]));
        }
    }
    return result;
}

export function resoudreSudoku(grille) {
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            if (grille[ligne][col] === 0) {  // Find an empty cell
                for (let num = 1; num <= 9; num++) {  // Try numbers 1-9
                    if (estValide(grille, ligne, col, num)) {
                        grille[ligne][col] = num;
                        if (resoudreSudoku(grille)) {
                            return true;  // If the solution is found, return true
                        }
                        grille[ligne][col] = 0;  // Backtrack if the number doesn't work
                    }
                }
                return false;  // If no valid number can be placed, return false
            }
        }
    }
    return true;  // If no empty cell is found, the Sudoku is solved
}


export function estValide(grille, ligne, col, num) {
    for (let i = 0; i < 9; i++) {
        if (grille[ligne][i] === num || grille[i][col] === num) return false;
    }
    let startRow = Math.floor(ligne / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (grille[i][j] === num) return false;
        }
    }
    return true;
}
