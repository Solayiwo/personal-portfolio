"use client";

import { useState } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

export default function Menu() {
  const [navMenu, setNavMenu] = useState();

  const showMenuHandler = () => {
    setNavMenu(
      <div className="absolute right-1 bg-purple-500 w-54 p-6 mt-2 rounded-2xl">
        <Link href="/" className="block pb-2">
          <i className="fa-solid fa-arrow-right"></i> About
        </Link>

        <Link href="/" className="block pb-2">
          <i className="fa-solid fa-arrow-right"></i> Services
        </Link>

        <Link href="/" className="block pb-2">
          <i className="fa-solid fa-arrow-right"></i> Portfolio
        </Link>

        <Link href="/" className="block pb-2">
          <i className="fa-solid fa-arrow-right"></i> Awards
        </Link>

        <Link href="/" className="block pb-2">
          <i className="fa-solid fa-arrow-right"></i> Testimonial
        </Link>

        <Link href="/" className="block">
          <i className="fa-solid fa-arrow-right"></i> Contact
        </Link>
      </div>
    );
  };

  const hideMenuHandler = () => {
    setNavMenu();
  };

  return (
    <div>
      <div className="ml-2 text-black bg-white px-5 py-3 rounded-3xl">
        <button onClick={showMenuHandler}>MENU &nbsp;&bull;&nbsp;</button>
      </div>

      <div className="ml-2 text-black bg-white px-5 py-3 rounded-3xl hidden">
        <button onClick={hideMenuHandler}>MENU &nbsp;&bull;&nbsp;</button>
      </div>

      <div>{navMenu}</div>
    </div>
  );
}
