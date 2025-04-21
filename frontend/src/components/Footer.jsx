import {
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  Github,
  Mail,
  Bookmark,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-customBlue mb-4 flex">
              About{" "}
              <span className="ml-2">
                <Logo />
              </span>
            </h3>
            <p className="mb-4">
              Explore a well-organized archive of final year BCA exam questions
              from Pokhara University — designed to help students study
              efficiently, understand exam patterns, and prepare with
              confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-customBlue hover:bg-slate-300 hover:text-gray-600 transition rounded-full p-2 text-white "
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="bg-customBlue hover:bg-slate-300 hover:text-gray-600 transition rounded-full p-2 text-white "
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="bg-customBlue hover:bg-slate-300 hover:text-gray-600 transition rounded-full p-2 text-white "
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="bg-customBlue hover:bg-slate-300 hover:text-gray-600 transition rounded-full p-2 text-white "
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-customBlue mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              {/* <li><a href="#" className="hover:underline">Download App</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li> */}
              {/* <li>
                  <a href="#" className="flex items-center bg-blue-100 text-customBlue px-2 py-1 rounded w-max">
                    <Bookmark size={18} className="mr-2" /> Blog
                  </a>
                </li> */}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-customBlue mb-4">
              Contact Us
            </h3>
            <p className="mb-2">For any inquiries, please email us at:</p>
            <p className="flex items-center text-customBlue cursor-pointer">
              <Mail size={18} className="mr-2" /> sharmayuvraj034@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-4 text-sm text-gray-600 border-t border-gray-200">
          <p>
            Designed by{" "}
            <span className="text-customBlue font-semibold">
              Yuvraj Sapkota
            </span>
          </p>
          <p className="text-xs">© 2025 Old-is-Gold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
