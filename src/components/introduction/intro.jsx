import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../header/Header";
import BG from "./assets/background.jpg";
export default () => {
  return (
    <Box
      maxWidth="xl"
      margin="auto"
      sx={{
        backgroundImage: `url(${BG})`,
        backgorundRepeat: "no-repeat",
        // backgoroundPosition: "center center",
        backgroundSize: "100% 100%",
      }}
      pb={{ xs: false, md: 20 }}
    >
      <Header />
      <Container>
        <Grid container alignItems="center" pt={{ xs: 5, md: 50 }}>
          <Grid item xs={12} sm={8} sx={{ color: "white" }}>
            <Typography
              fontSize={{ xs: "20px", sm: "30px", md: "50px" }}
              sx={{ textTransform: "uppercase" }}
            >
              achat vental el gestion de beis immoblers de qualite
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              distinctio enim tenetur quae facilis, quis beatae perspiciatis
              praesentium odio sequi reiciendis nisi ea exercitationem ducimus
              consequuntur eligendi magni odit repellat!
            </Typography>
            <Typography mt={10} mb={4}>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontStyle: "italic",
                }}
              >
                Lorem ipsum dolor sit ?
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
