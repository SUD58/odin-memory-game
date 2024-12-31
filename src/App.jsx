import { Score } from "./components/Score/Score";
import { PokemonList } from "./components/PokemonList/PokemonList";
import odinProjectLogo from "./assets/odin-project-logo.png";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const bestScore = localStorage.getItem("bestScore");
    return bestScore ? parseInt(bestScore) : 0;
  });

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-zinc-100 p-6 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://pokeapi.co/"
          className="transition-all hover:drop-shadow-lg dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
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
          className="transition-all hover:drop-shadow-lg dark:hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          target="_blank"
        >
          <img src={odinProjectLogo} alt="" className="w-20" />
        </a>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pokemon Memory Game</h1>
          <p>
            Get points by clicking on an image but don&apos;t click on any more
            than once!
          </p>
        </div>
        <Score score={score} bestScore={bestScore} />
      </div>

      <PokemonList
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />

      <footer className="text-center text-sm">
        Created by{" "}
        <a
          href="https://github.com/SUD58/"
          className="text-blue-500 underline visited:text-purple-500 hover:no-underline"
          target="_blank"
        >
          Suhrud Shringarputale
        </a>{" "}
        as part of{" "}
        <a
          href="https://theodinproject.com"
          className="text-blue-500 underline visited:text-purple-500 hover:no-underline"
          target="_blank"
        >
          The Odin Project
        </a>
      </footer>
    </div>
  );
}

export default App;
