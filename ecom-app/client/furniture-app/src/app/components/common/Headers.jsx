'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { 
    IoSearchOutline, 
    IoHeartOutline, 
    IoCloseOutline, 
    IoMenuOutline, 
    IoChevronDownOutline, 
    IoChevronForwardOutline 
} from 'react-icons/io5';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileLivingOpen, setMobileLivingOpen] = useState(false);
    const [mobileSofaOpen, setMobileSofaOpen] = useState(false);
    const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 80);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div
                className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-100">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-gray-800">Menu</h3>
                    <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-500 hover:text-black">
                        <IoCloseOutline />
                    </button>
                </div>

                <ul className="flex flex-col p-4 text-sm font-semibold text-gray-800 uppercase tracking-wider space-y-4">
                    <li>
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-amber-700 py-1">Home</Link>
                    </li>
                    
                    <li className="border-b border-gray-50 pb-2">
                        <button 
                            onClick={() => setMobileLivingOpen(!mobileLivingOpen)} 
                            className="w-full flex justify-between items-center py-1 uppercase text-left"
                        >
                            <span>Living</span>
                            <IoChevronDownOutline className={`transform transition-transform ${mobileLivingOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileLivingOpen && (
                            <ul className="pl-4 mt-2 space-y-2 normal-case text-xs font-medium text-gray-600 tracking-normal">
                                <li className="font-bold text-gray-800 mt-2">Tables:</li>
                                <li><Link href="/categories/side-and-end-tables" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Side and End Tables</Link></li>
                                <li><Link href="/categories/nest-of-tables" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Nest Of Tables</Link></li>
                                <li><Link href="/categories/coffee-table-sets" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Coffee Table Sets</Link></li>
                                <li><Link href="/categories/coffee-tables" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Coffee Tables</Link></li>
                                
                                <li className="font-bold text-gray-800 mt-2">Mirror:</li>
                                <li><Link href="/categories/wooden-mirrors" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Wooden Mirrors</Link></li>
                                
                                <li className="font-bold text-gray-800 mt-2">Living Storage:</li>
                                <li><Link href="/categories/prayer-units" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Prayer Units</Link></li>
                                <li><Link href="/categories/display-unit" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Display Unit</Link></li>
                                <li><Link href="/categories/shoe-racks" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Shoe Racks</Link></li>
                                <li><Link href="/categories/chest-of-drawers" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Chest Of Drawers</Link></li>
                                <li><Link href="/categories/cabin cabinets-and-sideboard" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Cabinets & Sideboard</Link></li>
                                <li><Link href="/categories/bookshelves" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Bookshelves</Link></li>
                                <li><Link href="/categories/tv-units" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Tv Units</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="border-b border-gray-50 pb-2">
                        <button 
                            onClick={() => setMobileSofaOpen(!mobileSofaOpen)} 
                            className="w-full flex justify-between items-center py-1 uppercase text-left"
                        >
                            <span>Sofa</span>
                            <IoChevronDownOutline className={`transform transition-transform ${mobileSofaOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSofaOpen && (
                            <ul className="pl-4 mt-2 space-y-2 normal-case text-xs font-medium text-gray-600 tracking-normal">
                                <li className="font-bold text-gray-800 mt-2">Sofa Cum Bed:</li>
                                <li><Link href="/categories/wooden-sofa-cum-bed" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Wooden Sofa Cum Bed</Link></li>
                                
                                <li className="font-bold text-gray-800 mt-2">Sofa Sets:</li>
                                <li><Link href="/categories/sofa-cover" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Sofa Cover</Link></li>
                                <li><Link href="/categories/l-shape-sofa" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">L Shape Sofa</Link></li>
                                <li><Link href="/categories/1-seater-sofa" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">1 Seater Sofa</Link></li>
                                <li><Link href="/categories/2-seater-sofa" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">2 Seater Sofa</Link></li>
                                <li><Link href="/categories/3-seater-sofa" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">3 Seater Sofa</Link></li>
                                <li><Link href="/categories/wooden-sofa-sets" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Wooden Sofa Sets</Link></li>
                                
                                <li className="font-bold text-gray-800 mt-2">Swing Jhula:</li>
                                <li><Link href="/categories/wooden-jhula" onClick={() => setIsMenuOpen(false)} className="block py-1 pl-2">Wooden Jhula</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="border-b border-gray-50 pb-2">
                        <button 
                            onClick={() => setMobilePagesOpen(!mobilePagesOpen)} 
                            className="w-full flex justify-between items-center py-1 uppercase text-left"
                        >
                            <span>Pages</span>
                            <IoChevronDownOutline className={`transform transition-transform ${mobilePagesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobilePagesOpen && (
                            <ul className="pl-4 mt-2 space-y-2 normal-case text-xs font-medium text-gray-600 tracking-normal">
                                <li><Link href="/AboutUs" onClick={() => setIsMenuOpen(false)} className="block py-1">About Us</Link></li>
                                <li><Link href="/FAQS" onClick={() => setIsMenuOpen(false)} className="block py-1">Frequently Questions</Link></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link href="/ContactUs" onClick={() => setIsMenuOpen(false)} className="block py-1">Contact Us</Link>
                    </li>
                </ul>
            </div>

            <header className="w-full bg-white font-sans relative z-40">
                <div className="w-full border-b border-gray-100 py-2 px-4 md:px-8 flex justify-between items-center text-xs text-gray-600">
                    <div>
                        Contact us 24/7: <span className="font-medium text-gray-800">+91-98745612330</span> / furniture@gmail.com
                    </div>
                    <div className="hover:text-amber-700 transition">
                        <Link href="/Login">Login / </Link>
                        <Link href="/Register"> Register</Link>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsMenuOpen(true)} 
                            className="text-2xl text-gray-700 hover:text-black md:hidden focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <IoMenuOutline />
                        </button>
                        <Link href="/">
                            <div className="logo w-24 md:w-32">
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="Furniture Logo"/>
                            </div>
                        </Link>
                    </div>

                    <form className="flex-1 max-w-md relative  md:block">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full border border-gray-200 py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-gray-400 placeholder-gray-400"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black text-lg">
                            <IoSearchOutline />
                        </button>
                    </form>

                    <div className="flex items-center gap-2 md:gap-4">
                        <Link href="/wishlist" className="p-2 md:p-2.5 border border-gray-200 text-base md:text-lg text-gray-700 hover:bg-gray-50 transition">
                            <IoHeartOutline />
                        </Link>

                    </div>
                </div>

                <nav className={`w-full md:block transition-all duration-300 z-50 ${
                    isScrolled 
                        ? 'fixed top-0 left-0 bg-white shadow-md border-none' 
                        : 'border-t border-b border-gray-100 relative'
                }`}>
                    <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-center relative">
                        
                        <div className={` transition-opacity duration-300 flex items-center w-[120px] shrink-0  ${
                            isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`} style={{paddingBottom: 8}}>
                            <Link href="/">
                                <img 
                                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" 
                                    alt="Furniture Logo"
                                    className="w-16 object-contain" style={{width: 90}}
                                />
                            </Link>
                        </div>
                        <ul className={`flex justify-center items-center gap-8 text-sm font-bold tracking-widest text-gray-800 uppercase transition-all duration-300 ${
                            isScrolled ? 'py-8' : 'py-5'
                        }`}>
                            <li>
                                <Link href="/" className="text-amber-700 hover:text-amber-900 transition">Home</Link>
                            </li>
                            <li className="relative group py-2">
                                <span className="hover:text-amber-700 transition flex items-center gap-1 cursor-pointer">
                                    Living <span className="text-[8px] text-gray-400">▼</span>
                                </span>

                                <ul className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover:block text-xs font-medium tracking-normal normal-case text-gray-700 z-50">
                                    <li className="relative group/sub border-b border-gray-50">
                                        <span className="px-4 py-3 hover:bg-gray-50 hover:text-amber-700 flex justify-between items-center cursor-pointer">
                                            Tables <IoChevronForwardOutline className="text-[10px]" />
                                        </span>

                                        <ul className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover/sub:block">
                                            <li><Link href="/categories/side-and-end-tables" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Side and End Tables</Link></li>
                                            <li><Link href="/categories/nest-of-tables" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Nest Of Tables</Link></li>
                                            <li><Link href="/categories/coffee-table-sets" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Coffee Table Sets</Link></li>
                                            <li><Link href="/categories/coffee-tables" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Coffee Tables</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group/sub border-b border-gray-50">
                                        <span className="px-4 py-3 hover:bg-gray-50 hover:text-amber-700 flex justify-between items-center cursor-pointer">
                                            Mirror <IoChevronForwardOutline className="text-[10px]" />
                                        </span>
                                        <ul className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover/sub:block">
                                            <li><Link href="/categories/wooden-mirrors" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Wooden Mirrors</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group/sub">
                                        <span className="px-4 py-3 hover:bg-gray-50 hover:text-amber-700 flex justify-between items-center cursor-pointer">
                                            Living Storage <IoChevronForwardOutline className="text-[10px]" />
                                        </span>
                                        <ul className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover/sub:block">
                                            <li><Link href="/categories/prayer-units" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Prayer Units</Link></li>
                                            <li><Link href="/categories/display-unit" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Display Unit</Link></li>
                                            <li><Link href="/categories/shoe-racks" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Shoe Racks</Link></li>
                                            <li><Link href="/categories/chest-of-drawers" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Chest Of Drawers</Link></li>
                                            <li><Link href="/categories/cabin cabinets-and-sideboard" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Cabinets & Sideboard</Link></li>
                                            <li><Link href="/categories/bookshelves" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Bookshelves</Link></li>
                                            <li><Link href="/categories/tv-units" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Tv Units</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group py-2">
                                <span className="hover:text-amber-700 transition flex items-center gap-1 cursor-pointer">
                                    Sofa <span className="text-[8px] text-gray-400">▼</span>
                                </span>
                                <ul className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover:block text-xs font-medium tracking-normal normal-case text-gray-700 z-50">
                                    <li className="relative group/sub border-b border-gray-50">
                                        <span className="px-4 py-3 hover:bg-gray-50 hover:text-amber-700 flex justify-between items-center cursor-pointer">
                                            Sofa Cum Bed <IoChevronForwardOutline className="text-[10px]" />
                                        </span>
                                        <ul className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover/sub:block">
                                            <li><Link href="/categories/wooden-sofa-cum-bed" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Wooden Sofa Cum Bed</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group/sub border-b border-gray-50">
                                        <span className="px-4 py-3 hover:bg-gray-50 hover:text-amber-700 flex justify-between items-center cursor-pointer">
                                            Sofa Sets <IoChevronForwardOutline className="text-[10px]" />
                                        </span>
                                        <ul className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover/sub:block">
                                            <li><Link href="/categories/sofa-cover" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Sofa Cover</Link></li>
                                            <li><Link href="/categories/l-shape-sofa" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">L Shape Sofa</Link></li>
                                            <li><Link href="/categories/1-seater-sofa" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">1 Seater Sofa</Link></li>
                                            <li><Link href="/categories/2-seater-sofa" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">2 Seater Sofa</Link></li>
                                            <li><Link href="/categories/3-seater-sofa" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">3 Seater Sofa</Link></li>
                                            <li><Link href="/categories/wooden-sofa-sets" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Wooden Sofa Sets</Link></li>
                                            <li><Link href="/categories/normal" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Normal</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative group/sub">
                                        <span className="px-4 py-3 hover:bg-gray-50 hover:text-amber-700 flex justify-between items-center cursor-pointer">
                                            Swing Jhula <IoChevronForwardOutline className="text-[10px]" />
                                        </span>
                                        <ul className="absolute left-full top-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover/sub:block">
                                            <li><Link href="/categories/wooden-jhula" className="block px-4 py-2.5 hover:bg-gray-50 hover:text-amber-700">Wooden Jhula</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group py-2">
                                <span className="hover:text-amber-700 transition flex items-center gap-1 cursor-pointer">
                                    Pages <span className="text-[8px] text-gray-400">▼</span>
                                </span>
                                <ul className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 shadow-lg hidden group-hover:block text-xs font-medium tracking-normal normal-case text-gray-700 z-50">
                                    <li><Link href="/AboutUs" className="block px-4 py-3 border-b border-gray-50 hover:bg-gray-50 hover:text-amber-700">About Us</Link></li>
                                    <li><Link href="/FAQS" className="block px-4 py-3 hover:bg-gray-50 hover:text-amber-700">Frequently Questions</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link href="/ContactUs" className="hover:text-amber-700 transition">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}