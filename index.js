var books;
books = [{ id: 1, title: "A Fantasy Book", author: "Steve Fantasy", published: new Date("1990-06-03"), available: true }, { id: 2, title: "A Book Book", author: "Jimmy James", published: new Date("2008-05-10"), available: true }, { id: 3, title: "A Fun Book", author: "Richard Johnson", published: new Date("2020-01-01"), available: false }];
// add book function
var addBook = function (book) {
    books.push(book);
};
// defining a book variable
var memoir = {
    id: 4,
    title: "A Joke Book",
    author: "Jacob Miller",
    published: new Date("1995-01-04"),
    available: false
};
console.log(books);
addBook(memoir);
console.log(books);
// find book function
var findBookById = function (id) {
    for (var index = 0; index < books.length; index++) {
        if (books[index].id === id) {
            return books[index];
        }
    }
    // I cannot figure out why find doesn't work, feel free to give it a shot
    // return books.find((book: Book) => {book.id === id})
};
console.log(findBookById(1));
// update book function
var updateBook = function (book) {
    for (var index = 0; index < books.length; index++) {
        if (books[index].id === book.id) {
            books[index] = book;
            return true;
        }
    }
    return false;
};
console.log(books);
updateBook({ id: 1, title: "A New Book", author: "You", published: new Date(2023 - 4 - 27), available: true });
console.log(books);
var removeBook = function (id) {
    for (var index = 0; index < books.length; index++) {
        if (books[index].id === id) {
            books.splice(index, 1);
            return true;
        }
    }
    return false;
};
console.log(books);
removeBook(4);
console.log(books);
