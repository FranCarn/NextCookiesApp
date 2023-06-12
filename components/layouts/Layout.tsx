import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="uwu" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
