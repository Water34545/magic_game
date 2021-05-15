import HarryImg from '../images/heroes/harry.jpg'
import HermioneImg from '../images/heroes/hermione.jpg'
import RonImg from '../images/heroes/ron.jpg'
import NevilImg from '../images/heroes/nevil.jpg'

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
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Item', name: 'Firebolt', gain: { damage: 1 }, text: 'If you defeat a Villian also gain 1 coin' },
			{ type: 'Item', name: 'Invisibility cloak', gain: { coins: 1 }, text: 'If this in your hand, you cant\'t lose more then 1 health from each Dark Arts event or Villian' },
			{ type: 'Ally', name: 'Hedwig', choose: { damage: 1, health: 2 }, text: '' },
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
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Item', name: 'Time-turner', gain: { coins: 1 }, text: 'You may put Spells you acquire on top of your deck instaed of in your discard pile.' },
			{ type: 'Item', name: 'Beedle the bard', choose: { coins: 2, coins_for_each: 1 }, text: 'If this in your hand, you cant\'t lose more then 1 health from each Dark Arts event or Villian' },
			{ type: 'Ally', name: 'Crokshanks', choose: { damage: 1, health: 2 }, text: '' },
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
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Item', name: 'Every - Flavour Beans', gain: { coins: 1 }, text: 'For each Alley plaed this turn, gain 1 damage' },
			{ type: 'Item', name: 'Cleansweep 11', gain: { coins: 1 }, text: 'If you defeat a Villian also gain 1 coin' },
			{ type: 'Ally', name: 'Pigwidgeon', choose: { damage: 1, health: 2 }, text: '' },
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
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Spell', name: 'Alahomora', gain: { coins: 1 }, text: '' },
			{ type: 'Item', name: 'Rememberball', gain: { coins: 1 }, text: 'If you discard this, gain 2 coins' },
			{ type: 'Item', name: 'Mandrake', choose: { damage: 1, health_one: 1 }, text: 'If this in your hand, you cant\'t lose more then 1 health from each Dark Arts event or Villian' },
			{ type: 'Ally', name: 'Trevor', choose: { damage: 1, health: 2 }, text: '' },
		]
	},
]

export default heroes