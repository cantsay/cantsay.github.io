var SETDEX_GEN7 = {};

var components = [
	SETDEX_GEN7_SETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_GEN7[p] = $.extend(SETDEX_GEN7[p], sourceDex[p]);
			}
		}
	}
}

var reloadSMScript = function () {
	console.log(SETDEX_CUSTOM);
	components = [
		SETDEX_GEN7_SETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_GEN7[p] = $.extend(SETDEX_GEN7[p], sourceDex[p]);
				}
			}
		}
	}
};
