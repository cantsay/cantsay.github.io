var MOVES_RBY = {
	"(No Move)": {
		bp: 0,
		type: "Normal",
		category: "Physical",
		acc: 100
	},
	"Acid": {
		bp: 40,
		type: "Poison",
		acc: 100
	},
	"Agility": {
		bp: 0,
		type: "Psychic"
	},
	"Amnesia": {
		bp: 0,
		type: "Psychic"
	},
	"Aurora Beam": {
		bp: 65,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Barrier": {
		bp: 0,
		type: "Psychic"
	},
	"Bind": {
		bp: 15,
		type: "Normal",
		acc: 85
	},
	"Blizzard": {
		bp: 120,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 70
	},
	"Body Slam": {
		bp: 85,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Bone Club": {
		bp: 65,
		type: "Ground",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 85
	},
	"Bubble Beam": {
		bp: 65,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Clamp": {
		bp: 35,
		type: "Water",
		acc: 85
	},
	"Crabhammer": {
		bp: 90,
		type: "Water",
		category: "Physical",
		makesContact: true,
		alwaysCrit: true,
		acc: 90
	},
	"Confuse Ray": {
		bp: 0,
		type: "Ghost"
	},
	"Defense Curl": {
		bp: 0,
		type: "Normal"
	},
	"Dig": {
		bp: 100,
		type: "Ground",
		makesContact: true,
		acc: 100
	},
	"Disable": {
		bp: 0,
		type: "Normal"
	},
	"Double Kick": {
		bp: 30,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isTwoHit: true,
		acc: 100
	},
	"Double-Edge": {
		bp: 100,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasRecoil: 25,
		acc: 100
	},
	"Double Team": {
		bp: 0,
		type: "Normal"
	},
	"Dream Eater": {
		bp: 100,
		type: "Psychic",
		category: "Special",
		givesHealth: true,
		percentHealed: 0.5,
		acc: 0x1000
	},
	"Drill Peck": {
		bp: 80,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Earthquake": {
		bp: 100,
		type: "Ground",
		category: "Physical",
		isSpread: true,
		acc: 100
	},
	"Explosion": {
		bp: 170,
		type: "Normal",
		category: "Physical",
		isSpread: true,
		acc: 100
	},
	"Fire Blast": {
		bp: 120,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 85
	},
	"Fire Punch": {
		bp: 75,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
		acc: 100
	},
	"Fire Spin": {
		bp: 15,
		type: "Fire",
		acc: 85
	},
	"Flamethrower": {
		bp: 95,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Fly": {
		bp: 70,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 95
	},
	"Fury Swipes": {
		bp: 18,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		isMultiHit: true,
		acc: 80
	},
	"Glare": {
		bp: 0,
		type: "Normal"
	},
	"Gust": {
		bp: 40,
		type: "Normal",
		category: "Special",
		acc: 100
	},
	"Haze": {
		bp: 0,
		type: "Ice"
	},
	"High Jump Kick": {
		bp: 85,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasRecoil: "crash",
		acc: 90
	},
	"Hydro Pump": {
		bp: 120,
		type: "Water",
		category: "Special",
		acc: 80
	},
	"Hyper Beam": {
		bp: 150,
		type: "Normal",
		category: "Special",
		acc: 90
	},
	"Hyper Fang": {
		bp: 80,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 90
	},
	"Ice Beam": {
		bp: 95,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Ice Punch": {
		bp: 75,
		type: "Ice",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
		acc: 100
	},
	"Jump Kick": {
		bp: 70,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasRecoil: "crash",
		acc: 95
	},
	"Leech Life": {
		bp: 20,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Leech Seed": {
		bp: 0,
		type: "Grass"
	},
	"Light Screen": {
		bp: 0,
		type: "Psychic"
	},
	"Lovely Kiss": {
		bp: 0,
		type: "Normal"
	},
	"Mega Drain": {
		bp: 40,
		type: "Grass",
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Mirror Move": {
		bp: 0,
		type: "Flying"
	},
	"Night Shade": {
		bp: 100,
		type: "Ghost",
		category: "Special",
		acc: 100
	},
	"Pin Missile": {
		bp: 14,
		type: "Bug",
		category: "Physical",
		isMultiHit: true,
		acc: 95
	},
	"Psychic": {
		bp: 90,
		type: "Psychic",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Quick Attack": {
		bp: 40,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		acc: 100
	},
	"Razor Leaf": {
		bp: 55,
		type: "Grass",
		category: "Physical",
		alwaysCrit: true,
		acc: 95
	},
	"Recover": {
		bp: 0,
		type: "Normal"
	},
	"Reflect": {
		bp: 0,
		type: "Psychic"
	},
	"Rest": {
		bp: 0,
		type: "Psychic"
	},
	"Roar": {
		bp: 0,
		type: "Normal"
	},
	"Rock Slide": {
		bp: 75,
		type: "Rock",
		category: "Physical",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 90
	},
	"Rock Throw": {
		bp: 50,
		type: "Rock",
		category: "Physical",
		acc: 90
	},
	"Seismic Toss": {
		bp: 100,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Self-Destruct": {
		bp: 130,
		type: "Normal",
		category: "Physical",
		isSpread: true,
		acc: 100
	},
	"Sing": {
		bp: 0,
		type: "Normal"
	},
	"Sky Attack": {
		bp: 140,
		type: "Flying",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Skull Bash": {
		bp: 100,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Slash": {
		bp: 70,
		type: "Normal",
		alwaysCrit: true,
		makesContact: true,
		acc: 100
	},
	"Sludge": {
		bp: 65,
		type: "Poison",
		acc: 100
	},
	"Soft-Boiled": {
		bp: 0,
		type: "Normal"
	},
	"Spore": {
		bp: 0,
		type: "Grass"
	},
	"Stomp": {
		bp: 65,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Struggle": {
		bp: 50,
		type: "Normal",
		hasRecoil: 50,
		acc: 101
	},
	"Submission": {
		bp: 80,
		type: "Fighting",
		makesContact: true,
		hasRecoil: 25,
		acc: 80
	},
	"Substitute": {
		bp: 0,
		type: "Normal"
	},
	"Super Fang": {
		bp: 0,
		type: "Normal",
		makesContact: true,
		acc: 90
	},
	"Surf": {
		bp: 95,
		type: "Water",
		category: "Special",
		isSpread: true,
		acc: 100
	},
	"Swift": {
		bp: 60,
		type: "Normal",
		category: "Special",
		isSpread: true,
		acc: 101
	},
	"Swords Dance": {
		bp: 0,
		type: "Normal"
	},
	"Tackle": {
		bp: 35,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Take Down": {
		bp: 90,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasRecoil: 25,
		acc: 90
	},
	"Thrash": {
		bp: 90,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Thunder": {
		bp: 120,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 70
	},
	"Thunderbolt": {
		bp: 95,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Thunder Punch": {
		bp: 75,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
		acc: 100
	},
	"Thunder Wave": {
		bp: 0,
		type: "Electric"
	},
	"Toxic": {
		bp: 0,
		type: "Poison"
	},
	"Tri Attack": {
		bp: 80,
		type: "Normal",
		category: "Special",
		acc: 100
	},
	"Twineedle": {
		bp: 25,
		type: "Bug",
		isTwoHit: true,
		acc: 100
	},
	"Waterfall": {
		bp: 80,
		type: "Water",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Water Gun": {
		bp: 40,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Wing Attack": {
		bp: 35,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Wrap": {
		bp: 15,
		type: "Normal",
		acc: 90
	},
	"Whirlwind": {
		bp: 0,
		type: "Normal"
	}
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
	"Aeroblast": {
		bp: 100,
		type: "Flying",
		category: "Special",
		acc: 95
	},
	"Ancient Power": {
		bp: 60,
		type: "Rock",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Baton Pass": {
		bp: 0,
		type: "Normal"
	},
	"Belly Drum": {
		bp: 0,
		type: "Normal"
	},
	"Bite": {
		bp: 60,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 100
	},
	"Bone Rush": {
		bp: 25,
		type: "Ground",
		category: "Physical",
		isMultiHit: true,
		acc: 90
	},
	"Crabhammer": {alwaysCrit: false},
	"Cross Chop": {
		bp: 100,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 80
	},
	"Crunch": {
		bp: 80,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 100
	},
	"Curse": {
		bp: 0,
		type: "Ghost"
	},
	"Destiny Bond": {
		bp: 0,
		type: "Ghost"
	},
	"Dig": {bp: 60},
	"Double-Edge": {bp: 120},
	"Dynamic Punch": {
		bp: 100,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
		acc: 50
	},
	"Encore": {
		bp: 0,
		type: "Normal"
	},
	"Endure": {
		bp: 0,
		type: "Normal"
	},
	"Explosion": {bp: 250},
	"Extreme Speed": {
		bp: 80,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		acc: 100
	},
	"Feint Attack": {
		bp: 60,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 101
	},
	"Flail": {
		bp: 1,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Flame Wheel": {
		bp: 60,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Frustration": {
		bp: 102,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Future Sight": {
		bp: 80,
		type: "Psychic",
		category: "Special",
		acc: 100
	},
	"Giga Drain": {
		bp: 60,
		type: "Grass",
		category: "Special",
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Gust": {type: "Flying"},
	"Headbutt": {
		bp: 70,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Heal Bell": {
		bp: 0,
		type: "Normal"
	},
	"Hidden Power Bug": {
		bp: 70,
		type: "Bug",
		category: "Special",
		acc: 100
	},
	"Hidden Power Dark": {
		bp: 70,
		type: "Dark",
		category: "Special",
		acc: 100
	},
	"Hidden Power Dragon": {
		bp: 70,
		type: "Dragon",
		category: "Special",
		acc: 100
	},
	"Hidden Power Electric": {
		bp: 70,
		type: "Electric",
		category: "Special",
		acc: 100
	},
	"Hidden Power Fighting": {
		bp: 70,
		type: "Fighting",
		category: "Special",
		acc: 100
	},
	"Hidden Power Fire": {
		bp: 70,
		type: "Fire",
		category: "Special",
		acc: 100
	},
	"Hidden Power Flying": {
		bp: 70,
		type: "Flying",
		category: "Special",
		acc: 100
	},
	"Hidden Power Ghost": {
		bp: 70,
		type: "Ghost",
		category: "Special",
		acc: 100
	},
	"Hidden Power Grass": {
		bp: 70,
		type: "Grass",
		category: "Special",
		acc: 100
	},
	"Hidden Power Ground": {
		bp: 70,
		type: "Ground",
		category: "Special",
		acc: 100
	},
	"Hidden Power Ice": {
		bp: 70,
		type: "Ice",
		category: "Special",
		acc: 100
	},
	"Hidden Power Poison": {
		bp: 70,
		type: "Poison",
		category: "Special",
		acc: 100
	},
	"Hidden Power Psychic": {
		bp: 70,
		type: "Psychic",
		category: "Special",
		acc: 100
	},
	"Hidden Power Rock": {
		bp: 70,
		type: "Rock",
		category: "Special",
		acc: 100
	},
	"Hidden Power Steel": {
		bp: 70,
		type: "Steel",
		category: "Special",
		acc: 100
	},
	"Hidden Power Water": {
		bp: 70,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Icy Wind": {
		bp: 55,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 95
	},
	"Iron Tail": {
		bp: 100,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 75
	},
	"Mach Punch": {
		bp: 40,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		hasPriority: true,
		acc: 100
	},
	"Megahorn": {
		bp: 120,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		acc: 85
	},
	"Metal Claw": {
		bp: 50,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 95
	},
	"Milk Drink": {
		bp: 0,
		type: "Normal"
	},
	"Moonlight": {
		bp: 0,
		type: "Normal"
	},
	"Protect": {
		bp: 0,
		type: "Normal"
	},
	"Pursuit": {
		bp: 40,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Rapid Spin": {
		bp: 20,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Razor Leaf": {alwaysCrit: false},
	"Return": {
		bp: 102,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Reversal": {
		bp: 1,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Rock Smash": {
		bp: 20,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Sacred Fire": {
		bp: 100,
		type: "Fire",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 95
	},
	"Self-Destruct": {bp: 200},
	"Shadow Ball": {
		bp: 80,
		type: "Ghost",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 100
	},
	"Slash": {alwaysCrit: false},
	"Sleep Talk": {
		bp: 0,
		type: "Normal"
	},
	"Sludge Bomb": {
		bp: 90,
		type: "Poison",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 100
	},
	"Snore": {
		bp: 40,
		type: "Normal",
		category: "Special",
		hasSecondaryEffect: true,
		isSound: true,
		acc: 100
	},
	"Solar Beam": {
		bp: 120,
		type: "Grass",
		category: "Special",
		acc: 100
	},
	"Spark": {
		bp: 65,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Spikes": {
		bp: 0,
		type: "Ground"
	},
	"Steel Wing": {
		bp: 70,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 90
	},
	"Struggle": {type: "None", hasRecoil: 25},
	"Sunny Day": {
		bp: 0,
		type: "Fire"
	},
	"Swagger": {
		bp: 0,
		type: "Normal"
	},
	"Synthesis": {
		bp: 0,
		type: "Grass"
	},
	"Thief": {
		bp: 40,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Tri Attack": {hasSecondaryEffect: true},
	"Whirlpool": {
		bp: 15,
		type: "Water",
		category: "Special",
		acc: 85
	},
	"Wing Attack": {bp: 60},
	"Zap Cannon": {
		bp: 100,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 50
	}
});

delete MOVES_GSC["Acid"];
delete MOVES_GSC["Mega Drain"];

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
	"Mega Drain": {
		bp: 40,
		type: "Grass",
		category: "Special",
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Aerial Ace": {
		bp: 60,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 101
	},
	"Air Cutter": {
		bp: 55,
		type: "Flying",
		category: "Special",
		isSpread: true,
		acc: 95
	},
	"Astonish": {
		bp: 30,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Aromatherapy": {
		bp: 0,
		type: "Grass"
	},
	"Blast Burn": {
		bp: 150,
		type: "Fire",
		category: "Special",
		acc: 90
	},
	"Blaze Kick": {
		bp: 85,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 90
	},
	"Bonemerang": {
		bp: 50,
		type: "Ground",
		category: "Physical",
		isTwoHit: true,
		acc: 90
	},
	"Bounce": {
		bp: 85,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 85
	},
	"Brick Break": {
		bp: 75,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Bulk Up": {
		bp: 0,
		type: "Fighting"
	},
	"Bullet Seed": {
		bp: 10,
		type: "Grass",
		category: "Physical",
		isMultiHit: true,
		isBullet: true,
		acc: 100
	},
	"Calm Mind": {
		bp: 0,
		type: "Psychic"
	},
	"Covet": {
		bp: 40,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Crush Claw": {
		bp: 75,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 95
	},
	"Dive": {
		bp: 60,
		type: "Water",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Doom Desire": {
		bp: 120,
		type: "Steel",
		category: "Special",
		acc: 100
	},
	"Dragon Claw": {
		bp: 80,
		type: "Dragon",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Double-Edge": {hasRecoil: 33},
	"Endeavor": {
		bp: 1,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Eruption": {
		bp: 150,
		type: "Fire",
		category: "Special",
		isSpread: true,
		acc: 100
	},
	"Extrasensory": {
		bp: 80,
		type: "Psychic",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Facade": {
		bp: 70,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Fake Out": {
		bp: 40,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		hasPriority: true,
		acc: 100
	},
	"Focus Punch": {
		bp: 150,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		acc: 100
	},
	"Frenzy Plant": {
		bp: 150,
		type: "Grass",
		category: "Special",
		acc: 100
	},
	"Heat Wave": {
		bp: 100,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 90
	},
	"Helping Hand": {
		bp: 0,
		type: "Normal"
	},
	"Hydro Cannon": {
		bp: 150,
		type: "Water",
		category: "Special",
		acc: 90
	},
	"Hyper Voice": {
		bp: 90,
		type: "Normal",
		category: "Special",
		isSound: true,
		isSpread: true,
		acc: 100
	},
	"Icicle Spear": {
		bp: 10,
		type: "Ice",
		category: "Physical",
		isMultiHit: true,
		acc: 100
	},
	"Ingrain": {
		bp: 0,
		type: "Grass"
	},
	"Iron Defense": {
		bp: 0,
		type: "Steel"
	},
	"Knock Off": {
		bp: 20,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Leaf Blade": {
		bp: 70,
		type: "Grass",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Luster Purge": {
		bp: 70,
		type: "Psychic",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Low Kick": {
		bp: 1,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Magical Leaf": {
		bp: 60,
		type: "Grass",
		category: "Special",
		acc: 101
	},
	"Magic Coat": {
		bp: 0,
		type: "Psychic",
		acc: 100
	},
	"Meteor Mash": {
		bp: 100,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
		acc: 90
	},
	"Mist Ball": {
		bp: 70,
		type: "Psychic",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 100
	},
	"Mud Shot": {
		bp: 55,
		type: "Ground",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 95
	},
	"Muddy Water": {
		bp: 95,
		type: "Water",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 85
	},
	"Needle Arm": {
		bp: 60,
		type: "Grass",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Overheat": {
		bp: 140,
		type: "Fire",
		category: "Special",
		dropsStats: 2,
		acc: 90
	},
	"Poison Fang": {
		bp: 50,
		type: "Poison",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 100
	},
	"Poison Tail": {
		bp: 50,
		type: "Poison",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Psycho Boost": {
		bp: 140,
		type: "Psychic",
		category: "Special",
		dropsStats: 2,
		acc: 90
	},
	"Recycle": {
		bp: 0,
		type: "Normal"
	},
	"Refresh": {
		bp: 0,
		type: "Normal"
	},
	"Revenge": {
		bp: 120,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Rock Blast": {
		bp: 25,
		type: "Rock",
		category: "Physical",
		isMultiHit: true,
		acc: 90
	},
	"Rock Tomb": {
		bp: 50,
		type: "Rock",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Sand Tomb": {
		bp: 15,
		type: "Ground",
		category: "Physical",
		acc: 85
	},
	"Secret Power": {
		bp: 70,
		type: "Normal",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Shadow Punch": {
		bp: 60,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		acc: 101
	},
	"Sheer Cold": {
		bp: 1,
		type: "Ice",
		category: "Special",
		acc: 30
	},
	"Shock Wave": {
		bp: 60,
		type: "Electric",
		category: "Special",
		acc: 101
	},
	"Signal Beam": {
		bp: 75,
		type: "Bug",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Silver Wind": {
		bp: 60,
		type: "Bug",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Sky Uppercut": {
		bp: 85,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		acc: 90
	},
	"Slack Off": {
		bp: 0,
		type: "Normal"
	},
	"Stockpile": {
		bp: 0,
		type: "Normal"
	},
	"Superpower": {
		bp: 120,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		dropsStats: 1,
		acc: 100
	},
	"Tail Glow": {
		bp: 0,
		type: "Bug"
	},
	"Taunt": {
		bp: 0,
		type: "Dark"
	},
	"Trick": {
		bp: 0,
		type: "Psychic"
	},
	"Uproar": {
		bp: 50,
		type: "Normal",
		category: "Special",
		acc: 100
	},
	"Volt Tackle": {
		bp: 120,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		hasRecoil: 33,
		acc: 100
	},
	"Water Pulse": {
		bp: 60,
		type: "Water",
		category: "Special",
		hasSecondaryEffect: true,
		isPulse: true,
		acc: 100
	},
	"Water Spout": {
		bp: 150,
		type: "Water",
		category: "Special",
		isSpread: true,
		acc: 100
	},
	"Weather Ball": {
		bp: 50,
		type: "Normal",
		category: "Special",
		isBullet: true,
		acc: 100
	},
	"Will-O-Wisp": {
		bp: 0,
		type: "Fire"
	},
	"Wish": {
		bp: 0,
		type: "Normal"
	},
	"Yawn": {
		bp: 0,
		type: "Normal"
	}
});

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
	"Air Slash": {
		bp: 75,
		type: "Flying",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 95
	},
	"Aqua Jet": {
		bp: 40,
		type: "Water",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		acc: 100
	},
	"Aqua Tail": {
		bp: 90,
		type: "Water",
		category: "Physical",
		makesContact: true,
		acc: 90
	},
	"Aqua Ring": {
		bp: 0,
		type: "Water"
	},
	"Assurance": {
		bp: 50,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Attack Order": {
		bp: 90,
		type: "Bug",
		category: "Physical",
		acc: 100
	},
	"Aura Sphere": {
		bp: 90,
		type: "Fighting",
		category: "Special",
		isBullet: true,
		isPulse: true,
		acc: 101
	},
	"Avalanche": {
		bp: 120,
		type: "Ice",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Brave Bird": {
		bp: 120,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		hasRecoil: 33,
		acc: 100
	},
	"Brine": {
		bp: 65,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Bug Bite": {
		bp: 60,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Bug Buzz": {
		bp: 90,
		type: "Bug",
		category: "Special",
		hasSecondaryEffect: true,
		isSound: true,
		acc: 100
	},
	"Bullet Punch": {
		bp: 40,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		hasPriority: true,
		acc: 100
	},
	"Charge Beam": {
		bp: 50,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Chatter": {
		bp: 60,
		type: "Flying",
		category: "Special",
		hasSecondaryEffect: true,
		isSound: true,
		acc: 100
	},
	"Close Combat": {
		bp: 120,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Covet": {bp: 60},
	"Cross Poison": {
		bp: 70,
		type: "Poison",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Dark Pulse": {
		bp: 80,
		type: "Dark",
		category: "Special",
		hasSecondaryEffect: true,
		isPulse: true,
		acc: 100
	},
	"Dark Void": {
		bp: 0,
		type: "Dark"
	},
	"Defend Order": {
		bp: 0,
		type: "Bug"
	},
	"Defog": {
		bp: 0,
		type: "Flying"
	},
	"Dig": {bp: 80},
	"Discharge": {
		bp: 80,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 100
	},
	"Dive": {bp: 80},
	"Double Hit": {
		bp: 35,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		isTwoHit: true
	},
	"Draco Meteor": {
		bp: 140,
		type: "Dragon",
		category: "Special",
		dropsStats: 2,
		acc: 100
	},
	"Dragon Pulse": {
		bp: 90,
		type: "Dragon",
		category: "Special",
		isPulse: true,
		acc: 100
	},
	"Dragon Rush": {
		bp: 100,
		type: "Dragon",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 75
	},
	"Drain Punch": {
		bp: 60,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Earth Power": {
		bp: 90,
		type: "Ground",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Energy Ball": {
		bp: 80,
		type: "Grass",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 100
	},
	"Feint": {
		bp: 50,
		type: "Normal",
		category: "Physical",
		bypassesProtect: true,
		acc: 100
	},
	"Fire Fang": {
		bp: 65,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 95
	},
	"Flare Blitz": {
		bp: 120,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		hasRecoil: 33,
		acc: 100
	},
	"Flash Cannon": {
		bp: 80,
		type: "Steel",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Fling": {
		bp: 1,
		type: "Dark",
		category: "Physical",
		acc: 100
	},
	"Fly": {bp: 90},
	"Focus Blast": {
		bp: 120,
		type: "Fighting",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 70
	},
	"Force Palm": {
		bp: 60,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Giga Impact": {
		bp: 150,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 90
	},
	"Grass Knot": {
		bp: 1,
		type: "Grass",
		category: "Special",
		makesContact: true,
		acc: 100
	},
	"Gunk Shot": {
		bp: 120,
		type: "Poison",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 80
	},
	"Gyro Ball": {
		bp: 1,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		isBullet: true,
		acc: 100
	},
	"Hammer Arm": {
		bp: 100,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		acc: 90
	},
	"Head Smash": {
		bp: 150,
		type: "Rock",
		category: "Physical",
		makesContact: true,
		hasRecoil: 50,
		acc: 80
	},
	"Heal Order": {
		bp: 0,
		type: "Bug"
	},
	"Healing Wish": {
		bp: 0,
		type: "Psychic"
	},
	"High Jump Kick": {bp: 100},
	"Ice Fang": {
		bp: 65,
		type: "Ice",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 95
	},
	"Ice Shard": {
		bp: 40,
		type: "Ice",
		category: "Physical",
		hasPriority: true,
		acc: 100
	},
	"Iron Head": {
		bp: 80,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Judgment": {
		bp: 100,
		type: "Normal",
		category: "Special",
		acc: 100
	},
	"Jump Kick": {bp: 85},
	"Last Resort": {
		bp: 130,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Lava Plume": {
		bp: 80,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 100
	},
	"Leaf Blade": {bp: 90},
	"Leaf Storm": {
		bp: 140,
		type: "Grass",
		category: "Special",
		dropsStats: 2,
		acc: 90
	},
	"Lunar Dance": {
		bp: 0,
		type: "Psychic"
	},
	"Magma Storm": {
		bp: 120,
		type: "Fire",
		category: "Special",
		acc: 75
	},
	"Magnet Bomb": {
		bp: 60,
		type: "Steel",
		category: "Physical",
		isBullet: true,
		acc: 101
	},
	"Magnet Rise": {
		bp: 0,
		type: "Electric"
	},
	"Me First": {
		bp: 0,
		type: "Normal"
	},
	"Mirror Shot": {
		bp: 65,
		type: "Steel",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 85
	},
	"Mud Bomb": {
		bp: 65,
		type: "Ground",
		category: "Special",
		isBullet: true,
		hasSecondaryEffect: true,
		acc: 85
	},
	"Natural Gift": {
		bp: 1,
		type: "Normal",
		category: "Physical",
		acc: 100
	},
	"Nature Power": {
		bp: 80,
		type: "Normal",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Nasty Plot": {
		bp: 0,
		type: "Dark"
	},
	"Night Slash": {
		bp: 70,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Ominous Wind": {
		bp: 60,
		type: "Ghost",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Outrage": {
		bp: 120,
		type: "Dragon",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Paleo Wave": {
		bp: 85,
		type: "Rock",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Payback": {
		bp: 50,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Pluck": {
		bp: 60,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Poison Jab": {
		bp: 80,
		type: "Poison",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Power Gem": {
		bp: 70,
		type: "Rock",
		category: "Special",
		acc: 100
	},
	"Power Whip": {
		bp: 120,
		type: "Grass",
		category: "Physical",
		makesContact: true,
		acc: 85
	},
	"Psycho Cut": {
		bp: 70,
		type: "Psychic",
		category: "Physical",
		acc: 100
	},
	"Psycho Shift": {
		bp: 0,
		type: "Psychic"
	},
	"Punishment": {
		bp: 60,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Roar of Time": {
		bp: 150,
		type: "Dragon",
		category: "Special",
		acc: 90
	},
	"Rock Climb": {
		bp: 90,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 85
	},
	"Rock Smash": {bp: 40},
	"Rock Polish": {
		bp: 0,
		type: "Rock"
	},
	"Rock Wrecker": {
		bp: 150,
		type: "Rock",
		category: "Physical",
		isBullet: true,
		acc: 90
	},
	"Roost": {
		bp: 0,
		type: "Flying"
	},
	"Seed Bomb": {
		bp: 80,
		type: "Grass",
		category: "Physical",
		isBullet: true,
		acc: 100
	},
	"Seed Flare": {
		bp: 120,
		type: "Grass",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 85
	},
	"Shadow Claw": {
		bp: 70,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Shadow Force": {
		bp: 120,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		bypassesProtect: true,
		acc: 100
	},
	"Shadow Sneak": {
		bp: 40,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		acc: 100
	},
	"Shadow Strike": {
		bp: 80,
		type: "Ghost",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		acc: 95
	},
	"Spacial Rend": {
		bp: 100,
		type: "Dragon",
		category: "Special",
		acc: 95
	},
	"Stealth Rock": {
		bp: 0,
		type: "Rock"
	},
	"Stone Edge": {
		bp: 100,
		type: "Rock",
		category: "Physical",
		acc: 80
	},
	"Struggle": {hasRecoil: "Struggle"},
	"Sucker Punch": {
		bp: 80,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		acc: 100
	},
	"Switcheroo": {
		bp: 0,
		type: "Dark"
	},
	"Tailwind": {
		bp: 0,
		type: "Flying"
	},
	"Thunder Fang": {
		bp: 65,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
		acc: 95
	},
	"Toxic Spikes": {
		bp: 0,
		type: "Poison"
	},
	"Trick Room": {
		bp: 0,
		type: "Psychic"
	},
	"U-turn": {
		bp: 70,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Vacuum Wave": {
		bp: 40,
		type: "Fighting",
		category: "Special",
		hasPriority: true,
		acc: 100
	},
	"Wake-Up Slap": {
		bp: 60,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Waterfall": {hasSecondaryEffect: true},
	"Wood Hammer": {
		bp: 120,
		type: "Grass",
		category: "Physical",
		makesContact: true,
		hasRecoil: 33,
		acc: 100
	},
	"Wring Out": {
		bp: 1,
		type: "Normal",
		category: "Special",
		makesContact: true,
		acc: 100
	},
	"X-Scissor": {
		bp: 80,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Zap Cannon": {bp: 120},
	"Zen Headbutt": {
		bp: 80,
		type: "Psychic",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 90
	}
});

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
	"Acid Spray": {
		bp: 40,
		type: "Poison",
		category: "Special",
		hasSecondaryEffect: true,
		isBullet: true,
		acc: 100
	},
	"Acrobatics": {
		bp: 55,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Autotomize": {
		bp: 0,
		type: "Steel"
	},
	"Blue Flare": {
		bp: 130,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 85
	},
	"Bolt Strike": {
		bp: 130,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 85
	},
	"Bulldoze": {
		bp: 60,
		type: "Ground",
		category: "Physical",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 90
	},
	"Bullet Seed": {bp: 25},
	"Chip Away": {
		bp: 70,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		ignoresDefenseBoosts: true,
		acc: 100
	},
	"Circle Throw": {
		bp: 60,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 90
	},
	"Clear Smog": {
		bp: 50,
		type: "Poison",
		category: "Special",
		acc: 100
	},
	"Coil": {
		bp: 0,
		type: "Poison"
	},
	"Cotton Guard": {
		bp: 0,
		type: "Grass"
	},
	"Doom Desire": {bp: 140},
	"Dragon Tail": {
		bp: 60,
		type: "Dragon",
		category: "Physical",
		makesContact: true,
		acc: 90
	},
	"Drain Punch": {bp: 75},
	"Drill Run": {
		bp: 80,
		type: "Ground",
		category: "Physical",
		makesContact: true,
		acc: 95
	},
	"Dual Chop": {
		bp: 40,
		type: "Dragon",
		category: "Physical",
		makesContact: true,
		isTwoHit: true,
		acc: 90
	},
	"Electro Ball": {
		bp: 1,
		type: "Electric",
		category: "Special",
		isBullet: true,
		acc: 100
	},
	"Electroweb": {
		bp: 55,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 95
	},
	"Feint": {bp: 30},
	"Fiery Dance": {
		bp: 80,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Final Gambit": {
		bp: 1,
		type: "Fighting",
		category: "Special",
		acc: 100
	},
	"Fire Pledge": {
		bp: 50,
		type: "Fire",
		category: "Special",
		acc: 100
	},
	"Fire Pledge (Grass Pledge Boosted)": {
		bp: 150,
		type: "Fire",
		category: "Special",
		acc: 100
	},
	"Fire Pledge (Water Pledge Boosted)": {
		bp: 150,
		type: "Fire",
		category: "Special",
		acc: 100
	},
	"Flame Burst": {
		bp: 70,
		type: "Fire",
		category: "Special",
		acc: 100
	},
	"Flame Charge": {
		bp: 50,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Foul Play": {
		bp: 95,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Freeze Shock": {
		bp: 140,
		type: "Ice",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Frost Breath": {
		bp: 40,
		type: "Ice",
		category: "Special",
		alwaysCrit: true,
		acc: 90
	},
	"Fusion Bolt": {
		bp: 100,
		type: "Electric",
		category: "Physical",
		acc: 100
	},
	"Fusion Flare": {
		bp: 100,
		type: "Fire",
		category: "Special",
		acc: 100
	},
	"Future Sight": {bp: 100},
	"Gear Grind": {
		bp: 50,
		type: "Steel",
		category: "Physical",
		isTwoHit: true,
		makesContact: true,
		acc: 85
	},
	"Giga Drain": {bp: 75},
	"Glaciate": {
		bp: 65,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 95
	},
	"Grass Pledge": {
		bp: 50,
		type: "Grass",
		category: "Special",
		acc: 100
	},
	"Grass Pledge (Fire Pledge Boosted)": {
		bp: 150,
		type: "Grass",
		category: "Special",
		acc: 100
	},
	"Grass Pledge (Water Pledge Boosted)": {
		bp: 150,
		type: "Grass",
		category: "Special",
		acc: 100
	},
	"Heal Pulse": {
		bp: 0,
		type: "Psychic"
	},
	"Heart Stamp": {
		bp: 60,
		type: "Psychic",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		acc: 100
	},
	"Head Charge": {
		bp: 120,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		hasRecoil: 25,
		acc: 100
	},
	"Heavy Slam": {
		bp: 1,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Hex": {
		bp: 50,
		type: "Ghost",
		category: "Special",
		acc: 100
	},
	"High Jump Kick": {bp: 130},
	"Hone Claws": {
		bp: 0,
		type: "Dark"
	},
	"Horn Leech": {
		bp: 75,
		type: "Grass",
		category: "Physical",
		makesContact: true,
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Hurricane": {
		bp: 120,
		type: "Flying",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 70
	},
	"Ice Burn": {
		bp: 140,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Icicle Crash": {
		bp: 85,
		type: "Ice",
		category: "Physical",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Icicle Spear": {bp: 25},
	"Incinerate": {
		bp: 30,
		type: "Fire",
		category: "Special",
		isSpread: true,
		acc: 100
	},
	"Inferno": {
		bp: 100,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 50
	},
	"Jump Kick": {bp: 100},
	"Last Resort": {bp: 140},
	"Leaf Tornado": {
		bp: 65,
		type: "Grass",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 90
	},
	"Low Sweep": {
		bp: 60,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Night Daze": {
		bp: 85,
		type: "Dark",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 95
	},
	"Petal Dance": {
		bp: 120,
		type: "Grass",
		category: "Special",
		makesContact: true,
		acc: 100
	},
	"Psyshock": {
		bp: 80,
		type: "Psychic",
		category: "Special",
		dealsPhysicalDamage: true,
		acc: 100
	},
	"Psystrike": {
		bp: 100,
		type: "Psychic",
		category: "Special",
		dealsPhysicalDamage: true,
		acc: 100
	},
	"Quick Guard": {
		bp: 0,
		type: "Fighting"
	},
	"Quiver Dance": {
		bp: 0,
		type: "Bug"
	},
	"Rage Powder": {
		bp: 0,
		type: "Bug"
	},
	"Razor Shell": {
		bp: 75,
		type: "Water",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 95
	},
	"Relic Song": {
		bp: 75,
		type: "Normal",
		category: "Special",
		hasSecondaryEffect: true,
		isSound: true,
		isSpread: true,
		acc: 100
	},
	"Retaliate": {
		bp: 70,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Round": {
		bp: 60,
		type: "Normal",
		category: "Special",
		acc: 100
	},
	"Sacred Sword": {
		bp: 90,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		ignoresDefenseBoosts: true,
		acc: 100
	},
	"Sand Tomb": {bp: 35},
	"Scald": {
		bp: 80,
		type: "Water",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Searing Shot": {
		bp: 100,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		isBullet: true,
		acc: 100
	},
	"Secret Sword": {
		bp: 85,
		type: "Fighting",
		category: "Special",
		dealsPhysicalDamage: true,
		acc: 100
	},
	"Shell Smash": {
		bp: 0,
		type: "Normal"
	},
	"Shift Gear": {
		bp: 0,
		type: "Steel"
	},
	"Sky Drop": {
		bp: 60,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Sludge Wave": {
		bp: 95,
		type: "Poison",
		category: "Special",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 100
	},
	"Smack Down": {
		bp: 50,
		type: "Rock",
		category: "Physical",
		acc: 100
	},
	"Snarl": {
		bp: 55,
		type: "Dark",
		category: "Special",
		hasSecondaryEffect: true,
		isSound: true,
		isSpread: true,
		acc: 95
	},
	"Steamroller": {
		bp: 65,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Stored Power": {
		bp: 20,
		type: "Psychic",
		category: "Special",
		acc: 100
	},
	"Storm Throw": {
		bp: 40,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		alwaysCrit: true,
		acc: 100
	},
	"Struggle Bug": {
		bp: 30,
		type: "Bug",
		category: "Special",
		isSpread: true,
		acc: 100
	},
	"Synchronoise": {
		bp: 70,
		type: "Psychic",
		category: "Special",
		acc: 100
	},
	"Tackle": {bp: 50},
	"Tail Slap": {
		bp: 25,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		isMultiHit: true,
		acc: 85
	},
	"Techno Blast": {
		bp: 85,
		type: "Normal",
		category: "Special",
		acc: 100
	},
	"Thrash": {bp: 120},
	"Uproar": {bp: 90},
	"V-create": {
		bp: 180,
		type: "Fire",
		category: "Physical",
		makesContact: true,
		acc: 95
	},
	"Venoshock": {
		bp: 65,
		type: "Poison",
		category: "Special",
		acc: 100
	},
	"Volt Switch": {
		bp: 70,
		type: "Electric",
		category: "Special",
		acc: 100
	},
	"Water Pledge": {
		bp: 50,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Water Pledge (Fire Pledge Boosted)": {
		bp: 150,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Water Pledge (Grass Pledge Boosted)": {
		bp: 150,
		type: "Water",
		category: "Special",
		acc: 100
	},
	"Whirlpool": {bp: 35},
	"Wide Guard": {
		bp: 0,
		type: "Rock"
	},
	"Wild Charge": {
		bp: 90,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		hasRecoil: 25,
		acc: 100
	}
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
	"Air Cutter": {bp: 60},
	"Arm Thrust": {
		bp: 15,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		isMultiHit: true,
		acc: 100
	},
	"Assurance": {bp: 60},
	"Aura Sphere": {bp: 80},
	"Belch": {
		bp: 120,
		type: "Poison",
		category: "Special",
		acc: 90
	},
	"Blizzard": {bp: 110},
	"Boomburst": {
		bp: 140,
		type: "Normal",
		category: "Special",
		isSound: true,
		isSpread: true,
		acc: 100
	},
	"Chatter": {bp: 65},
	"Crabhammer": {bp: 100},
	"Dazzling Gleam": {
		bp: 80,
		type: "Fairy",
		category: "Special",
		isSpread: true,
		acc: 100
	},
	"Diamond Storm": {
		bp: 100,
		type: "Rock",
		category: "Physical",
		hasSecondaryEffect: true,
		isSpread: true,
		acc: 95
	},
	"Disarming Voice": {
		bp: 40,
		type: "Fairy",
		isSound: true,
		acc: 100
	},
	"Draco Meteor": {bp: 130},
	"Dragon Ascent": {
		bp: 120,
		type: "Flying",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Dragon Pulse": {bp: 85},
	"Draining Kiss": {
		bp: 50,
		type: "Fairy",
		category: "Special",
		makesContact: true,
		givesHealth: true,
		percentHealed: 0.75,
		acc: 100
	},
	"Energy Ball": {bp: 90},
	"Facade": {ignoresBurn: true},
	"Fell Stinger": {
		bp: 30,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		acc: 100
	},
	"Fire Blast": {bp: 110},
	"Fire Pledge": {bp: 80},
	"Flamethrower": {bp: 90},
	"Flying Press": {
		bp: 80,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		acc: 95
	},
	"Freeze-Dry": {
		bp: 70,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Frost Breath": {bp: 60},
	"Future Sight": {bp: 120},
	"Geomancy": {
		bp: 0,
		type: "Fairy"
	},
	"Grass Pledge": {bp: 80},
	"Heat Wave": {bp: 95},
	"Hex": {bp: 65},
	"Hidden Power Bug": {bp: 60},
	"Hidden Power Dark": {bp: 60},
	"Hidden Power Dragon": {bp: 60},
	"Hidden Power Electric": {bp: 60},
	"Hidden Power Fighting": {bp: 60},
	"Hidden Power Fire": {bp: 60},
	"Hidden Power Flying": {bp: 60},
	"Hidden Power Ghost": {bp: 60},
	"Hidden Power Grass": {bp: 60},
	"Hidden Power Ground": {bp: 60},
	"Hidden Power Ice": {bp: 60},
	"Hidden Power Poison": {bp: 60},
	"Hidden Power Psychic": {bp: 60},
	"Hidden Power Rock": {bp: 60},
	"Hidden Power Steel": {bp: 60},
	"Hidden Power Water": {bp: 60},
	"Hurricane": {bp: 110},
	"Hydro Pump": {bp: 110},
	"Hyperspace Fury": {
		bp: 100,
		type: "Dark",
		category: "Physical",
		bypassesProtect: true,
		acc: 101
	},
	"Hyperspace Hole": {
		bp: 80,
		type: "Psychic",
		category: "Special",
		bypassesProtect: true,
		acc: 101
	},
	"Ice Beam": {bp: 90},
	"Incinerate": {bp: 60},
	"Infestation": {
		bp: 20,
		type: "Bug",
		category: "Special",
		makesContact: true,
		acc: 100
	},
	"King's Shield": {
		bp: 0,
		type: "Steel"
	},
	"Knock Off": {bp: 65},
	"Land's Wrath": {
		bp: 90,
		type: "Ground",
		category: "Physical",
		isSpread: true,
		acc: 100
	},
	"Leaf Storm": {bp: 130},
	"Light of Ruin": {
		bp: 140,
		type: "Fairy",
		category: "Special",
		hasRecoil: 50,
		acc: 100
	},
	"Low Sweep": {bp: 65},
	"Magma Storm": {bp: 100},
	"Meteor Mash": {bp: 90},
	"Moonblast": {
		bp: 95,
		type: "Fairy",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Moonlight": {type: "Fairy"},
	"Muddy Water": {bp: 90},
	"Mystical Fire": {
		bp: 65,
		type: "Fire",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Nuzzle": {
		bp: 20,
		type: "Electric",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		acc: 100
	},
	"Oblivion Wing": {
		bp: 80,
		type: "Flying",
		category: "Special",
		givesHealth: true,
		percentHealed: 0.75,
		acc: 100
	},
	"Origin Pulse": {
		bp: 110,
		type: "Water",
		category: "Special",
		isSpread: true,
		isPulse: true,
		acc: 85
	},
	"Overheat": {bp: 130},
	"Parabolic Charge": {
		bp: 50,
		type: "Electric",
		category: "Special",
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Phantom Force": {
		bp: 90,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		bypassesProtect: true,
		acc: 100
	},
	"Pin Missile": {bp: 25},
	"Play Rough": {
		bp: 90,
		type: "Fairy",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		acc: 90
	},
	"Power Gem": {bp: 80},
	"Power-Up Punch": {
		bp: 40,
		type: "Fighting",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
		acc: 100
	},
	"Precipice Blades": {
		bp: 120,
		type: "Ground",
		category: "Physical",
		isSpread: "true",
		acc: 85
	},
	"Rock Tomb": {bp: 60},
	"Skull Bash": {bp: 130},
	"Spiky Shield": {
		bp: 0,
		type: "Grass"
	},
	"Snore": {bp: 50},
	"Steam Eruption": {
		bp: 110,
		type: "Water",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 95
	},
	"Sticky Web": {
		bp: 0,
		type: "Bug"
	},
	"Storm Throw": {bp: 60},
	"Struggle Bug": {bp: 50},
	"Surf": {bp: 90},
	"Synchronoise": {bp: 120},
	"Techno Blast": {bp: 120},
	"Thief": {bp: 60},
	"Thousand Arrows": {
		bp: 90,
		type: "Ground",
		category: "Physical",
		isSpread: "true",
		acc: 100
	},
	"Thousand Waves": {
		bp: 90,
		type: "Ground",
		category: "Physical",
		isSpread: "true",
		acc: 100
	},
	"Thunder": {bp: 110},
	"Thunderbolt": {bp: 90},
	"Wake-Up Slap": {bp: 70},
	"Water Pledge": {bp: 80},
	"Water Shuriken": {
		bp: 15,
		type: "Water",
		category: "Physical",
		isMultiHit: true,
		acc: 100
	}
});

var ZMOVES_TYPING = {
	"Bug": "Savage Spin-Out",
	"Dark": "Black Hole Eclipse",
	"Dragon": "Devastating Drake",
	"Electric": "Gigavolt Havoc",
	"Fairy": "Twinkle Tackle",
	"Fighting": "All-Out Pummeling",
	"Fire": "Inferno Overdrive",
	"Flying": "Supersonic Skystrike",
	"Ghost": "Never-Ending Nightmare",
	"Grass": "Bloom Doom",
	"Ground": "Tectonic Rage",
	"Ice": "Subzero Slammer",
	"Normal": "Breakneck Blitz",
	"Poison": "Acid Downpour",
	"Psychic": "Shattered Psyche",
	"Rock": "Continental Crush",
	"Steel": "Corkscrew Crash",
	"Water": "Hydro Vortex"
};

var MOVES_SM = $.extend(true, {}, MOVES_XY, {
	"10,000,000 Volt Thunderbolt": {
		bp: 195,
		type: "Electric",
		category: "Special",
		isZ: true
	},
	"Acid Downpour": {
		bp: 1,
		type: "Poison",
		category: "Physical",
		isZ: true
	},
	"Acid Spray": {zp: 100},
	"Accelerock": {
		bp: 40,
		type: "Rock",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		zp: 100,
		acc: 100
	},
	"Acrobatics": {zp: 100},
	"Aerial Ace": {zp: 120},
	"Aeroblast": {zp: 180},
	"Air Cutter": {zp: 120},
	"Air Slash": {zp: 140},
	"All-Out Pummeling": {
		bp: 1,
		type: "Fighting",
		category: "Physical",
		isZ: true
	},
	"Anchor Shot": {
		bp: 80,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		hasSecondaryEffect: true,
		zp: 160,
		acc: 100
	},
	"Ancient Power": {zp: 120},
	"Aqua Jet": {zp: 100},
	"Aqua Tail": {zp: 175},
	"Arm Thrust": {zp: 100},
	"Assurance": {zp: 120},
	"Astonish": {zp: 100},
	"Attack Order": {zp: 175},
	"Aura Sphere": {zp: 160},
	"Aurora Beam": {zp: 120},
	"Avalanche": {zp: 120},
	"Beak Blast": {
		bp: 100,
		type: "Flying",
		category: "Physical",
		zp: 180,
		isBullet: true,
		acc: 100
	},
	"Belch": {zp: 190},
	"Bite": {zp: 120},
	"Black Hole Eclipse": {
		bp: 1,
		type: "Dark",
		category: "Physical",
		isZ: true
	},
	"Blast Burn": {zp: 200},
	"Blaze Kick": {zp: 160},
	"Blizzard": {zp: 185},
	"Bloom Doom": {
		bp: 1,
		type: "Grass",
		category: "Physical",
		isZ: true
	},
	"Blue Flare": {zp: 195},
	"Brave Bird": {zp: 190},
	"Breakneck Blitz": {
		bp: 1,
		type: "Normal",
		category: "Physical",
		isZ: true
	},
	"Brine": {zp: 120},
	"Body Slam": {zp: 160},
	"Bolt Strike": {zp: 195},
	"Bone Club": {zp: 120},
	"Bone Rush": {zp: 140},
	"Bonemerang": {zp: 100},
	"Boomburst": {zp: 200},
	"Bounce": {zp: 160},
	"Brick Break": {zp: 140},
	"Brutal Swing": {
		bp: 60,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		isSpread: true,
		zp: 120,
		acc: 100
	},
	"Bubble Beam": {zp: 120},
	"Bug Bite": {zp: 120},
	"Bug Buzz": {zp: 175},
	"Bulldoze": {zp: 120},
	"Bullet Punch": {zp: 100},
	"Bullet Seed": {zp: 140},
	"Burn Up": {
		bp: 130,
		type: "Fire",
		category: "Special",
		zp: 195,
		acc: 130
	},
	"Catastropika": {
		bp: 210,
		type: "Electric",
		category: "Physical",
		isZ: true,
		makesContact: true
	},
	"Charge Beam": {zp: 100},
	"Chatter": {zp: 120},
	"Chip Away": {zp: 140},
	"Circle Throw": {zp: 120},
	"Clanging Scales": {
		bp: 110,
		type: "Dragon",
		category: "Special",
		isSound: true,
		isSpread: true,
		zp: 185,
		acc: 100
	},
	"Clangorous Soulblaze": {
		bp: 185,
		type: "Dragon",
		category: "Special",
		isSound: true,
		isSpread: true,
		isZ: true
	},
	"Clear Smog": {zp: 100},
	"Close Combat": {zp: 190},
	"Continental Crush": {
		bp: 1,
		type: "Rock",
		category: "Physical",
		isZ: true
	},
	"Core Enforcer": {
		bp: 100,
		type: "Dragon",
		category: "Special",
		isSpread: true,
		zp: 140,
		acc: 140
	},
	"Corkscrew Crash": {
		bp: 1,
		type: "Steel",
		category: "Physical",
		isZ: true
	},
	"Covet": {zp: 120},
	"Crabhammer": {zp: 180},
	"Cross Chop": {zp: 180},
	"Cross Poison": {zp: 140},
	"Crunch": {zp: 160},
	"Crush Claw": {zp: 140},
	"Dark Pulse": {zp: 160},
	"Darkest Lariat": {
		bp: 85,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		zp: 160,
		acc: 100
	},
	"Dazzling Gleam": {zp: 160},
	"Diamond Storm": {zp: 180},
	"Dig": {zp: 160},
	"Discharge": {zp: 160},
	"Dive": {zp: 160},
	"Dragon Hammer": {
		bp: 90,
		type: "Dragon",
		category: "Physical",
		makesContact: true,
		zp: 175,
		acc: 100
	},
	"Draining Kiss": {zp: 100},
	"Drill Peck": {zp: 160},
	"Devastating Drake": {
		bp: 1,
		type: "Dragon",
		category: "Physical",
		isZ: true
	},
	"Doom Desire": {zp: 200},
	"Double-Edge": {zp: 190},
	"Double Hit": {zp: 140},
	"Double Kick": {zp: 100},
	"Draco Meteor": {zp: 195},
	"Dragon Ascent": {zp: 190},
	"Dragon Claw": {zp: 160},
	"Dragon Pulse": {zp: 160},
	"Dragon Rush": {zp: 180},
	"Dragon Tail": {zp: 120},
	"Drain Punch": {zp: 140},
	"Dream Eater": {zp: 180},
	"Drill Run": {zp: 160},
	"Dual Chop": {zp: 100},
	"Dynamic Punch": {zp: 180},
	"Earth Power": {zp: 175},
	"Earthquake": {zp: 180},
	"Electro Ball": {zp: 160},
	"Electroweb": {zp: 100},
	"Endeavor": {zp: 160},
	"Energy Ball": {zp: 175},
	"Eruption": {zp: 200},
	"Explosion": {zp: 200},
	"Extrasensory": {zp: 160},
	"Extreme Speed": {zp: 160},
	"Fake Out": {zp: 100},
	"Facade": {zp: 140},
	"Feint": {zp: 100},
	"Feint Attack": {zp: 120},
	"Fell Stinger": {bp: "50", zp: 100},
	"Fiery Dance": {zp: 160},
	"Final Gambit": {zp: 180},
	"Fire Blast": {zp: 185},
	"Fire Fang": {zp: 120},
	"Fire Lash": {
		bp: 80,
		type: "Fire",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
		acc: 100
	},
	"Fire Pledge": {zp: 160},
	"Fire Punch": {zp: 140},
	"First Impression": {
		bp: 90,
		type: "Bug",
		category: "Physical",
		makesContact: true,
		hasPriority: true,
		zp: 175,
		acc: 100
	},
	"Flail": {zp: 160},
	"Flamethrower": {zp: 175},
	"Flame Burst": {zp: 140},
	"Flame Charge": {zp: 100},
	"Flame Wheel": {zp: 120},
	"Flare Blitz": {zp: 190},
	"Flash Cannon": {zp: 160},
	"Fleur Cannon": {
		bp: 130,
		type: "Fairy",
		category: "Special",
		hasSecondaryEffect: true,
		zp: 195,
		dropsStats: 2,
		acc: 90
	},
	"Fling": {zp: 100},
	"Fly": {zp: 175},
	"Flying Press": {bp: 100, zp: 170},
	"Focus Blast": {zp: 190},
	"Focus Punch": {zp: 200},
	"Force Palm": {zp: 120},
	"Foul Play": {zp: 175},
	"Freeze Shock": {zp: 200},
	"Freeze-Dry": {zp: 140},
	"Frenzy Plant": {zp: 200},
	"Frost Breath": {zp: 120},
	"Frustration": {zp: 160},
	"Fury Swipes": {zp: 100},
	"Fusion Bolt": {zp: 180},
	"Fusion Flare": {zp: 180},
	"Future Sight": {zp: 190},
	"Gear Grind": {zp: 180},
	"Genesis Supernova": {
		bp: 185,
		type: "Psychic",
		category: "Special",
		isZ: true
	},
	"Giga Drain": {zp: 140},
	"Giga Impact": {zp: 200},
	"Gigavolt Havoc": {
		bp: 1,
		type: "Electric",
		category: "Physical",
		isZ: true
	},
	"Glaciate": {zp: 120},
	"Grass Knot": {zp: 160},
	"Grass Pledge": {zp: 160},
	"Gunk Shot": {zp: 190},
	"Gust": {zp: 100},
	"Guardian of Alola": {
		bp: 1,
		type: "Fairy",
		category: "Special",
		isZ: true
	},
	"Gyro Ball": {zp: 160},
	"Hammer Arm": {zp: 180},
	"Headbutt": {zp: 140},
	"Head Charge": {zp: 190},
	"Head Smash": {zp: 200},
	"Heart Stamp": {zp: 120},
	"Heat Wave": {zp: 175},
	"Heavy Slam": {zp: 160},
	"Hex": {zp: 160},
	"Hidden Power Bug": {zp: 120},
	"Hidden Power Dark": {zp: 120},
	"Hidden Power Dragon": {zp: 120},
	"Hidden Power Electric": {zp: 120},
	"Hidden Power Fighting": {zp: 120},
	"Hidden Power Fire": {zp: 120},
	"Hidden Power Flying": {zp: 120},
	"Hidden Power Ghost": {zp: 120},
	"Hidden Power Grass": {zp: 120},
	"Hidden Power Ground": {zp: 120},
	"Hidden Power Ice": {zp: 120},
	"Hidden Power Poison": {zp: 120},
	"Hidden Power Psychic": {zp: 120},
	"Hidden Power Rock": {zp: 120},
	"Hidden Power Steel": {zp: 120},
	"Hidden Power Water": {zp: 120},
	"High Horsepower": {
		bp: 95,
		type: "Ground",
		category: "Physical",
		makesContact: true,
		zp: 175,
		acc: 95
	},
	"High Jump Kick": {zp: 195},
	"Horn Leech": {zp: 140},
	"Hurricane": {zp: 185},
	"Hydro Cannon": {zp: 200},
	"Hydro Pump": {zp: 185},
	"Hydro Vortex": {
		bp: 1,
		type: "Water",
		category: "Physical",
		isZ: true
	},
	"Hyper Beam": {zp: 200},
	"Hyper Voice": {zp: 175},
	"Hyperspace Fury": {zp: 180},
	"Hyperspace Hole": {zp: 160},
	"Ice Beam": {zp: 175},
	"Ice Burn": {zp: 200},
	"Ice Fang": {zp: 120},
	"Ice Hammer": {
		bp: 100,
		type: "Ice",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		zp: 180,
		acc: 90
	},
	"Ice Punch": {zp: 140},
	"Ice Shard": {zp: 100},
	"Icicle Crash": {zp: 160},
	"Icicle Spear": {zp: 140},
	"Icy Wind": {zp: 100},
	"Incinerate": {zp: 120},
	"Inferno": {zp: 180},
	"Inferno Overdrive": {
		bp: 1,
		type: "Fire",
		category: "Physical",
		isZ: true
	},
	"Infestation": {zp: 100},
	"Iron Head": {zp: 160},
	"Iron Tail": {zp: 180},
	"Judgment": {zp: 180},
	"Jump Kick": {zp: 180},
	"Knock Off": {zp: 120},
	"Land's Wrath": {zp: 185},
	"Last Resort": {zp: 200},
	"Lava Plume": {zp: 160},
	"Leafage": {
		bp: 40,
		type: "Grass",
		category: "Physical",
		zp: 100,
		acc: 100
	},
	"Leaf Blade": {zp: 175},
	"Leaf Storm": {zp: 195},
	"Leaf Tornado": {zp: 120},
	"Leech Life": {bp: 80, zp: 160},
	"Let's Snuggle Forever": {
		bp: 190,
		type: "Fairy",
		category: "Physical",
		makesContact: true,
		isZ: true
	},
	"Light of Ruin": {zp: 200},
	"Light That Burns the Sky": {
		bp: 200,
		type: "Psychic",
		category: "Special",
		usesHighestAttackStat: true,
		isZ: true
	},
	"Liquidation": {
		bp: 85,
		type: "Water",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
		acc: 100
	},
	"Low Kick": {zp: 160},
	"Low Sweep": {zp: 120},
	"Lunge": {
		bp: 80,
		type: "Bug",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
		acc: 100
	},
	"Luster Purge": {zp: 140},
	"Mach Punch": {zp: 100},
	"Magical Leaf": {zp: 120},
	"Magma Storm": {zp: 180},
	"Magnet Bomb": {zp: 120},
	"Malicious Moonsault": {
		bp: 180,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		isZ: true
	},
	"Megahorn": {zp: 190},
	"Menacing Moonraze Maelstrom": {
		bp: 200,
		type: "Ghost",
		category: "Special",
		isZ: true
	},
	"Metal Claw": {zp: 100},
	"Meteor Mash": {zp: 175},
	"Mind Blown": {
		bp: 150,
		type: "Fire",
		category: "Special",
		isSpread: true,
		hasRecoil: true,
		zp: 200,
		acc: 100
	},
	"Mirror Shot": {zp: 120},
	"Mist Ball": {zp: 140},
	"Moonblast": {zp: 175},
	"Moongeist Beam": {
		bp: 100,
		type: "Ghost",
		category: "Special",
		zp: 180,
		acc: 100
	},
	"Muddy Water": {zp: 175},
	"Mud Bomb": {zp: 120},
	"Mud Shot": {zp: 100},
	"Multi-Attack": {
		bp: 90,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		zp: 185,
		acc: 100
	},
	"Mystical Fire": {bp: 75, zp: 140},
	"Natural Gift": {zp: 160},
	"Nature's Madness": {
		bp: 1,
		type: "Fairy",
		category: "Special",
		zp: 100,
		acc: 90
	},
	"Needle Arm": {zp: 120},
	"Never-Ending Nightmare": {
		bp: 1,
		type: "Ghost",
		category: "Physical",
		isZ: true
	},
	"Night Daze": {zp: 160},
	"Night Shade": {zp: 100},
	"Night Slash": {zp: 140},
	"Nuzzle": {zp: 100},
	"Oblivion Wing": {zp: 160},
	"Oceanic Operetta": {
		bp: 195,
		type: "Water",
		category: "Special",
		isZ: true
	},
	"Ominous Wind": {zp: 120},
	"Origin Pulse": {zp: 185},
	"Outrage": {zp: 190},
	"Overheat": {zp: 195},
	"Paleo Wave": {zp: 160},
	"Parabolic Charge": {bp: 65, zp: 120},
	"Payback": {zp: 100},
	"Petal Dance": {zp: 190},
	"Phantom Force": {zp: 175},
	"Photon Geyser": {
		bp: 100,
		type: "Psychic",
		category: "Special",
		usesHighestAttackStat: true,
		zp: 180,
		acc: 100
	},
	"Pin Missile": {zp: 140},
	"Plasma Fists": {
		bp: 100,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		isPunch: true,
		zp: 180,
		acc: 100
	},
	"Play Rough": {zp: 175},
	"Pluck": {zp: 120},
	"Poison Fang": {zp: 100},
	"Poison Jab": {zp: 160},
	"Poison Tail": {zp: 100},
	"Pollen Puff": {
		bp: 90,
		type: "Bug",
		category: "Special",
		isBullet: true,
		zp: 175,
		acc: 100
	},
	"Power Gem": {zp: 160},
	"Power Trip": {
		bp: 20,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		zp: 160,
		acc: 100
	},
	"Power Whip": {zp: 190},
	"Power-Up Punch": {zp: 100},
	"Prismatic Laser": {
		bp: 160,
		type: "Psychic",
		category: "Special",
		zp: 200,
		acc: 100
	},
	"Precipice Blades": {zp: 190},
	"Psychic": {zp: 175},
	"Psychic Fangs": {
		bp: 85,
		type: "Psychic",
		category: "Physical",
		makesContact: true,
		isBite: true,
		zp: 160,
		acc: 100
	},
	"Psycho Boost": {zp: 200},
	"Psycho Cut": {zp: 140},
	"Psyshock": {zp: 160},
	"Psystrike": {zp: 180},
	"Pulverizing Pancake": {
		bp: 210,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		isZ: true
	},
	"Punishment": {zp: 160},
	"Pursuit": {zp: 100},
	"Quick Attack": {zp: 100},
	"Rapid Spin": {zp: 100},
	"Razor Leaf": {zp: 120},
	"Razor Shell": {zp: 140},
	"Relic Song": {zp: 140},
	"Retaliate": {zp: 140},
	"Return": {zp: 160},
	"Revelation Dance": {
		bp: 90,
		type: "Normal",
		category: "Special",
		zp: 175,
		acc: 100
	},
	"Revenge": {zp: 120},
	"Reversal": {zp: 160},
	"Roar of Time": {zp: 200},
	"Rock Blast": {isBullet: true, zp: 140},
	"Rock Climb": {zp: 175},
	"Rock Slide": {zp: 140},
	"Rock Smash": {zp: 100},
	"Rock Throw": {zp: 100},
	"Rock Tomb": {zp: 140},
	"Rock Wrecker": {zp: 200},
	"Round": {zp: 120},
	"Sacred Fire": {zp: 180},
	"Sacred Sword": {zp: 175},
	"Sand Tomb": {zp: 100},
	"Savage Spin-Out": {
		bp: 1,
		type: "Bug",
		category: "Physical",
		isZ: true
	},
	"Scald": {zp: 160},
	"Searing Shot": {zp: 180},
	"Searing Sunraze Smash": {
		bp: 200,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		isZ: true
	},
	"Secret Power": {zp: 140},
	"Secret Sword": {zp: 160},
	"Seed Bomb": {zp: 160},
	"Seed Flare": {zp: 190},
	"Seismic Toss": {zp: 100},
	"Self-Destruct": {zp: 200},
	"Shadow Claw": {zp: 140},
	"Shadow Force": {zp: 190},
	"Shadow Sneak": {zp: 100},
	"Shadow Strike": {zp: 160},
	"Shattered Psyche": {
		bp: 1,
		type: "Psychic",
		category: "Physical",
		isZ: true
	},
	"Shadow Ball": {zp: 160},
	"Shadow Bone": {
		bp: 85,
		type: "Ghost",
		category: "Physical",
		hasSecondaryEffect: true,
		zp: 160,
		acc: 100
	},
	"Shadow Punch": {zp: 120},
	"Sheer Cold": {
		zp: 180,
		isMLG: true
	},
	"Shell Trap": {
		bp: 150,
		type: "Fire",
		category: "Special",
		isSpread: true,
		zp: 200,
		acc: 100
	},
	"Shock Wave": {zp: 120},
	"Signal Beam": {zp: 140},
	"Silver Wind": {zp: 120},
	"Sinister Arrow Raid": {
		bp: 180,
		type: "Ghost",
		category: "Physical",
		isZ: true
	},
	"Skull Bash": {zp: 195},
	"Sky Attack": {zp: 200},
	"Sky Drop": {zp: 120},
	"Sky Uppercut": {zp: 160},
	"Slash": {zp: 140},
	"Sludge": {zp: 120},
	"Sludge Bomb": {zp: 175},
	"Sludge Wave": {zp: 175},
	"Smack Down": {zp: 100},
	"Smart Strike": {
		bp: 70,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		zp: 140,
		acc: 101
	},
	"Snarl": {zp: 100},
	"Snore": {zp: 100},
	"Solar Beam": {zp: 190},
	"Solar Blade": {
		bp: 125,
		type: "Grass",
		category: "Physical",
		makesContact: true,
		zp: 190,
		acc: 100
	},
	"Soul-Stealing 7-Star Strike": {
		bp: 195,
		type: "Ghost",
		category: "Physical",
		isZ: true
	},
	"Spacial Rend": {zp: 180},
	"Spark": {zp: 120},
	"Sparkling Aria": {
		bp: 90,
		type: "Water",
		category: "Special",
		isSound: true,
		isSpread: true,
		zp: 175,
		acc: 100
	},
	"Spectral Thief": {
		bp: 90,
		type: "Ghost",
		category: "Physical",
		makesContact: true,
		zp: 175,
		acc: 100
	},
	"Spirit Shackle": {
		bp: 80,
		type: "Ghost",
		category: "Physical",
		hasSecondaryEffect: true,
		zp: 160,
		acc: 100
	},
	"Splintered Stormshards": {
		bp: 190,
		type: "Rock",
		category: "Physical",
		isZ: true
	},
	"Steam Eruption": {zp: 185},
	"Steamroller": {zp: 120},
	"Steel Wing": {zp: 140},
	"Stoked Sparksurfer": {
		bp: 175,
		type: "Electric",
		category: "Special",
		isZ: true
	},
	"Stomp": {zp: 120},
	"Stomping Tantrum": {
		bp: 75,
		type: "Ground",
		category: "Physical",
		makesContact: true,
		zp: 140,
		acc: 100
	},
	"Stone Edge": {zp: 180},
	"Stored Power": {zp: 160},
	"Storm Throw": {zp: 120},
	"Struggle Bug": {zp: 100},
	"Submission": {zp: 160},
	"Subzero Slammer": {
		bp: 1,
		type: "Ice",
		category: "Physical",
		isZ: true
	},
	"Sucker Punch": {bp: 70, zp: 140},
	"Sunsteel Strike": {
		bp: 100,
		type: "Steel",
		category: "Physical",
		makesContact: true,
		zp: 180,
		acc: 100
	},
	"Super Fang": {zp: 100},
	"Superpower": {zp: 190},
	"Supersonic Skystrike": {
		bp: 1,
		type: "Flying",
		category: "Physical",
		isZ: true
	},
	"Surf": {zp: 175},
	"Swift": {zp: 120},
	"Synchronoise": {zp: 190},
	"Tackle": {bp: 40, zp: 100},
	"Take Down": {zp: 160},
	"Tail Slap": {zp: 140},
	"Techno Blast": {zp: 190},
	"Tectonic Rage": {
		bp: 1,
		type: "Ground",
		category: "Physical",
		isZ: true
	},
	"Thief": {zp: 120},
	"Thousand Arrows": {zp: 180},
	"Thousand Waves": {zp: 175},
	"Thrash": {zp: 190},
	"Throat Chop": {
		bp: 80,
		type: "Dark",
		category: "Physical",
		makesContact: true,
		zp: 160,
		acc: 100
	},
	"Thunder": {zp: 185},
	"Thunderbolt": {zp: 175},
	"Thunder Fang": {zp: 120},
	"Thunder Punch": {zp: 140},
	"Tri Attack": {zp: 160},
	"Trop Kick": {
		bp: 70,
		type: "Grass",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 140,
		acc: 100
	},
	"Twineedle": {zp: 100},
	"Twinkle Tackle": {
		bp: 1,
		type: "Fairy",
		category: "Physical",
		isZ: true
	},
	"U-turn": {zp: 140},
	"Uproar": {zp: 175},
	"V-create": {zp: 220},
	"Vacuum Wave": {zp: 100},
	"Venoshock": {zp: 120},
	"Volt Switch": {zp: 140},
	"Volt Tackle": {zp: 190},
	"Wake-Up Slap": {zp: 140},
	"Waterfall": {zp: 160},
	"Water Pledge": {zp: 160},
	"Water Pulse": {zp: 120},
	"Water Shuriken": {
		category: "Special",
		zp: 100
	},
	"Water Spout": {zp: 200},
	"Weather Ball": {zp: 160},
	"Whirlpool": {zp: 100},
	"Wild Charge": {zp: 175},
	"Wing Attack": {zp: 120},
	"Wood Hammer": {zp: 190},
	"Wring Out": {zp: 190},
	"X-Scissor": {zp: 160},
	"Zap Cannon": {zp: 190},
	"Zen Headbutt": {zp: 160},
	"Zing Zap": {
		bp: 80,
		type: "Electric",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
		acc: 100
	}
});

var MOVES_LG = $.extend(true, {}, MOVES_SM, {
	"Double Iron Bash": {
		bp: 60,
		type: "Steel",
		category: "Physical",
		isTwoHit: true,
		makesContact: true,
		isPunch: true,
		hasSecondaryEffect: true,
		acc: 100
	},
	"Baddy Bad": {
		bp: 90,
		type: "Dark",
		category: "Physical",
		acc: 100
	},
	"Bouncy Bubble": {
		bp: 90,
		type: "Water",
		category: "Special",
		givesHealth: true,
		percentHealed: 0.5,
		acc: 100
	},
	"Absorb": {bp: 40},
	"Mega Drain": {bp: 75},
	"Sky Attack": {bp: 200},
	"Solar Beam": {bp: 200},
	"Buzzy Buzz": {
		bp: 90,
		type: "Electric",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Floaty Fall": {
		bp: 90,
		type: "Flying",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		acc: 95
	},
	"Freezy Frost": {
		bp: 90,
		type: "Ice",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Glitzy Glow": {
		bp: 90,
		type: "Psychic",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Pika Papow": {
		bp: 102,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		acc: 101
	},
	"Sappy Seed": {
		bp: 90,
		type: "Grass",
		category: "Physical",
		acc: 100
	},
	"Sizzly Slide": {
		bp: 90,
		type: "Fire",
		category: "Physical",
		hasSecondaryEffect: true,
		makesContact: true,
		acc: 100
	},
	"Sparkly Swirl": {
		bp: 90,
		type: "Fairy",
		category: "Special",
		acc: 100
	},
	"Splishy Splash": {
		bp: 90,
		type: "Water",
		category: "Special",
		hasSecondaryEffect: true,
		acc: 100
	},
	"Veevee Volley": {
		bp: 102,
		type: "Normal",
		category: "Physical",
		makesContact: true,
		acc: 101
	},
	"Zippy Zap": {
		bp: 50,
		type: "Electric",
		category: "Physical",
		makesContact: true,
		alwaysCrit: true,
		acc: 100
	},
});

var MOVES_SS = $.extend(true, {}, MOVES_SM, {
	"Dynamax Cannon": {
		bp: 100,
		type: "Dragon",
		category: "Special",
	},
	"Snipe Shot": {
		bp: 80,
		type: "Water",
		category: "Special",
	},
	"Jaw Lock": {
		bp: 80,
		type: "Dark",
		category: "Physical",
	},
	"Dragon Darts": {
		bp: 50,
		type: "Dragon",
		category: "Physical",
		isTwoHit: true
	},
	"Bolt Beak": {
		bp: 85,
		type: "Electric",
		category: "Physical",
	},
	"Bolt Beak (Doubled)": {
		bp: 170,
		type: "Electric",
		category: "Physical",
	},
	"Fishious Rend": {
		bp: 85,
		type: "Water",
		category: "Physical",
		isBite: true,
	},
	"Fishious Rend (Doubled)": {
		bp: 170,
		type: "Water",
		category: "Physical",
		isBite: true,
	},
	"Body Press": {
		bp: 80,
		type: "Fighting",
		category: "Physical",
	},
	"Drum Beating": {
		bp: 80,
		type: "Grass",
		category: "Physical",
	},
	"Snap Trap": {
		bp: 35,
		type: "Grass",
		category: "Physical",
	},
	"Pyro Ball": {
		bp: 120,
		type: "Fire",
		category: "Physical",
	},
	"Behemoth Blade": {
		bp: 100,
		type: "Steel",
		category: "Physical",
	},
	"Behemoth Bash": {
		bp: 100,
		type: "Steel",
		category: "Physical",
	},
	"Aura Wheel": {
		bp: 110,
		type: "Electric",
		category: "Physical",
	},
	"Aura Wheel (Electric)": {
		bp: 110,
		type: "Electric",
		category: "Physical",
	},
	"Aura Wheel (Dark)": {
		bp: 110,
		type: "Dark",
		category: "Physical",
	},
	"Breaking Swipe": {
		bp: 60,
		type: "Dragon",
		category: "Physical",
	},
	"Branch Poke": {
		bp: 40,
		type: "Grass",
		category: "Physical",
	},
	"Overdrive": {
		bp: 80,
		type: "Electric",
		category: "Special",
	},
	"Apple Acid": {
		bp: 80,
		type: "Grass",
		category: "Special",
	},
	"Grav Apple": {
		bp: 80,
		type: "Grass",
		category: "Physical",
	},
	"Spirit Break": {
		bp: 75,
		type: "Fairy",
		category: "Physical",
	},
	"Strange Stream": {
		bp: 90,
		type: "Fairy",
		category: "Special",
	},
	"False Surrender": {
		bp: 80,
		type: "Dark",
		category: "Physical",
	},
	"Meteor Assault": {
		bp: 150,
		type: "Fighting",
		category: "Physical",
	},
	"Eternabeam": {
		bp: 160,
		type: "Dragon",
		category: "Special",
	},
	"Steel Beam": {
		bp: 140,
		type: "Steel",
		category: "Special",
	},
	"Max Strike": {
		type: "Normal"
	},
	"Max Flare": {
		type: "Fire"
	},
	"Max Hailstorm": {
		type: "Ice"
	},
	"Max Geyser": {
		type: "Water"
	},
	"Max Lightning": {
		type: "Electric"
	},
	"Max Knuckle": {
		type: "Fighting"
	},
	"Max Overgrowth": {
		type: "Grass"
	},
	"Max Mindstorm": {
		type: "Psychic"
	},
	"Max Flutterby": {
		type: "Bug"
	},
	"Max Ooze": {
		type: "Poison"
	},
	"Max Airstream": {
		type: "Flying"
	},
	"Max Wyrmwind": {
		type: "Dragon"
	},
	"Max Rockfall": {
		type: "Rock"
	},
	"Max Quake": {
		type: "Ground"
	},
	"Max Steelspike": {
		type: "Steel"
	},
	"Max Starfall": {
		type: "Fairy"
	},
	"Max Phantasm": {
		type: "Ghost"
	},
	"Max Darkness": {
		type: "Dark"
	},
});

var MAXMOVES_LOOKUP = {
	"Normal": "Max Strike", "Fire": "Max Flare", "Water": "Max Geyser",
	"Electric": "Max Lightning", "Grass": "Max Overgrowth", "Ghost": "Max Phantasm",
	"Dark": "Max Darkness", "Psychic": "Max Mindstorm", "Fighting": "Max Knuckle",
	"Steel": "Max Steelspike", "Ice": "Max Hailstorm", "Ground": "Max Quake",
	"Rock": "Max Rockfall", "Bug": "Max Flutterby", "Fairy": "Max Starfall",
	"Flying": "Max Airstream", "Dragon": "Max Wyrmwind", "Poison": "Max Ooze"
};
