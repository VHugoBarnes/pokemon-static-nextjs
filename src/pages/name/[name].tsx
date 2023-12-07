import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, CardBody, CardHeader, Image, Skeleton } from "@nextui-org/react";
import confetti from "canvas-confetti";
import validator from "validator";

import { PokemonInfoResponse, PokemonListResponse } from "@/interfaces";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { capitalizeString } from "@/helpers";
import { getPokemonInfo, localFavorites } from "@/utils";

interface Props {
  pokemon: PokemonInfoResponse
};

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [loadingFavorite, setLoadingFavorite] = React.useState<boolean>(true);
  const [isInFavorites, setIsInFavorites] = React.useState<boolean>(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  React.useEffect(() => {
    setIsInFavorites(localFavorites.isInFavorites(pokemon.id));
    setLoadingFavorite(false);
  }, [pokemon.id]);

  return (
    <Layout title={capitalizeString(pokemon.name)}>
      <div className="gap-4 flex flex-col lg:flex-row">
        <Card className="lg:w-80">
          <CardBody className="flex justify-center items-center">
            <Image
              alt={pokemon.name}
              src={pokemon.sprites.other?.dream_world.front_default}
              width={320}
              height={320}
              className="w-36 h-36 md:w-40 md:h-40 lg:w-80 lg:h-80"
              loading="lazy"
            />
          </CardBody>
        </Card>

        <Card className="flex-grow grid content-between">
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-2xl font-bold capitalize">
              {pokemon.name}
            </h3>
            <Skeleton isLoaded={!loadingFavorite} className="rounded-xl">
              <Button
                className={`${isInFavorites ? "border-red-500" : "border-blue-500"}`}
                variant="bordered"
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "Eliminar de favoritos" : "Guardar en favoritos"}
              </Button>
            </Skeleton>
          </CardHeader>
          <CardBody>
            <h4 className="text-xl">
              Sprites
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Image
                alt={`${pokemon.name} front default`}
                src={pokemon.sprites.front_default}
                width={144}
                height={144}
                className="w-36 h-36"
                loading="lazy"
              />
              <Image
                alt={`${pokemon.name} back default`}
                src={pokemon.sprites.back_default}
                width={144}
                height={144}
                className="w-36 h-36"
                loading="lazy"
              />
              <Image
                alt={`${pokemon.name} front shiny`}
                src={pokemon.sprites.front_shiny}
                width={144}
                height={144}
                className="w-36 h-36"
                loading="lazy"
              />
              <Image
                alt={`${pokemon.name} back shiny`}
                src={pokemon.sprites.back_shiny}
                width={144}
                height={144}
                className="w-36 h-36"
                loading="lazy"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const paths = data.results.map((poke) => ({ params: { name: validator.escape(poke.name.trim()) } }));

  return {
    paths: [...paths],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { name } = params as { name: string };
  return await getPokemonInfo(name);
};

export default PokemonPage;