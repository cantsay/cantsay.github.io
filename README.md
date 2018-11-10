# B S S D A M A G E C A L C ~
[![Build Status](https://travis-ci.org/cantsay/sumo-bss-calc.svg)](https://travis-ci.org/cantsay/sumo-bss-calc)

for all your bs singles calculations. based on the work by Jake White ([@squirrelboyvgc](https://twitter.com/squirrelboyvgc))

The calculator now supports custom sets. These can be input within the calculator using the official Pokemon Showdown format.

```
Nickname (Species) @ Item
Ability: Name
Level: #
EVs: # Stat / # Stat / # Stat
Serious Nature
IVs: # Stat
- Move Name
- Move Name
- Move Name
- Move Name
```

The calculator also adds manual auras and aura breaks, as well as a completely new list of USUM BSS sets.  

## Handy Links:

* [Calc](https://cantsay.github.io/sumo-bss-calc/)
* [Parser (PS! Importable to calc format)](https://legofigure11.github.io/custom-calc-parser/)
* [VGC Calc](https://jake-white.github.io/VGC-Damage-Calculator/) ([git](https://github.com/jake-white/VGC-Damage-Calculator))
* [PS! Calc](https://pokemonshowdown.com/damagecalc/) ([git](https://github.com/Zarel/honko-damagecalc))
* Contribute directly in this repo or at our smogon thread [here](https://www.smogon.com/forums/threads/3597699/)!

## Testing with eslint (requires node)
run ``npm i -g eslint`` (First time only)

run ``npm test``

run ``eslint --fix .``
