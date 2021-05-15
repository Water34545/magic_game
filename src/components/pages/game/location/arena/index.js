import React from "react"
import villians from "../../../../card-collections/villians"

const Arena = () => {
	const { img, name } = villians[0]
	return <div>
		<img src={img} alt={name} />
	</div>
}

export default Arena