var SETDEX_LCDOUBLES = {};

var components = [
	SETDEX_LCDOUBLES_SETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_LCDOUBLES[p] = $.extend(SETDEX_LCDOUBLES[p], sourceDex[p]);
			}
		}
	}
}

var reloadLCScript = function () {
	console.log(SETDEX_CUSTOM);
	components = [
		SETDEX_LCDOUBLES_SETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_LCDOUBLES[p] = $.extend(SETDEX_LCDOUBLES[p], sourceDex[p]);
				}
			}
		}
	}
};
