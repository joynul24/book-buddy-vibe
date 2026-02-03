import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BookCard({book}) {
    const {bookId, image, bookName, publisher,rating, tags} = book || {}

  return (
   <Link to={`/bookDetails/${bookId}`}>
   <div className="card bg-base-100 shadow-sm p-6">
  <figure className="px-6 pt-6 bg-gray-100 flex justify-center">
    <img
      src={image}
      alt="Book Image"
      className="rounded h-[350px] w-[270px] object-cover"
    />
  </figure>
  <div className="mt-6">
    {/* Tags */}
    <div className="flex flex-wrap items-center gap-3 mb-3 font-1">
      {
        tags.map(tag => 
        <button className="btn btn-xs text-[#23BE0A]" key={tag}>{tag}</button>)
      }
    </div>

    {/* Title */}
    <h2 className="text-xl md:text-2xl font-bold font-2">{bookName}</h2>
    <p className="font-medium text-gray-600 mt-2 mb-3 text-sm md:text-base font-1">By: {publisher}</p>

    {/* Footer */}
    <div className="flex justify-between items-center font-1 text-gray-600">
      <p className="font-medium text-sm md:text-base">Fiction</p>
      <p className="flex items-center gap-2 text-sm md:text-base">
        {rating} <FaRegStar />
      </p>
    </div>
  </div>
   </div>
   </Link>
  )
}
