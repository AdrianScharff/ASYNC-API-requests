const apiUrl = 'https://openlibrary.org/search.json?author=';

const findAuthorBooks = (author) => {
    const authorEncoded = encodeURIComponent(author);
    fetch(`${apiUrl}${authorEncoded}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            if(data.docs && data.docs.length > 0) {
                const books = data.docs.map(book => book.title);
                const booksString = books.join(', ');
                console.log(booksString);
            } else {
                console.log('Author not found');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

findAuthorBooks('gabriel garcia marquez')