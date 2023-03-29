import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { ReactNode } from "react";
import DarkModeButton from "./DarkModeButton";
import TopBarScroll from "./TopBarScroll";
import TopBarTitle from "./TopBarTitle";

export default function TopBar() {
  return (
    <>
      <TopBarScroll>
        <AppBar>
          <Toolbar>
            <Grid container>
              <Grid item xs={11}>
                <TopBarTitle />
                <Button />
              </Grid>
              <Grid item xs={1}>
                <DarkModeButton />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </TopBarScroll>
      <Toolbar />
    </>
  );
}
