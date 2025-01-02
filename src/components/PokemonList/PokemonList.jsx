import { PokemonCard } from "./PokemonCard/PokemonCard";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export function PokemonList({ score, bestScore, setScore, setBestScore }) {
  const [pokemon, setPokemon] = useState([]);
  const [prevIds, setPrevIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const loseDialogRef = useRef(null);
  const winDialogRef = useRef(null);

  const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function getTypeStyles(type) {
    const typeStyles = {
      grass: {
        bg: "bg-green-300 hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-800",
        text: "text-green-900 dark:text-green-100",
        imgBg: "bg-green-200 dark:bg-green-600",
        shadow: "shadow-green-500 dark:shadow-green-900",
      },
      fire: {
        bg: "bg-red-300 hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-800",
        text: "text-red-900 dark:text-red-100",
        imgBg: "bg-red-200 dark:bg-red-600",
        shadow: "shadow-red-500 dark:shadow-red-900",
      },
      water: {
        bg: "bg-blue-300 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-800",
        text: "text-blue-900 dark:text-blue-100",
        imgBg: "bg-blue-200 dark:bg-blue-600",
        shadow: "shadow-blue-500 dark:shadow-blue-900",
      },
      bug: {
        bg: "bg-green-500 hover:bg-green-600 dark:bg-green-900 dark:hover:bg-green-950",
        text: "text-green-100 dark:text-green-200",
        imgBg: "bg-green-400 dark:bg-green-800",
        shadow: "shadow-green-700 dark:shadow-green-950",
      },
      normal: {
        bg: "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800",
        text: "text-gray-900 dark:text-gray-100",
        imgBg: "bg-gray-200 dark:bg-gray-600",
        shadow: "shadow-gray-500 dark:shadow-gray-900",
      },
      poison: {
        bg: "bg-purple-300 hover:bg-purple-400 dark:bg-purple-700 dark:hover:bg-purple-800",
        text: "text-purple-900 dark:text-purple-100",
        imgBg: "bg-purple-200 dark:bg-purple-600",
        shadow: "shadow-purple-500 dark:shadow-purple-900",
      },
      electric: {
        bg: "bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-800",
        text: "text-yellow-900 dark:text-yellow-100",
        imgBg: "bg-yellow-200 dark:bg-yellow-600",
        shadow: "shadow-yellow-500 dark:shadow-yellow-900",
      },
      ground: {
        bg: "bg-yellow-700 hover:bg-yellow-800 dark:bg-yellow-900 dark:hover:bg-yellow-950",
        text: "text-yellow-100 dark:text-yellow-200",
        imgBg: "bg-yellow-600 dark:bg-yellow-800",
        shadow: "shadow-yellow-900 dark:shadow-yellow-950",
      },
      fairy: {
        bg: "bg-pink-300 hover:bg-pink-400 dark:bg-pink-700 dark:hover:bg-pink-800",
        text: "text-pink-900 dark:text-pink-100",
        imgBg: "bg-pink-200 dark:bg-pink-600",
        shadow: "shadow-pink-500 dark:shadow-pink-900",
      },
      fighting: {
        bg: "bg-red-700 hover:bg-red-800 dark:bg-red-900 dark:hover:bg-red-950",
        text: "text-red-100 dark:text-red-200",
        imgBg: "bg-red-600 dark:bg-red-800",
        shadow: "shadow-red-900 dark:shadow-red-950",
      },
      psychic: {
        bg: "bg-pink-700 hover:bg-pink-800 dark:bg-pink-900 dark:hover:bg-pink-950",
        text: "text-pink-100 dark:text-pink-200",
        imgBg: "bg-pink-600 dark:bg-pink-800",
        shadow: "shadow-pink-900 dark:shadow-pink-950",
      },
      rock: {
        bg: "bg-gray-700 hover:bg-gray-800 dark:bg-gray-900 dark:hover:bg-gray-950",
        text: "text-gray-100 dark:text-gray-200",
        imgBg: "bg-gray-600 dark:bg-gray-800",
        shadow: "shadow-gray-900 dark:shadow-gray-950",
      },
      ghost: {
        bg: "bg-purple-700 hover:bg-purple-800 dark:bg-purple-900 dark:hover:bg-purple-950",
        text: "text-purple-100 dark:text-purple-200",
        imgBg: "bg-purple-600 dark:bg-purple-800",
        shadow: "shadow-purple-900 dark:shadow-purple-950",
      },
      ice: {
        bg: "bg-blue-100 hover:bg-blue-200 dark:bg-blue-300 dark:hover:bg-blue-400",
        text: "text-blue-900 dark:text-blue-100",
        imgBg: "bg-blue-50 dark:bg-blue-200",
        shadow: "shadow-blue-300 dark:shadow-blue-500",
      },
      dragon: {
        bg: "bg-purple-900 hover:bg-purple-950 dark:bg-purple-950 dark:hover:bg-purple-1000",
        text: "text-purple-100 dark:text-purple-200",
        imgBg: "bg-purple-800 dark:bg-purple-900",
        shadow: "shadow-purple-950 dark:shadow-purple-1000",
      },
      dark: {
        bg: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-950 dark:hover:bg-gray-1000",
        text: "text-gray-100 dark:text-gray-200",
        imgBg: "bg-gray-700 dark:bg-gray-900",
        shadow: "shadow-gray-900 dark:shadow-gray-1000",
      },
      steel: {
        bg: "bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800",
        text: "text-gray-100 dark:text-gray-200",
        imgBg: "bg-gray-400 dark:bg-gray-600",
        shadow: "shadow-gray-700 dark:shadow-gray-900",
      },
      flying: {
        bg: "bg-blue-100 hover:bg-blue-200 dark:bg-blue-300 dark:hover:bg-blue-400",
        text: "text-blue-900 dark:text-blue-100",
        imgBg: "bg-blue-50 dark:bg-blue-200",
        shadow: "shadow-blue-300 dark:shadow-blue-500",
      },
    };
    return (
      typeStyles[type] || {
        bg: "bg-gray-300 hover:bg-gray-400",
        text: "text-gray-900",
        imgBg: "bg-gray-200",
      }
    );
  }

  useEffect(() => {
    const storedPokemon = sessionStorage.getItem("pokemon");
    if (storedPokemon) {
      setPokemon(JSON.parse(storedPokemon));
      setLoading(false);
      return;
    }

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then((data) => {
        const validPokemon = data.results; // Array of valid Pokémon with URLs
        const randomPokemon = Array.from(
          { length: 12 },
          () => validPokemon[Math.floor(Math.random() * validPokemon.length)],
        );

        const pokeData = randomPokemon.map((poke) =>
          fetch(poke.url)
            .then((response) => response.json())
            .then((pokeDetails) => {
              // Fetch species data for Pokédex entry
              return fetch(pokeDetails.species.url)
                .then((speciesResponse) => speciesResponse.json())
                .then((speciesData) => {
                  const pokemonDetails = {
                    id: pokeDetails.id,
                    name: toTitleCase(pokeDetails.name),
                    sprite: pokeDetails.sprites.front_default || "",
                    type: pokeDetails.types[0]?.type.name || "Unknown",
                    height: pokeDetails.height / 10, // Convert height from decimeters to meters
                    weight: pokeDetails.weight / 10, // Convert weight from hectograms to kilograms
                    habitat: speciesData.habitat?.name || "Unknown",
                    shape: speciesData.shape?.name || "Unknown",
                  };

                  // Generate the Pokédex entry description
                  pokemonDetails.pokedexEntry =
                    createPokedexEntry(pokemonDetails);

                  return pokemonDetails;
                })
                .catch((error) => {
                  console.error(
                    `Error fetching species data for Pokemon ${pokeDetails.name}:`,
                    error,
                  );
                  return null; // Return null if there is an error
                });
            })
            .catch((error) => {
              console.error(
                `Error fetching details for Pokemon ${poke.name}:`,
                error,
              );
              return null; // Return null for errors
            })
            .finally(() => setLoading(false)),
        );

        Promise.all(pokeData)
          .then((detailedPokemon) => {
            const filteredPokemon = detailedPokemon.filter(Boolean); // Filter out null entries
            sessionStorage.setItem("pokemon", JSON.stringify(filteredPokemon)); // Save the entire array in sessionStorage
            setPokemon(filteredPokemon);
          })
          .catch((error) =>
            console.error("Error processing Pokémon data:", error),
          );
      })
      .catch((error) => console.error("Error fetching Pokémon list:", error));
  }, []);

  function createPokedexEntry(pokemon) {
    const { type, height, weight, habitat, shape } = pokemon;

    const typeDescription = type.includes(",")
      ? `A dual-type Pokémon with ${type.replace(",", " and ")} types.`
      : `A ${type} type Pokémon.`;

    const habitatDescription = habitat
      ? `This Pokémon is commonly found in ${habitat.toLowerCase()} habitats.`
      : "Its natural habitat is unknown.";

    const shapeDescription = shape
      ? `It has a ${shape.toLowerCase()} shape, making it easily recognizable.`
      : "";

    const heightWeightDescription = `It stands approximately ${height} meters tall and weighs around ${weight} kilograms.`;

    return `${typeDescription} ${habitatDescription} ${shapeDescription} ${heightWeightDescription}`;
  }

  function handleClick(event, id) {
    if (event.target.tagName === "BUTTON") {
      return;
    }

    shuffleCards();

    if (prevIds.includes(id)) {
      setScore(0);
      setPrevIds([]);
      loseDialogRef.current.showModal();
    } else {
      setScore(score + 1);
      if (score >= bestScore) {
        setBestScore(score + 1);
        localStorage.setItem("bestScore", score + 1);
      }
      setPrevIds([...prevIds, id]);
      if (score + 1 === 11) {
        setScore(0);
        setPrevIds([]);
        winDialogRef.current.showModal();
      }
    }
  }

  function shuffleCards() {
    const shuffledCards = [...pokemon];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      // Generate random index
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indices i and j
      const temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[j];
      shuffledCards[j] = temp;
    }
    setPokemon(shuffledCards);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <i className="fas fa-circle-notch fa-spin text-4xl text-pokemon-blue"></i>
      </div>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-stretch justify-center gap-8">
        {pokemon.map((poke) => {
          const { bg, text, imgBg, shadow } = getTypeStyles(poke.type);
          return (
            <PokemonCard
              onClick={handleClick}
              key={poke.id}
              pokeId={poke.id}
              pokeName={poke.name}
              pokeSprite={poke.sprite}
              bgColor={bg}
              textColor={text}
              imgBgColor={imgBg}
              shadowColor={shadow}
              pokedexEntry={poke.pokedexEntry}
            />
          );
        })}
      </ul>

      <dialog
        ref={loseDialogRef}
        className="fixed inset-0 rounded-lg p-8 shadow-lg backdrop:bg-black backdrop:bg-opacity-75"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4">
            <h1 className="text-3xl font-bold text-red-500">Game over!</h1>
            <p className="font-bold">You clicked the same pokemon twice!</p>
          </div>
          <button
            autoFocus
            onClick={() => loseDialogRef.current.close()}
            className="rounded-lg bg-pokemon-blue px-4 py-2 font-bold text-white transition-colors hover:bg-pokemon-blue-hover"
          >
            Restart
          </button>
        </div>
      </dialog>

      <dialog
        ref={winDialogRef}
        className="fixed inset-0 rounded-lg p-8 shadow-lg backdrop:bg-black backdrop:bg-opacity-75"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4">
            <h1 className="text-3xl font-bold text-red-500">You win!</h1>
            <p className="font-bold">Congrats you have an awesome memory!</p>
          </div>
          <button
            autoFocus
            onClick={() => winDialogRef.current.close()}
            className="rounded-lg bg-pokemon-blue px-4 py-2 font-bold text-white transition-colors hover:bg-pokemon-blue-hover"
          >
            Play again
          </button>
        </div>
      </dialog>
    </>
  );
}

PokemonList.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setBestScore: PropTypes.func.isRequired,
};
