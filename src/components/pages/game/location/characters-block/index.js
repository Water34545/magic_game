import "./style.scss"
import React from "react"
import heroes from '../../../../card-collections/heroes'
import Emoji from '../../../../common/emoji'

const CharactersBlock = () => {
	return <div className="characters">
		<p className="location__title">Heroes</p>
		{heroes.map(hero =>
			<div className="character characters__item" key={hero.name}>
				<img className="character__img" src={hero.img} alt={hero.name} />
				<div>
					<p className="character__name">{hero.name}</p>
					<div className="character-info">
						<p className="character__heals"><Emoji symbol="❤️" label="heals" />: {hero.health}</p>
						<p className="character__money"><Emoji symbol="💰" label="money" />: {hero.coins}</p>
						<p className="character__damage"><Emoji symbol="⚡" label="damage" />: {hero.damage}</p>
						<p className="character__cards"><Emoji symbol="🗒️" label="cards" />: {hero.cards.length}</p>
					</div>
				</div>
			</div>
		)}
	</div >
}

export default CharactersBlock