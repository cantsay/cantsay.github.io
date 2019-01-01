//////////////////////////////////////////////////////////
//              GNU GENERAL PUBLIC LICENSE              //
// This is a different license to the rest of the repo  //
//   Please see _pages/resources/ko-chance-calculator   //
//       Based on code from https://git.io/fhtrc        //
//////////////////////////////////////////////////////////

$("#calculate").click(function () {
	var HPStat = parseInt($("#HpStat").val());

	var damageRollSets = createArray(5, 16);

	for (var i = 0; i < 5; i++) {
		damageRollSets[i] = parseDamageRolls($("#set" + (i + 1)).val());
	}

	var rawCount = getKOChance(HPStat, damageRollSets);

	var rollSize = 0;
	for (var a = 0; a < 5; a++) {
		if ($("#set" + (a + 1)).val().length > 0)
			rollSize += 1;
	}

	var possibleCombinations = Math.pow(16, rollSize);
	var simpFr = $("#simpFractOut").val().split("/")[0];
	//console.log(simpFr);
	var mult = $("#simpFractOut").val().split("/")[1];
	var xMult = 0;
	if (mult < possibleCombinations) {
		while (mult < possibleCombinations) {
			mult *= 2;
			xMult += 1;
		}
		for (var g = 0; g < xMult; g++) {
			simpFr *= 2;
		}
	}
	$("#rawFractOut").val(simpFr + "/" + mult);
});

var input1 = $("#set1").val();

function parseDamageRolls(input) {
	//sanitize string
	if (input.indexOf("(") !== -1) {
		input = input.substr(input.indexOf("(") + 1, input.length);
	}
	if (input.indexOf(")") !== -1) {
		input = input.substr(0, input.indexOf(")"));
	}
	var rollsString = input.split(", ");

	//Sanity check for damage roll input
	if (rollsString.length !== 16) {
		badInput(input);
		return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	//If you've made it this far, you should be good
	var damageRolls = [];
	for (var i in rollsString) {
		damageRolls[i] = parseInt(rollsString[i]);
	}
	return damageRolls;
}

function getKOChance(HPStat, dmgRolls) {
	//turn all the sets of damage rolls into a big array list
	var combinedRolls = [];
	for (var i = 0; i < dmgRolls[0].length; i++) {
		combinedRolls.push(dmgRolls[0][i]);
	}
	var result = getKOChance2(HPStat, combinedRolls, 1, dmgRolls);
	return result;
}

function badInput(input) {
	$("#percentOut").val("Bad input: " + input);
	$("#rawFractOut").val("Bad input: " + input);
	$("#simpFractOut").val("Bad input: " + input);
}

function getKOChance2(HPStat, combinedRolls, beginIndex, dmgRolls) {
	var combinedRollsSize = 0;
	for (var i in combinedRolls) {
		if (combinedRolls[i] !== 0) {
			combinedRollsSize += 1;
		}
	}
	if (beginIndex >= dmgRolls.length) {
		var count = 0;

		for (var i = 0; i < combinedRollsSize; i++) {
			if (combinedRolls[i] >= HPStat) count++;
		}

		$("#percentOut").val(100.0 * count / combinedRollsSize + "% chance to KO");
		//$("#rawFractOut").val(count + "/" + combinedRollsSize);
		$("#simpFractOut").val(reduceFraction(count, combinedRollsSize));
		return count;
	}

	var newRolls = [];

	for (var i = 0; i < combinedRollsSize; i++) {
		for (var j = 0; j < dmgRolls[beginIndex].length; j++) {
			newRolls.push(combinedRolls[i] + dmgRolls[beginIndex][j]);
		}
	}

	return getKOChance2(HPStat, newRolls, beginIndex + 1, dmgRolls);
}

function reduceFraction(top, bottom) {
	var gcd = getGCD(top, bottom);
	return top / gcd + "/" + bottom / gcd;
}

function getGCD(top, bottom) {
	if (bottom === 0) {
		return top;
	}
	return getGCD(bottom, top % bottom);
}

// From https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript/966938#966938
function createArray(length) {
	var arr = new Array(length || 0),
		i = length;

	if (arguments.length > 1) {
		var args = Array.prototype.slice.call(arguments, 1);
		while (i--) arr[length - 1 - i] = createArray.apply(this, args);
	}

	return arr;
}
