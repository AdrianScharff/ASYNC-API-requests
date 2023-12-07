const apiFirstGeneration = 'https://pokeapi.co/api/v2/generation/1/';

const getPokemonObject = async (pokeUrl) => {
    try {
        const response = await fetch(pokeUrl);
        if (!response.ok) {
            throw new Error ('Network resposne was not ok:', response.status)
        }
        const data = await response.json();
        const moves = data.moves ? data.moves.map(move => move.move.name).join(', ') : "";
        const types = data.types ? data.types.map(type => type.type.name).join(', ') : "";
        return {
            name: data.name,
            moves: moves,
            types: types,
            height: data.height,
            weight: data.weight,
        }
    } catch(error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

const getAllPokemons = async (generationUrl) => {
    try {
        const response = await fetch(generationUrl)
        if (!response.ok) {
            throw new Error('Network response was not ok:', response.status);
        }
        const data = await response.json();
        const allPokemons = [];
        for (const pokemon of data.pokemon_species) {
            const pokeObj = await getPokemonObject(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
            allPokemons.push(pokeObj);
        }
        return allPokemons;
    } catch(error) {
        console.error(error);
    }
}

const fetchAndLogPokemons = async () => {
    try {
        const result = await getAllPokemons(apiFirstGeneration);
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}

fetchAndLogPokemons();