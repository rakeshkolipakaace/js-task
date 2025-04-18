class Book{
    constructor(title,author,bookid){
        this.title=title;
        this.author=author;
        this.bookid=bookid;
        this.isborrow=false;

    }

    borrow(){
        if(this.isborrow==false){
            console.log(`${this.title}Book is borrowed`);
            this.isborrow=true;
            
        }
        else{
            console.log(`${this.title}Book is already borrowed`);
        }
        }

    returnbook(){
        if(this.isborrow==true){
            console.log(`${this.title}Book is returned`);
            this.isborrow=false;
        }
        else{
            console.log(`${this.title}Book is already returned`);
        }               
    }

    }


    class Library{
        constructor(){
            this.book=[];
        }

        addBook(book){
            this.book.push(book);
        }

        letAvailable(){
            return this.book.filter(book=>book.isborrow==false);
        }
        letBorrowed(){
            return this.book.filter(book=>book.isborrow==true);
        }

        findbook(bookid){
            return this.book.find(book=>book.bookid==bookid);
        }
    }




   
const book1 = new Book("Java", "James Gosling", "1");
const book2 = new Book("Python", "Guido van Rossum", "2");
const book3 = new Book("C++", "Bjarne Stroustrup", "3");

const library = new Library();


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


book1.borrow(); 
book2.borrow(); 


console.log("Available Books:");
console.log(library.letAvailable());


console.log("Borrowed Books:");
console.log(library.letBorrowed());


book1.returnbook(); 


console.log("Updated Available Books:");
console.log(library.letAvailable());