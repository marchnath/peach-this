//page.js

"use client";

import { MarqueeDemo } from "./reviews";

import Fotter from "./fotter";

import Nav from "./nav";

import AboutUs from "./about-us";
import Services from "./services";
import Hero2 from "./hero2";
import Button from "./button";

export default function Component() {
  return (
    <div
    // style={{
    //   position: "relative",
    //   minHeight: "full",
    //   padding: "1rem",
    //   backgroundImage: "url(/salon-bg.jpg)",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust opacity here
    //   backgroundBlendMode: "overlay",
    // }}
    >
      {/* <BackgroundBeamsWithCollision className=""> */}
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
