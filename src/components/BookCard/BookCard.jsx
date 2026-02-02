import { FaRegStar } from "react-icons/fa";

export default function BookCard({book}) {
    console.log(book)
    const {image, bookName, publisher,rating} = book || {}
  return (
//     <div className="card bg-base-100  shadow-sm p-6">
//   <figure className="px-10 pt-10 bg-gray-100">
//     <img
//       src={image}
//       alt="Book Image"
//       className="rounded h-[350px] w-[270px] object-cover" />
//   </figure>
//   <div className="mt-6">
//     <div className="flex items-center gap-3 mb-3">
//         <button className="btn text-[#23BE0A]">Young Adult</button>
//         <button className="btn text-[#23BE0A]">Identity</button>
//     </div>
//     <h2 className="text-2xl font-bold font-2">{bookName}</h2>
//     <p className="font-medium font-1 text-gray-600 mt-2 mb-3">By: {publisher}</p>
//     <div className="border flex justify-between items-center">
//       <p className="font-medium text-gray-700 font-1">Fiction</p>
//       <p className="flex items-center gap-2">{rating} <FaRegStar /></p>
//     </div>
//   </div>
//     </div>
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
      <button className="btn text-[#23BE0A] px-4 py-2 text-sm md:text-base">Young Adult</button>
      <button className="btn text-[#23BE0A] px-4 py-2 text-sm md:text-base">Identity</button>
    </div>

    {/* Title */}
    <h2 className="text-xl md:text-2xl font-bold">{bookName}</h2>
    <p className="font-medium text-gray-600 mt-2 mb-3 text-sm md:text-base font-1">By: {publisher}</p>

    {/* Footer */}
    <div className="border flex justify-between items-center p-2 font-1">
      <p className="font-medium text-gray-700 text-sm md:text-base">Fiction</p>
      <p className="flex items-center gap-2 text-sm md:text-base">
        {rating} <FaRegStar />
      </p>
    </div>
  </div>
</div>
  )
}
