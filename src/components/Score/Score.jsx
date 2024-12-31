import PropTypes from "prop-types";

export function Score({ score, bestScore }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-pokemon-yellow">
        Score: <span>{score}</span>
      </h2>
      <h3 className="font-bold text-pokemon-blue">Best Score: {bestScore}</h3>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};
