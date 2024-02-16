import React from "react";
import ThemeToggler from "./theme-toggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="flex items-center justify-between mt-6 p-8">
            <Logo />
            <div className="flex items-center gap-x-6">
              <Nav
                containerStyles="hidden xl:flex gap-x-10 items-center"
                linkStyles="relative hover:text-primary transition-all"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
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
