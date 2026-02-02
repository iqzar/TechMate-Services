'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet";
import { MenuIcon } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Automatically close the Sheet when pathname changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 flex items-center justify-between px-6 py-3 shadow-md">
      {/* Logo or brand name */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-7 h-7 font-bold bg-blue-300 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">TM</span>
        </div>
        <span className="font-bold text-xl text-gray-900">TechMate</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-text font-custom font-semibold text-sm mt-1">
        <li>
          <Link className="hover:border-b-2 hover:border-blue-300" href="/#">Home</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-300" href="/services">Services</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-300" href="/projects">Projects</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-300" href="/about">About Us</Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-300" href="/contact">Contact Us</Link>
        </li>
       
      </ul>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-white h-[400px]">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 font-bold bg-blue-300 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <span className="font-bold text-xl text-gray-900">SuperFix Services</span>
          </Link>

          <ul className="flex flex-col space-y-3 font-semibold text-md mt-6">
            <li className="hover:border-b-2 hover:border-blue-300">
              <Link href="/#">Home</Link>
            </li>
            <li className="hover:border-b-2 hover:border-blue-300">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:border-b-2 hover:border-blue-300">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:border-b-2 hover:border-blue-300">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:border-b-2 hover:border-blue-300">
              <Link href="/contact">Contact Us</Link>
            </li>
            
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
