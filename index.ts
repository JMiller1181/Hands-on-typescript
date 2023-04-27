interface Book {
    id: number,
    title: string,
    author: string,
    published: Date,
    available: boolean
}
let books: Book[];
books = [{id: 1, title: "A Fantasy Book", author: "Steve Fantasy", published: new Date("1990-06-03"), available: true}, {id: 2, title: "A Book Book", author: "Jimmy James", published: new Date("2008-05-10"), available: true}, {id: 3, title: "A Fun Book", author: "Richard Johnson", published: new Date("2020-01-01"), available: false}];
// add book function
const addBook = function(book: Book):void {
    books.push(book);
}
// defining a book variable
let memoir = {
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
const findBookById = function(id: number): Book | undefined {
        for (let index = 0; index < books.length; index++) {
        if (books[index].id === id) {
            return books[index];
        }
    }
    // I cannot figure out why find doesn't work, feel free to give it a shot
    // return books.find((book: Book) => {book.id === id})
}
console.log(findBookById(1));
// update book function
const updateBook = function(book: Book): boolean {
        for (let index = 0; index < books.length; index++) {
        if (books[index].id === book.id) {
            books[index] = book;
            return true;
        }
    }
    return false;
}
console.log(books);
updateBook({id: 1, title: "A New Book", author: "You", published: new Date(2023-4-27), available: true})
console.log(books);

const removeBook = function(id: number): boolean {
        for (let index = 0; index < books.length; index++) {
        if (books[index].id === id) {
            books.splice(index,1);
            return true;
        }
    }
    return false;
}
console.log(books);
removeBook(4);
console.log(books);