"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { BiCheckDouble } from "react-icons/bi";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MarqueeDemo } from "./reviews";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { Playfair_Display } from "next/font/google";
import Nav from "./nav";
import Contact from "./contact";
import Hero from "./hero";

import { Menu, X } from "lucide-react";
import AboutUs from "./about-us";

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImage.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "ВОЛОСЫ", image: "/haircat.jpg" },
    { name: "НОГТЕВОЙ СЕРВИС", image: "/nails.webp" },
    { name: "БРОВИ И РЕСНИЦЫ", image: "/eyes.png?" },
    { name: "МАКИЯЖ", image: "/makeup.png" },
    { name: "ДЛЯ ДЕТЕЙ", image: "/children.png?" },
    { name: "ДЛЯ МУЖЧИН", image: "/men.png" },
    // { name: "ДЛЯ ДЕТЕЙ", image: "/children.png?height=600&width=400" },
  ];

  const heroImage = [
    "eye.webp",
    "face.jpg",
    "hair.jpg",
    "nails.jpeg",
    "men.png",
  ];

  return (
    <div className="relative min-h-screen px-4 lg:px-0 ">
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
            <Link
              href="https://www.google.com/"
              className="text-3xl font-bold text-[#e5958e]"
            >
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>

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
              className="fixed z-40 w-screen h-screen bg-white md:hidden"
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
              <Link
                href="https://www.google.com/"
                className="text-3xl font-bold text-[#e5958e]"
              >
                <Image src="/logo.png" alt="logo" width={200} height={200} />
              </Link>
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

          {/* Services Grid */}
          <section
            id="services-section"
            className="container relative mx-auto px-4 py-8"
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {categories.map((category) => (
                  <BackgroundGradient
                    key={category.name}
                    className="relative rounded-[22px] h-[400px]  w-80  p-4 sm:p-10 bg-white dark:bg-zinc-900"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-white">
                      <h3 className="mb-4 text-2xl font-bold">
                        {category.name}
                      </h3>
                      <Link
                        href="https://www.google.com/"
                        className="border border-white px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
                      >
                        ПОДРОБНЕЕ
                      </Link>
                    </div>
                  </BackgroundGradient>
                ))}
              </div>
            </div>

            <Image
              src="/star.svg"
              className="absolute -left-48 bottom-20 hidden lg:block"
              width={350}
              height={350}
              alt="circle"
            />
          </section>

          <AboutUs />

          {/* Reviews Section */}
          <MarqueeDemo />
          {/* Contact Section */}

          <Nav />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
