import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const LgMenuRef = useRef(null);
  const smMenuRef = useRef(null);

  // handle mobile menu slide animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(smMenuRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(smMenuRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  // gsap animations (logo + desktop menu + login btn)
  useGSAP(() => {
    const tl = gsap.timeline();

    // animate desktop nav links
    tl.from(LgMenuRef.current.children, {
      opacity: 0,
      y: -50,
      stagger: 0.4,
      duration: 1,
      ease: "power1.out",
    });

    // logo animation
    gsap.from(".logo", {
      opacity: 0,
      x: -200,
      duration: 2,
    });

    // login button animation
    gsap.from(".loginBtn", {
      opacity: 0,
      x: 200,
      duration: 2,
    });
  });

  // all route links
  const links = [
    { menu: "Home", to: "/" },
    { menu: "Rooms", to: "/rooms" },
    { menu: "About", to: "/about" },
    { menu: "Contact", to: "/contact" },
    { menu: "Book Now", to: "/bookNow" },
  ];

  return (
    <nav className="fixed w-full bg-white/80  py-3 px-4 flex justify-between items-center z-50">
      
      {/* logo */}
      <div className="logo">
        <h1 className="text-2xl font-black text-[#D39F51]">StayDream <span className="text-xs text-white font-semibold">House</span></h1>
        
      </div>

      {/* desktop menu */}
      <div className="hidden md:block">
        <ul ref={LgMenuRef} className="flex gap-5">
          {links.map((link) => (
            <li key={link.menu}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D39F51] font-bold"
                    : "text-gray-700 hover:text-[#D39F51] duration-200 font-semibold"
                }
              >
                {link.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu panel */}
      <div
        ref={smMenuRef}
        className="fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-30 
        translate-x-full flex flex-col justify-between pb-10"
      >
        {/* mobile nav links */}
        <ul className="flex flex-col gap-6 mt-20 text-center">
          {links.map((link) => (
            <li key={link.menu} className="border-b border-white pb-3">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D39F51] font-bold text-xl"
                    : "text-gray-300 hover:text-[#D39F51] duration-200 text-xl"
                }
                onClick={() => setIsMenuOpen(false)} // close menu when on click any route
              >
                {link.menu}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile login button */}
        <div className="w-full text-center">
          <button className="w-[90%] py-2 bg-[#D39F51] rounded-full text-white">
            Login
          </button>
        </div>
      </div>

      {/* mobile menu icon */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden  text-2xl ${
          isMenuOpen && "text-white z-40"
        }`}
      >
        {isMenuOpen ? <IoMdClose /> : <MdOutlineMenu />}
      </div>

      {/* desktop login button */}
      <div className="loginBtn hidden md:block">
        <button className="px-4 py-1 rounded-full bg-[#D39F51] text-white cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
