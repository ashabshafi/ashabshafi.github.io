let form= document.querySelector("#book-form");
let booklist=document.querySelector("#book-list");

class Book {
    constructor(title,author,shelf,status,isbn) {
        this.title=title;
        this.author=author;
        
        this.shelf=shelf;
        
        this.status=status;
        this.isbn=isbn;
    }
}
//here addding event listener
class UI{
    
    static addToBooklist(book)
    {
        let list= document.querySelector("#book-list");
        let row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        
        <td>${book.shelf}</td>
        <td>${book.status}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete"> X </a></td>`;
        //console.log(row);
        //document.querySelector("row").style.color = "blue";
        list.appendChild(row);
       // list.appendChild(row);
    }
    //clearing everything
    static clearFields(){
    document.querySelector("#title").value="";
    document.querySelector("#author").value="";
    
    document.querySelector("#shelf").value="";
    document.querySelector("#status").value="";   
    document.querySelector("#isbn").value=""; 
    }
    static showAlert(message,className){
        let div= document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container= document.querySelector(".container");
        let form=document.querySelector("#book-form");
        container.insertBefore(div,form);
        setTimeout(()=>
        {
            document.querySelector('.alert').remove();
        },3000);
    }
    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            //console.log(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAlert("book removed","warning");
           // UI.showAlert("book removed!",'success');
        }
    }

}
class Store{
    static getBooks(){
      let books;
      if (localStorage.getItem('books') === null)
      {
          books=[];
      }
          else
          {
              books=JSON.parse(localStorage.getItem('books'));
          }
          return books;
      }
      static addBook(book)
      {
          let books= Store.getBooks();
          books.push(book);
          localStorage.setItem('books',JSON.stringify(books));
      }
      static displayBooks()
      {
          let books=Store.getBooks();
          books.forEach(book=>{
              UI.addToBooklist(book);

          }
            )
      
        }
        static removeBook(isbn)
        {
            let books=Store.getBooks();
            books.forEach((book,index)=>{
                if(book.isbn === isbn){
                  books.splice(index,1);
                }
            }
            )
            localStorage.setItem('books',JSON.stringify(books));
        }
    }

form.addEventListener('submit', newBook);
booklist.addEventListener('click',removeBook);
document.addEventListener('DomContentLoaded',Store.displayBooks());

function newBook(e){
    let title=document.querySelector("#title").value,
    author=document.querySelector("#author").value,
    
    shelf=document.querySelector("#shelf").value,
    status=document.querySelector("#status").value,
    isbn=document.querySelector("#isbn").value;
    if(title==="" || author===  "" || isbn==="" || shelf==="" || status==="" )
    {
        UI.showAlert("please fill all fields!","error");
       // console.log("hello");
    }
    else{
    let book= new Book(title,author,shelf,status,isbn);
    //let ui=new UI();-> becaus we dont need any new object
    UI.addToBooklist(book);    
    UI.clearFields();
    UI.showAlert("book added","success");
    Store.addBook(book);
}
    e.preventDefault();
}
function removeBook(e){
    UI.deleteFromBook(e.target);
    e.preventDefault();

}