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
import { Box } from "@mui/system";

export default () => {
  const dataSetFilter = (event) => {
    event.preventDefault();
    // do what you want
  };
  //   dropdownitems
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box maxWidth="xl" margin="-70px auto auto auto">
      <Container>
        <Box
          //   width={{ xs: "95%", md: "80%" }}
          component="form"
          onChange={dataSetFilter}
          margin="auto"
        >
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            padding="5% auto"
            sx={{ background: "white" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              container
              pt={{ xs: 1, md: 4 }}
              pb={{ xs: 1, md: 4 }}
            >
              <TextField
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                sx={{
                  width: "90%",
                  color: "gray",
                  fontSize: "18px",
                  fontWeight: "600",

                  padding: "3%",
                  border: "none",
                }}
                inputProps={{ border: "none" }}
              />
              &nbsp;
              <Divider
                sx={{ color: "#F0F0F0", background: "#F0F0F0" }}
                orientation="vertical"
                height="50%"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              container
              pt={{ xs: 1, md: 4 }}
              pb={{ xs: 1, md: 4 }}
            >
              <TextField
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                sx={{
                  width: "90%",
                  color: "gray",
                  fontSize: "18px",
                  fontWeight: "600",

                  padding: "3%",
                  border: "none",
                }}
                inputProps={{ border: "none" }}
                endAdornment={<InputAdornment position="end">$</InputAdornment>}
                disableUnderline={false}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              &nbsp;
              <Divider
                sx={{ color: "#F0F0F0", background: "#F0F0F0" }}
                orientation="vertical"
                height="50%"
              />
            </Grid>
            {/* dropdown */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              container
              pt={{ xs: 1, md: 4 }}
              pb={{ xs: 1, md: 4 }}
            >
              <TextField
                select
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                sx={{
                  width: "97%",
                  color: "gray",
                  fontSize: "18px",
                  fontWeight: "600",

                  padding: "3%",
                  border: "none",
                }}
                inputProps={{ border: "none" }}
                disableUnderline={false}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              container
              pt={{ xs: 1, md: 4 }}
              pb={{ xs: 1, md: 4 }}
              sx={{ background: "#283778" }}
            >
              <Button
                variant="filled"
                sx={{
                  background: "#283778",
                  width: "100%",
                  fontSize: "18px",
                }}
                color="white"
              >
                <KeyboardArrowRight /> RECHARCHIZE
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        width={{ xs: "95%", sm: "80", md: "60%" }}
        margin="auto"
        sx={{ color: "#293365", textAlign: "center" }}
        mb={10}
      >
        <Typography fontSize={{ xs: "16px" }} mt={5} mb={3}>
          Have any Question?
        </Typography>
        <Typography fontSize={{ xs: "24px", md: "33px" }} fontWeight="bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Typography>
        <Typography
          fontSize={{ xs: "16px" }}
          fontWeight="bold"
          color="gray"
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
            "&:hover": {
              background: "#253F8E",
              color: "white",
            },
            padding: "2% 4%",
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
      </Box>
    </Box>
  );
};
