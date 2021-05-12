import './style.scss'
import React from 'react'
import menuSound from '../../music/menu-bg.mp3'

import FirstMenu from './first-menu'
import SecondMenu from './second-menu'

const MenuPage = () => {
	return <div className="menu-page">
		<audio src={menuSound} autoPlay loop></audio>
		<div className="menu-block">
			<h1 className="menu-block__title">Battle for Hogwarts</h1>
			{false && <FirstMenu />}
			{true && <SecondMenu />}
		</div>
	</div>
}

export default MenuPage