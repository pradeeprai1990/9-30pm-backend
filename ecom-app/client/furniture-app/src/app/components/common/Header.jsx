"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Living",
    megaMenu: [
      {
        title: "Tables",
        items: [
          { name: "Side and End Tables", href: "/product" },
          { name: "Nest Of Tables", href: "/product" },
          { name: "Coffee Table Sets", href: "/product" },
          { name: "Coffee Tables", href: "/product" },
        ],
      },
      {
        title: "Mirror",
        items: [{ name: "Wooden Mirrors", href: "/product" }],
      },
      {
        title: "Living Storage/collections",
        items: [
          { name: "Prayer Units", href: "/product" },
          { name: "Display Unit", href: "/product" },
          { name: "Shoe Racks", href: "/product" },
          { name: "Chest Of Drawers", href: "/product" },
          { name: "Cabinets and Sideboard", href: "/product" },
          { name: "Bookshelves", href: "/product" },
          { name: "Tv Units", href: "/product" },
        ],
      },
    ],
  },
  {
    name: "Sofa",
    megaMenu: [
      {
        title: "Sofa Cum Bed",
        items: [{ name: "Wooden Sofa Cum Bed", href: "/product" }],
      },
      {
        title: "Sofa Sets",
        items: [
          { name: "Sofa Cover", href: "/product" },
          { name: "L Shape Sofa", href: "/product" },
          { name: "1 Seater Sofa", href: "/product" },
          { name: "2 Seater Sofa", href: "/product" },
          { name: "3 Seater Sofa", href: "/product" },
          { name: "Wooden Sofa Sets", href: "/product" },
          { name: "Normal", href: "/product" },
        ],
      },
      {
        title: "Swing Jhula",
        items: [{ name: "Wooden Jhula", href: "/product" }],
      },
    ],
  },
  {
    name: "Pages",
    megaMenu: [
      {
        items: [
          { name: "About Us", href: "/about-us" },
          { name: "Frequently Questions", href: "/faq" },
        ],
      },
    ],
  },
  { name: "Contact US", href: "/contact-us" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu,setOpenMenu] = useState(null);

  return (
    <header className="z-50 bg-white/95 border-b-1 border-gray-200">
      {/* Top Bar */}
      <div className="lg:block hidden text-sm border-b-1 border-gray-200 py-4 px-4">
        <div className="lg:max-w-[1140px] container mx-auto flex justify-between items-center">
          <p className={`text-[12px] font-rubik`}>
            Contact us 24/7 : +91-98745612330 / furniture@gmail.com
          </p>
          <div className="flex items-center gap-4">
            <span className={`flex items-center gap-1 text-[12px] font-rubik`}>
              <Link href={"/login"}>Login</Link>/
              <Link href={"/register"}>Register</Link>
            </span>
          </div>
        </div>
      </div>

      {/* logo, search and wishlist */}
      <div className=" border-b-1 border-gray-200 py-4 px-4">
        <div className="lg:max-w-[1140px] mx-auto grid lg:grid-cols-[20%_auto] grid-cols-[20%_auto_auto] justify-between font-rubik">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            <img src="/logo.png" alt="Furniture Logo" className="w-40" />
          </Link>
          <div className="flex justify-end gap-2">
            <div className="hidden lg:flex md:hidden border-1 border-gray-200 rounded-xs font-rubik text-sm justify-items-center items-center px-2">
              <form action="" className="">
                <input
                  name="search"
                  placeholder="Search product..."
                  type="text"
                  fdprocessedid="4k6tmg"
                />
                <button type="submit" fdprocessedid="jdqufo">
                  <IoIosSearch />
                </button>
              </form>
            </div>
            <div className="border-1 border-gray-200 rounded-xs flex justify-items-center items-center px-2 py-2">
              <Link href={"/wishlist"}>
                <FaHeart className="hover:text-orange-dim" />
              </Link>
            </div>
          </div>

          {/* Mobile icon */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border px-2 border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="sticky top-0 mx-auto flex max-w-7xl items-center justify-center lg:px-8 lg:py-4">
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => menu.megaMenu && setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={menu.href}
                  className="text-[12.5px] font-rubik font-semibold tracking-wide text-dark-gray transition hover:text-orange-dim uppercase py-4"
                >
                  {menu.name}
                  
                </a>
                {/* Mega Menu */}
                {activeMenu === index && menu.megaMenu && (
                  <div className="absolute top-8 left-0 w-auto min-w-max bg-white shadow-xl rounded-lg p-6 flex gap-6 z-5">
                    {menu.megaMenu.map((column, i) => (
                      <div key={i}>
                        <h3 className="font-rubik font-semibold text-sm mb-3 px-2">
                          {column.title}
                        </h3>
                        <ul className="px-2">
                          {column.items.map((item, j) => (
                            <li key={j}>
                              <a
                                href={item.href}
                                className="block py-2 text-sm text-gray-500 hover:text-orange-dim"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative">
        {mobileOpen ? (
          <div className="fixed top-0 left-0 h-screen w-64 border-t border-slate-200 bg-white shadow-lg px-4 py-4 md:hidden scrollbar-thin overflow-auto">
            <div className="text-center text-dark-gray">
              <p className="text-sm font-rubik mb-2">
                Contact us 24/7 : +91-98745612330
              </p>
              <p className="text-sm font-rubik">furniture@gmail.com</p>
            </div>
            
            <nav>
              <ul className="flex md:flex-row flex-col gap-2">
                {menuItems.map((menu, index) => (
                  <li key={index} className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === index ? null : index)
                      }
                      className="w-full text-left border-b border-gray-200 px-3 py-2 text-sm font-semibold text-dark-gray transition hover:text-orange-dim uppercase"
                    >
                      {menu.name}

                    </button>

                    {openMenu === index && (
                      <div className="mt-3 md:absolute md:top-8 md:left-0 bg-white rounded p-2 grid grid-cols-1 md:grid-cols-2 gap-5 min-w-max">
                        {menu.megaMenu.map((col, i) => (
                          <div key={i}>
                            <h3 className="font-bold mb-2">{col.title}</h3>
                            {col.items.map((item, j) => (
                              <a
                                key={j}
                                href={item.link}
                                className="block py-1 text-gray-600 hover:text-blue-600"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
