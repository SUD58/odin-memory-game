import PropTypes from "prop-types";
import { useState } from "react";

export function PokemonCard({
  onClick,
  bgColor,
  textColor,
  imgBgColor,
  shadowColor,
  pokeName,
  pokeSprite,
  pokeId,
  pokedexEntry,
}) {
  const [isInfo, setIsInfo] = useState(false);

  return (
    <li
      onClick={() => onClick(event, pokeId)}
      className={`flex flex-col items-center gap-2 rounded-lg p-4 ${bgColor} cursor-pointer ${shadowColor} transition-all hover:shadow-lg`}
    >
      {isInfo ? (
        <>
          <div className="relative flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={pokeSprite} alt="" className="size-20" />
              <h2 className={`text-center text-xl font-bold ${textColor}`}>
                {pokeName}
              </h2>
            </div>
            <button
              onClick={() => setIsInfo(false)}
              className="fas fa-xmark flex aspect-square items-center justify-center rounded-md bg-red-500 p-3 hover:bg-red-700"
            ></button>
          </div>
          <p className={`text-center ${textColor}`}>{pokedexEntry}</p>
        </>
      ) : (
        <>
          <div
            className={`flex justify-center self-stretch rounded-lg ${imgBgColor} relative`}
          >
            <img src={pokeSprite} alt="" className="size-full" />
            <button
              onClick={() => setIsInfo(true)}
              className="fas fa-question fa- absolute right-2 top-2 flex aspect-square items-center justify-center rounded-md bg-pokemon-yellow p-3 hover:bg-pokemon-yellow-hover"
            ></button>
          </div>
          <h2 className={`text-center text-xl font-bold ${textColor}`}>
            {pokeName}
          </h2>
        </>
      )}
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
  pokeId: PropTypes.number.isRequired,
  pokedexEntry: PropTypes.string.isRequired,
};
