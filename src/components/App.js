import './App.scss'

import React from 'react'
import MenuPage from './pages/menu'
import GamePage from './pages/game'

const App = () => {
	return (
		<div className="App">
			{false && <MenuPage />}
			{true && <GamePage />}
		</div>
	)
}

export default App