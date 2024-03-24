"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed bottom-8 md:top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/'} className="text-white">
          Home
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/services/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/services/custom-models">Train Custom Models</HoveredLink>
            {/* <HoveredLink href="/branding">Branding</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="AyurYoj"
              href="https://ksdc-community.vercel.app/"
              src="/ayuryoj.png"
              description="An initiative by Karnataka State Dental Council for connecting Dentists & Clinics"
            />
            <ProductItem
              title="AmpDent"
              href="https://amplifydentistry.com/"
              src="/ampdent.png"
              description="An AI powered platform for helping dental students learn"
            />
            {/* <ProductItem
              title="AyurYoj"
              href="https://ksdc-community.vercel.app/"
              src="/ayuryoj.png"
              description="An initiative by Karnataka State Dental Council for connecting Dentists & Clinics"
            /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/individual">FAQs</HoveredLink>
            <HoveredLink href="/team">Pricing</HoveredLink>
            {/* <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
