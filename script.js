//expand/collapse new book form
function openCloseForm() {
  let addBookDOM = document.querySelector(".add-book");
  let addBookBtnDOM = document.getElementById("addBtnText");

  if (addBookDOM.style.display === "block"){
    document.querySelector(".add-book").style.display = "none";
    addBookBtnDOM.innerHTML = "Add New Book <b>+</b>";
  } else {
    document.querySelector(".add-book").style.display = "block";
    addBookBtnDOM.innerHTML = "Add New Book <b>-</b>";
  }
}

myLibrary = [
  {image: "book-placeholder.jpg", title: "The Lord of the Rings", author: "John R.R Tolkien", pageCount: 423, read: "No", id: 0},
  {image: "book-placeholder.jpg", title: "IT", author: "Stephen King", pageCount: 1138, read: "Yes", id: 1}
];

function book(title, author, pageCount, read) {

    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.id = myLibrary.length; //increments ID
    

    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${pageCount} pages, ${read}`)
    }
}

function displayBooks (){

    //clear library to avoid duplicating
    const getCardWrapper = document.querySelector(".card-wrapper");

    getCardWrapper.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
      let createDiv = document.createElement("div");

      createDiv.classList.add("display-card");
      createDiv.innerHTML = 
        `<div class="thumbnail">
            <img src="img/book-placeholder.jpg" alt="${myLibrary[i].title}" width="150px" height="200px">
        </div>

        <div class="book-info">
          <div class="title"><p><b>Title:</b> ${myLibrary[i].title}</p></div>
            <div class="author"><p><b>Author:</b> ${myLibrary[i].author}</p></div>
              <div class="page-count"><p><b>Page Count:</b> ${myLibrary[i].pageCount}</p></div>
                <div class="read"><p><b>Read Book?</b> ${myLibrary[i].read}</p></div>
                <p>ID Number: ${myLibrary[i].id}</p>
        </div>
        
        <div class="removeBtn">
          <button class="removeBook" onclick="removeBook(this.value)" value="${myLibrary[i].id}">Remove Book</button>
        </div>
        <div class="toggleRead">
          <button id="toggleRead" onclick="toggleRead(this.value)" value="${myLibrary[i].id}">Change Read Status</button>
        </div>`
      getCardWrapper.append(createDiv);  
    }
}

const newBookForm = document.querySelector("form");

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newBookData = new FormData(newBookForm);
  const bookObj = Object.fromEntries(newBookData); 

  let addBook = new book(bookObj.title, bookObj.author, bookObj.pageCount, bookObj.read, bookObj.id)

  myLibrary.push(addBook);

  displayBooks()
})

function removeBook(buttonValue) {
  let key = "id";
  let value = buttonValue;
  let indexToRemove = myLibrary.findIndex(elem => elem[key] == value);

  myLibrary.splice(indexToRemove, 1);
  displayBooks()
}

function toggleRead(buttonValue){
  let bookID = "id";
  let value = buttonValue;
  let objIndex = myLibrary.findIndex(elem => elem[bookID] == value);

  console.log(objIndex)

  if (myLibrary[objIndex].read === "Yes") {
    myLibrary[objIndex].read = "No"
  } else if (myLibrary[objIndex].read === "No") {
    myLibrary[objIndex].read = "Yes"
  };
  
  displayBooks();
}

//initial display when first loaded
displayBooks()