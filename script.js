//expand/collapse new book form
function openForm() {
    document.querySelector(".add-book").style.display = "block";
  }
  
  function closeForm() {
    document.querySelector(".add-book").style.display = "none";
  }

myLibrary = [
  {image: "book-placeholder.jpg", title: "The Lord of the Rings", author: "John R.R Tolkien", pageCount: 423, read: "No"},
  {image: "book-placeholder.jpg", title: "IT", author: "Stephen King", pageCount: 1138, read: "Yes"}
];

function book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;

    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${pageCount} pages, ${read}`)
    }
}

function displayBooks (){

    //clear library to avoid duplicating
    const getCardWrapper = document.querySelector('.card-wrapper');

    getCardWrapper.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
      let createDiv = document.createElement('div');

      createDiv.classList.add('display-card');
      createDiv.innerHTML = 
      `<div class="thumbnail">
        <img src="img/book-placeholder.jpg" alt="${myLibrary[i].title}" width="150px" height="200px">
      </div>
      <div class="book-info">
        <div class="title"><p><b>Title:</b> ${myLibrary[i].title}</p></div>
          <div class="author"><p><b>Author:</b> ${myLibrary[i].author}</p></div>
            <div class="page-count"><p><b>Page Count:</b> ${myLibrary[i].pageCount}</p></div>
              <div class="read"><p><b>Read Book?</b> ${myLibrary[i].read}</p></div>
      </div>`
      getCardWrapper.append(createDiv);  
    }
}

const newBookForm = document.querySelector('form');

newBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBookData = new FormData(newBookForm);
  const bookObj = Object.fromEntries(newBookData);

  //const newEntry = new book(tile, author, pageCount, read);

  myLibrary.push({image: "book-placeholder.jpg", title: `${bookObj.title}`, author: `${bookObj.author}`, pageCount: bookObj.pageCount, read: bookObj.read})

  displayBooks()
})

//initial display when first loaded
displayBooks()