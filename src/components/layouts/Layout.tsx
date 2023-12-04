import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
type PropType = { children: ReactNode, title?: string };

export const Layout: FC<PropType> = ({ children, title }: PropType) => {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{`${title} | Pokemon App` ?? "Pokemon App"}</title>
        <meta name="author" content="Victor Vazquez" />
        <meta name="description" content={`Info about Pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <section className="px-5">
        {children}
      </section>
    </main>
  );
};