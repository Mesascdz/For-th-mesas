import Link from "next/link";
// import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white shadow-lg z-50 py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            {/* <Image
              src="/images/truckstaff-logo.png"
              alt="TruckStaff Solutions"
              width={240}
              height={60}
              className="cursor-pointer"
            /> */}
            <p className="text-3xl text-orange-500 font-bold transition-all">
              Logo
            </p>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <nav className="mb-4 md:mb-0 mr-0 md:mr-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-orange-500 font-medium"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-orange-500 font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-500 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-orange-500 font-medium"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-orange-500 font-medium"
                >
                  English
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-3">
            <Link
              href="#"
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
            >
              <FaFacebookF className="text-gray-700" />
            </Link>
            <Link
              href="#"
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
            >
              <FaInstagram className="text-gray-700" />
            </Link>
            <Link
              href="#"
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
            >
              <FaLinkedinIn className="text-gray-700" />
            </Link>
            <Link
              href="#"
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
            >
              <FaWhatsapp className="text-gray-700" />
            </Link>
            <Link
              href="#"
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
            >
              <FaTelegram className="text-gray-700" />
            </Link>
            <Link
              href="#"
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
            >
              <FaYoutube className="text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
