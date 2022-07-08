let books = [];
let counter=1;
module.exports = class Book {

    //id, title, ISBN, publishedDate, author
    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        //this.id = Math.floor(Math.random() * 100000).toString();//Math.random().toString();
        this.id = counter++; 
        
        books.push(this);
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
        // console.log(this);
        // console.log('<<<<<<<<<<<<<<<<<<<');

        return this;
    }

    update() {
        const index = books.findIndex(b => b.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }
    }

    static fetchAll() {
        return books;
    }

    static findById(bookId) {
        const index = books.findIndex(b => b.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(b => b.id === bookId);
        if (index > -1) {
            books = books.filter(b => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}