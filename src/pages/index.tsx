import { GetStaticProps, NextPage } from "next";
import { Card, CardBody, Image } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemons";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";

interface Props {
  pokemons: SmallPokemon[]
};

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {
          pokemons.map((pokemon) => (<PokemonCard key={pokemon.id} pokemon={pokemon} />))
        }
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    name: poke.name,
    url: poke.url,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons: pokemons
    }
  };
};

export default Home;
