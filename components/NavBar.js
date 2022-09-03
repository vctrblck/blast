// NavBar.js

// A navigation bar component

// Modules:

import React from "react";
import { AiOutlineSearch, AiOutlinePlayCircle, AiOutlineMenuUnfold } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

// Code:

function NavBar()
{
  return (
    <section className="bg-cyan-900 h-full w-[90px] fixed right-0 flex flex-col items-center justify-center space-y-8 z-40">
      <Image 
        src="/logo.jpeg" 
        width={48} 
        height={48} 
        objectFit="contain" />

      <div className="flex flex-col space-y-8">
        <Link href="/search"><AiOutlineSearch className="sidebarIcon" /></Link>
        <Link href="/song"><AiOutlinePlayCircle className="sidebarIcon"/></Link>
        <Link href="/queue"><AiOutlineMenuUnfold className="sidebarIcon" /></Link>
      </div>
    </section>
  );
}

export default NavBar;

// NavBar.js ends here