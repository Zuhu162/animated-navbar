import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import LinkedIn from "./LinkedIn";
import Github from "./Github";
import Logo from "./Logo";

const NavIcons = [
  {
    name: "Hero",
    link: "#/",
    component: Home,
  },
  {
    name: "About",
    link: "#About",
    component: Profile,
  },
  {
    name: "GitHub",
    link: "https://github.com/Zuhu162",
    component: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zuhayer-siddique/",
    component: LinkedIn,
  },
];

const Navbar = () => {
  return (
    <div className=" h-14 bg-black flex justify-between items-center backdrop-blur-sm container mx-auto navbar px-10 text-white border-radius rounded-lg">
      <div className="hidden md:block w-[30px] h-[30px]">
        <Logo />
      </div>
      <div className="flex justify-center gap-12 w-1/2">
        {NavIcons.map((Component, index) => (
          <a
            key={index}
            href={Component.link}
            target={Component.link.includes("#") ? "_self" : "_blank"}>
            <Component.component
              className="w-6 fill-white hover:fill-blue-400 cursor-pointer transition duration-300 ease-in-out"
              key={index}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
