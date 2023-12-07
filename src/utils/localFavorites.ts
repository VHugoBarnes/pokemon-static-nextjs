const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  if (Array.isArray(favorites) === false) {
    return;
  }

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  let favorites: number[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  if (Array.isArray(favorites) === false) {
    return false;
  }

  if (favorites.includes(id)) {
    return true;
  }

  return false;
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

const toExport = {
  toggleFavorite: toggleFavorite,
  isInFavorites: isInFavorites,
  pokemons: pokemons,
};

export default toExport;