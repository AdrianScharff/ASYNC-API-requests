const charmanderApi = 'https://pokeapi.co/api/v2/pokemon/4/';

fetch(charmanderApi)
    .then(response => {
        if (!response.ok) {
            throw new Error (`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const types = data.types.map(type => type.type.name);
        console.log(`Types of Charmender: ${types.join(', ')}`);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });