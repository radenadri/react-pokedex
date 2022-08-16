import { Fragment } from "react";

const AboutSection = ({ pokemonSpecies, pokemonDetail }) => (
  <>
    <h3 className="text-2xl font-semibold">About</h3>
    <p className="text-neutral-500">{pokemonSpecies?.flavor_text_entries?.[0]?.flavor_text}</p>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <span className="text-neutral-500 flex-1">Weight</span>
        <span>{`${pokemonDetail.weight / 10} kg`}</span>
      </div>
      <div className="flex gap-4">
        <span className="text-neutral-500 flex-1">Height</span>
        <span>{`${pokemonDetail.height * 10} cm`}</span>
      </div>
      <div className="flex gap-4">
        <span className="text-neutral-500 flex-1">Abilities</span>
        <span>
          {pokemonDetail.abilities?.map((ability, index) => (
            <Fragment key={ability.slot}>{(index ? ", " : "") + ability.ability.name}</Fragment>
          ))}
        </span>
      </div>
    </div>
  </>
)

export default AboutSection;