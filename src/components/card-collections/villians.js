const villians = [
    {
        name: 'Crabby and Goyle', 
        text: 'Each time a dark Arts event or Villian causes a Hero to discard a card that hero loses 1 health', 
        reward: {
            allGain: {card: 1}
        }
    },
    {
        name: 'Draco Malfoy', 
        text: 'Each time a dark power ups in the location, active hero loses 2 health', 
        reward: {
            Remove: 1
        }
    },
    {
        name: 'Quirinus Quirrell', 
        text: 'Active hero loses 1 health',
        reward: {
            allGain: {health: 1, coins: 1}
        }
    },
]

export default villians