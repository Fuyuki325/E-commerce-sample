import React from "react";
import Container from "@/app/components/Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ['latin'], weight: ['400']})


const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/" className={`${redressed.className} font-bold text-2xl`}>E-Shop</Link>
            <div className="hidden md:block">search</div>
            <div className="flex items-center md:gap-12 gap-8">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
