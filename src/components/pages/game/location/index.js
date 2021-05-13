import "./style.scss"
import React from "react"
import VilliansBlock from "./villians-block"
import CharactersBlock from "./characters-block"
import LocationBlock from "./location-block"
import Arena from "./arena"

const Location = () => {
	return <div className="location">
		<div className="location-top">
			<CharactersBlock />
			<LocationBlock />
			<VilliansBlock />
		</div>
		<div className="location-bottom">
			<Arena />
		</div>
	</div>
}

export default Location