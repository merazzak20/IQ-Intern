import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Container from "./Container";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Apply", path: "/apply" },
    { name: "Contact", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6 text-white"
      }`}
    >
      <Container>
        <nav className=" flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {isScrolled ? (
              <img src={logo} alt="logo" className="max-w-[80px]" />
            ) : (
              <img
                src={logo}
                alt="logo"
                className="max-w-[80px]  filter invert brightness-0"
              />
            )}

            <p className="text-3xl font-bold">IQ Intern</p>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`group flex flex-col gap-0.5 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
                <span
                  className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? "bg-[#007a88]" : "bg-white"
                  }`}
                />
              </a>
            ))}
            <button
              className={`border border-[#007A88] px-4 py-1 text-sm rounded-full transition ${
                isScrolled
                  ? "text-[#007A88] border-[#007A88]"
                  : "text-white border-white"
              }`}
            >
              Place Feedback
            </button>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <svg
              className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <button className="buttonColor px-6 py-2 rounded-full">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <svg
              onClick={() => setIsMenuOpen(true)}
              className={`h-6 w-6 cursor-pointer ${
                isScrolled ? "text-black" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-gray-800 flex flex-col items-center justify-center gap-6 text-lg font-medium transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <button className="border border-[#007A88] px-4 py-1 text-sm font-light rounded-full">
            Place Feedback
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Login
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
