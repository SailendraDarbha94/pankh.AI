"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";


export default function Client({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [hideNavbar, setHideNavbar]= useState<boolean>(false)
    const pathName = usePathname();

    useEffect(() => {
        setHideNavbar(pathName.includes("default") ||
        pathName.includes("admin"))
    },[])

  return (
    <div>
      {!hideNavbar && <Navbar className="dark hidden md:block" />}
      <div className="">{children}</div>
    </div>
  );
}
