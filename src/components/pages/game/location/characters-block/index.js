import "./style.scss"
import React from "react"
import heroes from '../../../../card-collections/heroes'

const CharactersBlock = () => {
	return <div className="characters">
		<p className="location__title">Heroes</p>
		{heroes.map(hero =>
			<div className="character characters__item" key={hero.name}>
				<img className="character__img" src={hero.img} alt={hero.name} />
				<div>
					<p className="character__name">{hero.name}</p>
					<div className="character-info">
						<p className="character__heals">Heals: {hero.health}</p>
						<p className="character__money">Coins: {hero.coins}</p>
						<p className="character__damage">Damage: {hero.damage}</p>
						<p className="character__cards">Cards: {hero.cards.length}</p>
					</div>
				</div>
			</div>
		)}
	</div >
}

export default CharactersBlock