const shopCards = [
	{ type: 'Spell', name: 'Wingardium leviosa', gain: { coin: 1 }, text: 'You may put Items you acquire on top of your deck instaed of in your discard pile. Get 1 💰', price: 2 },
	{ type: 'Spell', name: 'Wingardium leviosa', gain: { coin: 1 }, text: 'You may put Items you acquire on top of your deck instaed of in your discard pile. Get 1 💰', price: 2 },
	{ type: 'Spell', name: 'Wingardium leviosa', gain: { coin: 1 }, text: 'You may put Items you acquire on top of your deck instaed of in your discard pile. Get 1 💰', price: 2 },
	{ type: 'Spell', name: 'Wingardium leviosa', gain: { coin: 1 }, text: 'You may put Items you acquire on top of your deck instaed of in your discard pile. Get 1 💰', price: 2 },
	{ type: 'Spell', name: 'Lumos', allGain: { card: 1 }, text: 'All heroes Get 1 🗒️', price: 4 },
	{ type: 'Spell', name: 'Lumos', allGain: { card: 1 }, text: 'All heroes Get 1 🗒️', price: 4 },
	{ type: 'Spell', name: 'Disendo', gain: { damage: 2 }, text: 'Hit 1 ⚡ to villian', price: 5 },
	{ type: 'Spell', name: 'Disendo', gain: { damage: 2 }, text: 'Hit 1 ⚡ to villian', price: 5 },
	{ type: 'Spell', name: 'Incendiodo', gain: { damage: 1, card: 1 }, text: 'Hit 1 ⚡ to villian, and Get 1 🗒️', price: 4 },
	{ type: 'Spell', name: 'Incendiodo', gain: { damage: 1, card: 1 }, text: 'Hit 1 ⚡ to villian, and Get 1 🗒️', price: 4 },
	{ type: 'Spell', name: 'Incendiodo', gain: { damage: 1, card: 1 }, text: 'Hit 1 ⚡ to villian, and Get 1 🗒️', price: 4 },
	{ type: 'Spell', name: 'Incendiodo', gain: { damage: 1, card: 1 }, text: 'Hit 1 ⚡ to villian, and Get 1 🗒️', price: 4 },
	{ type: 'Spell', name: 'Reparo', choose: { coin: 2, card: 1 }, text: 'Get 1 🗒️ or Get 2 💰', price: 3 },
	{ type: 'Spell', name: 'Reparo', choose: { coin: 2, card: 1 }, text: 'Get 1 🗒️ or Get 2 💰', price: 3 },
	{ type: 'Spell', name: 'Reparo', choose: { coin: 2, card: 1 }, text: 'Get 1 🗒️ or Get 2 💰', price: 3 },
	{ type: 'Spell', name: 'Reparo', choose: { coin: 2, card: 1 }, text: 'Get 1 🗒️ or Get 2 💰', price: 3 },
	{ type: 'Spell', name: 'Reparo', choose: { coin: 2, card: 1 }, text: 'Get 1 🗒️ or Get 2 💰', price: 3 },
	{ type: 'Spell', name: 'Reparo', choose: { coin: 2, card: 1 }, text: 'Get 1 🗒️ or Get 2 💰', price: 3 },
	{ type: 'Item', name: 'Quidditch gear', gain: { damage: 1, health: 1 }, text: 'Hit 1 ⚡ to villian, and gain 1 ❤️', price: 3 },
	{ type: 'Item', name: 'Quidditch gear', gain: { damage: 1, health: 1 }, text: 'Hit 1 ⚡ to villian, and gain 1 ❤️', price: 3 },
	{ type: 'Item', name: 'Quidditch gear', gain: { damage: 1, health: 1 }, text: 'Hit 1 ⚡ to villian, and gain 1 ❤️', price: 3 },
	{ type: 'Item', name: 'Quidditch gear', gain: { damage: 1, health: 1 }, text: 'Hit 1 ⚡ to villian, and gain 1 ❤️', price: 3 },
	{ type: 'Item', name: 'Essence of dittany', anyOne: { health: 2 }, text: 'Any one hero gain 2 ❤️', price: 2 },
	{ type: 'Item', name: 'Essence of dittany', anyOne: { health: 2 }, text: 'Any one hero gain 2 ❤️', price: 2 },
	{ type: 'Item', name: 'Essence of dittany', anyOne: { health: 2 }, text: 'Any one hero gain 2 ❤️', price: 2 },
	{ type: 'Item', name: 'Essence of dittany', anyOne: { health: 2 }, text: 'Any one hero gain 2 ❤️', price: 2 },
	{ type: 'Item', name: 'Golden snitch', gain: { coin: 2, card: 1 }, text: 'Get 2 💰 and Get 1 🗒️', price: 5 },
	{ type: 'Item', name: 'Sorting hat', gain: { coin: 2 }, text: 'You may put Allies you acquire on top of your deck instaed of in your discard pile. Get 2 💰', price: 4 },
	{ type: 'Ally', name: 'Rubeus Hagrid', gain: { damage: 1 }, allGain: { health: 1 }, text: 'Hit 1 ⚡ and all heroes gain 1 ❤️', price: 4 },
	{ type: 'Ally', name: 'Oliver Wood', gain: { damage: 1 }, text: 'Hit 1 ⚡, If you defeat a Villian. Any one Hero gain 2 ❤️', price: 3 },
	{ type: 'Ally', name: 'Albus Bumbledore', allGain: { damage: 1, coin: 1, health: 1, card: 1 }, text: 'All gain 1 ❤️, get 1 💰, hit 1 ⚡ and get 1 🗒️', price: 8 },
]

export default shopCards