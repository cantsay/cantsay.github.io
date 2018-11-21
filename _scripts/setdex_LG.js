var SETDEX_LG = {};

var components = [
	SETDEX_LG_SETS,
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
