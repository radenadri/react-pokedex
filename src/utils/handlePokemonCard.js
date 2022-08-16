const handlePokemonCard = (pokemonCard) => {
  switch (pokemonCard) {
    case "grass":
      return '#8bbe8a'
    case "fire":
      return '#ffa756';
    case "water":
      return '#58abf6';
    case "bug":
      return '#8bd674';
    case "normal":
      return '#b5b9c4';
    case "poison":
      return '#9f6e97';
    case "electric":
      return '#f2cb55';
    case "ground":
      return '#f78551';
    case "fairy":
      return '#eba8c3';
    case "flying":
      return '#748fc9';
    case "fighting":
      return '#eb4971';
    case "rock":
      return '#6f6e78';
    case "ice":
      return '#91d8df';
    case "psychic":
      return '#ff6568';
    case "dragon":
      return '#7383b9';
    case "ghost":
      return '#8571be';
    case "steel":
      return '#4c91b2';
    default:
      return '#fafafa';
  }
}

export default handlePokemonCard;
