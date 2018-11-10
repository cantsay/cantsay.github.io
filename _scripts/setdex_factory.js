var SETDEX_FACTORY = {};

var components = [
	SETDEX_FACTORY_SETS,
	SETDEX_CUSTOM
];

for (var i = 0; i < components.length; i++) {
	var sourceDex = components[i];
	if (sourceDex) {
		for (var p in sourceDex) {
			if (sourceDex.hasOwnProperty(p)) {
				SETDEX_FACTORY[p] = $.extend(SETDEX_FACTORY[p], sourceDex[p]);
			}
		}
	}
}

var reloadXYScript = function () {
	console.log(SETDEX_CUSTOM);
	components = [
		SETDEX_FACTORY_SETS,
		SETDEX_CUSTOM
	];

	for (var i = 0; i < components.length; i++) {
		sourceDex = components[i];
		if (sourceDex) {
			for (var p in sourceDex) {
				if (sourceDex.hasOwnProperty(p)) {
					SETDEX_FACTORY[p] = $.extend(SETDEX_FACTORY[p], sourceDex[p]);
				}
			}
		}
	}
};
