const myLibrary = [];

function book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;

    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${pageCount} pages, ${read}`)
    }
}

const bookOne = new book('The Lord Of The Rings', 'John Ronald Reuel Tolkien', 423, 'Not read')

bookOne.info()