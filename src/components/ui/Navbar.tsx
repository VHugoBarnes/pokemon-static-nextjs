import React from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NextNavbar isBlurred>
      <NavbarBrand >
        <Link href="/" color="foreground">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="ditto sprite"
            width={80}
            height={80}
            className="w-20 h-20"
            priority
          />
          <h2 className="text-3xl">P</h2>
          <h3 className="text-xl">okemon</h3>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/favorites">Favorites</Link>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};