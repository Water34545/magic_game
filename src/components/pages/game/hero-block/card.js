import "./card.scss"
import React from "react"
import PropTypes from "prop-types"

const Сard = ({ card }) => {
	return <div className="card">
		<img className="card__img" src={card.img} alt={card.name} />
		<p className="card__name">
			<span className="card__type">{card.type}</span>: {card.name}
		</p>
		<p className="card__text">{card.text}</p>
	</div>
}

Сard.propTypes = {
	card: PropTypes.object.isRequired,
}

export default Сard