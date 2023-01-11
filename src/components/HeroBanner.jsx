import React from "react";
import { Box, Button, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          xs: "70px",
          lg: "212px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        color="#3A1212"
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={'23px'}
        mt={'30px'}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" sx={{backgroundColor:'#FF2625', padding: '10px'}} href="#exercises">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#3A1212"
        sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img className="hero-banner-img" src={HeroBannerImage} alt="Banner" />
    </Box>
  );
};

export default HeroBanner;
