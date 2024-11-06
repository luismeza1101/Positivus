import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const links = ["About Us", "Use Cases", "Pricing", "Blog"];

  const handleShowSideBar = () => {
    setShowSideBar(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleHiddenSideBar = () => {
    setShowSideBar(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header className="w-full sticky top-0 bg-white z-10">
      <div className="mx-auto flex items-center justify-between w-[80%] py-4 desktop:w-[90%]">
        <img src="/icons/logo-dark.svg" alt="Logo" />
        <button onClick={handleShowSideBar} className="desktop:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        <nav className=" hidden desktop:flex gap-6 items-center">
          <ul className="flex gap-4 items-center">
            {links.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button className="border-2 border-black rounded-2xl p-4">
            Request a Quote
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {showSideBar && (
          <div className="absolute w-full top-0 left-0 h-screen z-20">
            <div
              className="bg-black opacity-30 w-full h-full"
              onClick={handleHiddenSideBar}
            ></div>
            <motion.nav
              className="bg-white h-full w-56 fixed top-0 right-0 flex flex-col justify-between py-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <ul className="flex flex-col">
                {links.map((link, index) => (
                  <li key={index} className="py-3 px-5">
                    {link}
                  </li>
                ))}
              </ul>
              <button className="border-2 border-black rounded-2xl w-[90%] mx-auto py-4">
                Request a Quote
              </button>
              <button
                className="absolute top-5 right-5"
                onClick={handleHiddenSideBar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x "
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
