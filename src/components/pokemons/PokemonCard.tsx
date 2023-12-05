import { SmallPokemon } from "@/interfaces";
import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";

interface Prop {
  pokemon: SmallPokemon
};

export const PokemonCard = ({ pokemon }: Prop) => {
  return (
    <Card key={pokemon.id} isHoverable isPressable>
      <CardBody className="flex flex-row space-x-2 items-start">
        <Image
          src={pokemon.img}
          alt={pokemon.name}
          width={160}
          height={160}
          className="w-36 h-36 md:w-40 md:h-40"
          loading="lazy"
        />
        <div className="flex justify-between items-center flex-grow">
          <h3 className="capitalize font-bold text-xl">
            {pokemon.name}
          </h3>
          <p>
            #{pokemon.id}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};