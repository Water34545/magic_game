import './style.scss'
import React from 'react'
import menuSound from '../../music/menu-bg.mp3'

import PlayersMenu from './players-menu'
import –°haracterMenu from './character-menu'
import StartMenu from './start-menu'

const MenuPage = () => {
	return <div className="menu-page">
		<audio src={menuSound} autoPlay loop></audio>
		<div className="menu-block">
			<h1 className="menu-block__title">Battle for Hogwarts</h1>
			{false && <StartMenu />}
			{false && <PlayersMenu />}
			{true && <–°haracterMenu />}
		</div>
	</div>
}

export default MenuPage