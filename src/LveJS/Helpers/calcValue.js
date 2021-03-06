import copyObject from './copyObject';


/**
 * @param {Object} v 새롭게 대입할 값
 * @param {Object} o 원본 부모 객체
 */
export default function calcValue(v, o) {

	let r;
	let dr, dp;
	let hc, fc;
	let l, f;

	// 새로운 객체로 생성
	r = copyObject(v);
	l = {

		'+=': (c1, c2) => c2 + parseFloat(c1),
		'-=': (c1, c2) => c2 - parseFloat(c1),
		'*=': (c1, c2) => c2 * parseFloat(c1),
		'/=': (c1, c2) => c2 / parseFloat(c1)

	};

	for (let p in r) {

		dr = v[p];
		dp = parseFloat(dr);

		// 함수를 넘겼을 경우 객체 자기자신을 인수로 전달하여 값을 받아옵니다
		if (typeof dr === 'function') {
			dr = dr.call(this, this);
		}

		if (typeof dr === 'string') {

			hc = dr.substr(0, 2);
			fc = dr.substr(2);
			f = l[hc];

			// 일치하는 계산식이 있을 경우 계산합니다
			if (f) {
				dr = f(fc, o[p]);
			}

		}

		r[p] = isNaN(dr - 0) ? dr : isNaN(dp) ? dr : dp;

	}

	return r;

};