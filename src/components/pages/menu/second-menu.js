import userLogo from '../../images/hermione.jpg'

const SecondMenu = () => {
	return <div>
		<p className="menu-block__text">Player 1 choose your character:</p>
		<ul className="menu">
			<li className="menu-character menu__item">
				<img className='menu-character__img' src={userLogo} alt=">Hermione Granger" />
				<div className='menu-character__info'>
					<h3 className="menu-character__name menu__link">Hermione Granger</h3>
					<p className="menu-character__text">- Now if you two don't mind, I'm going to bad before either of you come up with anouther clever idea to get us killed - or worde, expelled</p>
				</div>
			</li>
			<li className="menu-character menu__item">
				<img className='menu-character__img' src={userLogo} alt=">Hermione Granger" />
				<div className='menu-character__info'>
					<h3 className="menu-character__name menu__link">Hermione Granger</h3>
					<p className="menu-character__text">- Now if you two don't mind, I'm going to bad before either of you come up with anouther clever idea to get us killed - or worde, expelled</p>
				</div>
			</li>
			<li className="menu-character menu__item">
				<img className='menu-character__img' src={userLogo} alt=">Hermione Granger" />
				<div className='menu-character__info'>
					<h3 className="menu-character__name menu__link">Hermione Granger</h3>
					<p className="menu-character__text">- Now if you two don't mind, I'm going to bad before either of you come up with anouther clever idea to get us killed - or worde, expelled</p>
				</div>
			</li>
			<li className="menu-character menu__item">
				<img className='menu-character__img' src={userLogo} alt=">Hermione Granger" />
				<div className='menu-character__info'>
					<h3 className="menu-character__name menu__link">Hermione Granger</h3>
					<p className="menu-character__text">- Now if you two don't mind, I'm going to bad before either of you come up with anouther clever idea to get us killed - or worde, expelled</p>
				</div>
			</li>
		</ul>
	</div>
}

export default SecondMenu