// import Image from "next/image";
// import logoImage from "../assets/images/logosaas.png";
// import MenuIcon from "../assets/icons/menu.svg";

// export const Navbar = () => {
//   return (
//     <div className="bg-black">
//       <div className="container">
//       <div className="py-4 flex items-center justify-between">
//         <div className="relative">
//           <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to-right,#F87BFF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>
//           <Image src={logoImage} alt="Saas logo" className="h-12 w-12 relative" />
//         </div>
//         <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
//           <MenuIcon className="text-white w-6 h-6" />
//         </div>
//         <nav className="flex gap-6 items-center hidden sm:flex">
//           <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
//           <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
//           <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
//           <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
//           <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
//           <button type="button" className="bg-white py-2 px-4 rounded-lg">Get for free</button>
//         </nav>
//       </div>
//     </div>
//     </div>
//   );
// };

"use client"; 

import { useState } from "react";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
// import CloseIcon from "../assets/icons/close.svg"; // добавьте иконку закрытия (или используйте тот же MenuIcon повёрнутый)

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-black relative">
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          {/* Логотип */}
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to-right,#F87BFF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logoImage}
              alt="Saas logo"
              className="h-12 w-12 relative"
            />
          </div>

          {/* Кнопка бургера (только на мобильных) */}
          <button
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden z-20 relative"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isMenuOpen ? (
              <div className="rotate-45">
                <MenuIcon className="text-white w-6 h-6" />
              </div>
            ) : (
              <MenuIcon className="text-white w-6 h-6" />
            )}
          </button>

          {/* Десктопное меню (горизонтальное) */}
          <nav className="hidden sm:flex gap-6 items-center">
            <a href="#" className="text-white/60 hover:text-white transition">
              About
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Features
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Updates
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Help
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              Customers
            </a>
            <button
              type="button"
              className="bg-white py-2 px-4 rounded-lg text-black font-medium"
            >
              Get for free
            </button>
          </nav>
        </div>
      </div>

      {/* Мобильное бургер-меню (выпадающее) */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-sm z-10
          transition-transform duration-300 ease-in-out
          sm:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <a
            href="#"
            onClick={closeMenu}
            className="text-white/80 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="text-white/80 hover:text-white transition"
          >
            Features
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="text-white/80 hover:text-white transition"
          >
            Updates
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="text-white/80 hover:text-white transition"
          >
            Help
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="text-white/80 hover:text-white transition"
          >
            Customers
          </a>
          <button
            type="button"
            onClick={closeMenu}
            className="bg-white py-2 px-6 rounded-lg text-black font-medium text-lg"
          >
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
