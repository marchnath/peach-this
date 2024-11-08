"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Contact from "./contact";

export default function AboutUs() {
  return (
    <section id="about-us-section" className="mt-28">
      <div className="text-center  w-full space-y-6 my-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl">О НАС</h1>
        <p className="sm:text-lg max-w-4xl mx-auto">
          Мы стремимся воплощать ваше видение красоты через качественное
          обслуживание, профессионализм и теплую атмосферу уюта.
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-5xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* <div className="bg-gray-100 w-fit rounded-full px-4">
                <Contact />
              </div> */}

              <p className="text-2xl mb-2 font-medium">{item.title}</p>
              <p className="mb-8">{item.description}</p>

              <div className=" mx-auto w-full overflow-hidden">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    className="rounded-lg mb-10 object-cover w-full  h-[200px] sm:h-[400px] md:h-[500px]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}

const dummyContent = [
  {
    title: "Комфортный и классический интерьер",
    description: (
      <>
        <p>
          Уютная обстановка и элегантный дизайн помогают создать уникальную
          атмосферу, где клиенты чувствуют себя особенными.
        </p>
      </>
    ),

    image: "/about-us/interior2.jpeg",
  },
  {
    title: "Профессиональное оборудование",
    description: (
      <>
        <p>
          Мы используем только передовые инструменты и технологии, чтобы
          гарантировать высочайшее качество обслуживания.
        </p>
      </>
    ),
    badge: "Changelog",
    image: "/about-us/instruments.png",
  },

  {
    title: "Опытные специалисты",
    description: (
      <>
        <p>
          Наша команда состоит из высококвалифицированных профессионалов с
          многолетним опытом, специализирующихся на различных услугах от
          парикмахерского искусства до косметологических процедур.
        </p>
      </>
    ),
    badge: "New Features",

    image: "/about-us/professionals.png",
  },
  {
    title: "Индивидуальный подход",
    description: (
      <>
        <p>
          Мы заботимся о каждом клиенте, создавая персонализированные программы
          обслуживания, чтобы каждый визит был особенным.
        </p>
      </>
    ),

    image: "/about-us/support.png",
  },
  {
    title: "Экологичность",
    description: (
      <>
        <p>
          Мы стремимся использовать экологически чистые продукты и
          минимизировать отходы, чтобы внести вклад в сохранение окружающей
          среды.
        </p>
      </>
    ),
    badge: "New Features",

    image: "/about-us/ecology.jpg",
  },
];
