const baseAPI = 'https://swapi.dev/api/people/';

const getFilmsFromPerson = (number) => {
    fetch(`${baseAPI}${number}/?format=json`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            if(data.name) {
                console.log('Name of character: ', data.name);
                if (data.films) {
                    const filmNums = data.films.map(link => {
                        const parts = link.split('/');
                        return parts[parts.length - 2];
                    });
                    const filmNumsString = filmNums.join(', ');
                    console.log('Films they appear:', filmNumsString);
                } else {
                    console.log('No films found');
                }
            } else {
                console.log('Character not found');
            }
        })
        .catch(error => console.error('Error fetching data:', error))
}

getFilmsFromPerson(10);