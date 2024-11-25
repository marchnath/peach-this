"use client";
import React, { useState, useEffect } from "react";
import { MarqueeDemo } from "./reviews";
import Fotter from "./fotter";
import Nav from "./nav";
import AboutUs from "./about-us";
import Services from "./services";
import Hero2 from "./hero2";
import Button from "./button";

export default function Component() {
  const [isNavLoaded, setIsNavLoaded] = useState(false);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    const navTimer = setTimeout(() => {
      setIsNavLoaded(true);
    }, 500); // Delay for Nav

    const heroTimer = setTimeout(() => {
      setIsHeroLoaded(true);
    }, 500); // Delay for Hero

    return () => {
      clearTimeout(navTimer);
      clearTimeout(heroTimer);
    };
  }, []);

  return (
    <div>
      <div>
        {isNavLoaded && <Nav />}
        {/* Hero Section */}
        {/* <Hero /> */}
        {isHeroLoaded && <Hero2 />}

        {isHeroLoaded && <Services />}
        {isHeroLoaded && <AboutUs />}

        {/* Reviews Section */}
        {isHeroLoaded && <MarqueeDemo />}
        {/* Contact Section */}

        {isHeroLoaded && <Fotter />}
      </div>
      {isHeroLoaded && <Button />}
    </div>
  );
}
