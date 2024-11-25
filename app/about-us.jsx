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
        <h1 className="text-3xl md:text-4xl lg:text-5xl">О НАС</h1>
        <p className="sm:text-lg max-w-4xl mx-auto">
          Peach — это место, где классика и современные тренды красоты
          сочетаются с профессионализмом в сердце мегаполиса. Мы предлагаем
          пространство для осознанного ухода за собой в условиях постоянной
          занятости, поддерживая актуальность и высокий уровень сервиса для
          каждого клиента.
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-5xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* <div className="bg-gray-100 w-fit rounded-full px-4">
                <Contact />
              </div> */}

              <span className="text-2xl mb-2 font-medium">{item.title}</span>
              <div className="mb-8">{item.description}</div>

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
    title: "Интерьер",
    description: (
      <>
        <p>
          Наш салон на Патриарших прудах сочетает современность и классику в
          своем дизайне. Просторное пространство с высокими потолками, светлыми
          тонами и элегантными металлическими акцентами создает атмосферу
          роскоши и комфорта, идеально подходящую для красоты и релаксации.
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
          Мы выбираем инновационные инструменты и технологии, что позволяет нам
          предоставлять услуги исключительного качества, соответствующие самым
          высоким стандартам индустрии красоты.
        </p>
      </>
    ),
    badge: "Changelog",
    image: "/about-us/instruments.jpg",
  },

  {
    title: "Наша команда",
    description: (
      <>
        <p>
          В Peach собраны талантливые бьюти-эксперты, каждый из которых прошел
          многолетнее обучение и повышение квалификации в ведущих учебных
          заведениях по всему миру. Наш коллектив состоит из профессионалов с
          глубокими знаниями и опытом в индустрии красоты.
        </p>
      </>
    ),
    badge: "New Features",

    image: "/about-us/team.jpg",
  },
  {
    title: "Уникальность салона Peach",
    description: (
      <>
        <p>
          Мы предлагаем услуги в параллели, что позволяет нашим клиентам
          экономить время перед деловыми встречами, ужинами с друзьями или
          романтическими свиданиями. В Peach вы можете получить комплекс услуг
          без необходимости жертвовать своим расписанием.
        </p>
      </>
    ),

    image: "/about-us/uniqueness.png",
  },
];
