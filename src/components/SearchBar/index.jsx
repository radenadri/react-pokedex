const SearchBar = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-semibold">Pokedéx</h1>
      <p>Search for Pokémon by name or using the National Pokédex number</p>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
    </div>
  );
};

export default SearchBar;
