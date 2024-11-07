import React from "react";
import {
  MapPin,
  ShoppingCart,
  X,
  Instagram,
  Facebook,
  Phone,
  Menu,
  Mail,
  WhatsApp,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";

const Nav = () => {
  return (
    <section
      id="contact-section"
      className="container py-16 max-w-7xl mx-auto text-gray-700"
    >
      <div className="flex flex-col md:flex-row space-y-8 justify-between w-full">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Контакты</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              +7 (495) 888-44-88
            </p>
            <Link
              className="flex items-center"
              href="https://www.instagram.com/peach.mos?igsh=MXE3MHN3a2l6cWN5dA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4" />
              @peach.mos
            </Link>
            <Link
              className="flex items-center"
              href="mailto:peachbeautymos@gmail.com"
            >
              <Mail className="mr-2 h-4 w-4" />
              peachbeautymos@gmail.com
            </Link>

            <Link
              className="flex items-center"
              href="https://wa.me/79691387072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="mr-2 h-4 w-4" />
              +7 969 138-70-72
            </Link>
          </div>
        </div>
        <div className="space-y-4 max-w-96">
          <h3 className="text-xl font-bold">Адрес</h3>
          <p>МОСКВА, Ермолаевский переулок, 10/7</p>
        </div>
        <div className="space-y-4 w-fit">
          <h3 className="text-xl font-bold">Время работы</h3>
          <p>Пн-Вс 09:00-22:00</p>
          <p>Без выходных</p>
        </div>
      </div>
    </section>
  );
};

export default Nav;
