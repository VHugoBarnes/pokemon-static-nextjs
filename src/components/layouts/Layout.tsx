import { FC, ReactNode } from "react";
import Head from "next/head";

type PropType = { children: ReactNode, title?: string };

export const Layout: FC<PropType> = ({ children, title }: PropType) => {
  return (
    <>
      <Head>
        <title>{`${title} | Pokemon App` ?? "Pokemon App"}</title>
        <meta name="author" content="Victor Vazquez" />
        <meta name="description" content={`Info about Pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <main>
        {children}
      </main>
    </>
  );
};