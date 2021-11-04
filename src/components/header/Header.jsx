import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./assets/logo.png";
import MobileSideBar from "./MobileSideBar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./header.css";
export default () => {
  return (
    <Box maxWidth="xl" margin="auto">
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={2}>
          <SearchIcon sx={{ color: "#FFFFFF" }} />
        </Grid>
        <Grid item xs={4} align="center">
          <img src={logo} alt={logo} width="90px" />
        </Grid>
        <Grid item xs={3}>
          <Stack direction="row" spacing={3} justifyContent="flex-end">
            <MobileSideBar sx={{ color: "#FFFFFF" }} />
            <AccountCircleOutlinedIcon sx={{ color: "#FFFFFF" }} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
