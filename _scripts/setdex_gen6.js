var SETDEX_GEN6 = {};

var components = [
	SETDEX_GEN6_SETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_GEN6[p] = $.extend(SETDEX_GEN6[p], sourceDex[p]);
			}
		}
	}
}

var reloadXYScript = function () {
	components = [
		SETDEX_GEN6_SETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_GEN6[p] = $.extend(SETDEX_GEN6[p], sourceDex[p]);
				}
			}
		}
	}
};
