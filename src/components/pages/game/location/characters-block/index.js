import "./style.scss"
import React from "react"
import userLogo from '../../../../images/hermione.jpg'

const CharactersBlock = () => {
	return <div className="characters">
		<p className="location__title">Heroes</p>
		<div className="character characters__item">
			<img className="character__img" src={userLogo} alt="Hermione Granger" />
			<div>
				<p className="character__name">Hermione Granger</p>
				<div className="character-info">
					<p className="character__heals">Heals: 10</p>
					<p className="character__money">Coins: 3</p>
					<p className="character__carts">Cards: 5</p>
				</div>
			</div>
		</div>
		<div className="character characters__item">
			<img className="character__img" src={userLogo} alt="Hermione Granger" />
			<div>
				<p className="character__name">Hermione Granger</p>
				<div className="character-info">
					<p className="character__heals">Heals: 10</p>
					<p className="character__money">Coins: 3</p>
					<p className="character__carts">Cards: 5</p>
				</div>
			</div>
		</div>
		<div className="character characters__item">
			<img className="character__img" src={userLogo} alt="Hermione Granger" />
			<div>
				<p className="character__name">Hermione Granger</p>
				<div className="character-info">
					<p className="character__heals">Heals: 10</p>
					<p className="character__money">Coins: 3</p>
					<p className="character__carts">Cards: 5</p>
				</div>
			</div>
		</div>
		<div className="character characters__item">
			<img className="character__img" src={userLogo} alt="Hermione Granger" />
			<div>
				<p className="character__name">Hermione Granger</p>
				<div className="character-info">
					<p className="character__heals">Heals: 10</p>
					<p className="character__money">Coins: 3</p>
					<p className="character__carts">Cards: 5</p>
				</div>
			</div>
		</div>
	</div >
}

export default CharactersBlock