//page.js

"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { BiCheckDouble } from "react-icons/bi";
import { BackgroundLines } from "@/components/ui/background-lines";

import { MarqueeDemo } from "./reviews";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { Playfair_Display } from "next/font/google";
import Nav from "./nav";
import Contact from "./contact";
import Hero from "./hero";

import { Menu, X } from "lucide-react";
import AboutUs from "./about-us";
import Services from "./services";

export default function Component() {
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
    <div
    // style={{
    //   position: "relative",
    //   minHeight: "full",
    //   padding: "1rem",
    //   backgroundImage: "url(/salon-bg.jpg)",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust opacity here
    //   backgroundBlendMode: "overlay",
    // }}
    >
      <BackgroundBeamsWithCollision className="">
        <div>
          {/* Main Navigation */}
          <nav
            className={`
          ${
            isNavSticky
              ? "fixed top-0 right-0 left-0 w-full animate-slideDown bg-white z-50 shadow-md"
              : ""
          }
          md:hidden z-50 bg-background flex items-center justify-between p-4 text-gray-700
        `}
          >
            <Image src="/logo.png" alt="logo" width={150} height={150} />

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
          {/* Hero Section */}
          <Hero />

          <Services />

          <AboutUs />

          {/* Reviews Section */}
          <MarqueeDemo />
          {/* Contact Section */}

          <Nav />
        </div>
      </BackgroundBeamsWithCollision>
      {/* <style jsx>{`

      `}</style> */}
    </div>
  );
}
