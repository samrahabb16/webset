import { Box } from "@mui/system";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Container, Grid, Hidden, Typography, Button } from "@mui/material";
import { useState } from "react";
import s21 from "./assets/s21.jpg";
import s22 from "./assets/s22.jpg";
import s23 from "./assets/s23.jpg";
import s25 from "./assets/s25.jpg";
import s26 from "./assets/s26.jpg";
import s27 from "./assets/s27.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function CardFun({ img, title, text }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
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
  const sliderDataSet = [
    {
      img: s21,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
    {
      img: s22,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
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
    {
      img: s27,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
    {
      img: s21,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
    {
      img: s22,
      title: "Product",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non placeat totam voluptate quibusdam temporibus labore, unde voluptatibus blanditiis impedit necessitatibus dicta vitae provident. Necessitatibus officiis est sed repellat, architecto odio?",
    },
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
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box maxWidth="xl" margin="auto">
      {/* 2ndslider */}
      <Container>
        <Grid container alginItems="center">
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
        </Grid>

        <Box pt={10} pb={10}>
          <Carousel
            responsive={responsive}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {sliderDataSet.map((obj) => {
              return (
                <div>
                  <CardFun {...obj} />
                </div>
              );
            })}
          </Carousel>
        </Box>
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
      </Container>
    </Box>
  );
};
