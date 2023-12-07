import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";

export const NoFavoritePokemons = () => {
  return (
    <div
      className="flex flex-col h-90dvh items-center justify-center self-center"
    >
      <h1 className="text-3xl font-bold">
        No favorites
      </h1>

      <Image
        as={NextImage}
        isBlurred
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="ditto"
        width={160}
        height={160}
        className="w-36 h-36 md:w-40 md:h-40 opacity-5"
        loading="lazy"
      />

    </div>
  );
};