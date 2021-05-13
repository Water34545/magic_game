import './card.scss'
import React from 'react'
import userLogo from '../../../images/hermione.jpg'

const Сard = () => {
	return <div className="card">
		<img className="card__img" src={userLogo} alt="Hermione Granger" />
		<p className="card__name">Allahomora</p>
		<p className="card__type card__type-spell">spell</p>
		<p className="card__text">get 1 coin</p>
	</div>
}

export default Сard