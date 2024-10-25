//expand/collapse new book form
function openForm() {
    document.querySelector(".add-book").style.display = "block";
  }
  
  function closeForm() {
    document.querySelector(".add-book").style.display = "none";
  }

myLibrary = [
  {image: "book-placeholder.jpg", title: "The Lord of the Rings", author: "John R.R Tolkien", pageCount: 423, read: false},
  {image: "book-placeholder.jpg", title: "IT", author: "Stephen King", pageCount: 1138, read: true}
];

function book(image, title, author, pageCount, read) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;

    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${pageCount} pages, ${read}`)
    }
}

function displayBooks (){

    for (let i = 0; i < myLibrary.length; i++){

      let getCardWrapper = document.querySelector('.card-wrapper');
      let createDiv = document.createElement('div');

      createDiv.classList.add('display-card');
      createDiv.innerHTML = 
      `<div class="thumbnail">
        <img src="img/${myLibrary[i].image}" alt="${myLibrary[i].title}" width="150px" height="200px">
      </div>
      <div class="book-info">
        <div class="title"><p><b>Title:</b> ${myLibrary[i].title}</p></div>
          <div class="author"><p><b>Author:</b> ${myLibrary[i].author}</p></div>
            <div class="page-count"><p><b>Page Count:</b> ${myLibrary[i].pageCount}</p></div>
              <div class="read"><p><b>${myLibrary[i].read}</b></p></div>
      </div>`
      getCardWrapper.append(createDiv);  
    }

  console.log(myLibrary[1].pageCount)
}

displayBooks()