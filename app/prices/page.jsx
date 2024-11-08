import React from "react";
import Nav from "../nav";
import Image from "next/image";
import { Link } from "lucide-react";

const Prices = () => {
  const priceData = [
    {
      section: "Укладки",
      items: [
        { name: "Дневная [браш] - до плеч", price: 5000 },
        { name: "Дневная [браш] - ниже плеч", price: 5500 },
        {
          name: "Коктейльная [горячий инструмент / бэки] - до плеч",
          price: 5500,
        },
        {
          name: "Коктейльная [горячий инструмент / бэки] - ниже плеч",
          price: 6000,
        },
        { name: "Вечерняя [пучок / хвост / плетение]", price: 8000 },
        {
          name: "Репетиция свадебной укладки [проработка 2-3 вариантов]",
          price: 12000,
        },
      ],
    },
    {
      section: "Уход",
      items: [
        { name: "Nashi Argan Filler", price: 7000 },
        { name: "Nashi Argan Filler-экспресс", price: 4500 },
        { name: "Nashi Argan базовый", price: 4500 },
        { name: "TOKIO INKARAMI экспресс уход", price: 7500 },
        { name: "TOKIO INKARAMI spa-уход", price: 9500 },
        {
          name: "TOKIO INKARAMI интенсивный уход [сушка по форме]",
          price: 13000,
        },
      ],
    },
    {
      section: "Стрижки",
      items: [
        { name: "Женская [сушка по форме]", price: 8000 },
        { name: "Стрижка чёлки [без мытья]", price: 3000 },
      ],
    },
    {
      section: "Макияж",
      items: [
        { name: "Дневной", price: 5500 },
        { name: "Вечерний", price: 7000 },
        { name: "Тематический", price: 8000 },
        { name: "Свадебный", price: 10000 },
        { name: "Индивидуальный урок макияжа", price: 16000 },
      ],
    },
    {
      section: "Брови и Ресницы",
      items: [
        { name: "Коррекция + окрашивание бровей", price: 4500 },
        { name: "Коррекция формы бровей", price: 2500 },
        { name: "Окрашивание бровей", price: 2500 },
        { name: "Окрашивание ресниц", price: 2500 },
        { name: "Ламинирование бровей", price: 6000 },
        { name: "Накладные ресницы [пучки]", price: 1500 },
        { name: "Депиляция одной зоны лица", price: 1500 },
      ],
    },
    {
      section: "Ногтевой Сервис",
      items: [
        {
          name: "Маникюр [аппаратный / пилочный / комбинированный]",
          price: 3500,
        },
        { name: "Педикюр", price: 4700 },
        { name: "Покрытие лак", price: 1500 },
        { name: "Покрытие лечебным лаком", price: 1100 },
        { name: "Покрытие гель-лак", price: 2200 },
        { name: "Покрытие гель-лак french", price: 3600 },
        { name: "Снятие лак", price: 600 },
        { name: "Снятие гель-лак", price: 950 },
        { name: "Дизайн / 1 ноготь", price: 350 },
        { name: "Ремонт ногтевой пластины / 1 ноготь", price: 600 },
        { name: "Укрепление гелем", price: 1500 },
        { name: "Выравнивание ногтевой пластины", price: 850 },
      ],
    },
    {
      section: "Уход за руками и ногами",
      items: [
        { name: "Для рук", price: 3000 },
        { name: "Для ног", price: 2700 },
      ],
    },
    {
      section: "УСЛУГИ ДЛЯ МУЖЧИН",
      items: [
        { name: "Стрижка", price: 6000 },
        { name: "Тонирование / камуфляж седины", price: 4500 },
        { name: "Маникюр", price: 3600 },
        { name: "Педикюр", price: 4800 },
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/scattered.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-24 md:h-52 w-full  text-white flex items-center justify-center text-center text-3xl md:text-4xl lg:text-6xl sticky top-0 z-10"
        style={{
          backgroundImage: "url('/banner2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-3xl font-bold  text-[#e5958e] z-50 absolute top-2 left-2">
          <a href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </a>
        </div>
        <span className="mt-4"> ПРАЙС-ЛИСТ</span>
      </div>

      <div className="container p-2 md:p-4 items-center  mx-auto max-w-[700px] w-fit">
        {priceData.map((section, index) => (
          <div
            key={index}
            className="border gap-y-4 rounded-xl px-6 md:px-8 mb-8 bg-white pb-6  hover:shadow-2xl"
          >
            <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
              {section.section}
            </h2>
            <ul className="mt-4 dark:text-neutral-200 ">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="sm:text-md md:text-xl font-light  py-2"
                >
                  {item.name}: {item.price}
                </li>
              ))}
            </ul>
            {/* <hr className="border-2 rounded-full my-10 w-72 border-yellow-700" /> */}
          </div>
        ))}
      </div>
      {/* <div className="bg-stone-800"> */}
      <Nav />
      {/* </div> */}
    </div>
  );
};

export default Prices;
