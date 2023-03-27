import { Box } from "@mui/material";
import Layout from "../components/layout";

export default function Test() {
  return (
    <>
      <Layout>
        <p>Test2</p>
        <Box sx={{ my: 2 }}>
          {[...new Array(360)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Layout>
    </>
  );
}
