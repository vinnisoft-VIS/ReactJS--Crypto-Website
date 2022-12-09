import { Grid, Hidden, MobileStepper, Typography } from "@material-ui/core";
import React from "react";
import { FeatureCardType } from "../../model/model";
import { FeatureCard } from "../feature-card/FeatureCard";
import contactLessPaymentIcon from "../../assets/icon/contactless-payment.svg";
import dashboardIcon from "../../assets/icon/dashboard.svg";
import artificialIntelligenceIcon from "../../assets/icon/artificial-intelligence.svg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useStyles } from "./FeatureStyle";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Feature: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  // business benefit sectton data
  const featureList: FeatureCardType[] = [
    {
      icon: dashboardIcon,
      title: "Analytics",
      text: "In the modern era, when data is the most important treasure, Synq provides the most personalized and accurate statistics for your business and hence, helps you prevail.",
    },
    {
      icon: contactLessPaymentIcon,
      title: "Payment Processing",
      text: "Your customers will be able to use their conventional payment methods as well as our crypto currency. Your revenue will be paid with your preferred currency regardless of the payment method.",
    },
    {
      icon: artificialIntelligenceIcon,
      title: "Artificial Intelligence",
      text: "Your data will allow us to improve our affordable AI solutions which will definitely help you grow much faster. Increased satisfaction guaranteed!",
    },
  ];
  const maxSteps = featureList.length;
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Grid container xs={12} className={classes.featureContainer}>
      <Grid
        container
        xs={12}
        sm={3}
        className={classes.titleWrapper}
        direction="column"
      >
        <Typography variant="h4">
          Level up with our business toolkit.
        </Typography>
        <Typography variant="h5">
          If there ever was an age for Synq, it is now.
        </Typography>
      </Grid>

      <Grid container xs={12} sm={8} className={classes.feauters}>
        <Hidden xsDown>
          {featureList.map((feature: FeatureCardType, indx) => {
            return <FeatureCard key={"a" + indx} {...feature} />;
          })}
        </Hidden>
        <Hidden smUp>
          <>
            <AutoPlaySwipeableViews
              axis="x"
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {featureList.map((feature: FeatureCardType, indx) => {
                return <FeatureCard key={"a" + indx} {...feature} />;
              })}
            </AutoPlaySwipeableViews>
            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.dots}
              backButton={null}
              nextButton={null}
            />
          </>
        </Hidden>
      </Grid>
    </Grid>
  );
};
