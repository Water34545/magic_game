import './style.scss'
import React from 'react'
import Сard from './card'
import heroes from '../../../card-collections/heroes'

const HeroBlock = () => {
	const { img, name, text, cards } = heroes[0]
	return <div className="hero-block">
		<div className="hero-block-info">
			<div className="hero-block-info__header">
				<img className="hero-block-info__img" src={img} alt={name} />
				<h2 className="hero-block-info__name">{name}</h2>
			</div>
			<p className="hero-block-info__text">{text}</p>
		</div>
		<div className="hero-block-cards">
			{cards.map((card, index) =>
				<div className="hero-block-cards__item" key={`${card.name}-${index}`}><Сard card={card} /></div>
			)}
		</div>
	</div>
}

export default HeroBlock