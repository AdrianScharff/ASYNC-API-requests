const getPokemonData = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
  
    const pokemonData = {
      name: data.name,
      moves: data.moves.map((move) => move.move.name),
      types: data.types.map((type) => type.type.name),
      height: data.height,
      weight: data.weight,
    };
  
    return pokemonData;
  };
  
  const getFirst151Pokemons = async () => {
    const pokemonArray = [];
  
    for (let i = 1; i <= 151; i++) {
      const pokemonData = await getPokemonData(i);
      pokemonArray.push(pokemonData);
    }
  
    return pokemonArray;
  };
  
  // Usage
  getFirst151Pokemons().then((result) => {
    console.log(result);
  });
  