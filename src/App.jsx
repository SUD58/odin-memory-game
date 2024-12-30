import { PokemonList } from "./components/PokemonList/PokemonList";

function App() {
	return (
		<div className="p-8 flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen">
			<header>
				<div className="flex items-center gap-4 justify-center">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
						alt=""
						className="w-56"
					/>
					<i className="fa-2xl fa-solid fa-xmark"></i>
					<img
						src="./src/assets/odin-project-logo.png"
						alt=""
						className="w-20"
					/>
				</div>
				<h1 className="text-3xl font-bold">Pokemon Memory Game</h1>
				<p>
					Get points by clicking on an image but don&apos;t click on any more
					than once!
				</p>
			</header>

			<PokemonList />

			<footer className="text-center text-sm">
				Created by{" "}
				<a
					href="https://github.com/SUD58/"
					className="underline text-blue-500 hover:no-underline visited:text-purple-500"
					target="_blank"
				>
					Suhrud Shringarputale
				</a>{" "}
				as part of{" "}
				<a
					href="https://theodinproject.com"
					className="underline text-blue-500 hover:no-underline visited:text-purple-500"
					target="_blank"
				>
					The Odin Project
				</a>
			</footer>
		</div>
	);
}

export default App;
