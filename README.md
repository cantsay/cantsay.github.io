# B S S D A M A G E C A L C ~
[![Build Status](https://travis-ci.org/cantsay/cantsay.github.io.svg?branch=master)](https://travis-ci.org/cantsay/cantsay.github.io)

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

## Contributing:
The site is powered by Jekyll, with linting by nodejs' eslint.

Do NOT Edit anything under the ``_site`` folder, it is regenerated whenever you make changes to the other files and edits made there will NOT be saved.

Jekyll uses the [Liquid](https://shopify.github.io/liquid/) templating language, combined with a YAML Front-Matter to serve pages. This allows us to use templates (see ``/_layouts/default.html``) to avoid repeating content (such as the header used by both ``index.html`` and ``/_pages/privacy.html``) with the following in the YAML Front-Matter:
```
---
layout: default
---
```
This means that any page with this Front-Matter will use ``default.html`` injected with its contents where it says ``{{ content }}``.

Different layouts can be used but they would have to be created separately.

Aside from that, the repo should be fairly simple to navigate.

#### Build Instructions
1. Install [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/).
2. Double-click ``setup.bat`` (NOTE: This only needs to be done once!)
3. Double click ``run.bat`` to view your changes!

#### Testing and PRing changes
We use travis-ci to maintain code standards. Please ensure your code passes our tests before submitting your PR!

1. Install [nodejs](https://nodejs.org/en/).
2. Double click ``test.bat``.
3. Fix any errors (``fix.bat`` could help with this!) turned up by the test!
4. PR your changes!

## Handy Links:

* [Calc](https://cantsay.github.io/sumo-bss-calc/)
* [Parser (PS! Importable to calc format)](https://legofigure11.github.io/custom-calc-parser/)
* [VGC Calc](https://jake-white.github.io/VGC-Damage-Calculator/) ([git](https://github.com/jake-white/VGC-Damage-Calculator))
* [PS! Calc](https://pokemonshowdown.com/damagecalc/) ([git](https://github.com/Zarel/honko-damagecalc))
* Contribute directly in this repo or at our smogon thread [here](https://www.smogon.com/forums/threads/3597699/)!
