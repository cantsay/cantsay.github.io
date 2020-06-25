// input field validation
var bounds = {
	"level": [0, 100],
	"base": [1, 255],
	"evs": [0, 252],
	"ivs": [0, 31],
	"dvs": [0, 15],
	"move-bp": [0, 999],
	"current-happiness": [0, 255]
};
for (var bounded in bounds) {
	if (bounds.hasOwnProperty(bounded)) {
		attachValidation(bounded, bounds[bounded][0], bounds[bounded][1]);
	}
}
function attachValidation(clazz, min, max) {
	$("." + clazz).keyup(function () {
		validate($(this), min, max);
	});
}
function validate(obj, min, max) {
	obj.val(Math.max(min, Math.min(max, ~~obj.val())));
}
function clampIntRange(num, min, max) {
	if (typeof num !== "number") num = 0;
	num = Math.floor(num);
	if (min !== undefined && num < min) num = min;
	if (max !== undefined && num > max) num = max;
	return num;
}

$(".max").bind("keyup change", function () {
	var poke = $(this).closest(".poke-info");
	calcHP(poke);
	calcStats(poke);
});

$(".max-level").bind("keyup change", function () {
	var poke = $(this).closest(".poke-info");
	calcHP(poke);
	calcStats(poke);
});

// auto-calc stats and current HP on change
$("#autolevel-select").change(function () {
	$("#p1").find(".level").val($("#autolevel-select").val());
	$("#p2").find(".level").val($("#autolevel-select").val());
	$(".level").change();
});

$(".level").bind("keyup change", function () {
	var poke = $(this).closest(".poke-info");
	calcHP(poke);
	calcStats(poke);
});
$(".nature").bind("keyup keydown click change", function () {
	calcStats($(this).closest(".poke-info"));
});
$(".hp .base, .hp .evs, .hp .ivs, .hp .avs, .current-happiness").bind("keyup keydown click change", function () {
	calcHP($(this).closest(".poke-info"));
});
$(".at .base, .at .evs, .at .ivs, .at .avs, .current-happiness").bind("keyup keydown click change", function () {
	calcStat($(this).closest(".poke-info"), "at");
});
$(".df .base, .df .evs, .df .ivs, .df .avs, .current-happiness").bind("keyup keydown click change", function () {
	calcStat($(this).closest(".poke-info"), "df");
});
$(".sa .base, .sa .evs, .sa .ivs, .sa .avs, .current-happiness").bind("keyup keydown click change", function () {
	calcStat($(this).closest(".poke-info"), "sa");
});
$(".sd .base, .sd .evs, .sd .ivs, .sd .avs, .current-happiness").bind("keyup keydown click change", function () {
	calcStat($(this).closest(".poke-info"), "sd");
});
$(".sp .base, .sp .evs, .sp .ivs, .sp .avs, .current-happiness").bind("keyup keydown click change", function () {
	calcStat($(this).closest(".poke-info"), "sp");
});
$(".evs").bind("keyup keydown click change", function () {
	calcEvTotal($(this).closest(".poke-info"));
});
$(".avs, .current-happiness").bind("keyup keydown click change", function () {
	calcAvTotal($(this).closest(".poke-info"));
});
$(".sl .base").keyup(function () {
	calcStat($(this).closest(".poke-info"), "sl");
});
$(".at .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, "at");
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".df .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, "df");
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sa .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, "sa");
	poke.find(".sd .dvs").val($(this).val());
	calcStat(poke, "sd");
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sp .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, "sp");
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sl .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, "sl");
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});

function getHPDVs(poke) {
	return ~~poke.find(".at .dvs").val() % 2 * 8 +
            ~~poke.find(".df .dvs").val() % 2 * 4 +
            ~~poke.find(gen === 1 ? ".sl .dvs" : ".sa .dvs").val() % 2 * 2 +
            ~~poke.find(".sp .dvs").val() % 2;
}

function calcStats(poke) {
	for (var i = 0; i < STATS.length; i++) {
		calcStat(poke, STATS[i]);
	}
}

function calcEvTotal(poke) {
	var total = 0;
	poke.find(".evs").each(function (idx, elt) { total += 1 * $(elt).val(); });

	var newClass = total > 510 ? "overLimit" : "underLimit";

	var evTotal = poke.find(".ev-total");
	evTotal.removeClass("underLimit overLimit").text(total).addClass(newClass);
}

function calcAvTotal(poke) {
	var total = 0;
	poke.find(".avs").each(function (idx, elt) { total += 1 * $(elt).val(); });

	var newClass = total > 1200 ? "overLimit" : "underLimit";

	var avTotal = poke.find(".ev-total");
	avTotal.removeClass("underLimit overLimit").text(total).addClass(newClass);
}

function calcCurrentHP(poke, max, percent) {
	var current = Math.ceil(percent * max / 100);
	poke.find(".current-hp").val(current);
}
function calcPercentHP(poke, max, current) {
	var percent = Math.floor(100 * current / max);
	poke.find(".percent-hp").val(percent);
}
$(".current-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").text();
	validate($(this), 0, max);
	var current = $(this).val();
	calcPercentHP($(this).parent(), max, current);
});
$(".percent-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").text();
	validate($(this), 0, 100);
	var percent = $(this).val();
	calcCurrentHP($(this).parent(), max, percent);
});

var lastAura = [false, false, false];
$(".ability").bind("keyup change", function () {
	$(this).closest(".poke-info").find(".move-hits").val($(this).val() === "Skill Link" ? 5 : 3);
	autoSetAura();
	autoSetTerrain();
});

$("#p1 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 0);
	autoSetVicStar(1, "L");
});
$("#p2 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 1);
	autoSetVicStar(2, "R");
});

var lastTerrain = "noterrain";
var lastManualWeather = "";
var lastAutoWeather = ["", ""];
function autoSetAura() {
	var ability1 = $("#p1 .ability").val();
	var ability2 = $("#p2 .ability").val();
	if (ability1 == "Fairy Aura" || ability2 == "Fairy Aura")
		$("input:checkbox[id='fairy-aura']").prop("checked", true);
	else
		$("input:checkbox[id='fairy-aura']").prop("checked", lastAura[0]);
	if (ability1 == "Dark Aura" || ability2 == "Dark Aura")
		$("input:checkbox[id='dark-aura']").prop("checked", true);
	else
		$("input:checkbox[id='dark-aura']").prop("checked", lastAura[1]);
	if (ability1 == "Aura Break" || ability2 == "Aura Break")
		$("input:checkbox[id='aura-break']").prop("checked", true);
	else
		$("input:checkbox[id='aura-break']").prop("checked", lastAura[2]);
}
function autoSetVicStar(i, side) {
	var ability = $("#p" + i + " .ability").val();
	if (ability === "Victory Star") {
		$("input:checkbox[id='vicStar" + side + "']").prop("checked", true);
	} else {
		$("input:checkbox[id='vicStar" + side + "']").prop("checked", false);
	}
}
function autoSetTerrain() {
	var ability1 = $("#p1 .ability").val();
	var ability2 = $("#p2 .ability").val();
	if (ability1 == "Electric Surge" || ability2 == "Electric Surge") {
		$("input:radio[id='electric']").prop("checked", true);
		lastTerrain = "electric";
	} else if (ability1 == "Grassy Surge" || ability2 == "Grassy Surge") {
		$("input:radio[id='grassy']").prop("checked", true);
		lastTerrain = "grassy";
	} else if (ability1 == "Misty Surge" || ability2 == "Misty Surge") {
		$("input:radio[id='misty']").prop("checked", true);
		lastTerrain = "misty";
	} else if (ability1 == "Psychic Surge" || ability2 == "Psychic Surge") {
		$("input:radio[id='psychic']").prop("checked", true);
		lastTerrain = "psychic";
	} else
		$("input:radio[id='noterrain']").prop("checked", true);
}

function autosetWeather(ability, i) {
	var currentWeather = $("input:radio[name='weather']:checked").val();
	if (!(lastAutoWeather.includes(currentWeather)) || currentWeather === "") {
		lastManualWeather = currentWeather;
		lastAutoWeather[1 - i] = "";
	}

	var primalWeather = ["Harsh Sun", "Heavy Rain"];
	var autoWeatherAbilities = {
		"Drought": "Sun",
		"Drizzle": "Rain",
		"Sand Stream": "Sand",
		"Snow Warning": "Hail",
		"Desolate Land": "Harsh Sun",
		"Primordial Sea": "Heavy Rain",
		"Delta Stream": "Strong Winds"
	};
	var newWeather;

	if (ability in autoWeatherAbilities) {
		lastAutoWeather[i] = autoWeatherAbilities[ability];
		if (currentWeather === "Strong Winds") {
			if (!(lastAutoWeather.includes("Strong Winds"))) {
				newWeather = lastAutoWeather[i];
			}
		} else if (primalWeather.includes(currentWeather)) {
			if (lastAutoWeather[i] === "Strong Winds" || primalWeather.includes(lastAutoWeather[i])) {
				newWeather = lastAutoWeather[i];
			} else if (primalWeather.includes(lastAutoWeather[1 - i])) {
				newWeather = lastAutoWeather[1 - i];
			} else {
				newWeather = lastAutoWeather[i];
			}
		} else {
			newWeather = lastAutoWeather[i];
		}
	} else {
		lastAutoWeather[i] = "";
		newWeather = lastAutoWeather[1 - i] !== "" ? lastAutoWeather[1 - i] : lastManualWeather;
	}

	if (newWeather === "Strong Winds" || primalWeather.includes(newWeather)) {
		//$("input:radio[name='weather']").prop("disabled", true);
		//edited out by squirrelboy1225 for doubles!
		$("input:radio[name='weather'][value='" + newWeather + "']").prop("disabled", false);
	} else if (typeof newWeather != "undefined") {
		for (var k = 0; k < $("input:radio[name='weather']").length; k++) {
			var val = $("input:radio[name='weather']")[k].value;
			if (!(primalWeather.includes(val)) && val !== "Strong Winds") {
				$("input:radio[name='weather']")[k].disabled = false;
			} else {
				//$("input:radio[name='weather']")[k].disabled = true;
				//edited out by squirrelboy1225 for doubles!
			}
		}
	}
	$("input:radio[name='weather'][value='" + newWeather + "']").prop("checked", true);
}

$("#p1 .item").bind("keyup change", function () {
	autosetStatus("#p1", $(this).val());
});
$("#p2 .item").bind("keyup change", function () {
	autosetStatus("#p2", $(this).val());
});

var lastManualStatus = {"#p1": "Healthy", "#p2": "Healthy"};
var lastAutoStatus = {"#p1": "Healthy", "#p2": "Healthy"};
function autosetStatus(p, item) {
	var currentStatus = $(p + " .status").val();
	if (currentStatus !== lastAutoStatus[p]) {
		lastManualStatus[p] = currentStatus;
	}
	if (item === "Flame Orb") {
		lastAutoStatus[p] = "Burned";
		$(p + " .status").val("Burned");
		$(p + " .status").change();
	} else if (item === "Toxic Orb") {
		lastAutoStatus[p] = "Badly Poisoned";
		$(p + " .status").val("Badly Poisoned");
		$(p + " .status").change();
	} else {
		lastAutoStatus[p] = "Healthy";
		if (currentStatus !== lastManualStatus[p]) {
			$(p + " .status").val(lastManualStatus[p]);
			$(p + " .status").change();
		}
	}
}

$(".status").bind("keyup change", function () {
	if ($(this).val() === "Badly Poisoned") {
		$(this).parent().children(".toxic-counter").show();
	} else {
		$(this).parent().children(".toxic-counter").hide();
	}
});

// auto-update move details on select
$(".move-selector").change(function () {
	var moveName = $(this).val();
	var move = moves[moveName] || moves["(No Move)"];
	var moveGroupObj = $(this).parent();
	moveGroupObj.children(".move-bp").val(move.bp);
	moveGroupObj.children(".move-type").val(move.type);
	moveGroupObj.children(".move-cat").val(move.category);
	moveGroupObj.children(".move-crit").prop("checked", move.alwaysCrit === true);
	if (move.isMultiHit && !move.isMax) {
		moveGroupObj.children(".move-hits").show();
		moveGroupObj.children(".move-hits").val($(this).closest(".poke-info").find(".ability").val() === "Skill Link" ? 5 : 3);
	} else {
		moveGroupObj.children(".move-hits").hide();
	}
	moveGroupObj.children(".move-z").prop("checked", false);
	if (!($(this).closest("poke-info").find(".max").prop("checked"))) {
		moveGroupObj.children(".move-z").prop(".move-max", false);
	}
});

// auto-update set details on select
$(".set-selector, #levelswitch").bind("change click keyup keydown", function () {
	var fullSetName = $(this).val();
	var pokemonName, setName;
	pokemonName = fullSetName.substring(0, fullSetName.indexOf(" ("));
	setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));
	var pokemon = pokedex[pokemonName];
	if (pokemon) {
		var pokeObj = $(this).closest(".poke-info");

		// If the sticky move was on this side, reset it
		if (stickyMoves.getSelectedSide() === pokeObj.prop("id")) {
			stickyMoves.clearStickyMove();
		}

		pokeObj.find(".type1").val(pokemon.t1);
		pokeObj.find(".type2").val(pokemon.t2);
		pokeObj.find(".hp .base").val(pokemon.bs.hp);
		var i;
		for (i = 0; i < STATS.length; i++) {
			pokeObj.find("." + STATS[i] + " .base").val(pokemon.bs[STATS[i]]);
		}
		pokeObj.find(".hp").val("calcHP");
		pokeObj.find(".weight").val(pokemon.w);
		pokeObj.find(".boost").val(0);
		pokeObj.find(".percent-hp").val(100);
		pokeObj.find(".status").val("Healthy");
		$(".status").change();
		pokeObj.find(".max").prop("checked", false);
		pokeObj.find(".max").change();
		var moveObj;
		var abilityObj = pokeObj.find(".ability");
		var itemObj = pokeObj.find(".item");
		if (pokemonName in setdex && setName in setdex[pokemonName]) {
			var set = setdex[pokemonName][setName];
			pokeObj.find(".level").val($("#autolevel-select").val());
			pokeObj.find(".hp .evs").val(set.evs && typeof set.evs.hp !== "undefined" ? set.evs.hp : 0);
			pokeObj.find(".hp .avs").val(set.avs && typeof set.avs.hp !== "undefined" ? set.avs.hp : 0);
			pokeObj.find(".hp .ivs").val(set.ivs && typeof set.ivs.hp !== "undefined" ? set.ivs.hp : 31);
			pokeObj.find(".hp .dvs").val(set.dvs && typeof set.dvs.hp !== "undefined" ? set.dvs.hp : 15);
			for (i = 0; i < STATS.length; i++) {
				pokeObj.find("." + STATS[i] + " .evs").val(set.evs && typeof set.evs[STATS[i]] !== "undefined" ? set.evs[STATS[i]] : 0);
				pokeObj.find("." + STATS[i] + " .avs").val(set.avs && typeof set.avs[STATS[i]] !== "undefined" ? set.avs[STATS[i]] : 0);
				pokeObj.find("." + STATS[i] + " .ivs").val(set.ivs && typeof set.ivs[STATS[i]] !== "undefined" ? set.ivs[STATS[i]] : 31);
				pokeObj.find("." + STATS[i] + " .dvs").val(set.dvs && typeof set.dvs[STATS[i]] !== "undefined" ? set.dvs[STATS[i]] : 15);
			}
			setSelectValueIfValid(pokeObj.find(".nature"), set.nature, "Hardy");
			setSelectValueIfValid(abilityObj, set.ability ? set.ability : pokemon.ab, "");
			setSelectValueIfValid(itemObj, set.item, "");
			for (i = 0; i < 4; i++) {
				moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
				setSelectValueIfValid(moveObj, set.moves[i], "(No Move)");
				moveObj.change();
			}
		} else {
			pokeObj.find(".level").val($("#autolevel-select").val());
			pokeObj.find(".hp .evs").val(0);
			pokeObj.find(".hp .avs").val(0);
			pokeObj.find(".hp .ivs").val(31);
			pokeObj.find(".hp .dvs").val(15);
			for (i = 0; i < STATS.length; i++) {
				pokeObj.find("." + STATS[i] + " .evs").val(0);
				pokeObj.find("." + STATS[i] + " .avs").val(0);
				pokeObj.find("." + STATS[i] + " .ivs").val(31);
				pokeObj.find("." + STATS[i] + " .dvs").val(15);
			}
			pokeObj.find(".nature").val("Hardy");
			setSelectValueIfValid(abilityObj, pokemon.ab, "");
			itemObj.val("");
			for (i = 0; i < 4; i++) {
				moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
				moveObj.val("(No Move)");
				moveObj.change();
			}
		}
		var formeObj = $(this).siblings().find(".forme").parent();
		itemObj.prop("disabled", false);
		if (pokemon.formes) {
			showFormes(formeObj, setName, pokemonName, pokemon);
		} else {
			formeObj.hide();
		}
		calcHP(pokeObj);
		calcStats(pokeObj);
		calcEvTotal(pokeObj);
		calcAvTotal(pokeObj);
		abilityObj.change();
		itemObj.change();
	}
});

function showFormes(formeObj, setName, pokemonName, pokemon) {
	var defaultForme = 0;

	if (setName !== "Blank Set") {
		var set = setdex[pokemonName][setName];
		if (set.item) {
		// Repurpose the previous filtering code to provide the "different default" logic
			if (set.item.includes("ite") && !(set.item.includes("ite Y")) ||
            pokemonName === "Groudon" && set.item.includes("Red Orb") ||
            pokemonName === "Kyogre" && set.item.includes("Blue Orb") ||
            pokemonName === "Meloetta" && set.moves.includes("Relic Song") ||
            pokemonName === "Rayquaza" && set.moves.includes("Dragon Ascent") ||
        pokemonName === "Necrozma-Dusk Mane" && set.item.includes("Ultranecrozium Z") ||
        pokemonName === "Necrozma-Dawn Wings" && set.item.includes("Ultranecrozium Z")) {
				defaultForme = 1;
			} else if (set.item.includes("ite Y")) {
				defaultForme = 2;
			}
		}
	}

	var formeOptions = getSelectOptions(pokemon.formes, false, defaultForme);
	formeObj.children("select").find("option").remove().end().append(formeOptions).change();
	formeObj.show();
}

function setSelectValueIfValid(select, value, fallback) {
	select.val(select.children("option[value='" + value + "']").length !== 0 ? value : fallback);
}

$(".forme").change(function () {
	var altForme = pokedex[$(this).val()],
		container = $(this).closest(".info-group").siblings(),
		fullSetName = container.find(".select2-chosen").first().text(),
		pokemonName = fullSetName.substring(0, fullSetName.indexOf(" (")),
		setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));

	$(this).parent().siblings().find(".type1").val(altForme.t1);
	$(this).parent().siblings().find(".type2").val(typeof altForme.t2 != "undefined" ? altForme.t2 : "");
	$(this).parent().siblings().find(".weight").val(altForme.w);

	for (var i = 0; i < STATS.length; i++) {
		var baseStat = container.find("." + STATS[i]).find(".base");
		baseStat.val(altForme.bs[STATS[i]]);
		var altHP = container.find(".hp .base").val(altForme.bs.hp);
		altHP.keyup();
		baseStat.keyup();
	}

	if (abilities.includes(altForme.ab)) {
		container.find(".ability").val(altForme.ab);
	} else if (setName !== "Blank Set" && abilities.includes(setdex[pokemonName][setName].ability)) {
		container.find(".ability").val(setdex[pokemonName][setName].ability);
	} else {
		container.find(".ability").val("");
	}
	container.find(".ability").keyup();

	if ($(this).val().indexOf("Mega") === 0 && $(this).val() !== "Mega Rayquaza") {
		container.find(".item").val("").keyup();
		//container.find(".item").prop("disabled", true);
		//edited out by squirrelboy1225 for doubles!
	} else {
		container.find(".item").prop("disabled", false);
	}

	if (pokemonName === "Darmanitan") {
		container.find(".percent-hp").val($(this).val() === "Darmanitan-Z" ? "50" : "100").keyup();
	}
	// This is where we would make Zygarde's Forme change @50% HP, need to define var formeName
	// if (pokemonName === "Zygarde" && (formeName === "Zygarde-10%" || formeName === "Zygarde")) {
	//    container.find(".percent-hp").val($(this).val() === "Zygarde-Complete" ? "50" : "100").keyup();
	//}
});

function getTerrainEffects() {
	var className = $(this).prop("className");
	className = className.substring(0, className.indexOf(" "));
	switch (className) {
	case "type1":
	case "type2":
	case "ability":
	case "item":
		var id = $(this).closest(".poke-info").prop("id");
		var terrainValue = $("input:checkbox[name='terrain']:checked").val();
		if (terrainValue === "Electric") {
			$("#" + id).find("[value='Asleep']").prop("disabled", isGrounded($("#" + id)));
		} else if (terrainValue === "Misty") {
			$("#" + id).find(".status").prop("disabled", isGrounded($("#" + id)));
		}
		break;
	default:
		$("input:checkbox[name='terrain']").not(this).prop("checked", false);
		if ($(this).prop("checked") && $(this).val() === "Electric") {
			$("#p1").find("[value='Asleep']").prop("disabled", isGrounded($("#p1")));
			$("#p2").find("[value='Asleep']").prop("disabled", isGrounded($("#p2")));
		} else if ($(this).prop("checked") && $(this).val() === "Misty") {
			$("#p1").find(".status").prop("disabled", isGrounded($("#p1")));
			$("#p2").find(".status").prop("disabled", isGrounded($("#p2")));
		} else {
			$("#p1").find("[value='Asleep']").prop("disabled", false);
			$("#p1").find(".status").prop("disabled", false);
			$("#p2").find("[value='Asleep']").prop("disabled", false);
			$("#p2").find(".status").prop("disabled", false);
		}
		break;
	}
}

function isGrounded(pokeInfo) {
	return $("#gravity").prop("checked") || pokeInfo.find(".type1").val() !== "Flying" && pokeInfo.find(".type2").val() !== "Flying" &&
            pokeInfo.find(".ability").val() !== "Levitate" && pokeInfo.find(".item").val() !== "Air Balloon";
}

var resultLocations = [[], []];
for (var i = 0; i < 4; i++) {
	resultLocations[0].push({
		"move": "#resultMoveL" + (i + 1),
		"damage": "#resultDamageL" + (i + 1)
	});
	resultLocations[1].push({
		"move": "#resultMoveR" + (i + 1),
		"damage": "#resultDamageR" + (i + 1)
	});
}

var damageResults;
function calculate() {
	var p1 = new Pokemon($("#p1"));
	var p2 = new Pokemon($("#p2"));
	var field = new Field();
	optimizeEVs("#p1", p1);
	optimizeEVs("#p2", p2);
	damageResults = calculateAllMoves(p1, p2, field);
	var result, minDamage, maxDamage, minPercent, maxPercent, percentText;
	var highestMaxPercent = -1;
	var bestResult;
	for (var i = 0; i < 4; i++) {
		result = damageResults[0][i];
		minDamage = result.damage[0] * p1.moves[i].hits;
		maxDamage = result.damage[result.damage.length - 1] * p1.moves[i].hits;
		minPercent = Math.floor(minDamage * 1000 / p2.maxHP) / 10;
		maxPercent = Math.floor(maxDamage * 1000 / p2.maxHP) / 10;
		result.damageText = minDamage + "-" + maxDamage + " (" + minPercent + " - " + maxPercent + "%)";
		result.koChanceText = p1.moves[i].bp === 0 ? "nice move" :
			getKOChanceText(result.damage, p1.moves[i], p2, field.getSide(1), p1.ability === "Bad Dreams", p1, p2.isMinimized, p1.isVictoryStar, gen);
		if (p1.moves[i].isMLG && p1.level >= p2.level) {
			result.koChanceText = "<a href = 'https://www.youtube.com/watch?v=iD92h-M474g'>it's a one-hit KO!</a>"; //dank memes
		}
		var recoveryText = "";
		if (p1.moves[i].givesHealth) {
			var minHealthRecovered = "%" === "%" ? Math.floor(minDamage * p1.moves[i].percentHealed * 1000 / p1.maxHP) /
                10 : Math.floor(minDamage * p1.moves[i].percentHealed * 48 / p1.maxHP);
			var maxHealthRecovered = "%" === "%" ? Math.floor(maxDamage * p1.moves[i].percentHealed * 1000 / p1.maxHP) /
                10 : Math.floor(maxDamage * p1.moves[i].percentHealed * 48 / p1.maxHP);
			if (minHealthRecovered > 100 && "%" === "%") {
				minHealthRecovered = Math.floor(p2.maxHP * p1.moves[i].percentHealed * 1000 / p1.maxHP) / 10;
				maxHealthRecovered = Math.floor(p2.maxHP * p1.moves[i].percentHealed * 1000 / p1.maxHP) / 10;
			} else if ("%" !== "%" && minHealthRecovered > 48) {
				minHealthRecovered = Math.floor(p2.maxHP * p1.moves[i].percentHealed * 48 / p1.maxHP);
				maxHealthRecovered = Math.floor(p2.maxHP * p1.moves[i].percentHealed * 48 / p1.maxHP);
			}
			recoveryText = " (recovers between " + minHealthRecovered + "%" + " and " + maxHealthRecovered + "%" + ")";
		}
		var recoilText = "";
		if (typeof p1.moves[i].hasRecoil === "number") {
			var damageOverflow = minDamage > p2.curHP || maxDamage > p2.curHP;
			var minRecoilDamage = "%" === "%" ? Math.floor(Math.min(minDamage, p2.curHP) * p1.moves[i].hasRecoil * 10 / p1.maxHP) / 10 :
				Math.floor(Math.min(minDamage, p2.curHP) * p1.moves[i].hasRecoil * 0.48 / p1.maxHP);
			var maxRecoilDamage = "%" === "%" ? Math.floor(Math.min(maxDamage, p2.curHP) * p1.moves[i].hasRecoil * 10 / p1.maxHP) / 10 :
				Math.floor(Math.min(maxDamage, p2.curHP) * p1.moves[i].hasRecoil * 0.48 / p1.maxHP);
			if (damageOverflow) {
				minRecoilDamage = "%" === "%" ? Math.floor(p2.curHP * p1.moves[i].hasRecoil * 10 / p1.maxHP) / 10 :
					Math.floor(p2.maxHP * p1.moves[i].hasRecoil * 0.48 / p1.maxHP);
				maxRecoilDamage = "%" === "%" ? Math.floor(p2.curHP * p1.moves[i].hasRecoil * 10 / p1.maxHP) / 10 :
					Math.floor(p2.curHP * p1.moves[i].hasRecoil * 0.48 / p1.maxHP);
			}
			recoilText = " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " recoil damage)";
		} else if (p1.moves[i].hasRecoil === "crash") {
			var genMultiplier = gen === 2 ? 12.5 : gen >= 3 ? 50 : 1;
			var gen4CrashDamage = Math.floor(p2.maxHP * 0.5 / p1.maxHP * 100);
			var minRecoilDamage = "%" === "%" ? Math.floor(Math.min(minDamage, p2.maxHP) * genMultiplier * 10 / p1.maxHP) / 10 :
			   Math.floor(Math.min(minDamage, p2.maxHP) * genMultiplier * 0.48 / p1.maxHP);
			var maxRecoilDamage = "%" === "%" ? Math.floor(Math.min(maxDamage, p2.maxHP) * genMultiplier * 10 / p1.maxHP) / 10 :
				Math.floor(Math.min(maxDamage, p2.maxHP) * genMultiplier * 0.48 / p1.maxHP);
			if (damageOverflow && gen !== 2) {
				minRecoilDamage = "%" === "%" ? Math.floor(p2.curHP * genMultiplier * 10 / p1.maxHP) / 10 :
					Math.floor(p2.curHP * genMultiplier * 0.48 / p1.maxHP);
				maxRecoilDamage = "%" === "%" ? Math.floor(p2.maxHP * genMultiplier * 10 / p1.maxHP) / 10 :
					Math.floor(Math.min(p2.maxHP, p1.maxHP) * genMultiplier * 0.48);
			}
			recoilText = gen === 1 ? " (1hp damage on miss)" :
				gen === 2 ? (p2.type1 === "Ghost" || p2.type2 === "Ghost") ? " (no crash damage on Ghost types)" : " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " crash damage on miss)" :
					gen === 3 ? (p2.type1 === "Ghost" || p2.type2 === "Ghost") ? " (no crash damage on Ghost types)" : " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " crash damage on miss)" :
						gen === 4 ? (p2.type1 === "Ghost" || p2.type2 === "Ghost") ? " (" + gen4CrashDamage + "% crash damage)" : " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " crash damage on miss)" :
							gen > 4 ? " (50% crash damage)" :
								"";
		} else if (p1.moves[i].hasRecoil === "Struggle") {
			recoilText = " (25% struggle damage)";
		} else if (p1.moves[i].hasRecoil) {
			recoilText = " (50% recoil damage)";
		}
		$(resultLocations[0][i].move + " + label").text(p1.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[0][i].damage).text(minPercent + " - " + maxPercent + "%" + recoveryText + recoilText);
		if (maxPercent > highestMaxPercent) {
			highestMaxPercent = maxPercent;
			bestResult = $(resultLocations[0][i].move);
		}

		result = damageResults[1][i];
		var recoveryText = "";
		minDamage = result.damage[0] * p2.moves[i].hits;
		maxDamage = result.damage[result.damage.length - 1] * p2.moves[i].hits;
		minPercent = Math.floor(minDamage * 1000 / p1.maxHP) / 10;
		maxPercent = Math.floor(maxDamage * 1000 / p1.maxHP) / 10;
		result.damageText = minDamage + "-" + maxDamage + " (" + minPercent + " - " + maxPercent + "%)";
		result.koChanceText = p2.moves[i].bp === 0 ? "nice move" :
			getKOChanceText(result.damage, p2.moves[i], p1, field.getSide(0), p2.ability === "Bad Dreams", p2, p1.isMinimized, p2.isVictoryStar, gen);
		if (p2.moves[i].isMLG) {
			result.koChanceText = "<a href = 'https://www.youtube.com/watch?v=iD92h-M474g'>it's a one-hit KO!</a>";
		}
		if (p2.moves[i].givesHealth) {
			var minHealthRecovered = "%" === "%" ? Math.floor(minDamage * p2.moves[i].percentHealed * 1000 / p2.maxHP) /
                10 : Math.floor(minDamage * p2.moves[i].percentHealed * 48 / p2.maxHP);
			var maxHealthRecovered = "%" === "%" ? Math.floor(maxDamage * p2.moves[i].percentHealed * 1000 / p2.maxHP) /
                10 : Math.floor(maxDamage * p2.moves[i].percentHealed * 48 / p2.maxHP);
			if (minHealthRecovered > 100 && "%" === "%") {
				minHealthRecovered = Math.floor(p1.maxHP * p2.moves[i].percentHealed * 1000 / p2.maxHP) / 10;
				maxHealthRecovered = Math.floor(p1.maxHP * p2.moves[i].percentHealed * 1000 / p2.maxHP) / 10;
			} else if ("%" !== "%" && minHealthRecovered > 48) {
				minHealthRecovered = Math.floor(p1.maxHP * p2.moves[i].percentHealed * 48 / p2.maxHP);
				maxHealthRecovered = Math.floor(p1.maxHP * p2.moves[i].percentHealed * 48 / p2.maxHP);
			}
			recoveryText = " (recovers between " + minHealthRecovered + "%" + " and " + maxHealthRecovered + "%" + ")";
		}
		var recoilText = "";
		if (typeof p2.moves[i].hasRecoil === "number") {
			var damageOverflow = minDamage > p1.curHP || maxDamage > p1.curHP;
			var minRecoilDamage = "%" === "%" ? Math.floor(Math.min(minDamage, p1.curHP) * p2.moves[i].hasRecoil * 10 / p2.maxHP) / 10 :
				Math.floor(Math.min(minDamage, p1.curHP) * p2.moves[i].hasRecoil * 0.48 / p2.maxHP);
			var maxRecoilDamage = "%" === "%" ? Math.floor(Math.min(maxDamage, p1.maxHP) * p2.moves[i].hasRecoil * 10 / p2.maxHP) / 10 :
				Math.floor(Math.min(maxDamage, p1.curHP) * p2.moves[i].hasRecoil * 0.48 / p2.maxHP);
			if (damageOverflow) {
				minRecoilDamage = "%" === "%" ? Math.floor(Math.min(p1.maxHP * p2.moves[i].hasRecoil) * 10 / p2.maxHP) / 10 :
					Math.floor(p1.maxHP * p2.moves[i].recoilPercentage * 0.48 / p1.maxHP);
				maxRecoilDamage = "%" === "%" ? Math.floor(Math.min(p1.maxHP, p2.moves[i].hasRecoil) * 10 / p2.maxHP) / 10 :
					Math.floor(Math.min(p1.maxHP, p2.moves[i].hasRecoil) * 0.48 / p2.maxHP);
			}
			recoilText = " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " recoil damage)";
		} else if (p2.moves[i].hasRecoil === "crash") {
			var genMultiplier = gen === 2 ? 12.5 : gen >= 3 ? 50 : 1;
			var gen4CrashDamage = Math.floor(p2.maxHP * 0.5 / p1.maxHP * 100);
			var minRecoilDamage = "%" === "%" ? Math.floor(Math.min(minDamage, p1.maxHP) * genMultiplier * 10 / p2.maxHP) / 10 :
				Math.floor(Math.min(minDamage, p1.maxHP) * 0.48 / p2.maxHP);
			var maxRecoilDamage = "%" === "%" ? Math.floor(Math.min(maxDamage, p1.maxHP) * genMultiplier * 10 / p2.maxHP) / 10 :
				Math.floor(Math.min(maxDamage, p1.maxHP) * 0.48 / p2.maxHP);
			if (damageOverflow && gen !== 2) {
				minRecoilDamage = "%" === "%" ? Math.floor(Math.min(p1.maxHP, genMultiplier) * 10 / p2.maxHP) / 10 :
					Math.floor(Math.min(p1.maxHP, p1.maxHP) * genMultiplier * 0.48);
				maxRecoilDamage = "%" === "%" ? Math.floor(Math.min(p1.maxHP, genMultiplier) * 10 / p2.maxHP) / 10 :
					Math.floor(Math.min(p1.maxHP, p2.maxHP) * genMultiplier * 0.48);
			}
			recoilText = gen === 1 ? " (1hp damage on miss)" :
				gen === 2 ? (p1.type1 === "Ghost" || p1.type2 === "Ghost") ? " (no crash damage on Ghost types)" : " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " crash damage on miss)" :
					gen === 3 ? (p1.type1 === "Ghost" || p1.type2 === "Ghost") ? " (no crash damage on Ghost types)" : " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " crash damage on miss)" :
						gen === 4 ? (p1.type1 === "Ghost" || p1.type2 === "Ghost") ? " (" + gen4CrashDamage + "% crash damage)" : " (" + minRecoilDamage + " - " + maxRecoilDamage + "%" + " crash damage on miss)" :
							gen > 4 ? " (50% crash damage)" :
								"";
		} else if (p2.moves[i].hasRecoil === "Struggle") {
			recoilText = " (25% struggle damage)";
		} else if (p2.moves[i].hasRecoil) {
			recoilText = " (50% recoil damage)";
		}
		$(resultLocations[1][i].move + " + label").text(p2.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[1][i].damage).text(minPercent + " - " + maxPercent + "%" + recoveryText + recoilText);
		if (maxPercent > highestMaxPercent) {
			highestMaxPercent = maxPercent;
			bestResult = $(resultLocations[1][i].move);
		}
	}
	if ($(".locked-move").length) {
		bestResult = $(".locked-move");
	} else {
		stickyMoves.setSelectedMove(bestResult.prop("id"));
	}
	bestResult.prop("checked", true);
	bestResult.change();
	$("#resultHeaderL").text(p1.name + "'s Moves (select one to show detailed results)");
	$("#resultHeaderR").text(p2.name + "'s Moves (select one to show detailed results)");
}

$(".result-move").change(function () {
	if (damageResults) {
		var result = findDamageResult($(this));
		if (result) {
			$("#mainResult").html(result.description + ": " + result.damageText + " -- " + result.koChanceText);
			if (result.parentDamage) {
				$("#damageValues").text("(First hit: " + result.parentDamage.join(", ") +
                    "; Second hit: " + result.childDamage.join(", ") + ")");
			} else {
				$("#damageValues").text("(" + result.damage.join(", ") + ")");
			}
		}
	}
});

// Need to close over "lastClicked", so we'll do it the old-fashioned way to avoid
// needlessly polluting the global namespace.
var stickyMoves = (function () {
	var lastClicked = "resultMoveL1";
	$(".result-move").click(function () {
		if (this.id === lastClicked) {
			$(this).toggleClass("locked-move");
		} else {
			$(".locked-move").removeClass("locked-move");
		}
		lastClicked = this.id;
	});

	return {
		clearStickyMove: function () {
			lastClicked = null;
			$(".locked-move").removeClass("locked-move");
		},
		setSelectedMove: function (slot) {
			lastClicked = slot;
		},
		getSelectedSide: function () {
			if (lastClicked) {
				if (lastClicked.includes("resultMoveL")) {
					return "p1";
				} else if (lastClicked.includes("resultMoveR")) {
					return "p2";
				}
			}
			return null;
		}
	};
})();

function findDamageResult(resultMoveObj) {
	var selector = "#" + resultMoveObj.attr("id");
	for (var i = 0; i < resultLocations.length; i++) {
		for (var j = 0; j < resultLocations[i].length; j++) {
			if (resultLocations[i][j].move === selector) {
				return damageResults[i][j];
			}
		}
	}
}

function Pokemon(pokeInfo) {
	if (typeof pokeInfo === "string") { // in this case, pokeInfo is the id of an individual setOptions value whose moveset's tier matches the selected tier(s)
		this.name = pokeInfo.substring(0, pokeInfo.indexOf(" ("));
		var setName = pokeInfo.substring(pokeInfo.indexOf("(") + 1, pokeInfo.lastIndexOf(")"));
		var pokemon = pokedex[this.name];
		this.type1 = pokemon.t1;
		this.type2 = pokemon.t2 && typeof pokemon.t2 !== "undefined" ? pokemon.t2 : "";
		this.rawStats = [];
		this.boosts = [];
		this.stats = [];
		this.evs = [];
		this.avs = [];

		var set = setdex[this.name][setName];
		this.level = set.level;
		if (gen !== 22) {
			this.HPEVs = set.evs && typeof set.evs.hp !== "undefined" ? set.evs.hp : 0;
			if (gen < 3) {
				var HPDVs = 15;
				this.maxHP = ~~(((pokemon.bs.hp + HPDVs) * 2 + 63) * this.level / 100) + this.level + 10;
			} else if (pokemon.bs.hp === 1) {
				this.maxHP = 1;
			} else {
				var HPIVs = 31;
				this.maxHP = ~~((pokemon.bs.hp * 2 + HPIVs + ~~(this.HPEVs / 4)) * this.level / 100) + this.level + 10;
			}
			this.curHP = this.maxHP;
			this.nature = set.nature;
			for (var i = 0; i < STATS.length; i++) {
				var stat = STATS[i];
				this.boosts[stat] = 0;
				this.evs[stat] = set.evs && typeof set.evs[stat] !== "undefined" ? set.evs[stat] : 0;
				if (gen < 3) {
					var dvs = 15;
					this.rawStats[stat] = ~~(((pokemon.bs[stat] + dvs) * 2 + 63) * this.level / 100) + 5;
				} else {
					var ivs = set.ivs && typeof set.ivs[stat] !== "undefined" ? set.ivs[stat] : 31;
					var natureMods = NATURES[this.nature];
					var nature = natureMods[0] === stat ? 1.1 : natureMods[1] === stat ? 0.9 : 1;
					this.rawStats[stat] = ~~((~~((pokemon.bs[stat] * 2 + ivs + ~~(this.evs[stat] / 4)) * this.level / 100) + 5) * nature);
				}
			}
		} else {
			this.HPAVs = set.avs && typeof set.avs.hp !== "undefined" ? set.avs.hp : 0;
			if (pokemon.bs.hp === 1) {
				this.maxHP = 1;
			} else {
				var HPIVs = 31;
				this.maxHP = Math.floor((base * 2 + ivs) * level / 100) + level + 10 + this.HPAVs;
			}
			this.curHP = this.maxHP;
			this.nature = set.nature;
			for (var i = 0; i < STATS.length; i++) {
				var stat = STATS[i];
				this.boosts[stat] = 0;
				this.avs[stat] = set.avs && typeof set.avs[stat] !== "undefined" ? set.avs[stat] : 0;
				var ivs = set.ivs && typeof set.ivs[stat] !== "undefined" ? set.ivs[stat] : 31;
				var natureMods = NATURES[this.nature];
				var nature = natureMods[0] === stat ? 1.1 : natureMods[1] === stat ? 0.9 : 1;
				this.rawStats[stat] = ~~((~~((pokemon.bs[stat] * 2 + ivs) * this.level / 100) + 5) * nature + this.avs[stat]);
			}
		}
		this.ability = set.ability && typeof set.ability !== "undefined" ? set.ability :
			pokemon.ab && typeof pokemon.ab !== "undefined" ? pokemon.ab : "";
		this.item = set.item && typeof set.item !== "undefined" && (set.item === "Eviolite" || !(set.item.includes("ite"))) ? set.item : "";
		this.status = "Healthy";
		this.toxicCounter = 0;
		this.moves = [];
		for (var i = 0; i < 4; i++) {
			var moveName = set.moves[i];
			var defaultDetails = moves[moveName] || moves["(No Move)"];
			this.moves.push($.extend({}, defaultDetails, {
				name: defaultDetails.bp === 0 ? "(No Move)" : moveName,
				bp: defaultDetails.bp,
				type: defaultDetails.type,
				category: defaultDetails.category,
				isCrit: !!defaultDetails.alwaysCrit,
				acc: defaultDetails.acc,
				hits: defaultDetails.isMultiHit ? this.ability === "Skill Link" || this.item === "Grip Claw" ? 5 : 3 : defaultDetails.isTwoHit ? 2 : 1,
				usedTimes: 1
			}));
		}
		this.weight = pokemon.weight;
	} else {
		var setName = pokeInfo.find("input.set-selector").val();
		if (!(setName.includes("("))) {
			this.name = setName;
		} else {
			var pokemonName = setName.substring(0, setName.indexOf(" ("));
			this.name = pokedex[pokemonName].formes ? pokeInfo.find(".forme").val() : pokemonName;
		}
		this.type1 = pokeInfo.find(".type1").val();
		this.type2 = pokeInfo.find(".type2").val();
		this.level = ~~pokeInfo.find(".level").val();
		this.maxHP = ~~pokeInfo.find(".hp .total").text();
		this.curHP = ~~pokeInfo.find(".current-hp").val();
		this.HPEVs = ~~pokeInfo.find(".hp .evs").val();
		this.HPAVs = ~~pokeInfo.find(".hp .avs").val();
		this.HPIVs = ~~pokeInfo.find(".hp .ivs").val();
		this.isDynamax = pokeInfo.find(".max").prop("checked");
		this.rawStats = [];
		this.boosts = [];
		this.stats = [];
		this.evs = [];
		this.avs = [];
		this.ivs = [];
		for (var i = 0; i < STATS.length; i++) {
			this.rawStats[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .total").text();
			this.boosts[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .boost").val();
			this.evs[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .evs").val();
			this.avs[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .avs").val();
			this.ivs[STATS[i]] = ~~pokeInfo.find("." + STATS[i] + " .ivs").val();
		}
		this.nature = pokeInfo.find(".nature").val();
		this.ability = pokeInfo.find(".ability").val();
		this.item = pokeInfo.find(".item").val();
		this.status = pokeInfo.find(".status").val();
		this.toxicCounter = this.status === "Badly Poisoned" ? ~~pokeInfo.find(".toxic-counter").val() : 0;
		this.moves = [
			getMoveDetails(pokeInfo.find(".move1"), this.item),
			getMoveDetails(pokeInfo.find(".move2"), this.item),
			getMoveDetails(pokeInfo.find(".move3"), this.item),
			getMoveDetails(pokeInfo.find(".move4"), this.item)
		];
		this.weight = +pokeInfo.find(".weight").val();
	}
	this.hasType = function (type) {
		return this.type1 === type || this.type2 === type;
	};
}

function getMoveDetails(moveInfo, item) {
	var moveName = moveInfo.find("select.move-selector").val();
	var defaultDetails = moves[moveName];
	var isZMove = gen >= 7 && gen != 8 && moveInfo.find("input.move-z").prop("checked");
	var isMax = gen == 8 && moveInfo.find("input.move-max").prop("checked");

	if (isMax) {
		var exceptions_100_fight = ["Low Kick", "Reversal", "Final Gambit"];
		var exceptions_80_fight = ["Double Kick", "Triple Kick"];
		var exceptions_75_fight = ["Counter", "Seismic Toss"];
		var exceptions_140 = ["Triple Axel", "Crush Grip", "Wring Out", "Magnitude", "Double Iron Bash", "Rising Voltage"];
		var exceptions_130 = ["Scale Shot", "Dual Wing Beat", "Terrain Pulse", "Bolt Beak (Doubled)", "Fishious Rend (Doubled)", "Pin Missile", "Power Trip", "Punishment", "Dragon Darts", "Dual Chop", "Electro Ball", "Heat Crash",
			"Bullet Seed", "Grass Knot", "Bonemerang", "Bone Rush", "Fissure", "Icicle Spear", "Sheer Cold", "Weather Ball", "Tail Slap", "Guillotine", "Horn Drill",
			"Flail", "Return", "Frustration", "Endeavor", "Natural Gift", "Trump Card", "Stored Power", "Rock Blast", "Gear Grind", "Gyro Ball", "Heavy Slam"];
		var exceptions_120 = ["Double Hit", "Spike Cannon"];
		var exceptions_100 = ["Twineedle", "Beat Up", "Fling", "Dragon Rage", "Nature\'s Madness", "Night Shade", "Comet Punch", "Fury Swipes", "Sonic Boom", "Bide",
			"Super Fang", "Present", "Spit Up", "Psywave", "Mirror Coat", "Metal Burst"];

		var tempBP = 1;

		var maxMoveName = MAXMOVES_LOOKUP[defaultDetails.type];
		
		if (moves[maxMoveName].type == "Fighting" || moves[maxMoveName].type == "Poison") {
			if (defaultDetails.bp >= 110) tempBP = 95;
			else if (defaultDetails.bp >= 75) tempBP = 90;
			else if (defaultDetails.bp >= 65) tempBP = 85;
			else if (defaultDetails.bp >= 55 || exceptions_80_fight.includes(moveName)) tempBP = 80;
			else if (defaultDetails.bp >= 45 || exceptions_75_fight.includes(moveName)) tempBP = 75;
			else if (defaultDetails.bp >= 150 || exceptions_100_fight.includes(moveName)) tempBP = 100;
			else tempBP = 70;
		} else {
			if (defaultDetails.bp >= 110 || exceptions_140.includes(moveName)) tempBP = 140;
			else if (defaultDetails.bp >= 75 || exceptions_130.includes(moveName)) tempBP = 130;
			else if (defaultDetails.bp >= 65 || exceptions_120.includes(moveName)) tempBP = 120;
			else if (defaultDetails.bp >= 55 || exceptions_100.includes(moveName)) tempBP = 110;
			else if (defaultDetails.bp >= 45) tempBP = 100;
			else if (defaultDetails.bp >= 150) tempBP = 150;
			else tempBP = 90;
		}

		return $.extend({}, moves[maxMoveName], {
			name: maxMoveName,
			moveDescName: maxMoveName + " (" + tempBP + "BP)",
			bp: tempBP,
			type: defaultDetails.type,
			category: defaultDetails.category,
			isCrit: moveInfo.find(".move-crit").prop("checked"),
			hits: 1,
			isMax: true
		});
	}

	// If z-move is checked but there isn't a corresponding z-move, use the original move
	if (isZMove && "zp" in defaultDetails) {
		var zMoveName = getZMoveName(moveName, defaultDetails.type, item);
		return $.extend({}, moves[zMoveName], {
			name: zMoveName,
			bp: moves[zMoveName].bp === 1 ? defaultDetails.zp : moves[zMoveName].bp,
			category: defaultDetails.category,
			isCrit: moveInfo.find(".move-crit").prop("checked"),
			hits: 1
		});
	} else {
		return $.extend({}, defaultDetails, {
			name: moveName,
			bp: ~~moveInfo.find(".move-bp").val(),
			type: moveInfo.find(".move-type").val(),
			category: moveInfo.find(".move-cat").val(),
			isCrit: moveInfo.find(".move-crit").prop("checked"),
			isMax: isMax,
			hits: defaultDetails.isMultiHit ? ~~moveInfo.find(".move-hits").val() : defaultDetails.isTwoHit ? 2 : 1,
			usedTimes: defaultDetails.dropsStats ? ~~moveInfo.find(".stat-drops").val() : 1
		});
	}
}

function getZMoveName(moveName, moveType, item) {
	return moveName.includes("Hidden Power") ? "Breakneck Blitz" : // Hidden Power will become Breakneck Blitz
		moveName === "Clanging Scales" && item === "Kommonium Z" ? "Clangorous Soulblaze" :
			moveName === "Darkest Lariat" && item === "Incinium Z" ? "Malicious Moonsault" :
				moveName === "Giga Impact" && item === "Snorlium Z" ? "Pulverizing Pancake" :
					moveName === "Moongeist Beam" && item === "Lunalium Z" ? "Menacing Moonraze Maelstrom" :
						moveName === "Photon Geyser" && item === "Ultranecrozium Z" ? "Light That Burns the Sky" :
							moveName === "Play Rough" && item === "Mimikium Z" ? "Let\'s Snuggle Forever" :
								moveName === "Psychic" && item === "Mewnium Z" ? "Genesis Supernova" :
									moveName === "Sparkling Aria" && item === "Primarium Z" ? "Oceanic Operetta" :
										moveName === "Spectral Thief" && item === "Marshadium Z" ? "Soul-Stealing 7-Star Strike" :
											moveName === "Spirit Shackle" && item === "Decidium Z" ? "Sinister Arrow Raid" :
												moveName === "Stone Edge" && item === "Lycanium Z" ? "Splintered Stormshards" :
													moveName === "Sunsteel Strike" && item === "Solganium Z" ? "Searing Sunraze Smash" :
														moveName === "Thunderbolt" && item === "Aloraichium Z" ? "Stoked Sparksurfer" :
															moveName === "Thunderbolt" && item === "Pikashunium Z" ? "10,000,000 Volt Thunderbolt" :
																moveName === "Volt Tackle" && item === "Pikanium Z" ? "Catastropika" :
																	moveName === "Nature\'s Madness" && item === "Tapunium Z" ? "Guardian of Alola" :
																		moveName === "Spectral Thief" && item === "Marshadium Z" ? "Soul-Stealing 7-Star Strike" :
																			ZMOVES_TYPING[moveType];
}

function Field() {
	var format = $("input:radio[name='format']:checked").val();
	localStorage.setItem("selectedFormat", format.toLowerCase());
	var isGravity = $("#gravity").prop("checked");
	var isSR = [$("#srL").prop("checked"), $("#srR").prop("checked")];
	var isProtect = [$("#protectL").prop("checked"), $("#protectR").prop("checked")];
	var weather;
	var spikes;
	if (gen === 2) {
		spikes = [$("#gscSpikesL").prop("checked") ? 1 : 0, $("#gscSpikesR").prop("checked") ? 1 : 0];
		weather = $("input:radio[name='gscWeather']:checked").val();
	} else {
		weather = $("input:radio[name='weather']:checked").val();
		spikes = [~~$("input:radio[name='spikesL']:checked").val(), ~~$("input:radio[name='spikesR']:checked").val()];
	}
	var terrain = $("input:radio[name='terrain']:checked").val() ? $("input:radio[name='terrain']:checked").val() : "";
	var isReflect = [$("#reflectL").prop("checked"), $("#reflectR").prop("checked")];
	var isLightScreen = [$("#lightScreenL").prop("checked"), $("#lightScreenR").prop("checked")];
	var isSeeded = [$("#leechSeedL").prop("checked"), $("#leechSeedR").prop("checked")];
	var isForesight = [$("#foresightL").prop("checked"), $("#foresightR").prop("checked")];
	var isHelpingHand = [$("#helpingHandR").prop("checked"), $("#helpingHandL").prop("checked")]; // affects attacks against opposite side
	var isPowerSpot = [$("#powerSpotR").prop("checked"), $("#powerSpotL").prop("checked")]; // affects attacks against opposite side
	var isFriendGuard = [$("#friendGuardL").prop("checked"), $("#friendGuardR").prop("checked")];
	var isBattery = [$("#batteryR").prop("checked"), $("#batteryL").prop("checked")];
	var isMinimized = [$("#minimL").prop("checked"), $("#minimR").prop("checked")];
	var isVictoryStar = [$("#vicStarL").prop("checked"), $("#vicStarR").prop("checked")];
	var isBusted8 = [$("#busted8L").prop("checked"), $("#busted8R").prop("checked")];
	var isBusted16 = [$("#busted16L").prop("checked"), $("#busted16R").prop("checked")];

	this.getWeather = function () {
		return weather;
	};
	this.clearWeather = function () {
		weather = "";
	};
	this.getSide = function (i) {
		return new Side(format, terrain, weather, isGravity, isSR[i], spikes[i], isReflect[i], isLightScreen[i], isSeeded[i], isForesight[i], isHelpingHand[i], isMinimized[i], isVictoryStar[i], isFriendGuard[i], isBattery[i], isProtect[i], isPowerSpot[i], isBusted8[i], isBusted16[i]);
	};
}

function Side(format, terrain, weather, isGravity, isSR, spikes, isReflect, isLightScreen, isSeeded, isForesight, isHelpingHand, isMinimized, isVictoryStar, isFriendGuard, isBattery, isProtect, isPowerSpot, isBusted8, isBusted16) {
	this.format = format;
	this.terrain = terrain;
	this.weather = weather;
	this.isGravity = isGravity;
	this.isSR = isSR;
	this.spikes = spikes;
	this.isReflect = isReflect;
	this.isLightScreen = isLightScreen;
	this.isSeeded = isSeeded;
	this.isForesight = isForesight;
	this.isHelpingHand = isHelpingHand;
	this.isMinimized = isMinimized;
	this.isVictoryStar = isVictoryStar;
	this.isFriendGuard = isFriendGuard;
	this.isBattery = isBattery;
	this.isProtect = isProtect;
	this.isPowerSpot = isPowerSpot;
	this.isBusted8 = isBusted8;
	this.isBusted16 = isBusted16;
}

var gen, pokedex, setdex, typeChart, moves, abilities, items, STATS, calculateAllMoves, calcHP, calcStat;

$(".gen").change(function () {
	gen = ~~$(this).val();
	switch (gen) {
	case 1:
		pokedex = POKEDEX_RBY;
		setdex = SETDEX_RBY;
		typeChart = TYPE_CHART_RBY;
		moves = MOVES_RBY;
		items = [];
		abilities = [];
		STATS = STATS_RBY;
		calculateAllMoves = CALCULATE_ALL_MOVES_RBY;
		calcHP = CALC_HP_RBY;
		calcStat = CALC_STAT_RBY;
		break;
	case 2:
		pokedex = POKEDEX_GSC;
		setdex = SETDEX_GSC;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_GSC;
		items = ITEMS_GSC;
		abilities = [];
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_GSC;
		calcHP = CALC_HP_RBY;
		calcStat = CALC_STAT_RBY;
		break;
	case 3:
		pokedex = POKEDEX_ADV;
		setdex = SETDEX_ADV;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_ADV;
		items = ITEMS_ADV;
		abilities = ABILITIES_ADV;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_ADV;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		break;
	case 4:
		pokedex = POKEDEX_DPP;
		setdex = SETDEX_DPP;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_DPP;
		items = ITEMS_DPP;
		abilities = ABILITIES_DPP;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_DPP;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		break;
	case 5:
		pokedex = POKEDEX_BW;
		setdex = SETDEX_GEN5;
		typeChart = TYPE_CHART_GSC;
		moves = MOVES_BW;
		items = ITEMS_BW;
		abilities = ABILITIES_BW;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_BW;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		localStorage.setItem("selectedGen", 5);
		break;
	case 6:
		pokedex = POKEDEX_XY;
		setdex = SETDEX_GEN6;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_XY;
		items = ITEMS_XY;
		abilities = ABILITIES_XY;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_BW;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		localStorage.setItem("selectedGen", 6);
		break;
	case 7:
		pokedex = POKEDEX_SM;
		setdex = SETDEX_GEN7;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_SM;
		items = ITEMS_SM;
		abilities = ABILITIES_SM;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_BW;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		localStorage.setItem("selectedGen", 7);
		break;
	case 8:
		pokedex = POKEDEX_SS;
		setdex = SETDEX_GEN8;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_SS;
		items = ITEMS_SS;
		abilities = ABILITIES_SS;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_BW;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		localStorage.setItem("selectedGen", 8);
		break;
	case 20:
		pokedex = POKEDEX_SM;
		setdex = SETDEX_FACTORY;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_SM;
		items = ITEMS_SM;
		abilities = ABILITIES_SM;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_BW;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		localStorage.setItem("selectedGen", 20);
		break;
	case 21:
		pokedex = POKEDEX_SM;
		setdex = SETDEX_GEN7;
		typeChart = TYPE_CHART_INVERSE;
		moves = MOVES_SM;
		items = ITEMS_SM;
		abilities = ABILITIES_SM;
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_BW;
		calcHP = CALC_HP_ADV;
		calcStat = CALC_STAT_ADV;
		localStorage.setItem("selectedGen", 21);
		break;
	case 22:
		pokedex = POKEDEX_LG;
		setdex = SETDEX_LG;
		typeChart = TYPE_CHART_XY;
		moves = MOVES_LG;
		items = ITEMS_SM;
		abilities = [];
		STATS = STATS_GSC;
		calculateAllMoves = CALCULATE_ALL_MOVES_LG;
		calcHP = CALC_HP_LG;
		calcStat = CALC_STAT_LG;
		localStorage.setItem("selectedGen", 22);
	}
	clearField();
	$(".gen-specific.g" + gen).show();
	$(".gen-specific").not(".g" + gen).hide();
	var typeOptions = getSelectOptions(Object.keys(typeChart));
	$("select.type1, select.move-type").find("option").remove().end().append(typeOptions);
	$("select.type2").find("option").remove().end().append("<option value=\"\">(none)</option>" + typeOptions);
	var moveOptions = getSelectOptions(Object.keys(moves), true);
	$("select.move-selector").find("option").remove().end().append(moveOptions);
	var abilityOptions = getSelectOptions(abilities, true);
	$("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
	var itemOptions = getSelectOptions(items, true);
	$("select.item").find("option").remove().end().append("<option value=\"\">(none)</option>" + itemOptions);

	$(".set-selector").val(getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3].id);
	$(".set-selector").change();
});

function clearField() {
	if (localStorage.getItem("selectedFormat") != null) {
		switch (localStorage.getItem("selectedFormat") + "") {

		case "singles":
			$("#singles").prop("checked", true);
			break;

		case "doubles":
			$("#doubles").prop("checked", true);
			break;

		default:
			$("#singles").prop("checked", true);
		}
	} else {
		$("#singles").prop("checked", true);
	}
	$("#clear").prop("checked", true);
	$("#gscClear").prop("checked", true);
	$("#gravity").prop("checked", false);
	$("#srL").prop("checked", false);
	$("#srR").prop("checked", false);
	$("#spikesL0").prop("checked", true);
	$("#spikesR0").prop("checked", true);
	$("#gscSpikesL").prop("checked", false);
	$("#gscSpikesR").prop("checked", false);
	$("#reflectL").prop("checked", false);
	$("#reflectR").prop("checked", false);
	$("#lightScreenL").prop("checked", false);
	$("#lightScreenR").prop("checked", false);
	$("#leechSeedL").prop("checked", false);
	$("#leechSeedR").prop("checked", false);
	$("#foresightL").prop("checked", false);
	$("#foresightR").prop("checked", false);
	$("#helpingHandL").prop("checked", false);
	$("#helpingHandR").prop("checked", false);
	$("#powerSpotL").prop("checked", false);
	$("#powerSpotR").prop("checked", false);
	$("#friendGuardL").prop("checked", false);
	$("#friendGuardR").prop("checked", false);
	$("#clangL").prop("checked", false);
	$("#clangR").prop("checked", false);
	$("#wpL").prop("checked", false);
	$("#wpR").prop("checked", false);
	$("#evoL").prop("checked", false);
	$("#evoR").prop("checked", false);
}

function getSetOptions() {
	var pokeNames, index;
	pokeNames = Object.keys(pokedex);
	index = pokeNames.length;
	while (index--) {
		if (pokedex[pokeNames[index]].isAlternateForme) {
			pokeNames.splice(index, 1);
		}
	}
	pokeNames.sort();
	index = pokeNames.length;
	while (index--) { //forcing alolan forms to show first
		if (pokeNames[index].includes("-Alola")) {
			var temp = pokeNames[index];
			pokeNames.splice(index, 1); //deleting alolan entry
			var regularForm = temp.substring(0, temp.indexOf("-Alola"));
			var regularIndex = pokeNames.indexOf(regularForm);
			pokeNames.splice(regularIndex, 0, temp); //re-inserting it right before non-alolan entry
		}
	}
	var setOptions = [];
	var idNum = 0;
	for (var i = 0; i < pokeNames.length; i++) {
		var pokeName = pokeNames[i];
		setOptions.push({
			pokemon: pokeName,
			text: pokeName
		});
		if (pokeName in setdex) {
			var setNames = Object.keys(setdex[pokeName]);
			for (var j = 0; j < setNames.length; j++) {
				var setName = setNames[j];
				setOptions.push({
					pokemon: pokeName,
					set: setName,
					text: pokeName + " (" + setName + ")",
					id: pokeName + " (" + setName + ")"
				});
			}
		}
		setOptions.push({
			pokemon: pokeName,
			set: "Blank Set",
			text: pokeName + " (Blank Set)",
			id: pokeName + " (Blank Set)"
		});
	}
	return setOptions;
}

function getSelectOptions(arr, sort, defaultIdx) {
	if (sort) {
		arr.sort();
	}
	var r = "";
	// Zero is of course falsy too, but this is mostly to coerce undefined.
	if (!defaultIdx) {
		defaultIdx = 0;
	}
	for (var i = 0; i < arr.length; i++) {
		if (i === defaultIdx) {
			r += '<option value="' + arr[i] + '" selected="selected">' + arr[i] + "</option>";
		} else {
			r += '<option value="' + arr[i] + '">' + arr[i] + "</option>";
		}
	}
	return r;
}

$(document).ready(function () {
	if (localStorage.getItem("selectedGen") != null) {
		switch (localStorage.getItem("selectedGen") + "") {

		case "5":
			$("#gen5").prop("checked", true);
			$("#gen5").change();
			break;

		case "6":
			$("#gen6").prop("checked", true);
			$("#gen6").change();
			break;

		case "7":
			$("#gen7").prop("checked", true);
			$("#gen7").change();
			break;

		case "8":
			$("#gen8").prop("checked", true);
			$("#gen8").change();
			break;

		case "20":
			$("#gen20").prop("checked", true);
			$("#gen20").change();
			break;

		case "21":
			$("#gen21").prop("checked", true);
			$("#gen21").change();
			break;

		case "22":
			$("#gen22").prop("checked", true);
			$("#gen22").change();
			break;

		default:
			$("#gen7").prop("checked", true);
			$("#gen7").change();
		}
	} else {
		$("#gen7").prop("checked", true);
		$("#gen7").change();
	}
	for (var n = 1; n < 101; n++) {
		$("#autolevel-select").append($("<option />").val(n).text(n));
	}
	$(".terrain-trigger").bind("change keyup", getTerrainEffects);
	$(".calc-trigger").bind("change keyup", calculate);
	$(".set-selector").select2({
		formatResult: function (object) {
			return object.set ? "&nbsp;&nbsp;&nbsp;" + object.set : "<b>" + object.text + "</b>";
		},
		query: function (query) {
			var setOptions = getSetOptions();
			var pageSize = 30;
			var results = [];
			for (var i = 0; i < setOptions.length; i++) {
				var pokeName = setOptions[i].pokemon.toUpperCase();
				if (!query.term || pokeName.indexOf(query.term.toUpperCase()) === 0 || pokeName.includes("" + query.term.toUpperCase())) {
					results.push(setOptions[i]);
				}
			}
			query.callback({
				results: results.slice((query.page - 1) * pageSize, query.page * pageSize),
				more: results.length >= query.page * pageSize
			});
		},
		initSelection: function (element, callback) {
			var data = getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3];
			callback(data);
		}
	});
	$(".move-selector").select2({
		dropdownAutoWidth: true,
		matcher: function (term, text) {
			// 2nd condition is for Hidden Power
			return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().includes(" " + term.toUpperCase());
		}
	});
	$(".set-selector").val(getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3].id);
	$(".set-selector").change();
});

/******************/
/*  EV OPTIMIZER  */
/******************/

function optimizeEVs(side, mon) {
	/*
	//log(mon.rawStats)
	var basehp = ~~$(side).find(".hp .base").val();
	var baseat = ~~$(side).find(".at .base").val();
	var basedf = ~~$(side).find(".df .base").val();
	var basesa = ~~$(side).find(".sa .base").val();
	var basesd = ~~$(side).find(".sd .base").val();
	var basesp = ~~$(side).find(".sp .base").val();
	var ivshp = ~~$(side).find(".hp .ivs").val();
	var ivsat = ~~$(side).find(".at .ivs").val();
	var ivsdf = ~~$(side).find(".df .ivs").val();
	var ivssa = ~~$(side).find(".sa .ivs").val();
	var ivssd = ~~$(side).find(".sd .ivs").val();
	var ivssp = ~~$(side).find(".sp .ivs").val();
	var evshp = ~~$(side).find(".hp .evs").val();
	var evsat = ~~$(side).find(".at .evs").val();
	var evsdf = ~~$(side).find(".df .evs").val();
	var evssa = ~~$(side).find(".sa .evs").val();
	var evssd = ~~$(side).find(".sd .evs").val();
	var evssp = ~~$(side).find(".sp .evs").val();

	var nature = NATURES[mon.nature];
	var level = ~~mon.level;

	var natureVals = ["1", "1", "1", "1", "1"];

	console.log(nature)

	var hp0 = Math.floor((basehp * 2 + ivshp + Math.floor(evshp / 4)) * level / 100) + level + 10;
	var at0 = Math.floor((Math.floor((baseat * 2 + ivsat + Math.floor(evsat / 4)) * level / 100) + 5) * natureVals[0]);
	var df0 = Math.floor((Math.floor((basedf * 2 + ivsdf + Math.floor(evsdf / 4)) * level / 100) + 5) * natureVals[1]);
	var sa0 = Math.floor((Math.floor((basesa * 2 + ivssa + Math.floor(evssa / 4)) * level / 100) + 5) * natureVals[2]);
	var sd0 = Math.floor((Math.floor((basesd * 2 + ivssd + Math.floor(evssd / 4)) * level / 100) + 5) * natureVals[3]);
	var sp0 = Math.floor((Math.floor((basesp * 2 + ivssp + Math.floor(evssp / 4)) * level / 100) + 5) * natureVals[4]);

	switch (nature[0]) {
		case "at":
		natureVals[0] = 1.1;
		break;

		case "df":
		natureVals[1] = 1.1;
		break;
	}

	console.log(hp);
	console.log(at);
	console.log(df);
	console.log(sa);
	console.log(sd);
	console.log(sp);
	*/
}

$("#maxL").change(function () {
	if (this.checked) {
		for (var i = 0; i < 4; i++) {
			$("#maxL" + (i + 1)).prop("checked", true);
		}
	} else {
		for (var i = 0; i < 4; i++) {
			$("#maxL" + (i + 1)).prop("checked", false);
		}
	}
});

$("#maxR").change(function () {
	if (this.checked) {
		for (var i = 0; i < 4; i++) {
			$("#maxR" + (i + 1)).prop("checked", true);
		}
	} else {
		for (var i = 0; i < 4; i++) {
			$("#maxR" + (i + 1)).prop("checked", false);
		}
	}
});
