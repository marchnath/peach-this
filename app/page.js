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
import { FlipWords } from "@/components/ui/flip-words";
import { Playfair_Display } from "next/font/google";
import Nav from "./nav";
import Contact from "./contact";

import { Menu, X } from "lucide-react";
import AboutUs from "./about-us";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

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
  // const words = [
  //   "Профессиональные мастера",
  //   "Качественный сервис",
  //   "Непревзойденный результат",
  // ];

  const words = [
    "ВОЛОСЫ",
    "НОГТЕВОЙ СЕРВИС",
    "БРОВИ И РЕСНИЦЫ",
    "МАКИЯЖ",
    "ДЛЯ ДЕТЕЙ",
    "ДЛЯ МУЖЧИН",
  ];

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
              ? "fixed top-0 right-0 left-0 w-full animate-slideDown bg-white shadow-md"
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
              className="fixed inset-0 z-40 bg-white md:hidden"
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
          <div
            className="absolute -top-[10%] left-0  -z-20 w-full h-[85%] "
            style={{
              backgroundImage: "url('/abstract.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <section className="relative container py-12 max-w-7xl mx-auto flex justify-between flex-col md:flex-row space-y-8 items-center gap-x-10">
            <Image
              src="/star.svg"
              className="absolute -right-48 top-20 "
              width={350}
              height={350}
              alt="circle"
            />
            <div className="relative ml-20 px-20 border">
              {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:8xl text-gray-600">
            Ваш Полный Сервис{" "}
            <span className="text-yellow-600 font-medium">Красоты</span>{" "}
          </h1> */}
              <BackgroundLines className="flex items-center justify-center max-h-[600px] w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                  <span className={playfairDisplay.className}>САЛОН</span>{" "}
                  <br />
                  <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={330}
                    height={330}
                  />
                  {/* <span className="text-yellow-600"> PEACH</span> */}
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
                  {/* <TextGenerateEffect
                    words={
                      " Профессиональные мастера, качественный сервис и непревзойденный результат."
                    }
                  /> */}
                  <FlipWords words={words} className="text-2xl mb-6" /> <br />
                  {/* Профессиональные мастера, качественный сервис и
                  непревзойденный результат. */}
                </p>
                <Contact />
                <div className="text-center text-gray-800 space-y-2">
                  <p className="text-lg">+7 (495) 888-44-88</p>
                  <p>МОСКВА, Ермолаевский переулок, 10/7</p>
                  <p>Пн-Вс 09:00-22:00</p>
                </div>
              </BackgroundLines>

              {/* <Image
            src="/star.svg"
            className="absolute right-6 -top-10 sm:right-28 -z-20 "
            width={150}
            height={150}
            alt="circle"
          /> */}
            </div>
            <div className="relative h-[400px] md:h-[900px] max-w-[600px] w-full overflow-hidden">
              <Image
                // src={`/${heroImage[currentImageIndex]}`}
                src={"/HeroImage.png"}
                alt="Hero"
                // width={600}
                // height={400}
                fill
                className="object-cover transition-opacity duration-1000"
                priority
              />
            </div>
          </section>

          {/* Services Grid */}
          <section
            id="services-section"
            className="container relative  max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category) => (
              <BackgroundGradient
                key={category.name}
                className="relative rounded-[22px] h-[500px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-fill object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-white">
                  <h3 className="mb-4 text-2xl font-bold">{category.name}</h3>
                  <Link
                    href="https://www.google.com/"
                    className="border border-white  px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
                  >
                    ПОДРОБНЕЕ
                  </Link>
                </div>
              </BackgroundGradient>
            ))}
            <Image
              src="/star.svg"
              className="absolute -left-48 bottom-20 "
              width={350}
              height={350}
              alt="circle"
            />
          </section>
          <AboutUs />
          {/* <div className="bg-gradient-to-b from-[#fdf0e6] to-white absolute bottom-0 left-0 h-[26%] right-0 -z-10"></div> */}
          {/* About Section */}
          {/* <section className="bg-muted py-10 lg:py-16 max-w-7xl mx-auto text-gray-700">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">О нас</h2>
          <p className="mx-auto max-w-3xl text-center text-muted-foreground">
            Салон красоты "PEACH" - ценит высокое качество услуг, экономию
            времени и комфорт, поэтому предоставляет большое количество
            параллельных услуг от лучших мастеров beauty - индустрии. Мы следим
            за последними тенденциями и воплощаем в жизнь самые модные и
            стильные образы.
          </p>
        </div>
      </section> */}
          {/* Reviews Section */}
          <MarqueeDemo />
          {/* Contact Section */}

          {/* Footer */}
          {/* <footer className="border-t border-border bg-background py-8 max-w-7xl mx-auto">
          <div className="container flex items-center justify-between">
            <div className="flex space-x-4">
              <Link href="https://www.google.com/" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.google.com/" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </footer> */}
          {/* Fixed Booking Button */}
          {/* <Link
            href="https://www.google.com/"
            className="fixed bottom-8 right-8 text-lg  bg-yellow-600 md:text-xl font-medium px-4 py-2 md:px-6 md:py-3 text-white shadow-lg transition-transform hover:scale-105"
          >
            Онлайн запись
          </Link> */}
          <style jsx global>{`
            @keyframes slideDown {
              from {
                transform: translateY(-100%);
              }
              to {
                transform: translateY(0);
              }
            }
            .animate-slideDown {
              animation: slideDown 0.3s ease-out;
            }
          `}</style>
          <Nav />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
