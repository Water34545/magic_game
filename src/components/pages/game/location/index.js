import "./style.scss"
import React from "react"
import locations from "../../../card-collections/locations"
import VilliansBlock from "./villians-block"
import CharactersBlock from "./characters-block"
import LocationBlock from "./location-block"
import Arena from "./arena"

const Location = () => {
	const { img } = locations[0]
	return <div className="location" style={{ backgroundImage: `url(${img})` }}>
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