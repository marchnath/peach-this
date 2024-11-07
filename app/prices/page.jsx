import React from "react";
import Nav from "../nav";

const Prices = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/scattered.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-52 w-full text-white flex items-center justify-center text-center text-7xl sticky top-0 z-10"
        style={{
          backgroundImage: "url('/banner2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        ПРАЙС-ЛИСТ
      </div>

      <div className="container mx-auto p-4">
        {/* Укладки Section */}
        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Укладки
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Дневная [браш] - до плеч: 5000</li>
          <li>Дневная [браш] - ниже плеч: 5500</li>
          <li>Коктейльная [горячий инструмент / бэки] - до плеч: 5500</li>
          <li>Коктейльная [горячий инструмент / бэки] - ниже плеч: 6000</li>
          <li>Вечерняя [пучок / хвост / плетение]: 8000</li>
          <li>Репетиция свадебной укладки [проработка 2-3 вариантов]: 12000</li>
        </ul>

        {/* Уход Section */}
        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Уход
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Nashi Argan Filler: 7000</li>
          <li>Nashi Argan Filler-экспресс: 4500</li>
          <li>Nashi Argan базовый: 4500</li>
          <li>TOKIO INKARAMI экспресс уход: 7500</li>
          <li>TOKIO INKARAMI spa-уход: 9500</li>
          <li>TOKIO INKARAMI интенсивный уход [сушка по форме]: 13000</li>
        </ul>

        {/* Стрижки Section */}
        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Стрижки
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Женская [сушка по форме]: 8000</li>
          <li>Стрижка чёлки [без мытья]: 3000</li>
        </ul>

        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Макияж
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Дневной: 5500</li>
          <li>Вечерний: 7000</li>
          <li>Тематический: 8000</li>
          <li>Свадебный: 10000</li>
          <li>Индивидуальный урок макияжа: 16000</li>
        </ul>

        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Брови и Ресницы
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Коррекция + окрашивание бровей: 4500</li>
          <li>Коррекция формы бровей: 2500</li>
          <li>Окрашивание бровей: 2500</li>
          <li>Окрашивание ресниц: 2500</li>
          <li>Ламинирование бровей: 6000</li>
          <li>Накладные ресницы [пучки]: 1500</li>
          <li>Депиляция одной зоны лица: 1500</li>
        </ul>

        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Ногтевой Сервис
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Маникюр [аппаратный / пилочный / комбинированный]: 3500</li>
          <li>Педикюр: 4700</li>
          <li>Покрытие лак: 1500</li>
          <li>Покрытие лечебным лаком: 1100</li>
          <li>Покрытие гель-лак: 2200</li>
          <li>Покрытие гель-лак french: 3600</li>
          <li>Снятие лак: 600</li>
          <li>Снятие гель-лак: 950</li>
          <li>Дизайн / 1 ноготь: 350</li>
          <li>Ремонт ногтевой пластины / 1 ноготь: 600</li>
          <li>Укрепление гелем: 1500</li>
          <li>Выравнивание ногтевой пластины: 850</li>
        </ul>

        {/* Уход за руками и ногами Section */}
        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          Уход
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Для рук: 3000</li>
          <li>Для ног: 2700</li>
        </ul>

        <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
          УСЛУГИ ДЛЯ МУЖЧИН
        </h2>
        <ul className="mt-4 dark:text-neutral-200">
          <li>Стрижка: 6000</li>
          <li>Тонирование / камуфляж седины: 4500</li>
          <li>Маникюр: 3600</li>
          <li>Педикюр: 4800</li>
        </ul>
        <Nav />
      </div>
    </div>
  );
};

export default Prices;
