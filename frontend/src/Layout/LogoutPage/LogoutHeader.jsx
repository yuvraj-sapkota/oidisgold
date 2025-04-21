import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../components/Logo";

const LogoutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-6 md:px-10">
        {/* Logo */}
        <div className="text-4xl">
          <Logo />
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <Link to="/login">
            <button className="border-2 py-2 px-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition duration-200">
              Log in
            </button>
          </Link>
          <button className="text-white bg-[#12A4e2] hover:bg-[#35b2e8] border-2 py-2 px-4 rounded-lg text-lg font-semibold">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6">
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="border-2 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition duration-200">
              Log in
            </button>
          </Link>
          <button
            className="text-white bg-[#12A4e2] hover:bg-[#35b2e8] border-2 py-2 px-6 rounded-lg text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default LogoutHeader;
