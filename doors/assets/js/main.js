'use strict';

// const doorHorizon, 

let difHeight = 0, difWidth = 0;

function getDifHeight(type) {
	let result = 0;
	if (type === 'ms110') {
		result = 60;
	}
	if (type === 'ms130') {
		result = 60;
	}
	if (type === 'ms150') {
		result = 60;
	}
	if (type === 'ms161') {
		result = 3;
	}
	if (type === 'ms162') {
		result = 3;
	}
	if (type === 'ms163') {
		result = 3;
	}
	return result
}
// alert(getDifHeight('ms11'));







// const door = {
// 	profileType: 'ms110',
// 	// doorHeight: 2450,
// 	// doorWidth: 850,
// 	// fillingHeight: doorHeight - 60,
// 	// fillingWidth: doorWidth - 63,
// 	getFilling(a) {
// 		// if (profile = 'ms110') {
// 		// 	difHeight = 60;
// 		// }
// 		// if (profile = 'ms110') { };
// 		let fihe = a - 60;
// 		return fihe;
// 	}
// }
