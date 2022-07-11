const setById = function (bookId) {

    fetch("http://localhost:3000/books/" + bookId)
        .then((res) => res.json())
        .then((res) => {

            document.getElementById('updateBtn').style.display='inline';
            console.log(res.id);

            document.getElementById("bookId").value = res.id;
            document.getElementById("title").value = res.title;
            document.getElementById("isbn").value = res.isbn;
            document.getElementById("date").value = res.date;
            document.getElementById("author").value = res.author;
        });
}


const deleteById = function (bookId) {
    fetch("http://localhost:3000/books/" + bookId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        //alert("Record has been successfully delete.");
        console.log(">>>>>>>>>>>>>>>>.");
        console.log(res);

        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(books => {
                let header = `
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>isbn</th>
                <th>Author</th>
                <th>Action</th>
            </tr>`;
                let html = '';
                books.forEach(book => {
                    html += `
                <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.isbn}</td>
                <td>${book.author}</td>
                <td>
                    <input type="button" id="btn-e${book.id}" onclick="setById(${book.id})"  value="Edit"/>
                    <input type="button" id="btn-d${book.id}" onclick="deleteById(${book.id})" value="Delete"/>
                </td>
              </tr>                      
                `;
                });
                document.getElementById('bookTbl').innerHTML = header + html;
            });

    });
};




window.onload = function () {


    document.getElementById('submitBtn').onclick = async function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const isbn = document.getElementById('isbn').value;
        const date = document.getElementById('date').value;
        const author = document.getElementById('author').value;

        let result = await fetch('http://localhost:3000/books', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "title": title,
                    "isbn": isbn,
                    "date": date,
                    "author": author
                }
            ),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const book = await result.json();

        document.getElementById('bookTbl').innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.isbn}</td>
            <td>${book.author}</td>
            <td>
            <input type="button" id="btn-e${book.id}"   value="Edit"/>
            <input type="button" id="btn-d${book.id}" onclick="deleteById(${book.id})" value="Delete"/>
        </td>

        </tr>
        `;
        console.log(result);
    }

    const updateBook = function(bookId){
        event.preventDefault();
        const title = document.getElementById('title').value;
        const isbn = document.getElementById('isbn').value;
        const date = document.getElementById('date').value;
        const author = document.getElementById('author').value;
    
        let result = fetch('http://localhost:3000/books' + bookId, {
            method: 'put',
            body: JSON.stringify(
                {
                    "title": title,
                    "isbn": isbn,
                    "date": date,
                    "author": author
                }
            ),
            headers: {
                'Content-type': 'application/json'
            }
        });
    
        const book = result.json();
    
        console.log(book);
        
    }
    


    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => {
        let html = document.getElementById('bookTbl').innerHTML;
        books.forEach(book => {
            html += `
            <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.isbn}</td>
            <td>${book.author}</td>
            <td>
                <input type="button" id="btn-e${book.id}" onclick="setById(${book.id})" value="Edit"/>
                <input type="button" id="btn-d${book.id}" onclick="deleteById(${book.id})" value="Delete"/>
            </td>
            </tr>                      
            `;
        });
        document.getElementById('bookTbl').innerHTML = html;
    });
}