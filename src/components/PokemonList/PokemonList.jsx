import { PokemonCard } from "./PokemonCard/PokemonCard";
import { useEffect, useState } from "react";

export function PokemonList() {
	const [pokemon, setPokemon] = useState([]);

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
			return;
		}

		fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
			.then((response) => response.json())
			.then((data) => {
				const validPokemon = data.results; // Array of valid Pokémon with URLs
				const randomPokemon = Array.from(
					{ length: 12 },
					() => validPokemon[Math.floor(Math.random() * validPokemon.length)]
				);

				const pokeData = randomPokemon.map((poke) =>
					fetch(poke.url)
						.then((response) => response.json())
						.then((data) => ({
							id: data.id,
							name: toTitleCase(data.name),
							sprite: data.sprites.front_default || "",
							type: data.types[0]?.type.name || "Unknown",
						}))
				);

				Promise.all(pokeData).then((detailedPokemon) => {
					const filteredPokemon = detailedPokemon.filter(Boolean); // Filter out null entries
					sessionStorage.setItem("pokemon", JSON.stringify(filteredPokemon)); // Save the entire array
					setPokemon(filteredPokemon);
				});
			});
	}, []);

	return (
		<ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 place-items-stretch justify-center">
			{pokemon.map((poke) => {
				const { bg, text, imgBg, shadow } = getTypeStyles(poke.type);
				return (
					<PokemonCard
						key={poke.id}
						pokeName={poke.name}
						pokeSprite={poke.sprite}
						bgColor={bg}
						textColor={text}
						imgBgColor={imgBg}
						shadowColor={shadow}
					/>
				);
			})}
		</ul>
	);
}
