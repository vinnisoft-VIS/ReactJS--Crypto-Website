import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Benefit } from "../benefit/Benefit";
import { BenefitType } from "../../model/model";
import orangeStockImg from "../../assets/images/orange-stock.png";
import paymentImg from "../../assets/images/payment.png";
import benefit1Img from "../../assets/images/benefit1.png";
import benefit2Img from "../../assets/images/benefit2.png";
import benefit3Img from "../../assets/images/benefit3.png";
import binanceAccountImg from "../../assets/images/binance-account.png";
import { useStyles } from "./BusinessBenefitStyle";

export const BusinessBenefit: React.FC = () => {
  const classes = useStyles();
  const benefitData: BenefitType[] = [
    {
      title: "More Data & More Customers",
      text: "You have the control: accurate data, improved statistics, and successful reward and marketing campaigns…",
      navText: "Say Hello to Us!",
      image1: benefit1Img,
      image2: orangeStockImg,
      leftStyle: true,
    },
    {
      title: "Easy access and usage: Always active online system",
      text: "Manage your operations, add more stores, communicate with your staff, adjust your inventory, attract more people and do so much more....",
      navText: "Join Synq right away!",
      image1: benefit2Img,
      image2: binanceAccountImg,
      leftStyle: false,
    },
    {
      title: "Affordable - Reliable - Very Cool",
      text: "Your customers will pay using their palms. How cool is that? Our technology and flexible commission rates will turn your business into a powerhouse.",
      navText: "Upgrade your business.",
      image1: benefit3Img,
      image2: paymentImg,
    },
  ];

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h4"> Business Benefits</Typography>
        <Typography variant="h4"> Business Benefits</Typography>
      </div>

      <Grid container>
        {benefitData.map((benefit: BenefitType, index) => {
          return <Benefit {...benefit} key={index} />;
        })}
      </Grid>
    </Container>
  );
};
