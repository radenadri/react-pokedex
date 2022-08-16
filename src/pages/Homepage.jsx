import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../components/Header";
import Layout from "../components/Layout";
import PokemonLists from "../components/PokemonLists";

const Homepage = ({ allPokemons, fetchPokemons, handleTypeChange, pokemonType }) => {

  return (
    <Layout>
      <Header handleTypeChange={handleTypeChange} pokemonType={pokemonType} />
      <InfiniteScroll
        dataLength={allPokemons.length}
        next={fetchPokemons}
        hasMore={true}
        loader={<h4 className="text-center my-4">Looking for pokemons...</h4>}
        endMessage={
          <p className="text-center my-4">
            That's all pokemons we know
          </p>
        }
      >
        <PokemonLists allPokemons={allPokemons} />
      </InfiniteScroll>

    </Layout>
  );
}

export default Homepage;