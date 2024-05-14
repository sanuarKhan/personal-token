let books = [];

function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = parseInt(document.getElementById('pagesNumber').value);

    console.log(bookName,authorName,bookDescription,pageNumber)
    
    if(bookName && authorName && bookDescription && !isNaN(pageNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pageNumber: pageNumber
        };
        
        books.push(book);
        
        showbooks();
        clearInputs();
    } else{
        alert('Please fill in all fields correctly.');
    }
}



function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pageNumber} mins</p>
        
        <button onclick="deletebook(${index})">Delete</button>`);
        document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deletebook(index){
    books.splice(index, 1);
    
    showbooks();
}

