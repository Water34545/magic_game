import HarryImg from '../images/heroes/harry.jpg'
import HermioneImg from '../images/heroes/hermione.jpg'
import RonImg from '../images/heroes/ron.jpg'
import NevilImg from '../images/heroes/nevil.jpg'

import SpellImg from '../images/cards/spell.jpg'

import FireboltImg from '../images/cards/firebolt.jpg'
import HedwigImg from '../images/cards/hedwig.jpg'
import InvisibilityImg from '../images/cards/invisibility-cloak.jpg'


import TimeTurnerImg from '../images/cards/time-turner.jpg'
import BeedleTheBardImg from '../images/cards/beedle-the-bard.jpg'
import CrookshanksImg from '../images/cards/crookshanks.jpg'

import EveryFlavourBeansImg from '../images/cards/every-flavour-beans.jpg'
import PigwidgeonImg from '../images/cards/pigwidgeon.jpg'

import RememberballImg from '../images/cards/rememberball.jpg'
import MandrakeImg from '../images/cards/mandrake.jpg'
import TrevorImg from '../images/cards/trevor.jpg'

const heroes = [
	{
		name: 'Harry Potter',
		img: HarryImg,
		text: 'I can\'t be a-a-a wisard. I mean I\'m just... Huryy. Just Hurry',
		health: 10,
		coins: 0,
		damage: 0,
		discard: [],
		cards: [
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: `Gain 1 💰`, img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Item', name: 'Firebolt', gain: { damage: 1 }, text: 'Hit 1 ⚡, If you defeat a Villian also gain 1 💰', img: FireboltImg },
			{ type: 'Item', name: 'Invisibility cloak', gain: { coins: 1 }, text: 'Gain 1 💰, If this in your hand, you cant\'t lose more then 1 ❤️ from each Dark Arts event or Villian', img: InvisibilityImg },
			{ type: 'Ally', name: 'Hedwig', choose: { damage: 1, health: 2 }, text: 'Choose 1: hit 1 ⚡ or gain 2 ❤️', img: HedwigImg },
		]
	},
	{
		name: 'Hermione Granger',
		img: HermioneImg,
		text: 'Now if you two don\'t mind, I\'m going to bad before either of you come up with anouther clever idea to get us killed - or worde, expelled',
		health: 10,
		coins: 0,
		damage: 0,
		discard: [],
		cards: [
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: `Gain 1 💰`, img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Item', name: 'Time-turner', gain: { coins: 1 }, text: 'Gain 1 💰, You may put Spells you acquire on top of your deck instaed of in your discard pile.', img: TimeTurnerImg },
			{ type: 'Item', name: 'Beedle the bard', choose: { coins: 2, coins_for_each: 1 }, text: 'Choose 1: Gain 2 💰 or All heroes gain 1 💰', img: BeedleTheBardImg },
			{ type: 'Ally', name: 'Crokshanks', choose: { damage: 1, health: 2 }, text: 'Choose 1: hit 1 ⚡ or gain 2 ❤️', img: CrookshanksImg },
		]
	},
	{
		name: 'Ron Weasley',
		img: RonImg,
		text: 'What do you think they\'ra doing keeping a thing like that locked up in a school?',
		health: 10,
		coins: 0,
		damage: 0,
		discard: [],
		cards: [
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: `Gain 1 💰`, img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Item', name: 'Every - Flavour Beans', gain: { coins: 1 }, text: 'Gain 1 💰, For each Alley plaed this turn, hit 1 ⚡', img: EveryFlavourBeansImg },
			{ type: 'Item', name: 'Cleansweep 11', gain: { coins: 1 }, text: 'Hit 1 ⚡, If you defeat a Villian also gain 1 💰', img: FireboltImg },
			{ type: 'Ally', name: 'Pigwidgeon', choose: { damage: 1, health: 2 }, text: 'Choose 1: hit 1 ⚡ or gain 2 ❤️', img: PigwidgeonImg },
		]
	},
	{
		name: 'Neville Longbottom',
		img: NevilImg,
		text: 'Only problem is, I can\'t remember what I\'be forgotten',
		health: 10,
		coins: 0,
		damage: 0,
		discard: [],
		cards: [
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: `Gain 1 💰`, img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: 'Gain 1 💰', img: SpellImg },
			{ type: 'Item', name: 'Rememberball', gain: { coins: 1 }, text: 'Gain 1 💰, If you discard this, gain 2 💰', img: RememberballImg },
			{ type: 'Item', name: 'Mandrake', choose: { damage: 1, health_one: 1 }, text: 'Choose 1: hit 1 ⚡ or any hero gain 2 ❤️', img: MandrakeImg },
			{ type: 'Ally', name: 'Trevor', choose: { damage: 1, health: 2 }, text: 'Choose 1: hit 1 ⚡ or gain 2 ❤️', img: TrevorImg },
		]
	},
]

export default heroes