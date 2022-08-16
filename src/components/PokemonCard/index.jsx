import PropTypes from "prop-types";
import PokemonTag from "../PokemonTag";

import handlePokemonType from "../../utils/handlePokemonType";
import handlePokemonCard from "../../utils/handlePokemonCard";

const PokemonCard = ({ name, id, image, types, className }) => {
  const typesArray = types.map((type) => type?.type?.name);
  const [pokemonType] = typesArray;

  return (
    <div className={`pokecard flex items-center justify-between rounded-2xl p-4 h-[130px] cursor-pointer ${className}`} style={{ backgroundColor: handlePokemonCard(pokemonType) }}>
      <div>
        <span className="text-black/50 font-bold"># 00{id}</span>
        <h2 className="text-3xl text-white font-bold capitalize whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[180px]">{name}</h2>
        <div className="inline-grid gap-x-1 gap-y-2 grid-flow-col mt-3">
          {typesArray.map((type, idx) => (
            <PokemonTag key={idx} className="text-sm p-1 capitalize text-white rounded shadow min-w-[45px] text-center" style={{ backgroundColor: handlePokemonType(type) }}>
              {type}
            </PokemonTag>
          ))}
        </div>
      </div>
      <div>
        <img className="w-[100px] h-[100px]" src={image} alt={image} />
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

export default PokemonCard;