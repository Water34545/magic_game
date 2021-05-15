import "./style.scss"
import React from "react"
import locations from "../../../../card-collections/locations"

const LocationBlock = () => {
	const { name, id, maxControl, control } = locations[0]
	return <div className="location-block">
		<p className="location__title">Location</p>
		<p className="location-block__name">{name} ({id}/{locations.length})</p>
		<p className="location-block__influence">Influence of Villians ({control}/{maxControl})</p>
	</div>
}

export default LocationBlock