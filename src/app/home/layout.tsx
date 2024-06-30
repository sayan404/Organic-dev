"use client"
import { Button } from "@/components/ui/button";
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
  import { useRouter } from 'next/navigation';
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
      <div>
        <Navbar className="shadow-lg">
          <NavbarBrand>
            <img src="./OrganicLogo.png" alt="OrganicLogo" className="w-32 overflow-hidden" />
          </NavbarBrand>
  
          {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Statistics
              </Link>
            </NavbarItem>
          </NavbarContent> */}
  
          <NavbarContent as="div" justify="end">
            <Button onClick={() => router.push("/donor/add")}>Donor Registration</Button>
            {/* <Button onClick={() => router.push("/hospital/dashboard")}>Hospital Registration</Button> */}
            <Button onClick={() => router.push("/hospital/login")}>Hospital Login</Button>
          </NavbarContent>
        </Navbar>
  
        {children}
      </div>
    );
  }
  