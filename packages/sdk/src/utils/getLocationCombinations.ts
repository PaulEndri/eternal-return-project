import { Locations } from '../constants';

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

export const getLocationCombinations = (length = 3) => {
	if (!data[length]) {
		data[length] = getRawCombinations(
			Object.keys(Locations).filter((key) => key !== Locations['Research Center']),
			length
		);
	}

	return data[length];
};
