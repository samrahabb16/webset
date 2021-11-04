import {
  KeyboardArrowRight,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import * as React from "react";
import {
  Container,
  InputBase,
  Grid,
  Divider,
  Button,
  InputAdornment,
  Typography,
  TextField,
  Hidden,
} from "@mui/material";
import { Box } from "@mui/system";
import picture from "./assets/picture.jpg";
import s2 from "./assets/s2.jpg";

export default () => {
  return (
    <Box maxWidth="xl" margin="150px auto auto auto">
      <Grid container alignItems="center">
        <Grid item xs={12} md={3}>
          <Hidden mdDown>
            <img
              src={picture}
              width="100%"
              height="500px"
              style={{ position: "relative", left: "20%" }}
            />
          </Hidden>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{ background: "#283778", color: "white" }}
        >
          <Box
            width={{ xs: "95%", sm: "80", md: "60%" }}
            margin="auto"
            sx={{
              color: "white",
            }}
            mb={10}
          >
            <Typography fontSize={{ xs: "16px" }} mt={15} mb={3}>
              Have any Question?
            </Typography>
            <Typography fontSize={{ xs: "24px", md: "33px" }} fontWeight="bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              fontSize={{ xs: "16px" }}
              fontWeight="bold"
              mt={4}
              mb={7}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ipsam molestias fugit. Nesciunt aliquam eveniet
              laudantium ipsum optio itaque dicta accusamus facere quo modi at,
              nobis molestiae corporis obcaecati expedita.
            </Typography>
            <Button
              variant="filled"
              sx={{
                background: "white",
                "&:hover": {
                  background: "#231F20",
                  color: "white",
                },
                color: "#253F8E",
                padding: "2% 30px",
                fontSize: "18px",
              }}
            >
              <KeyboardArrowRightRounded
                sx={{
                  borderRadius: "50%",
                  padding: "3%",
                  border: "1px solid #253F8E",
                  marginRight: "8%",
                }}
              />{" "}
              CONTACTIZE
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} mt={15}>
          <Grid container>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <img src={s2} width="100%" height="600px" />
              <Hidden mdDown>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "10%",
                    right: "6%",
                    textAlign: "left",
                  }}
                  padding={{ xs: "2%", md: "4% 7%" }}
                  backgroundColor="white"
                  width="30%"
                >
                  <Typography fontSize={{ xs: "16px" }}>
                    SomeTexthere
                  </Typography>
                  <Typography
                    fontSize={{ xs: "20px", md: "28px" }}
                    mt={2}
                    mb={2}
                  >
                    Lorem ipsum dolor sit amet consectetur
                  </Typography>
                  <Typography fontSize={{ xs: "16px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero nihil tempore laudantium voluptatum iste vitae
                    voluptatem.
                  </Typography>
                </Box>
              </Hidden>

              {/*  */}
              <Hidden mdUp>
                <Box
                  sx={{ textAlign: "center" }}
                  padding={{ xs: "10%", md: "4% 10%" }}
                  backgroundColor="#F1F3F4"
                  width={{ xs: "70%", sm: "20%" }}
                  margin="auto"
                >
                  <Typography fontSize={{ xs: "16px" }}>Hello</Typography>
                  <Typography
                    fontSize={{ xs: "20px", md: "22px" }}
                    mt={2}
                    mb={2}
                  >
                    sinolds fbjcnwenf
                  </Typography>
                  <Typography fontSize={{ xs: "16px" }}>
                    237 Avlon , Somewhere
                  </Typography>
                  <Typography
                    fontSize={{ xs: "20px", md: "22px" }}
                    mt={2}
                    mb={4}
                  >
                    AGNACELONN
                  </Typography>
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
