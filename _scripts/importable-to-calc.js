var SETDEX_CUSTOM = {};

var showdownFormes = [["Kyurem-White", "Kyurem-W"],
	["Kyurem-Black", "Kyurem-B"],
	["Rotom-Wash", "Rotom-W"],
	["Rotom-Heat", "Rotom-H"],
	["Rotom-Frost", "Rotom-F"],
	["Rotom-Mow", "Rotom-C"],
	["Rotom-Fan", "Rotom-S"],
	["Giratina-Origin", "Giratina-O"],
	["Landorus-Therian", "Landorus-T"],
	["Thundurus-Therian", "Thundurus-T"],
	["Tornadus-Therian", "Tornadus-T"],
	["Floette-Eternal", "Floette-E"],
	["Pumpkaboo", "Pumpkaboo-Average"],
	["Gourgeist", "Gourgeist-Average"],
	["Wormadam-Sandy", "Wormadam-G"],
	["Wormadam-Trash", "Wormadam-S"],
	["Groudon-Primal", "Groudon"],
	["Kyogre-Primal", "Kyogre"],
	["Necrozma-Dusk-Mane", "Necrozma-Dusk Mane"],
	["Necrozma-Dawn-Wings", "Necrozma-Dawn Wings"]];

function saveCustom() {
	//first, to parse it all from the PS format
	var string = document.getElementById("customMon").value;
	if (string.length === 0) {
		document.getElementById("customMonOut").innerHTML = "Input Error - No input.";
		console.log("Error! No input.");
		return;
	}
	var importArray = string.split("\n");
	var splitArr = ["0"];
	var monArr = [];
	var finalArr = [];
	//console.log(importArray);

	for (var i = 0; i < importArray.length; i++) {
		if (importArray[i] === "") {
			splitArr.push(i);
		}
		if (i === importArray.length - 1) {
			splitArr.push(i);
		}
	}

	for (var j = 0; j <= splitArr.length; j++) {
		var thisMon = [];
		for (var k = splitArr[j - 1]; k <= splitArr[j]; k++) {
			if (importArray[k] != "") {
				thisMon.push(importArray[k]);
			}
		}
		monArr.push(thisMon);
	}

	for (var l = 0; l < monArr.length; l++) {
		if (monArr[l].length > 0) {
			finalArr.push(monArr[l]);
		}
	}

	console.log(finalArr);

	for (var x = 0; x < finalArr.length; x++) {
		var spreadName = "";
		if (spreadName === "") {
			spreadName = "SET NAME";
		}
		var lines = finalArr[x];
		var species = "";
		var item = "";
		var ability = "";
		var level = "50";
		var EVs = [0, 0, 0, 0, 0, 0];
		var IVs = [31, 31, 31, 31, 31, 31];
		var nature = "Serious";
		var moves = [];
		var LG = $("#LG").prop("checked");
		var lgMega = false;

		/*    Pokemon Showdown Export Format
		0    Nickname (Species) @ Item
		1    Ability: Name
		2    Level: #
		3    EVs: # Stat / # Stat / # Stat
		4    Serious Nature
		5    IVs: # Stat
		6    - Move Name
		7    - Move Name
		8    - Move Name
		9    - Move Name
		    */

		//geting rid of gender identities (lel)
		if (lines[0].indexOf("(M)") != -1) {
			lines[0] = lines[0].substring(0, lines[0].indexOf("(M)") - 1) +
		        lines[0].substring(lines[0].indexOf("(M)") + 3, lines[0].length);
		} else if (lines[0].indexOf("(F)") != -1) {
			lines[0] = lines[0].substring(0, lines[0].indexOf("(F)")) +
		        lines[0].substring(lines[0].indexOf("(F)") + 3, lines[0].length);
		}
		if (lines[0].indexOf("(") != -1) {
			firstParenth = lines[0].lastIndexOf("(");
			lastParenth = lines[0].lastIndexOf(")");
			species = lines[0].substring(firstParenth + 1, lastParenth).trim();
		} else
			species = lines[0].split("@")[0].trim(); //species is always first
		for (var i = 0; i < showdownFormes.length; ++i) {
			if (species == showdownFormes[i][0])
				species = showdownFormes[i][1];
		}
		if (species.indexOf("-Mega") !== -1) {
			species = species.slice(0, species.indexOf("-Mega"));
		}

		if (species.length < 2) {
			document.getElementById("Output").innerHTML = "Input Error - Invalid input. \nPlease ensure the set is pasted above in the PS! importable format.";
			console.log("Error! Invalid input.");
			return;
		}

		if (lines[0].indexOf("@") != -1)
			item = lines[0].substring(lines[0].indexOf("@") + 1).trim(); //item is always after @
		if (LG && item.indexOf("ite") != -1 && item != "Eviolite" && item != "White Herb") {
			lgMega = true;
		}
		if (lines.length > 1) {
			for (var i = 1; i < lines.length; ++i) {
				if (lines[i].indexOf("Ability") != -1) {
					ability = lines[i].substring(lines[i].indexOf(" ") + 1).trim();
				}
				if (lines[i].indexOf("Level") != -1) {
					level = lines[i].split(" ")[1].trim(); //level is sometimes third but uh not always
				}
				if (lines[i].indexOf("EVs") != -1) { //If EVs are in this line
					evList = lines[i].split(":")[1].split("/"); //splitting it into a list of " # Stat "
					for (var j = 0; j < evList.length; ++j) {
						evList[j] = evList[j].trim();
						evListElements = evList[j].split(" ");
						if (evListElements[1] == "HP")
							EVs[0] = parseInt(evListElements[0]);
						else if (evListElements[1] == "Atk")
							EVs[1] = parseInt(evListElements[0]);
						else if (evListElements[1] == "Def")
							EVs[2] = parseInt(evListElements[0]);
						else if (evListElements[1] == "SpA")
							EVs[3] = parseInt(evListElements[0]);
						else if (evListElements[1] == "SpD")
							EVs[4] = parseInt(evListElements[0]);
						else if (evListElements[1] == "Spe")
							EVs[5] = parseInt(evListElements[0]);
					}

				}
				if (lines[i].indexOf("IVs") != -1) { //if EVs are in this line
					ivList = lines[i].split(":")[1].split("/"); //splitting it into a list of " # Stat "
					for (var j = 0; j < ivList.length; ++j) {
						ivList[j] = ivList[j].trim();
						ivListElements = ivList[j].split(" ");
						if (ivListElements[1] == "HP")
							IVs[0] = parseInt(ivListElements[0]);
						else if (ivListElements[1] == "Atk")
							IVs[1] = parseInt(ivListElements[0]);
						else if (ivListElements[1] == "Def")
							IVs[2] = parseInt(ivListElements[0]);
						else if (ivListElements[1] == "SpA")
							IVs[3] = parseInt(ivListElements[0]);
						else if (ivListElements[1] == "SpD")
							IVs[4] = parseInt(ivListElements[0]);
						else if (ivListElements[1] == "Spe")
							IVs[5] = parseInt(ivListElements[0]);
					}

				}
				if (lines[i].indexOf("Nature") != -1) { //if nature is in this line
					nature = lines[i].split(" ")[0].trim();
				}
				if (lines[i].indexOf("- ") != -1) { //if there is a move in this line
					var nextMove = lines[i].substring(lines[i].indexOf(" ") + 1).trim();
					nextMove = nextMove.replace("[", "");
					nextMove = nextMove.replace("]", "");
					moves.push(nextMove);
				}

			}
		}

		//now, to save it
		/* Sample Calculator Format:
		  "Yanmega": {
		    "Common Showdown": {
		      "level": 50,
		      "evs": {
		        "hp": 0,
		        "at": 0,
		        "df": 0,
		        "sa": 252,
		        "sd": 4,
		        "sp": 252
		      },
		      "nature": "Modest",
		      "ability": "",
		      "item": "",
		      "moves": [
		        "Air Slash",
		        "Bug Buzz",
		        "Giga Drain",
		        "Hidden Power Ice"
		      ]
		    }
		  }
		  */
		var rejectSet = false;
		var dispErrMsg = false;
		if (ability === "Parental Bond" && moves.indexOf("Power-Up Punch") > -1 && moves.indexOf("Power-Up Punch") < 3) {
			rejectSet = true;
			dispErrMsg = true;
		}
		if (species.indexOf("Kangaskhan") != -1 && moves.indexOf("Power-Up Punch") > -1 && moves.indexOf("Power-Up Punch") < 3) {
			rejectSet = true;
			dispErrMsg = true;
		}
		if (dispErrMsg === true) alert("Please ensure that " + species + "'s Power-up Punch is in the 4th moveslot, otherwise you may experience some errors in calcs!");

		customFormat = {
			"level": level,
			"evs": {
				"hp": EVs[0],
				"at": EVs[1],
				"df": EVs[2],
				"sa": EVs[3],
				"sd": EVs[4],
				"sp": EVs[5],
			},
			"ivs": {
				"hp": IVs[0],
				"at": IVs[1],
				"df": IVs[2],
				"sa": IVs[3],
				"sd": IVs[4],
				"sp": IVs[5],
			},
			"nature": nature,
			"ability": ability,
			"item": item,
			"moves": moves,
		};

		LGcustomFormat = {
			"level": level,
			"avs": {
				"hp": EVs[0],
				"at": EVs[1],
				"df": EVs[2],
				"sa": EVs[3],
				"sd": EVs[4],
				"sp": EVs[5],
			},
			"ivs": {
				"hp": IVs[0],
				"at": IVs[1],
				"df": IVs[2],
				"sa": IVs[3],
				"sd": IVs[4],
				"sp": IVs[5],
			},
			"nature": nature,
			"moves": moves,
		};

		LGMegaCustomFormat = {
			"level": level,
			"avs": {
				"hp": EVs[0],
				"at": EVs[1],
				"df": EVs[2],
				"sa": EVs[3],
				"sd": EVs[4],
				"sp": EVs[5],
			},
			"ivs": {
				"hp": IVs[0],
				"at": IVs[1],
				"df": IVs[2],
				"sa": IVs[3],
				"sd": IVs[4],
				"sp": IVs[5],
			},
			"nature": nature,
			"item": item,
			"moves": moves,
		};

		if (rejectSet === true) {
			alert("Set not saved: " + species);
		} else {
			if (SETDEX_CUSTOM[species] == null)
				SETDEX_CUSTOM[species] = {};
			if (!LG) {
				SETDEX_CUSTOM[species][spreadName] = customFormat;
			} else {
				if (!lgMega) {
					SETDEX_CUSTOM[species][spreadName] = LGcustomFormat;
				} else {
					SETDEX_CUSTOM[species][spreadName] = LGMegaCustomFormat;
				}
			}

			$("#customMonOut").val(JSON.stringify(SETDEX_CUSTOM, null, 2));
			if (rejectSet)
				alert("Set not saved: " + species);
			else
				alert("Set saved: " + species);
		}
	}
}