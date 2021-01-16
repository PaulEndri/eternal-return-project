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
