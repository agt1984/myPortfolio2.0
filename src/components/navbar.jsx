"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";  //en el tutorial no aparece, pero, aqui de debe usar para colocar las imagenes
import NavLink from "./navLink.jsx"
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
      closed:{
        rotate:0,
      },
      opened:{
        rotate:45,
        backgroundColor:"rgb(255,255,255)"
      }
    }

    const centerVariants = {
      closed: {
        opacity:1,
      },
      opened: {
        opacity:0,
      }
    };

    const bottomVariants = {
      closed: {
        opacity: 1,
      },
      opened: {
        rotate: -45,
        backgroundColor:"rgb(255,255,255)",
      },
    };

    const listVariants = {
      closed: {
        x: "100vw",
      },
      opened: {
        x: 0,
      },
    };



    return (
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/*LINKS*/}
        <div className="hidden md:flex gap-4 w-1/3">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* LOGO */}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1"> &lt;ALVARO</span>
            <spam className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              /LUIS&gt;
            </spam>
          </Link>
        </div>

        {/*SOCIAL*/}
        <div className="hidden md:flex gap-4 w-1/3">
          <Link href="https://github.com/agt1984">
            <Image src="/github.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/alvaro-luis-gonzalez-trejo-93a421125/">
            <Image src="/linkedin.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/alvaroluis1.8.1/">
            <Image src="/instagram.png" alt="" width={24} height={24} />
          </Link>
        </div>

        {/* Menu RESPNSIVE */}
        <div className="md:hidden">
          {/* Menu button */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              motion
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded "
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
          {/*MENU LIST*/}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40 text-4xl"
            >
              {links.map((link) => (
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    );
};
 
export default Navbar;