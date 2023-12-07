import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";

type Props = {
  id: number
};

export const SmallPokemonCard = ({ id }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Card isHoverable onClick={handleClick} isPressable>
      <CardHeader className="flex justify-center items-center">
        <Image
          as={NextImage}
          isBlurred
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`pokemon with id ${id}`}
          width={144}
          height={144}
          className="w-20 h-20 md:w-36 md:h-36"
          loading="lazy"
        />
      </CardHeader>
      <CardBody>
        <p className="text-lg font-bold text-right">
          #{id}
        </p>
      </CardBody>
    </Card>
  );
};