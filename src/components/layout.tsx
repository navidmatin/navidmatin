import React, { ReactNode } from "react";
import Head from "next/head";
import { Container, Grid } from "@mui/material";
import DarkModeButton from "./DarkModeButton";
import TopBar from "./TopBar";
import { Box } from "@mui/system";
import TopBarTitle from "./TopBarTitle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Navid Matin</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container>
        <TopBar />
        {children}
      </Container>
    </>
  );
}
