import PropTypes from "prop-types";

export function PokemonCard({
	bgColor,
	textColor,
	imgBgColor,
	shadowColor,
	pokeName,
	pokeSprite,
}) {
	return (
		<li
			className={`p-4 rounded-lg gap-2 flex flex-col items-center ${bgColor} cursor-pointer ${shadowColor} hover:shadow-lg`}
		>
			<div
				className={`self-stretch flex justify-center rounded-lg ${imgBgColor}`}
			>
				<img src={pokeSprite} alt="" className="size-full" />
			</div>
			<h2 className={`font-bold text-xl text-center ${textColor}`}>
				{pokeName}
			</h2>
		</li>
	);
}

PokemonCard.propTypes = {
	bgColor: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	pokeName: PropTypes.string.isRequired,
	pokeSprite: PropTypes.string.isRequired,
	imgBgColor: PropTypes.string.isRequired,
	shadowColor: PropTypes.string.isRequired,
};