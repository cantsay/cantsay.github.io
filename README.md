# B S S D A M A G E C A L C ~

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

The calculator also adds manual auras and aura breaks, as well as a completely new list of SwSh BSS sets.  

## Contributing:
The site is powered by Jekyll.

Do NOT Edit anything under the ``_site`` folder, it is regenerated whenever you make changes to the other files and edits made there will NOT be saved.

Jekyll uses the [Liquid](https://shopify.github.io/liquid/) templating language, combined with a YAML Front-Matter to serve pages. This allows us to use templates and ``{% includes %}`` tags (see ``/_layouts/default.html``) to avoid repeating content (such as the header used by both ``index.html`` and ``/_pages/privacy.html``) with the following in the YAML Front-Matter:
```
---
layout: default
---
```
This means that any page with this Front-Matter will use ``default.html`` injected with its contents where it says ``{{ content }}``.

Different layouts can be used but they would have to be created separately.

Aside from that, the repo should be fairly simple to navigate.

## Handy Links:

* [Calc](https://cantsay.github.io/sumo-bss-calc/)
* [Parser (PS! Importable to calc format)](https://legofigure11.github.io/custom-calc-parser/)
* [VGC Calc](https://jake-white.github.io/VGC-Damage-Calculator/) ([git](https://github.com/jake-white/VGC-Damage-Calculator))
* [PS! Calc](https://pokemonshowdown.com/damagecalc/) ([git](https://github.com/Zarel/honko-damagecalc))
* Contribute directly in this repo or at our smogon thread [here](https://www.smogon.com/forums/threads/3597699/)!
