import { FaHome, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white shadow-md py-6">
      <div className="max-w-7xl mx-auto text-center text-gray-600">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Alyza's Shop. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-500">
          <a href="/" aria-label="Home" className="hover:text-blue-600 transition">
            <FaHome size={24} />
          </a>
          <a href="/about" aria-label="About" className="hover:text-blue-600 transition">
            <FaInfoCircle size={24} />
          </a>
          <a href="/contact" aria-label="Contact" className="hover:text-blue-600 transition">
            <FaPhoneAlt size={24} />
          </a>
          <a href="mailto:support@alyzashop.com" aria-label="Email" className="hover:text-blue-600 transition">
            <FaEnvelope size={24} />
          </a>
          <a href="/location" aria-label="Location" className="hover:text-blue-600 transition">
            <FaMapMarkerAlt size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
