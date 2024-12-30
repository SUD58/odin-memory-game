import { PokemonList } from "./components/PokemonList/PokemonList";
import odinProjectLogo from "./assets/odin-project-logo.png";

function App() {
	return (
		<div className="p-6 flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 min-h-screen">
			<header>
				<div className="flex items-center gap-4 justify-center">
					<a
						href="https://pokeapi.co/"
						className="hover:drop-shadow-lg transition-all dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
						target="_blank"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
							alt=""
							className="w-56"
						/>
					</a>
					<i className="fa-2xl fa-solid fa-xmark"></i>
					<a
						href="https://theodinproject.com"
						className="hover:drop-shadow-lg transition-all dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
						target="_blank"
					>
						<img src={odinProjectLogo} alt="" className="w-20" />
					</a>
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
