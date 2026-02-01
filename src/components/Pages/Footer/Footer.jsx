
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10"> <div className="container mx-auto px-4"> {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 max-w-6xl mx-auto">
        {/* Logo / Title */}
        <div>
          <h2 className="text-2xl font-bold text-white">📚 Book Buddy Vibe</h2>
          <p className="text-sm mt-2"> Your friendly companion for discovering and sharing books. </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a>
            </li> <li><a href="/" className="hover:text-white">Listed Books</a>
            </li> <li><a href="/" className="hover:text-white">Read to Books</a></li>
            <li><a href="/" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Book Buddy Vibe. All rights reserved.</p>
      </div>
    </div>
    </footer>
  )
}
