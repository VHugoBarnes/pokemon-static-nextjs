import React from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NextNavbar>
      <NavbarBrand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="ditto sprite"
          width={80}
          height={80}
          className="w-20 h-20"
        />
        <h2 className="text-3xl">P</h2>
        <h3 className="text-xl">okemon</h3>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link>Favoritos</Link>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};