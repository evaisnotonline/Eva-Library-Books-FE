"use strict";

(function() {

const baseURL = "http://localhost:8080";

const getAllOutput = document.querySelector("#getAllOutput");
const getByIdOutput = document.querySelector("#getByIdOutput");

const BookId = document.querySelector("#BookId");

const renderBook = (book, outputDiv) => {   
    const bookColumn = document.createElement('div');
    bookColumn.classList.add("col");

    const bookCard = document.createElement('div');
    bookCard.classList.add("card");
    bookColumn.appendChild(bookCard);

    const newBook = document.createElement('div');
    newBook.classList.add("card-body");
    
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = book.title;
    bookTitle.classList.add("card-title");
    newBook.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Author: ${book.author}`;
    bookAuthor.classList.add("card-text");
    newBook.appendChild(bookAuthor);

    const bookPublisher = document.createElement("p");
    bookPublisher.innerText = `Publisher: ${book.publisher}`; 
    bookPublisher.classList.add("card-text");
    newBook.appendChild(bookPublisher);

    bookCard.appendChild(newBook);

    outputDiv.appendChild(bookColumn);
}

const getBook = () => {
    axios.get(`${baseURL}/getBook/${bookId.value}`)
    .then(res => {
        const book = res.data;
        getByIdOutput.innerHTML = "";
        renderBook(book, getByIdOutput);
    }).catch(err => console.log(err));
}

document.querySelector("button#getByIdButton").addEventListener('click', getBook);

})();