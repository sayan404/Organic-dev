"use client"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Navbar className="shadow-lg">
        <NavbarBrand>
          <p className="font-bold text-inherit"><Link href="/home">ACME</Link></p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/hospital/dashboard">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/hospital/donor-requests" aria-current="page" color="secondary">
              Donor
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Receiver Registration
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar> */}
      {children}
    </div>
  );
}
