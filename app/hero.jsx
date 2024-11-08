import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Contact from "./contact";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});
const words = [
  "ВОЛОСЫ",
  "НОГТЕВОЙ СЕРВИС",
  "БРОВИ И РЕСНИЦЫ",
  "МАКИЯЖ",
  "ДЛЯ ДЕТЕЙ",
  "ДЛЯ МУЖЧИН",
];

const Hero = () => {
  return (
    <section>
      <div
        className="absolute -top-[10%] left-0 hidden lg:block  -z-20 w-full h-[85%] "
        style={{
          backgroundImage: "url('/abstract.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative hidden lg:flex container py-12 max-w-7xl mx-auto justify-between flex-col md:flex-row space-y-8 items-center gap-x-10">
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
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-8xl  font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              <span className={`${playfairDisplay.className}`}>САЛОН</span>{" "}
              <br />
              <Image
                src={"/logo.png"}
                alt="logo"
                width={330}
                height={330}
                // className="sm:h-[330px] sm:w-[330px] border "
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
      </div>

      <div className="relative container lg:hidden py-12 max-w-7xl mx-auto border">
        <Image
          src="/star.svg"
          className="absolute -right-48 top-20"
          width={350}
          height={350}
          alt="circle"
        />
        {/* Hero Section */}
        <div className="relative lg:hidden w-full h-[400px] md:h-[700px] lg:h-[900px] overflow-hidden lg:items-center lg:gap-x-10 lg:flex-row">
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 lg:static lg:w-1/2">
            <BackgroundLines className="flex items-center justify-center max-h-[600px] w-full flex-col px-4">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                <span className={`${playfairDisplay.className}`}>САЛОН</span>{" "}
                <br />
                <Image src="/logo.png" alt="logo" width={330} height={330} />
              </h2>
              <p className="max-w-xl mx-auto text-sm md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
                <FlipWords words={words} className="sm:text-2xl mb-6" /> <br />
              </p>
              <Contact />
              <div className="text-center text-gray-800 space-y-2 z-20">
                <p className="text-lg">+7 (495) 888-44-88</p>
                <p>МОСКВА, Ермолаевский переулок, 10/7</p>
                <p>Пн-Вс 09:00-22:00</p>
              </div>
            </BackgroundLines>
          </div>
          {/* Background Image */}
          <div className="absolute inset-0   lg:w-1/2">
            <Image
              src="/HeroImage.png"
              alt="Hero"
              fill
              className="object-cover w-full h-full"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
