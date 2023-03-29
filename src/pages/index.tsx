import { Box, Grid, IconButton, Stack, Link, Typography } from "@mui/material";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import HoverableIcon from "@/components/HoverableIcon";

export default function Home() {
  return (
    <>
      <Layout>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item />
          <Grid item>
            <Typography variant="h4">Welcome! You can reach me at:</Typography>
          </Grid>
          <Grid item />
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Link href="https://github.com/navidmatin" color="inherit">
                  <HoverableIcon icon={faGithub} action="bounce" size="4x" />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://www.linkedin.com/in/navidseyedmatin/"
                  color="inherit"
                >
                  <HoverableIcon icon={faLinkedin} action="bounce" size="4x" />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://stackoverflow.com/users/1760055/navidm"
                  color="inherit"
                >
                  <HoverableIcon
                    icon={faStackOverflow}
                    action="bounce"
                    size="4x"
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
