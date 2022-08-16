const Header = ({ handleTypeChange, pokemonType }) => (
  <div className="flex flex-col gap-3">
    <h1 className="text-5xl font-semibold">Pokedéx</h1>
    <p className="text-neutral-500">Filter pokemon by types</p>
    <div className="mt-1 relative rounded-md shadow-sm">
      <select
        onChange={handleTypeChange}
        name="type"
        id="type"
        className="focus:ring-violet-500 bg-neutral-100 focus:border-violet-500 block w-full py-4 sm:text-sm border-neutral-300 rounded-md">
          <option disabled defaultValue={'all'} selected>Select pokemon type</option>
          {pokemonType.map(({name}, idx) => <option key={idx} value={name}>{name}</option>)}
      </select>
    </div>
  </div>
);

export default Header;
