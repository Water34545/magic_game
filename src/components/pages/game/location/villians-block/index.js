import "./style.scss"
import React from "react"
import villianLogo from '../../../../images/Crabby and Goyle.jpg'

const VilliansBlock = () => {
	return <div className="villians">
		<div className="villian villians__item">
			<div className="villian-main">
				<img className="villian__img" src={villianLogo} alt="Crabby and Goyle" />
				<p className="villian__name">Crabby and Goyle</p>
				<p className="villian__heals">Heals: 10</p>
			</div>
			<p className="villian__pover"><strong>Pover</strong>: Each time a dark Arts event or Villian causes a Hero to discard a card that hero loses 1 health</p>
			<p className="villian__reward"><strong>Reward</strong>: All heroes take 1 card</p>
		</div>
	</div>
}

export default VilliansBlock