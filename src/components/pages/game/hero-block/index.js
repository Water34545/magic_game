import './style.scss'
import React from 'react'
import Сard from './card'
import userLogo from '../../../images/hermione.jpg'

const HeroBlock = () => {
	return <div className="hero-block">
		<div className="hero-block-info">
			<div className="hero-block-info__header">
				<img className="hero-block-info__img" src={userLogo} alt="Hermione Granger" />
				<h2 className="hero-block-info__name">Hermione Granger</h2>
			</div>
			<p className="hero-block-info__text">- Now if you two don&apos;t mind, I&apos;m going to bad before either of you come up with anouther clever idea to get us killed - or worde, expelled</p>
		</div>
		<div className="hero-block-cards">
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
			<div className="hero-block-cards__item"><Сard /></div>
		</div>
	</div>
}

export default HeroBlock