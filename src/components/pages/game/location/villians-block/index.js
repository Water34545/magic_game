import "./style.scss"
import React from "react"
import villians from "../../../../card-collections/villians"

const VilliansBlock = () => {
	const { name, icon, health, text, reward } = villians[2]
	return <div className="villians">
		<p className="location__title">Villians</p>
		<div className="villian villians__item">
			<div className="villian-main">
				<img className="villian__img" src={icon} alt="Crabby and Goyle" />
				<p className="villian__name">{name}</p>
				<p className="villian__heals">Heals: {health}</p>
			</div>
			<p className="villian__pover"><strong>Pover</strong>: {text}</p>
			<p className="villian__reward"><strong>Reward</strong>: {reward}</p>
		</div>
	</div>
}

export default VilliansBlock