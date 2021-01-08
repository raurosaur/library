let myLibrary = [];

function Book(book) {
    this.name = book.name;
    this.author = book.author || 'anonymous';
    this.numPages = book.numPages;
    this.hasRead = book.hasRead || false;
    if(hasRead)
        this.pagesRead = this.numPages;
    else 
        this.pagesRead = book.pagesRead || 0;
}

let shelf = document.getElementsByClassName('shelves')[0],
plusBttn = document.getElementById('plus');

let len = 0, total = 0;

function addBookToLibrary() {
    if(total >= 28*2)
        return;
    if(len >= 28)
        shelf = document.getElementsByClassName('shelves')[1];

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('books');

    let addBttn = document.createElement('div');
    addBttn.classList.add('info');
    addBttn.innerText = '!';

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
}

plusBttn.addEventListener('click', () => {
    let form = document.createElement('div');
    form.classList.add('form');
    form.innerHTML = 
    `<h2>New Book</h2>
    <div class = 'cross'>x</div>
    Name:
    <input type = 'text' data-type = 'name' required>
    Author:
    <input type = 'text' data-type = 'author' required>
    Pages:
    <input type = 'number' data-type = 'numPages' required>
    Have Read:
    <input type= 'checkbox' data-type = 'hasRead'>
    Pages Read:
    <input type='number' data-type = 'pagesRead'>
    <input type ='submit'></input>`;
    document.body.appendChild(form);
    addBookToLibrary();
});

//Event Delegator

document.body.addEventListener('click', (event) =>{

    if (event.target && event.target.classList.contains('remove')){
        event.target.parentElement.remove();
    }

    if(event.target && event.target.type && event.target.type === 'submit'){
        let formEl = event.target.parentElement;
        let book = {};
        formEl.querySelectorAll('input')
        .forEach(inpEl => {
            if (inpEl.getAttribute("data-type")) {
                if (inpEl.getAttribute("data-type") === 'haveRead')
                    book[inpEl.getAttribute("data-type")] = inpEl.checked;
                else
                    book[inpEl.getAttribute("data-type")] = inpEl.value;
            }
        });
        myLibrary.push(book);
        formEl.remove();
    }

    if(event.target && event.target.classList.contains('cross')){
        event.target.parentElement.remove();
    }

    if(event.target && event.target.classList.contains('info')){
        let formEl = document.createElement('div'),
        cross = document.createElement('div'),
        display = document.createElement('div'),
        book = event.target.nextSibling.innerText;
        
        book = myLibrary[(+book)-1];
        formEl.classList.add('form');
        cross.classList.add('cross');
        display.classList.add('book-dets');
        
        formEl.style.background = 'purple';
        cross.innerText = 'x';
        display.innerHTML = 
        `Name: ${book.name} <br>
        Author: ${book.author}<br>
        Page Length: ${book.numPages}<br>
        Pages-Read: ${book.pagesRead}<br>
        Read: ${(book.hasRead) ? 'Yes' : 'No'} <br>`
        ;

        formEl.appendChild(cross);
        formEl.appendChild(display);
        document.body.appendChild(formEl);
    }
});
