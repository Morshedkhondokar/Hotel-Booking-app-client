import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">StayDream House</h2>
          <p className="text-gray-400">
            Luxury beachside stays designed for comfort, relaxation, and unforgettable moments.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-[#D39F51] duration-300" />
            <FaInstagram className="cursor-pointer hover:text-[#D39F51] duration-300" />
            <FaTwitter className="cursor-pointer hover:text-[#D39F51] duration-300" />
            <FaYoutube className="cursor-pointer hover:text-[#D39F51] duration-300" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Home</li>
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Rooms</li>
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Gallery</li>
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Help Center</li>
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Privacy Policy</li>
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Terms & Conditions</li>
            <li className="hover:text-[#D39F51] cursor-pointer duration-300">Cancellation Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Beach Road, Dream Island</li>
            <li>📞 +880 1234-567890</li>
            <li>📧 support@staydream.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} StayDream House — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
