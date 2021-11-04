import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Container, Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import slider1 from "./assets/s25.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";
export default () => {
  const [indexDealer, setindexDealer] = useState(1);
  const [sliderObject, setsliderObject] = useState({
    img: slider2,
    name: "Product 3",
    location: "",
  });
  const sliderDataSet = [
    {
      img: slider2,
      name: "Product 1",
      location: "",
    },
    {
      img: slider1,
      name: "Product 2",
      location: "",
    },
    {
      img: slider3,
      name: "Product 3",
      location: "",
    },
  ];
  return (
    <Box maxWidth="xl" margin="auto">
      <Grid container alignItems="center">
        <Grid item xs={12} sx={{ position: "relative" }}>
          <img src={sliderObject.img} width="100%" height="800px" />
          <Hidden mdDown>
            <Box
              sx={{
                textAlign: "center",
                position: "absolute",
                bottom: "10%",
                right: "6%",
              }}
              padding={{ xs: "2%", md: "4% 10%" }}
              backgroundColor="white"
              width="10%"
            >
              <Typography fontSize={{ xs: "16px" }}>Hello</Typography>
              <Typography fontSize={{ xs: "20px", md: "22px" }} mt={2} mb={2}>
                {sliderObject.name}
              </Typography>
              <Typography fontSize={{ xs: "16px" }}>
                237 Avlon , Somewhere
              </Typography>
              <Typography fontSize={{ xs: "16px" }} mt={4}>
                123 25 2 467567
              </Typography>
              <Typography fontSize={{ xs: "20px", md: "22px" }} mt={2} mb={3}>
                AGNACELONN
              </Typography>
              <KeyboardArrowLeftRounded
                sx={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                }}
                onClick={() => {
                  setindexDealer((indexDealer + 1) % 3);
                  setsliderObject(sliderDataSet[indexDealer]);
                }}
              />{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <KeyboardArrowRightRounded
                sx={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                }}
                onClick={() => {
                  setindexDealer((indexDealer + 1) % 3);
                  setsliderObject(sliderDataSet[indexDealer]);
                }}
              />{" "}
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
              <Typography fontSize={{ xs: "20px", md: "22px" }} mt={2} mb={2}>
                {sliderObject.name}
              </Typography>
              <Typography fontSize={{ xs: "16px" }}>
                237 Avlon , Somewhere
              </Typography>
              <Typography fontSize={{ xs: "16px" }} mt={4}>
                123 25 2 467567
              </Typography>
              <Typography fontSize={{ xs: "20px", md: "22px" }} mt={2} mb={4}>
                AGNACELONN
              </Typography>
              <KeyboardArrowLeftRounded
                sx={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                }}
                onClick={() => {
                  setindexDealer((indexDealer + 1) % 3);
                  setsliderObject(sliderDataSet[indexDealer]);
                }}
              />{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <KeyboardArrowRightRounded
                sx={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                }}
                onClick={() => {
                  setindexDealer((indexDealer + 1) % 3);
                  setsliderObject(sliderDataSet[indexDealer]);
                }}
              />{" "}
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};
