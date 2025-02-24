"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const [progress, setProgress] = useState(0)
  const pathname = usePathname();


  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70)
    }, 100);
    
    setTimeout(() => {
      setProgress(100)
    }, 500);
  
    
  }, [pathname])
  
  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 600);
  
  
  }, [])
  

  return (
    <nav className="bg-background/50 p-4 sticky z-10 top-0 backdrop-blur border-b ">
      <LoadingBar
        color='#a855f7'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container flex justify-between items-center">
        
        <div className=" text-xl md:text-2xl font-bold">
          <Link href="/">codepriyam</Link>
        </div>
        <div className="space-x-4 flex items-center ">
          <div className="space-x-4 hidden md:flex items-center ">
            <Link
              href="/"
              className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
            >
              Home
            </Link>
            {/* <Link
              href="/about"
              className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
            >
              About
            </Link> */}
            <Link href="/blog" className="hover:font-semibold">
              Blog
            </Link>
            <Link
              href="/contact"
              className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="md:space-x-2 md:pl-8 flex items-center">
            <div className="hidden sm:flex ">
              {/* <Button className="border" variant="outline ">
                SigIN
              </Button>
              <Button className="border" variant="outline ">
                Login
              </Button> */}
            <ModeToggle />
            </div>
          </div>
        </div>
        <div className="md:hidden">
            <span className="mr-4"><ModeToggle /></span>
        <Sheet>

          <SheetTrigger>
            <div className="hamburger md:hidden ">
              <HamburgerMenuIcon />
            </div>
          </SheetTrigger>
          
          <SheetContent>
            <SheetHeader>
              <SheetTitle>CodePriyam </SheetTitle>
              <SheetDescription>
                <div className="space-y-4 flex flex-col justify-center items-center">
                  <Link
                    href="/"
                    className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Home
                  </Link>
                  {/* <Link
                    href="/about"
                    className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    About
                  </Link> */}
                  <Link
                    href="/blog"
                    className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className=" hover:font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Contact
                  </Link>
                </div>
                <div className="space-x-2 mt-5">
                  <Button className="border" variant="outline ">
                    SigIN
                  </Button>
                  <Button className="border" variant="outline ">
                    Login
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
