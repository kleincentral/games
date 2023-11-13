/* I want to make a multi choice adventure game. Writing down what needs to be made. */

///////////////////////////    CHARACTER CREATION    ///////////////////////////
/*
First choice should be character creation between some classes. 
    Warrior Rogue Ranger Paladin Sorcerer Wizard Artificer. 

Warrior specializes in all weapons

Rogue specializes in light weapons and light magic

Ranger specializes in heavy weapons and heavy magic

Paladin specializes in heavy weapons and light magic

Sorcerer specializes in light weapons and heavy magic

Wizard specializes in all magics

Artificer specializes in item manipulation, with light magic (complex, perhaps dont do?)
*/

///////////////////////////    CLASS SPECIFICS    ///////////////////////////
/*
Every character has base stats which should add up to the same as every class.

Warrior: Points in Strength/Dexterity, Vigor, and Fortitude.
3 points STR, 3 points DEX, 2 points Vigor, 2 points FORT

Rogue: Points in Dexterity/Arcane, Vigor, and Luck.
3 points DEX, 3 points ARC, 2 points VIG, 2 points LUCK.

Ranger: Points in Strength/Arcane, Vigor, and Fortitude.
3 points STR, 3 points ARC, 2 points VIG, 2 points FORT

Paladin: Points in Strength/Intelligence, Vigor, and Fortitude.
3 points STR, 3 points INT, 2 points VIG, 2 points FORT

Sorcerer: Points in Intelligence/Luck, Dexterity, and Vigor
3 points INT, 3 points LUCK, 2 points DEX, 2 points VIG

Wizard: Points in Intelligence/Arcane, Vigor, and Luck.
3 points INT, 3 points ARC, 2 points VIG, 2 points LUCK

Artificer: Points in Arcane/Luck, Strength/Dexterity, Intelligence/Vigor.
3 points ARC, 3 points LUCK, 1 point STR, 1 point DEX, 1 point INT, 1 point VIG

Additionally, each class should have some special features which sets them apart
    from others. Further giving individuality to classes. Perhaps give them multiple
    features, but only able to choose a certain amount at once. 3? Spitball. Each
    feature should have a recharge or limited uses so you dont just spam them.

Warrior:
    Endure - Gives a passive block for a few rounds.
    Dual Strike - Does a two hit attack, both can proc infusions / buffs.
    Beserk - Gives a high attack bonus but unable to defend for a few rounds.
    Barracade - Highly increases the effectiveness of blocking for a few rounds.
    Defensive Strike - Adds minor FORT scaling and makes an attack.
    Commanding Presence - Inceases the chance you are attacked for many rounds. 
        Allies take less damage during this time too.
Rogue: 
    Sneak Attack - Double Damage strike, with a chance for quadruple damage.
    Stealth - Reduce the chance you are targeted by enemies, until you are hit
        your damage is increased.
    Expose Weakpoint - Increase the amount of damage dealt to a certain target for
        a few turns.
    Trickery - Chance to confuse opponents for a few rounds. Works better on enemies
        lower level than you.
    Sleight of Hand - Steals an item from an enemy. Can only be used twice a combat.
    (Some name to bypass block...) - Makes an attack which entirely ignores blocking 
        and armor.
Ranger:
    Piercing Strike - Does damage to two enemies.
    
Paladin:

Sorcerer:

Wizard:

Artificer:
*/

///////////////////////////    LEVELING UP    ///////////////////////////
/*
Leveling up should give an increase to HP to your character. Let it be a 
    random number between 10 and 20? Find out whats balanced.

Leveling up should allow a character to recieve a small reward. A weapon or a spell.

Base stats with a level up able to improve with points? If I want to add another 
    layer of complexity to leveling up. Could help with balancing HP increases.
    
    spitballing:    Vigor (++health, +defending)
                    Fortitude (++defending, +health)
                    Strength (++heavy weapons & +light weapons)
                    Dexterity (++light weapons & +heavy weapons)
                    Intelligence (++heavy magic & +light magic)
                    Arcane (++light magic & +heavy magic)
                    Luck (+chance)

    I don't want to make a persuasion stat... as that would make the dialogue tree
        too complicated. 
    
    Luck should impact sorcerer's ability, loot chance, any % chance which has a 
        chance it will favor the player. EG. easier monsters, better loot possibility,
        higher chance for hoard rooms, bounties reward more gold, size of rooms, flee 
        chance, chance for only things you can use appearing more often, consumable 
        item drops increased, gold drop increase.

The player leveling up should have minimal impact on enemy level. 
*/

///////////////////////////    LOOT    ///////////////////////////
/*
Loot tables are determined by dungeon difficulty and another random class which
    can be added to rooms. The two classes are `barren` and `hoard`.
    barren: No loot spawns in here, high enemy chance and the most danger for
        a player
    hoard: Very high loot spawns, low enemy chance for spawning, but if one does
        spawn it is a guaranteed difficult fight
    one other thing affects loot tables, which is dungeon depth. The lower you go 
    and the further you delve into a dungeon, the higher chance of better loot you
    can find.

Loot should be separated into classes, which are listed below,
    weapons: Weapons can be found as light and heavy. Special weapons only come
        from hoards. If you are unable to use one type, it shows up less often.
    armor: Armor anyone can wear, although some classes prefer certain types.
        the type simply gives a small bonus to something your class does.
    spells: Spells can be found as soft and hard. Special magic only come from
        hoards. If you are unable to use one type, it shows up less often.
    consumables: Anyone can use consumables (they appear in the "item" tab). These
        range from alchemist fire to bombs to other possibly useful effects.
        Such as something which reveals any deadly rooms, something which lowers
        the danger of encountering enemies, ect.

Loot should be able to be scrapped, which gives you a minimal amount of materials or
    gold. Any items should be able to be sold, which gives an incentive for hoarding.
    However you cannot carry everything... set some limit to carry weight for how
    many items can be carried. Everything weighs uniform except items which weigh less.
*/
    /////////////////    CONSUMABLE ITEMS    ////////////////
    /*
    Consumable Items scale for the most part on level and Luck.
        Some items can scale off of different abilities as well.

    DEX scaling consumables include throwing knives & throwing stars.

    STR scaling consumables include grappling ropes & stones.
        DEX and STR scaling consumables are mostly about damage. Both have
        some dehabilitating effects, piercing knives for DEX and nets for STR
        both reducing the damage dealt by enemies for a time if used.

    INT scaling consumables include spell scrolls.
        spell scrolls are one time use items which mimic the abilities of spells.
        spell scrolls always scale better than casting a spell through ability so
        they are always a useful option for casters.

    ARC scaling consumables include magic vials.
        magic vials are one time uses which create mostly minor effects. 
        Healing salves, Alchemist Fire.
    */
    /* Write possible consumable item ideas below:
        Weapon Guilding: gives a melee weapon a temp boost.
        Mage Focus: gives you a temp boost to spell casting.
        Shock Powder: Stuns enemies for a turn.
    */
    /////////////////////    WEAPONS    /////////////////////
    /*
    Weapons scale off of their respective abilities, Heavy is STR with minor DEX
        scaling, Light is DEX with minor STR scaling. Special scales off of both
        equally, no minor scaling.

    The benefit of getting later weapons is that they can come with passive buffs
        (or debuffs). Each time a weapon appears it has a chance to come with any
        of these buffs / debuffs along with higher level weapons have better base
        numbers.
    
        Dull: A debuff. -attack damage.
        Brittle: A debuff. A chance to break while using.
        Degraded: A Debuff. Both Brittle and Dull effects together. Can stack w/ them.

        Sharp: A buff. +attack damage.
        Unbreakable: A buff. Weapon can not have debuffs.
        Light: A buff. Weapon gains a small chance to hit twice.
        Homing: A buff. Weapon ignores most of a block.
        Mastercraft: A buff. Weapon scales much better than normal with ability scores.

    Eventually there should be an option for infusions, which allow for weapons to
        scale off of different ability scores. Should be specific to WEAPON. Can 
        only be swapped at a town.

        Keen = Makes the weapon have major STR and DEX scaling. Gives a bleeding debuff
            to enemies upon hitting them which inflicts persistent damage.

        Enchanted = Makes the weapon have an additional minor scaling of INT. Has a 
            slow debuff upon hitting enemies which reduces the damage enemies deal.

        Occult = Makes the weapon have additional minor scaling of ARC. Has a 
            vulnerable debuff which makes the enemy take more damage for a turn.

        Hefty = Makes the weapon have additional minor FORT scaling. When you defend
            with such a weapon an enemy attacking you takes damage.

        Fell Handed = Gives the weapon additional minor STR scaling no matter the
            type of weapon. On DEX weapons adds an additional flat damage buff.

        Swift Handed = Gives the weapon additional minor DEX scaling no matter the
            type of weapon. On STR weapons adds an additional flat damage buff.

    Special weapons have a unique option for infusions in place of the Keen infusion
        (as they have half of a passive Keen buff.)

        Godly = Gives the weapon two extra minor scaling options between VIG, FORT, 
            INT, ARC, and LUCK. You cannot choose VIG and FORT twice. Others can be
            chosen twice.
        
    */
    /* Write possible weapon ideas below:
    Heavy:
    - Greatsword
    - Maul
    - Twinblade
    - Scythe
    - Greatclub
    - Longsword
    - Spear
    - Greataxe
    - Longbow
    - Crossbow
    - Pike
    - Glaive
    - Lance

    Light:
    - Dagger
    - Handaxe
    - Rapier
    - Shortsword
    - Sickle
    - Light Hammer
    - Yklwa
    - Shortbow
    - Hand Crossbow
    - Whip
    - Quarterstaff
    - Flail

    Special: 
    - Bastard Sword
    - Light Blade
    - Prime Oblivion (revolver) 
    - Hand Ballista
    - Raelgen's Riteknife
    - Slave Driver Yagor's 9 Tails
    - Razor Shield
        
    */
    /////////////////////    SPELLS    //////////////////////
    /*
    Magic scales off of its respective abilities, INT and minor ARC for Heavy, with
        ARC and minor INT scaling for Light. Special scales off of both INT and ARC
        equally, no minor scaling.

    In order to find spells, staffs are spread throughout the world which hold 
        inscriptions or instructions to cast a spell. Each staff can hold 2-4 spells
        on its inscription unless it has a special buff! Each staff can come with a 
        buff or debuff... perhaps both!

        Faded: A debuff. One less spell appears in the staff regardless of amount.
        Cracked: A debuff. One spell inside has a chance to break the staff upon use.
        Unstable: A debuff. Both Faded and Cracked effects together, can stack w/ them.

        Efficient: A buff. One more spell appears in the staff regardless of amount.
        Well Made: A buff. Staff can not have debuffs.
        Smoothborne: A buff. Staff has a chance to cast two spells from its options.
        Accurate: A buff. Staff has higher chances for any chance spells, and ignores
            a small amount of damage against a blocking opponent.
        Mastercraft: A buff. Staff scales much better with its normal abilities.

    Like weapons eventually there should be an option for magicians to add their own
        signature to spells. This, like infusions, should allow spellcasters to scale
        their effectiveness off of another ability score. Should be specific to YOU. 
        Can only be swapped at a town.
    
        Practiced = Makes your magic have major INT and ARC scaling. Has a chance for
            you to cast your spell twice.

        Strong = Makes your magic have minor STR scaling. For Heavy Magic has a chance
            for the enemy being stunned for a round.

        Agile = Makes you magic have minor DEX scaling. Has a chance for when the 
            spell is cast you are able to take one more action that round that is
            not casting a spell.

        Healthy = Makes your magic have minor FORT scaling. Upon casting a spell gain
            a small shield which prevents incoming damage for 2 rounds (can have 
            overlapping shields.)

        Intelligent = Makes your magic have additional minor INT scaling. On light 
            magic gives additional lasting time.
        
        Arcane = Makes your magic have additional minor ARC scaling. On Heavy magic
            gives an additional flat damage boost.

    Special magic has a special option for signature in place of the Practiced 
        signature. (as they essentially have half of the passive Practiced buff)

        Godly = Gives the magic two extra minor scaling options between VIG, FORT,
            STR, DEX, and LUCK. You cannot choose VIG and FORT twice. Others can be
            chosen twice.

    ////////////////   LIGHT MAGIC   ////////////////
    As light magic has unique effects which aren't damage, some cannot gain the 
        benefits of most signatures as they would have no actual effect on the magic
        for their effect. For those certian spells they have the HEIGHTENED tag. Which
        upon getting an infusion they gain access to this HEIGHTENED state. Spells
        will have special text and code if they do have these HEIGHTENED tags.
    */
    /* Write possible spell ideas below:
    Heavy: 
    - Fireball
    - Conjure Flames
    - Magic Missile
    - Disintigration
    - Arcane Bolt
    - Life Drain
    - Acid Bolt
    - Acid Rain
    - Hemorrhage
    - Wall of Blades
    - Magic Stone
    - Conjure Barrage
    - Frost Storm
    - Frost Bolt
    - Lighning Bolt
    - Summon Storm
    - Prismatic Spray

    Light:
    - Read Thoughts (HEIGHTENED)
    - Color Spray
    - Disguise Self (HEIGHTENED)
    - Confusion
    - Prediction
    - Charm Person (HEIGHTENED)
    - Hypnotic Pattern
    - Cripple
    - Cure Wounds (HEIGHTENED)
    - Knock (HEIGHTENED)
    - Command
    - Enhance Ally (HEIGHTENED)
    - Turn Undead
    - Turn Construct
    - Turn Humanoid
    - Turn Fiend
    - Turn Monstrosity

    Special: 
    - Time Stop
    - Meteor Swarm
    - Tether Essence
    - Power Word Kill
    - Power Word Heal
    - Turn All Foes
    - Conjure Extradimensional Storage


    */
    /////////////////////    ARMOR    ///////////////////////
    /*
    some armor
    */
    /* Write possible armor ideas below:
    */

/////////////////////////    WEAPONS AND MAGIC DETAILS    /////////////////////////
/*
Weapons and magic have the choice between heavy and light.

Heavy weapons deal more damage, while light weapons are easier to conceal.

Heavy magic deal the only magic damage and are forcused more towards combat
    application, while light magic can heal and coerce.

There is a third branch of both magic and weapons eclusive to warrior and wizard 
    which are special. Each have unique effects.

All of the possible weapons and spells are defined in the LOOT section, and will 
    be extrapolated here below.
*/

/////////////////////////    ARMOR AND CONSUMABLE DETAILS   /////////////////////////
/*
Consumable items are limited use items which can be extremely effective despite their
    expendable nature. Damage options will ALWAYS do more damage than a weapon no 
    matter how upgraded they are.

Armor is used to help mitigate damage and provide flat buffs to your character.
    Each increase a slight amount of damage resistance, up to 50% damage resist.
    Let armor values go from 1-100, 100 being 50% resist. The math is 
    percentResist = armorRating/2
*/
///////////////////////////    DIALOGUE / SKILLS    ///////////////////////////
/*
There has to be reasons to choose one certain class over another. Make some.
    Warriors have access to extra dialogue with soldiers, 
        and can gain a free rest occasionally.
    Rogues can pickpocket and lockpick, gaining access to items 
        and locations not avaliable to others.
    Ranger has tracking and wildlife knowledge. Able to follow people easily 
        and never get lost while traveling.
    Paladins have access to extra dialogue with members of a religion.
    Sorcerers have a % chance to do any other abilities skills, 
        however if it goes wrong it goes very wrong.
    Wizards can garner extra knowledge from libraries with a % chance 
        and has extra dialogue from their current knowledge.

Otherwise each character will have the same base dialogue and similar skills.
*/

///////////////////////////    PLAYER'S COMBAT    ///////////////////////////
/*
For combat players always go first to give them a chance (unless ambushed)

players have a choice of weapon, special, defend, flee

Weapon should have the option to choose between your weapons for which one should attack,
    and any other special moves your class may have specifically.

Special should have subsections of magic and choose between spells. If you are a wizard
    or a warrior your special magic and special weapons respectively should be in here
    as well.
    (Perhaps add special for each class? Such as rogue having a killing blow,
    Ranger having a piercing attack which hits multi-enemies, Paladins having a
    summon godly aid which can heal the whole party, sorcerers having a magic 
    overload which does a certain amount of random spells.)

Defend should have the ability to negate or block an amount of damage. % or flat number?
    personally leaning towards % except if flat number is higher.

Flee should have you flee the fight. If you spend your turn fleeing and fail a % chance
    you should automatically defend for free.
*/

///////////////////////////    ENEMY COMBAT    ///////////////////////////
/*
Should Enemy intentions be shown ever? I think most of the time no. Unless you use some
    soft magic to incur their intentions for a certain amount of rounds.

Enemy behavior should be reactive, not predictive. If a player attacked, have a
    higher chance to defend next. If a player defended, have a lower chance to
    attack next. If a player buffed, have a higher chance to be more aggressive
    and attack more. 

Enemies should have levels and aggression, levels determine base stats, aggression
    determines how strategic the enemies are (less likely to attack into a defend.)
    Enemy level should be determined by location, and less player Level.

All enemies should have a chance to commit to an attack. When they do so
    they spend a turn doing nothing and charging up for the next attack.
    smarter enemies will intentionally pass a turn without charging up to
    trick players into defending unnecessarily. 

All enemies should have a shieldbreak move. Which punishes players for defending
    too often. They are not able to use this move until a player defends once.
    upon use, the if the target is defending the attack does double damage,
    ignoring shields. If the target does not defend, it does half the damage
    of a regular attack.

If the enemy kills you, you are forced to either an earlier save or a 
    close point (player choosing? or choose yourself. Whichever is easier so
    probably save point.)
*/

///////////////////////////    EXPLORATION    ///////////////////////////
/*
Create a world map to show players where they could go. Show the full map right 
    away, but only update places they can visit once they unlock them. Individual maps
    or areas should be explorable. By explorable how many images do I want to
    create? All of them would take up space and I'm not the best. Do I want to do
    entirely Text based and ASCII art? I like that idea.

Like old time video games, which means there will have to be lots of text
    for every room. Perhaps repeat some qualities? Like add some descriptor
    classes which, if a room has that, repeats some certain code?

One line could look like
    `You step into a ${shapeDescriptor} room ${size} feet across. Inside you see 
        ${someObjects}.${exits}${enemy}`
This line playing out would read something like 
    You step into a circular room 25 feet across. Inside you see 
        a longsword, magical orb, and provisions.(exits) There three doors on
        the far side of this room(enemy) and some goblins sit inside.
Another such example of a more boring room is
    You step into a square room 10 feet across. Inside you see 
        nothing of interest but dust.(exits) There are no other exits 
        aside from the door you entered from(enemy).

Creating a map could be some soft magic, otherwise the player is expected to
    create their own mental or physical map via drawing.

##exits## is pretty self explanatory, it determines the placement of exits in a room.
    Making the logic for an exit leading to another already explored room might be 
    difficult... so perhaps make the entire floor map upon entering. First one should
    be seeded, but otherwise randomly generated rooms with exits should be possible.

##shapeDescriptor## is just flavor, but ##size## should impact how many ##enemy##
    creatures and how many ##someObjects##, aka loot items are allowed to be in a
    room. There should be some limit. In harder dungeons favor of what appears
    shifts more towards enemies, but with better loot tables.
*/

///////////////////////////    TOWNS    ///////////////////////////
/*
Of course there is a starter town where you as the player will start off with hopes
    and dreams (to maybe be crushed)

This location should allow for you to sell items, rest to regain resorces, buy items,
    and possibly recruit others to come along with you and adventure by your side.

Each town should have bounties, a chance to earn extra gold by clearing an area,
    delivering something to a certain location, gathering a specific item, or 
    taking on other 'Quests' Which are more complex.

If you and all of your allies are reduced to 0hp in a dungeon, you will be 
    transported to the last town you visited at the cost of some gold. If a player 
    finds this frustrating they should be able to revert to an earlier save file.

(CONSIDERATION)
    Add some smithing funciton which takes in the leftovers you may have scrapped in
    a dungeon. Depending on the rarity of the item you scrapped you get rarer and rarer
    scrap. It allows you to create some items which may be more suited to your character.
*/

///////////////////////////    QUESTS / BOUNTIES    ///////////////////////////
/*
Quests are laid out tasks which the player must complete in order to finish the game.
    quests are non-negotiable for progression, and give better rewards than bounties.

Bounties are randomized tasks which the player can complete for small rewards.
    This is to help inexperienced or players who have trouble progressing quests
    by giving them more items and materials.

Both contribute to a base level up which gives the player more health and skills.

Main quests follow the STORY, while bounties are optional.
*/

///////////////////////////    STORY    ///////////////////////////
/* 

*/

///////////////////////////    PLACEHOLD    ///////////////////////////
/*

*/

