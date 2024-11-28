"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Nav = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsNavSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {" "}
      {/* Main Navigation */}
      <nav
        className={`
    ${
      isNavSticky
        ? "fixed top-0 right-0 left-0 w-full animate-slideDown bg-white z-50 shadow-md"
        : ""
    }
    md:hidden z-50 bg-background flex items-center p-4 text-gray-700 relative
  `}
      >
        {/* Center the logo using absolute positioning */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/logo.png" alt="logo" width={130} height={130} />
        </div>

        {/* Move menu button to the right */}
        <div className="ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-50"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed z-40 w-screen inset-0 h-screen bg-white md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-lg font-medium"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("services-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              УСЛУГИ
            </button>
            <button
              className="text-lg font-medium"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("about-us-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              О НАС
            </button>

            <button
              className="text-lg font-medium"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("contact-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              КОНТАКТЫ
            </button>
            <Link
              href="/prices"
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ПРАЙС
            </Link>
          </div>
        </div>
      )}
      {/* Desktop Navigation */}
      <nav
        className={`
    ${
      isNavSticky
        ? "fixed top-0 right-0 left-0 w-full animate-slideDown bg-white shadow-md"
        : ""
    }
    hidden md:block z-50 bg-background text-gray-700 
  `}
      >
        <div className="container flex items-center justify-between py-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <button
              className="text-lg font-medium"
              onClick={() => {
                document
                  .getElementById("services-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              УСЛУГИ
            </button>
            <button
              className="text-lg font-medium"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("about-us-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              О НАС
            </button>
          </div>

          <Image src="/logo.png" alt="logo" width={200} height={200} />

          <div className="flex items-center space-x-8">
            <button
              className="text-lg font-medium"
              onClick={() => {
                document
                  .getElementById("contact-section")

                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              КОНТАКТЫ
            </button>
            <Link href="/prices" className="text-lg font-medium">
              ПРАЙС
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
