import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Benefit } from "../benefit/Benefit";
import { BenefitType } from "../../model/model";
import palmprintImg from "../../assets/images/palm-print.png";
import creditCardImg from "../../assets/images/credit-cards.png";
import benefit1Img from "../../assets/images/user-benefit1.png";
import benefit2Img from "../../assets/images/user-benefit2.png";
import benefit3Img from "../../assets/images/user-benefit3.png";
import monitorActivityImg from "../../assets/images/monitor-activity.png";
import { useStyles } from "./UserBenefitStyle";

export const UserBenefit: React.FC = () => {
  const classes = useStyles();
  // user benefit data
  const benefitData: BenefitType[] = [
    {
      title: "Become your own payment processor.",
      text: "No more plastic cards, no more barcodes.....The new age payment processor is your unique palm print. Synq offers a contactless and secure payment method.",
      image1: benefit1Img,
      image2: palmprintImg,
      leftStyle: false,
    },
    {
      title:
        "Synqoin: The first crypto currency designed for daily transactions.",
      text: "Become one of the earliest investors. Soon, you will be able to pay with crypto at all our partner locations.",

      image1: benefit2Img,
      image2: creditCardImg,
      leftStyle: true,
    },
    {
      title: "This is the total package: An all-in-one solution.",
      text: "Your credit/debit and crypto wallet are secured in one place. Track your financial activity, earn rewards, and so much more.....",
      image1: benefit3Img,
      image2: monitorActivityImg,
      leftStyle: false,
    },
  ];

  return (
    <Container maxWidth="lg">
      <div className={classes.title}>
        <Typography variant="h4"> user Benefits</Typography>
        <Typography variant="h4"> user Benefits</Typography>
      </div>
      <Grid container>
        {benefitData.map((benefit: BenefitType, index) => {
          return <Benefit {...benefit} key={index} />;
        })}
      </Grid>
    </Container>
  );
};
