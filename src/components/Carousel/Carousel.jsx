import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = (props) => {
  console.log("carousel", props.images);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const buttonStyle = {
    bgcolor: "white",
    minWidth: "auto",
    borderRadius: 0,
    ":hover": { background: "white" },
    color: "#5C5F62",
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.images.map((image, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: props.height ? props.height : 200,
                  display: "block",
                  overflow: "hidden",
                }}
                src={image}
                alt={index}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          borderRadius: "0.25rem",
          overflow: "hidden",
          border: "1px solid #D2D5D8",
        }}
      >
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={buttonStyle}
          style={{
            borderRight: "1px solid #D2D5D8",
          }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={buttonStyle}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft style={{ color: "red" }} />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </div>
    </Box>
  );
};

export default Carousel;
