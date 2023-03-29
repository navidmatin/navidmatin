import { useTheme } from "@emotion/react";
import { Grid, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export default function TopBarTitle() {
  const { asPath } = useRouter();
  const theme = useTheme();

  const breadCrumbSection = (text: string) => (
    <Typography variant="h4">{text}</Typography>
  );

  const blinking_underscore =
    theme.palette.mode == "dark" ? (
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
    );
  const breadcrumbs = useMemo(() => {
    const sections = asPath
      .slice(1)
      .split("/")
      .filter((x) => x);
    const links = [];
    let lastUrl = "/";

    links.push(
      <Grid item>
        <Link key="name" href="/" className="link-hover">
          {breadCrumbSection("Navid S. Matin")}
        </Link>
      </Grid>
    );
    for (let i = 0; i < sections.length; i++) {
      links.push(<Grid item>{breadCrumbSection(`\\`)}</Grid>);
      const capitalizedSection =
        sections[i].charAt(0).toUpperCase() + sections[i].slice(1);
      lastUrl += sections[i] + "/";
      const link = (
        <Grid item>
          <Link key={i} href={lastUrl} className="link-hover">
            {breadCrumbSection(`${capitalizedSection}`)}
          </Link>
        </Grid>
      );
      links.push(link);
    }
    return links;
  }, [asPath]);

  return (
    <Grid container spacing={1}>
      {breadcrumbs}
      {blinking_underscore}
    </Grid>
  );
}
