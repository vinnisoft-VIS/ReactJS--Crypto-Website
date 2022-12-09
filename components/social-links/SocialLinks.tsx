import { Link, List, ListItem } from "@material-ui/core";
import React from "react";
import useStates from "./SocialLinksStyle";

export const SocialLinks: React.FC = () => {
  const classes = useStates();
  return (
    <List className={classes.list}>
      <ListItem>
        <Link
          href="https://twitter.com/synq_one"
          target="_blank"
          rel="noopener"
          className={classes.navLink}
        >
          twitter
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.instagram.com/synq.one/"
          target="_blank"
          rel="noopener"
          className={classes.navLink}
        >
          instagram
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.facebook.com/synq.one"
          target="_blank"
          rel="noopener"
          className={classes.navLink}
        >
          facebook
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.linkedin.com/company/synq1/"
          target="_blank"
          rel="noopener"
          className={classes.navLink}
        >
          linkedin
        </Link>
      </ListItem>
    </List>
  );
};
