import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

const Services = () => {
  const categories = [
    { name: "ВОЛОСЫ", image: "/hair.jpg" },
    { name: "НОГТЕВОЙ СЕРВИС", image: "/nails.jpg" },
    { name: "БРОВИ И РЕСНИЦЫ", image: "/eye_brow.jpg" },
    { name: "МАКИЯЖ", image: "/make_up.jpg" },

    { name: "ДЛЯ МУЖЧИН", image: "/for_men.jpg" },
    // { name: "ДЛЯ ДЕТЕЙ", image: "/children.png?height=600&width=400" },
  ];

  return (
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
                <h3 className="mb-4 text-xl font-bold">{category.name}</h3>
                <a
                  href="https://www.instagram.com/peach.mos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
                >
                  ПОДРОБНЕЕ
                </a>
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
  );
};

export default Services;
