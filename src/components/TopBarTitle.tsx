import { useTheme } from "@emotion/react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function TopBarTitle() {
  const { asPath } = useRouter();
  const theme = useTheme();
  const breadCrumbSection = (text: string) => (
    <Typography variant="h4">{text}</Typography>
  );
  const createBreadCrumbSectionsBasedOnUrl = (url: string) => {
    const sections = asPath
      .slice(1)
      .split("/")
      .filter((x) => x);
    const links = [];
    console.log(sections.length);
    let lastUrl = "/";
    for (let i = 0; i < sections.length; i++) {
      const capitalizedSection =
        sections[i].charAt(0).toUpperCase() + sections[i].slice(1);
      lastUrl += sections[i] + "/";
      const link = (
        <Link key={i} underline="hover" color="inherit" href={lastUrl}>
          {breadCrumbSection(capitalizedSection)}
        </Link>
      );
      links.push(link);
      links.push(" \\ ");
    }
    return links;
  };
  return (
    <>
      <Breadcrumbs separator={breadCrumbSection("\\")} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          {breadCrumbSection("Navid S. Matin")}
        </Link>
        {createBreadCrumbSectionsBasedOnUrl(asPath)}
        {theme.palette.mode == "dark" ? (
          <Image
            src="/blinking_underscore_white.svg"
            alt="12"
            width={50}
            height={50}
          />
        ) : (
          <Image
            src="/blinking_underscore_gray.svg"
            alt="12"
            width={50}
            height={50}
          />
        )}
      </Breadcrumbs>
    </>
  );
}
