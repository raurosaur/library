let myLibrary = [];

function Book(book) {
    this.name = book.name;
    this.author = book.author || 'anonymous';
    this.numPages = book.numPages;
    this.hasRead = book.hasRead || false;
    this.pagesRead = book.pagesRead || 0;
}


//DOM Elements
/* 
            <div class = 'books'>
                <div class = 'add'>+</div>
                <div class='text'></div>
                <div class='remove'>-</div>
            </div>

*/

let shelf = document.getElementsByClassName('shelves')[0],
plusBttn = document.getElementById('plus');

let len = 0, total = 0;

function addBookToLibrary(book = {}) {
    if(total >= 28*2)
        return;
    if(len >= 28){
        shelf = document.getElementsByClassName('shelves')[1];
        len = 0;
    }
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('books');

    let addBttn = document.createElement('div');
    addBttn.classList.add('add');
    addBttn.innerText = '+';

    let  text = document.createElement('div');
    text.classList.add('text');
    text.innerText = ++len;

    let removeBttn = document.createElement('div');
    removeBttn.classList.add('remove');
    removeBttn.innerText = '-';

    shelf.appendChild(bookDiv);
    bookDiv.appendChild(addBttn);
    bookDiv.appendChild(text);
    bookDiv.appendChild(removeBttn);
    total++;
    myLibrary.push(book);
}

plusBttn.addEventListener('click', addBookToLibrary);

window.addEventListener('click', () =>{
    let removeBttns = document.getElementsByClassName('remove');
    for (let el of removeBttns) {
        el.addEventListener('click', event => {
            event.target.parentElement.remove();
            len--;
            total--;
        });
    }
});

