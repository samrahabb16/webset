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
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import s23 from "./assets/s23.jpg";
import s25 from "./assets/s25.jpg";
import s26 from "./assets/s26.jpg";
function CardFun({ img, title, text }) {
  return (
    <Card sx={{ width: "95%", margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default () => {
  const mailGetter = (event) => {
    event.preventDefault();
    // do what you want
  };
  //   dropdownitems

  const [currency, setCurrency] = React.useState("EUR");
  const sliderDataSet = [
    {
      img: s23,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
    {
      img: s25,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
    {
      img: s26,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box maxWidth="xl" margin="100px auto auto auto">
      <Box
        width={{ xs: "95%", sm: "80", md: "60%" }}
        margin="auto"
        sx={{ color: "#293365", textAlign: "center" }}
        mb={20}
      >
        <Typography fontSize={{ xs: "16px" }} mt={5} mb={3}>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            Have any Question?
          </a>
        </Typography>
        <Typography
          fontSize={{ xs: "24px", sm: "30px", md: "43px" }}
          fontWeight="bold"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
      <Container>
        <Box
          //   width={{ xs: "95%", md: "80%" }}
          component="form"
          onSubmit={mailGetter}
          margin="auto"
        >
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{ background: "white", boxShadow: "0px 2px 20px black" }}
          >
            <Grid item xs={8} sm={8} container>
              <InputBase
                type="email"
                id="email"
                autoComplete="email"
                sx={{
                  width: "90%",
                  color: "gray",
                  fontSize: "18px",
                  fontWeight: "600",

                  padding: "3%",
                  border: "none",
                }}
                placeholder="Get updated ..."
                inputProps={{ border: "none" }}
                required
              />
            </Grid>

            <Grid item xs={4} container sx={{ background: "#283778" }}>
              <Button
                variant="filled"
                type="submit"
                sx={{
                  background: "#283778",
                  width: "100%",
                  fontSize: "18px",
                  color: "white",
                }}
              >
                <Typography fontSize={{ xs: "10px", md: "22px" }}>
                  <KeyboardArrowRight style={{ verticalAlign: "middle" }} />{" "}
                  <span style={{ verticalAlign: "middle" }}>RECHARCHIZE</span>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Grid container alginItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography fontSize={{ xs: "16px" }} mb={4} mt={7}>
              NOHASLO
            </Typography>
            <Typography fontSize={{ xs: "22px", md: "33px" }} mb={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              placeat totam voluptate quibusdam temporibus labore,
            </Typography>
            <Typography fontSize={{ xs: "19px" }} mb={7}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              placeat totam voluptate quibusdam temporibus labore, unde
              voluptatibus blanditiis impedit necessitatibus dicta vitae
              provident. Necessitatibus officiis est sed repellat, architecto
              odio?{" "}
            </Typography>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Grid item xs={12}>
              <Typography fontSize={{ xs: "16px" }} mb={4} mt={7}>
                NOHASLO
              </Typography>
            </Grid>
            {sliderDataSet.map((obj) => {
              return (
                <Grid item xs={12} sm={6} md={4} pt={10} pb={10}>
                  <center>
                    <CardFun {...obj} />
                  </center>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Button
                variant="filled"
                sx={{
                  "&:hover": {
                    background: "#253F8E",
                    color: "white",
                  },
                  padding: "10px 40px",
                  fontSize: "18px",
                }}
              >
                <KeyboardArrowRightRounded
                  sx={{
                    borderRadius: "50%",
                    padding: "3%",
                    border: "1px solid gray",
                    marginRight: "8%",
                  }}
                />{" "}
                RECHARCHIZE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
