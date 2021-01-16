const data = {};

const getRawCombinations = (a, n, s = [], t = []) => {
  return a.reduce((p, c, i, a) => {
    n > 1
      ? getRawCombinations(a.slice(i + 1), n - 1, p, (t.push(c), t))
      : p.push((t.push(c), t).slice(0));
    t.pop();
    return p;
  }, s);
};

export const getLocationCombinations = (length = 3, src: any[]) => {
  if (!data[length]) {
    data[length] = getRawCombinations(
      src.filter(
        (key) => key !== 'Research Center' && key !== 'ResearchCenter'
      ),
      length
    );
  }

  return data[length];
};

export function permutator(inputArr) {
  var results = [];

  function permute(arr, memo?) {
    var cur,
      memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

export function permutateWithoutRepetitions(permutationOptions, length = 5) {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  // Init permutations array.
  const permutations = [];

  // Get all permutations for permutationOptions excluding the first element.
  const smallerPermutations = permutateWithoutRepetitions(
    permutationOptions.slice(1),
    length
  );

  // Insert first option into every possible position of every smaller permutation.
  const firstOption = permutationOptions[0];

  for (
    let permIndex = 0;
    permIndex < smallerPermutations.length;
    permIndex += 1
  ) {
    const smallerPermutation = smallerPermutations[permIndex];

    // Insert first option into every possible position of smallerPermutation.
    for (
      let positionIndex = 0;
      positionIndex <= Math.min(smallerPermutation.length, length);
      positionIndex += 1
    ) {
      const permutationPrefix = smallerPermutation.slice(0, positionIndex);
      const permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(
        permutationPrefix.concat([firstOption], permutationSuffix)
      );
    }
  }

  return permutations;
}

export var getPermutations = function (list, maxLen) {
  // Copy initial values as arrays
  var perm = list.map(function (val) {
    return [val];
  });
  // Our permutation generator
  var generate = function (perm, maxLen, currLen) {
    // Reached desired length
    if (currLen === maxLen) {
      return perm;
    }
    // For each existing permutation
    for (var i = 0, len = perm.length; i < len; i++) {
      var currPerm = perm.shift();
      // Create new permutation
      for (var k = 0; k < list.length; k++) {
        perm.push(currPerm.concat(list[k]));
      }
    }
    // Recurse
    return generate(perm, maxLen, currLen + 1);
  };
  // Start with size 1 because of initial values
  return generate(perm, maxLen, 1);
};

export function samplePermutation(sequence, repetition = false, n = null) {
  if (sequence.constructor !== Array) {
    throw new Error('samplePermutation: sequence needs to be an array.');
  }

  if (n === null) {
    n = sequence.length;
  }

  var permutation = [];
  var add;
  while (
    (repetition && permutation.length < n) ||
    (!repetition && sequence.length)
  ) {
    var index = Math.floor(Math.random() * sequence.length);
    if (repetition) {
      add = sequence[index];
    } else {
      add = sequence.slice(index, 1);
    }
    permutation = permutation.concat(add);
  }

  return permutation;
}
