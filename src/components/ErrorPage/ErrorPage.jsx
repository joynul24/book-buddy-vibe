
export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#59C6D2] text-center px-4">
            {/* Error Icon */}
            <div className="bg-white rounded-full p-6 shadow-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#23BE0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" /> </svg>
            </div>
            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"> Oops! Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-md"> Looks like you’ve followed a broken link or entered a URL that doesn’t exist. </p>
            {/* Back to Home Button */}
            <a href="/" className="bg-[#23BE0A] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300" > Go Back Home </a>
        </div>
    )
}
