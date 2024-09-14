let libraryBooks = [];
let counter = {}; // Use an object to store genre counts

function addBook(title, author, year, genre) {
  let book = {
    title: title,
    author: author,
    year: year,
    genre: genre,
  };
  libraryBooks.push(book);



    counter[genre]++;

}

function displayAllBooks() {
  for (let i = 0; i < libraryBooks.length; i++) {
    const book = libraryBooks[i];
    console.log(
      `The book num ${i + 1} title's is ${book.title}, its author is ${
        book.author
      } in ${book.year}, ${book.genre}`
    );
    console.log('\n');
  }
}

function findBooksByAuthor(authorName) {
  for (let i = 0; i < libraryBooks.length; i++) {
    if (libraryBooks[i].author === authorName) {
      console.log(`${authorName} wrote a book named: ${libraryBooks[i].title}`);
    }
  }
}

function countBooksByGenre() {
  console.log('Books by genre:');
  for (let genre in counter) {
    console.log(`${genre}: ${counter[genre]} books`);
  }
}

function removeBook(title) {
  for (let i = 0; i < libraryBooks.length; i++) {
    if (libraryBooks[i].title === title) {
      console.log(
        `The book num ${i + 1} title's is ${
          libraryBooks[i].title
        }, its author is ${libraryBooks[i].author} in ${
          libraryBooks[i].year
        }, ${libraryBooks[i].genre} has been removed`
      );
      libraryBooks.splice(i, 1);
    }
  }
}

// Test your functions here
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Novel');
addBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction');
addBook('1984', 'George Orwell', 1949, 'Science Fiction');
addBook('Pride and Prejudice', 'Jane Austen', 1813, 'Romance');

displayAllBooks();
findBooksByAuthor('George Orwell');
countBooksByGenre();
removeBook('The Great Gatsby');
displayAllBooks();

