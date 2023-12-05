import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { PokemonInfoResponse } from "@/interfaces";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { capitalizeString } from "@/helpers";

interface Props {
  pokemon: PokemonInfoResponse
};

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={capitalizeString(pokemon.name)}>
      <h1 className="text-2xl font-bold">{pokemon.id} - {capitalizeString(pokemon.name)}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, v) => ({ params: { id: `${v + 1}` } }));
  return {
    paths: [...pokemons151],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<PokemonInfoResponse>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: {
        id: data.id,
        name: data.name,
        height: data.height,
        sprites: data.sprites,
        stats: data.stats,
        types: data.types,
        weight: data.weight
      }
    }
  };
};

export default PokemonPage;