import { useLoaderData, useParams } from "react-router-dom"
import { addStoredWishList, addToStoredList } from "../../utility/addToDb";

export default function BookDetails() {
    const { bookId } = useParams();
    const data = useLoaderData();
    const book = data.find(item => item.bookId === parseInt(bookId));

    const handleMarkAsRead = (id) => {
        addToStoredList(id)
    }
    const handleWishList = (id) => {
        addStoredWishList(id)
    }

    return (
        <div className="px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Book Image */}
                <div className="flex-shrink-0 md:w-1/3 flex justify-center">
                    <img src={book.image} alt={book.bookName} className="rounded-lg shadow-md w-full max-w-xs md:max-w-sm object-cover" />
                </div>
                {/* Right: Book Details */}
                <div className="md:w-2/3 space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-2"> {book.bookName}
                    </h1>
                    <p className="text-gray-600 font-medium font-1">By: {book.author}</p>
                    <p className="text-gray-600 font-1">Publisher: {book.publisher}</p>
                    <p className="text-gray-600 font-1">Year: {book.yearOfPublishing}</p>
                    <p className="text-gray-600 font-1">Pages: {book.totalPages}</p>
                    <p className="text-gray-600 font-1">Category: {book.category}</p>
                    <p className="text-gray-600 font-1 flex items-center gap-2"> Rating: {book.rating} </p>
                    <div className="flex flex-wrap gap-2 font-2">
                        {
                            book.tags.map(tag => (<span key={tag} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm" > {tag} </span>))
                        } </div><p className="text-gray-700 font-1 leading-relaxed">{book.review}</p>
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6 font-2">
                        <button onClick={() => handleMarkAsRead(book.bookId)} className="px-6 py-2 bg-[#50B1C9] text-white font-semibold rounded-lg shadow hover:bg-cyan-700 transition">Mark as Read</button>
                        <button onClick={() => handleWishList(book.bookId)} className="px-6 py-2 bg-[#23BE0A] text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
