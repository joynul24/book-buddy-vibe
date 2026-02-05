import { Link } from "react-router-dom";

export default function ReadBookTab({book, onDelete}) {
  return (
     <div 
      key={book.bookId} 
      className="flex flex-col md:flex-row gap-6 mt-8 mb-8 p-6 bg-white shadow rounded-lg font-1"
    >
      {/* Left: Image */}
      <div className="bg-gray-200 flex justify-center items-center p-4 md:w-1/4 rounded-2xl">
        <img 
          className="w-32 h-44 md:w-40 md:h-56 object-cover rounded" 
          src={book.image} 
          alt={book.bookName} 
        />
      </div>

      {/* Right: Details */}
      <div className="flex-1 space-y-2">
        <h2 className="text-xl md:text-2xl font-bold font-2">{book.bookName}</h2>
        <p className="text-gray-700 font-medium">Author: {book.author}</p>
        <p className="text-gray-600">Publisher: {book.publisher}</p>
        <p className="text-gray-600">Year: {book.yearOfPublishing}</p>
        <p className="text-gray-600">Pages: {book.totalPages}</p>
        <p className="text-gray-600">Category: {book.category}</p>
        <p className="text-gray-600">Rating: {book.rating}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {book.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-4"> 
          <Link to={`/bookDetails/${book.bookId}`}> 
        <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow hover:bg-cyan-700 transition"> View Details 
          </button> 
          </Link> 
          <button onClick={() => onDelete(book.bookId)} className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition" > Delete </button>
        </div>
      </div>
    </div>
  )
}
