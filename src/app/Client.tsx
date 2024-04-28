"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar"; 
import { useEffect, useState } from "react";

export default function Client({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [hideNavbar, setHideNavbar] = useState<boolean>(false);
    const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false); 
    const pathName = usePathname();

    useEffect(() => {
        setHideNavbar(pathName.includes("default") ||
        pathName.includes("admin"));
    }, [pathName]);


    const handleResize = () => {
       
        setShowMobileNavbar(window.innerWidth <= 768);
    };

    useEffect(() => {
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
       
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {/* Conditionally render mobile navbar or regular navbar */}
            {showMobileNavbar ? (
                <MobileNavbar className="dark block md:hidden" />
            ) : (
                !hideNavbar && <Navbar className="dark hidden md:block" />
            )}
            <div className="">{children}</div>
        </div>
    );
}
