import PokemonTag from "../PokemonTag";
import handlePokemonType from "../../utils/handlePokemonType";

const DescriptionSection = ({ pokemonDetail, pokemonTypesArray, pokemonImg }) => (
  <>
    <span className="text-black/50 font-bold"># 00{pokemonDetail?.id}</span>
    <h2 className="text-3xl text-white font-bold capitalize whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[180px]">{pokemonDetail?.name}</h2>
    <div className="inline-grid gap-x-1 gap-y-2 grid-flow-col mt-3">
      {pokemonTypesArray?.map((type, idx) => (
        <PokemonTag key={idx} className="text-sm p-1 capitalize text-white rounded shadow min-w-[45px] text-center" style={{ backgroundColor: handlePokemonType(type) }}>
          {type}
        </PokemonTag>
      ))}
    </div>
    <img className="mx-auto" src={pokemonImg} alt={pokemonImg} />
  </>
);

export default DescriptionSection;