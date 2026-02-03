import { useEffect, useState } from "react"
import { data } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("/booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);

  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold font-2 text-center mt-10 md:mt-24  mb-5 md:mb-9">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {
          books.map(book => 
            <BookCard key={book.bookId} book={book}></BookCard>
          )
        }
      </div>
    </div>
  )
}
