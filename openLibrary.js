const openLibAPI = 'https://openlibrary.org/search.json';
const reference = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings';

const findBookAuthor = (book) => {
    const bookEncoded = encodeURIComponent(book);
    fetch(`${openLibAPI}?q=${bookEncoded}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            if (data.docs && data.docs.length > 0) {
                const bookSought = data.docs[10];
                bookSought.author_name.forEach(author => {
                    console.log(author);
                });
            }
            else {
                console.log("Book not found");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

findBookAuthor("Harry Potter");