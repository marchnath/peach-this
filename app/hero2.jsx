import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export default function Hero2() {
  return (
    <section className="relative bg-gradient-to-b from-[#ad9262] to-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/hero2.jpeg?height=600&width=800')] bg-cover bg-center"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="text-center flex flex-col items-center">
          <h1
            className={` text-4xl flex flex-col  sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8`}
          >
            <span>Добро пожаловать в </span> <span>салон красоты Peach</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 mt-2">
            на Патриарших прудах!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white px-4 py-2 rounded-full text-gray-800 border">
              ногтевой сервис
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-gray-800 border">
              макияж
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-gray-800 border">
              парикмахерские услуги
            </span>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Экономьте время, получая до трех услуг одновременно за 90 минут.
          </p>

          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-amber-600 bg-[linear-gradient(110deg,#866f43,45%,#ad9262,55%,#866f43)] bg-[length:200%_100%] px-6 font-medium text-lg sm:text-xl text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={() =>
              (window.location.href =
                "https://widget.universecrm.ru/v2/minisite/c614d2cb100e51557579a3b243e6df73?tpclid=facebook.PAZXh0bgNhZW0CMTEAAaZHVZP61Ed-b4oMD3qDHlAqNfVpTZDrn-XD8A-BjUt3Mydbt_vabZw5t8g_aem_6aK4QLF5ldf3q8_Lwi3URA#/")
            }
          >
            Онлайн запись
          </button>
        </div>
      </div>
    </section>
  );
}
