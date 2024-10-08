"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-40">
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-3xl text-white hover:underline duration-500">
            <Link href={"/"} onClick={onClose}>
              Home
            </Link>
          </li>
          <li className="font-bold text-3xl text-white hover:underline duration-500">
            <Link href={"#about"} onClick={onClose}>
              About
            </Link>
          </li>
          <li className="font-bold text-3xl text-white hover:underline duration-500">
            <Link href="#contact" onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between lg:px-40 py-3 bg-gray-800 text-white">
      <div>
        <Link href={"/"}>
          <Image
            src="/logo-text.png"
            alt="logo"
            className="z-50"
            height={160}
            width={160}
          />
        </Link>
      </div>
      <nav>
        <div className="block relative lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-4xl z-50 absolute top-0 right-4"
          >
            {isMenuOpen ? <FiX size={40} /> : <FiMenu size={40} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="gap-10 hidden lg:flex">
          <li className="font-bold text-xl hover:underline hover:text-[--orange-primary] hover:scale-105 duration-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-bold text-xl hover:underline hover:text-[--orange-primary] hover:scale-105 duration-500">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="font-bold text-xl hover:underline hover:text-[--orange-primary] hover:scale-105 duration-500">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && <MobileMenu onClose={handleCloseMenu} />}
    </header>
  );
};

export default Header;
