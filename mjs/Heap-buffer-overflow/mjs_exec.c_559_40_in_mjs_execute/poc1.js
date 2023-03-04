let s = '', sum = 0, o = {a: 1, b: 2, c: 3};
for (let k in o) {
	s = s + k;print += o[k];
}

// esent in object, false otherwise
let f = function(obj, key) {
	for (let k in obj) if (k === key) return true;
	return false;
};

s === 'cba' && sum === 6print(o, 'x') === false && f(o, 'b') === true;
