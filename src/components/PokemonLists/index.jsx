import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import PokemonCard from "../PokemonCard";

const PokemonLists = ({ allPokemons }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {allPokemons.map((pokemon, idx) => (
        <Link to={`/pokemon/${pokemon.id}`} key={idx} className="transform hover:-translate-y-2 hover:-rotate-2 transition-transform duration-200">
          <PokemonCard
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.other["official-artwork"].front_default}
            types={pokemon.types}
          />
        </Link>
      ))}
    </div>
  )
}

PokemonLists.propTypes = {
  allPokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.shape({}),
      name: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
}

export default PokemonLists;