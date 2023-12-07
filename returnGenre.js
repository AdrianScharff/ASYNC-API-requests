const artistAPI = 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=';

const returnGenre = (artist) => {
    fetch(`${artistAPI}${artist}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`)
            } 
            return response.json();
        })
        .then(data => {
            if (data.artists && data.artists.length > 0) {
                const artistObj = data.artists[0];
                const style = artistObj.strStyle;
                const genre = artistObj.strGenre;
                console.log(`${style}, ${genre}`);
            } else {
                console.log('No artist data found');
            }
        })
        .catch(error => console.error('Error fetching data: ', error));
}

returnGenre('coldplay');