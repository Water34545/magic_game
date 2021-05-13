import './style.scss'
import React from 'react'
import Location from './location'
import HeroBlock from './hero-block'

const GamePage = () => {
	return <div className="game-page">
		<Location />
		<HeroBlock />
	</div>
}

export default GamePage