import React from 'react'
import heroes from '../../card-collections/heroes'

const СharacterMenu = () => {
	return <div>
		<p className="menu-block__text">Player 1 choose your character:</p>
		<ul className="menu">
			{heroes.map(hero =>
				<li className="menu-character menu__item" key={hero.name}>
					<img className="menu-character__img" src={hero.img} alt={hero.name} />
					<div className="menu-character__info">
						<h3 className="menu-character__name menu__link">{hero.name}</h3>
						<p className="menu-character__text">{hero.text}</p>
					</div>
				</li>
			)}
		</ul>
	</div>
}

export default СharacterMenu