import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex space-x-8 my-4 items-center z-30">
      <button className="">
        <a
          href="https://wa.me/79691387072"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/whatsapp.png" width={35} height={35} alt="whatsapp" />
        </a>
      </button>
      <a
        href="https://www.instagram.com/peach.mos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/instagram.png" width={30} height={30} alt="instagram" />
      </a>
    </div>
  );
};

export default Contact;
