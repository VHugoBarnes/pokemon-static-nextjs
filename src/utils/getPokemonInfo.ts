import { pokeApi } from "@/api";
import { PokemonInfoResponse } from "@/interfaces";

interface Props {
  pokemon: PokemonInfoResponse
};

const getPokemonInfo = async (term: string): Promise<Props> => {
  const { data } = await pokeApi.get<PokemonInfoResponse>(`/pokemon/${term}`);

  return {
    pokemon: {
      id: data.id,
      name: data.name,
      height: data.height,
      sprites: data.sprites,
      stats: data.stats,
      types: data.types,
      weight: data.weight
    }
  };
};

export default getPokemonInfo;