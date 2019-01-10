var SETDEX_LG = {};

var components = [
	SETDEX_LG_SETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_LG[p] = $.extend(SETDEX_LG[p], sourceDex[p]);
			}
		}
	}
}

var reloadLGScript = function () {
	console.log(SETDEX_CUSTOM);
	components = [
		SETDEX_LG_SETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_LG[p] = $.extend(SETDEX_LG[p], sourceDex[p]);
				}
			}
		}
	}
};
