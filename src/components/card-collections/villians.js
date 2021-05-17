import CrabbyAndGoyleIcon from "../images/villians/Crabby-and-Goyle.jpg"
import CrabbyAndGoyleImg from "../images/villians/Crabby-and-Goyle-location.png"
import DracoMalfoyIcon from "../images/villians/draco.jpg"
import DracoMalfoyImg from "../images/villians/draco-location.png"
import QuirelIcon from "../images/villians/quirel.jpg"
import QuirelImg from "../images/villians/quirel-location.png"

const villians = [
	{
		name: "Crabby and Goyle",
		text: "Each time a dark Arts event or Villian causes a Hero to discard 🗒️ that hero loses 1 ❤️",
		reward: "All heroes get 1 🗒️",
		health: 5,
		icon: CrabbyAndGoyleIcon,
		img: CrabbyAndGoyleImg
	},
	{
		name: "Draco Malfoy",
		text: "Each time a dark power ups in the location, active hero loses 2 ❤️",
		reward: "Hemove 1 dark power frome the location",
		health: 6,
		icon: DracoMalfoyIcon,
		img: DracoMalfoyImg
	},
	{
		name: "Quirinus Quirrell",
		text: "Active hero loses 1 ❤️",
		reward: "All heroes get 1 ❤️ and 1 💰",
		health: 6,
		icon: QuirelIcon,
		img: QuirelImg
	},
]

export default villians