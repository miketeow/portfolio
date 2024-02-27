"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./theme-toggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`${
          header
            ? "py-4 bg-white shadow-lg dark:bg-accent"
            : "py-6 dark:bg-transparent"
        } sticky top-0 z-30 transition-all`}
      >
        <div className="container mx-auto">
          <div className="mt-6 flex items-center justify-between p-8">
            <Logo />
            <div className="flex items-center justify-between gap-x-20">
              <Nav containerStyles="hidden gap-12 xl:flex" />
              <ThemeToggler />
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
