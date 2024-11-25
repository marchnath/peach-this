//page.js

"use client";

import { useState, useEffect } from "react";
import { MarqueeDemo } from "./reviews";
import Fotter from "./fotter";
import Nav from "./nav";
import { TbLoaderQuarter } from "react-icons/tb";
import AboutUs from "./about-us";
import Services from "./services";
import Hero2 from "./hero2";
import Button from "./button";

export default function Component() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <TbLoaderQuarter className="animate-spin text-6xl text-[#ad9262]" />
      </div>
    );
  }

  return (
    <div>
      <div>
        <Nav />
        {/* Hero Section */}
        {/* <Hero /> */}
        <Hero2 />

        <Services />

        <AboutUs />

        {/* Reviews Section */}
        <MarqueeDemo />
        {/* Contact Section */}

        <Fotter />
      </div>
      <Button />
    </div>
  );
}
