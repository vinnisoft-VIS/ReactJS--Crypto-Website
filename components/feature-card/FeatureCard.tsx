import { Typography } from "@material-ui/core";
import React from "react";
import { FeatureCardType } from "../../model/model";
import { useStyles } from "./FeatureCardStyle";

export const FeatureCard: React.FC<FeatureCardType> = ({
  icon,
  title,
  text,
}: FeatureCardType) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img
        src={icon}
        alt="Synq"
        width={60}
        height={60}
        className={classes.icon}
      />
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </div>
  );
};
