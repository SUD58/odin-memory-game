import PropTypes from "prop-types";

export function PokemonCard({
	onClick,
	bgColor,
	textColor,
	imgBgColor,
	shadowColor,
	pokeName,
	pokeSprite,
	pokeId,
}) {
	return (
		<li
			onClick={() => onClick(pokeId)}
			className={`p-4 rounded-lg gap-2 flex flex-col items-center ${bgColor} cursor-pointer ${shadowColor} hover:shadow-lg transition-all`}
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
	onClick: PropTypes.func.isRequired,
	bgColor: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	pokeName: PropTypes.string.isRequired,
	pokeSprite: PropTypes.string.isRequired,
	imgBgColor: PropTypes.string.isRequired,
	shadowColor: PropTypes.string.isRequired,
};
