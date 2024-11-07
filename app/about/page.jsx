"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AboutUs() {
  return (
    <div>
      <div className="text-center w-full space-y-6 my-8">
        <h1 className="text-7xl">О НАС</h1>
        <p className="text-lg max-w-4xl mx-auto">
          Мы стремимся воплощать ваше видение красоты через качественное
          обслуживание, профессионализм и теплую атмосферу уюта.
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={"text-xl mb-4"}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Комфортный и классический интерьер:",
    description: (
      <>
        <p>
          Уютная обстановка и элегантный дизайн помогают создать уникальную
          атмосферу, где клиенты чувствуют себя особенными.
        </p>
      </>
    ),
    badge: "React",
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
    title: "Гигиена и безопасность",
    description: (
      <>
        <p>
          Строгие стандарты чистоты и дезинфекции обеспечивают максимальную
          безопасность и комфорт для наших клиентов.
        </p>
      </>
    ),
    badge: "Launch Week",

    image: "/about-us/hygiene.png",
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
    badge: "New Features",

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
