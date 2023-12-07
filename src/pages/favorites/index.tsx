import { Layout } from "@/components/layouts";
import { NoFavoritePokemons } from "@/components/pokemons/NoFavoritePokemons";
import { SmallPokemonCard } from "@/components/pokemons/SmallPokemonCard";
import { localFavorites } from "@/utils/";
import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const Favorites = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [favoritePokemonsId, setFavoritePokemonsId] = React.useState<number[]>([]);

  React.useEffect(() => {
    setFavoritePokemonsId(localFavorites.pokemons());
    setIsLoading(false);
  }, []);

  return (
    <Layout title="Favorites">
      <Skeleton isLoaded={!isLoading}>
        {favoritePokemonsId.length === 0 && (<NoFavoritePokemons />)}
        {
          favoritePokemonsId.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {
                favoritePokemonsId.map((pokemonId) => (
                  <SmallPokemonCard
                    key={pokemonId}
                    id={pokemonId}
                  />
                ))
              }
            </div>
          )
        }

      </Skeleton>

    </Layout>
  );
};

export default Favorites;