import { ReactNode } from "react";
import Head from "next/head";

type PropType = { children: ReactNode, title?: string };

export const Layout = ({ children, title }: PropType) => {
  return (
    <>
      <Head>
        <title>{`${title} | Pokemon App` ?? "Pokemon App"}</title>
        <meta name="author" content="Victor Vazquez" />
        <meta name="description" content="Info about Pokemon X" />
        <meta name="keywords" content="X, pokemon, pokedex" />
      </Head>

      <main>
        {children}
      </main>
    </>
  );
};