"use client";

const Button = () => {
  return (
    <button
      className="fixed bottom-4 z-50 right-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-amber-600 bg-[linear-gradient(110deg,#866f43,45%,#ad9262,55%,#866f43)] bg-[length:200%_100%] px-4 sm:px-6 font-medium  sm:text-xl text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onClick={() =>
        (window.location.href =
          "https://widget.universecrm.ru/v2/minisite/c614d2cb100e51557579a3b243e6df73?tpclid=facebook.PAZXh0bgNhZW0CMTEAAaZHVZP61Ed-b4oMD3qDHlAqNfVpTZDrn-XD8A-BjUt3Mydbt_vabZw5t8g_aem_6aK4QLF5ldf3q8_Lwi3URA#/")
      }
    >
      Онлайн запись
    </button>
  );
};

export default Button;
