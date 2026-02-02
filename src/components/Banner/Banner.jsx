import bannerImg from "../../assets/banner-img.png"

export default function Banner() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-10 md:py-20 px-4 md:px-12 lg:px-28 gap-8 bg-gray-100 rounded-3xl mt-7 md:mt-12">
            {/* Text Section */}
            <div className="text-center md:text-left max-w-md md:max-w-lg">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 font-2"> Books to freshen up your bookshelf
                </h2>
                <button className="bg-[#23BE0A] hover:bg-green-700 font-semibold text-white px-6 py-3 rounded-lg shadow-md transition duration-300 font-1 border-none"> View The List
                </button>
            </div>
            {/* Image Section */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2">
                <img className="w-full max-w-xs md:max-w-md lg:w-[318px]" src={bannerImg} alt="Books Banner" />
            </div>
        </div>
    )
}
