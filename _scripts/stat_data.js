var AT = "at", DF = "df", SA = "sa", SD = "sd", SP = "sp", SL = "sl", AC = "ac", ES = "es";
var STATS_RBY = [AT, DF, SL, SP];
var STATS_GSC = [AT, DF, SA, SD, SP, AC, ES];

function CALC_HP_RBY(poke) {
	var hp = poke.find(".hp");
	var total;
	var base = ~~hp.find(".base").val();
	var level = ~~poke.find(".level").val();
	var dvs = ~~hp.find(".dvs").val();
	total = Math.floor(((base + dvs) * 2 + 63) * level / 100) + level + 10;
	hp.find(".total").text(total);
	poke.find(".max-hp").text(total);
	calcCurrentHP(poke, total, ~~poke.find(".percent-hp").val());
}

function CALC_STAT_RBY(poke, statName) {
	var stat = poke.find("." + statName);
	var level = ~~poke.find(".level").val();
	var base = ~~stat.find(".base").val();
	var dvs = ~~stat.find(".dvs").val();
	var total = Math.floor(((base + dvs) * 2 + 63) * level / 100) + 5;
	stat.find(".total").text(total);
}

function CALC_HP_ADV(poke) {
	var hp = poke.find(".hp");
	var total;
	var base = ~~hp.find(".base").val();
	if (base === 1) {
		total = 1;
	} else {
		var level = ~~poke.find(".level").val();
		var evs = ~~hp.find(".evs").val();
		var ivs = ~~hp.find(".ivs").val();
		total = Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + level + 10;
	}
	hp.find(".total").text(total);
	poke.find(".max-hp").text(total);
	calcCurrentHP(poke, total, ~~poke.find(".percent-hp").val());
}

function CALC_STAT_ADV(poke, statName) {
	var stat = poke.find("." + statName);
	var level = ~~poke.find(".level").val();
	var base = ~~stat.find(".base").val();
	var evs = ~~stat.find(".evs").val();
	var ivs = ~~stat.find(".ivs").val();
	var natureMods = NATURES[poke.find(".nature").val()];
	var nature = natureMods[0] === statName ? 1.1 : natureMods[1] === statName ? 0.9 : 1;
	var total = Math.floor((Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + 5) * nature);
	stat.find(".total").text(total);
}

function CALC_HP_LG(poke) {
	var hp = poke.find(".hp");
	var total;
	var base = ~~hp.find(".base").val();
	if (base === 1) {
		total = 1;
	} else {
		var level = ~~poke.find(".level").val();
		var avs = ~~hp.find(".avs").val();
		var ivs = ~~hp.find(".ivs").val();
		total = Math.floor((base * 2 + ivs) * level / 100) + level + 10 + avs;
	}
	hp.find(".total").text(total);
	poke.find(".max-hp").text(total);
	calcCurrentHP(poke, total, ~~poke.find(".percent-hp").val());
}

function CALC_STAT_LG(poke, statName) {
	var stat = poke.find("." + statName);
	var level = ~~poke.find(".level").val();
	var base = ~~stat.find(".base").val();
	var avs = ~~stat.find(".avs").val();
	var ivs = ~~stat.find(".ivs").val();
	var friendNumber = ~~poke.find(".current-happiness").val();
	var friendshipValue = Math.floor((friendNumber / 255 / 10 + 1) * 100);
	var natureMods = NATURES[poke.find(".nature").val()];
	var nature = natureMods[0] === statName ? 1.1 : natureMods[1] === statName ? 0.9 : 1;
	var total = Math.floor(Math.floor((Math.floor((base * 2 + ivs) * level / 100) + 5) * nature) * friendshipValue / 100 + avs);
	stat.find(".total").text(total);
}
