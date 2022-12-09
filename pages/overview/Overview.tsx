import { Divider, Grid, Hidden } from '@material-ui/core'
import React from 'react'
import { BusinessBenefit } from '../../components/bussiness-benefit/BusinessBenefit';
import { Feature } from '../../components/feature/Feature';
import { UserBenefit } from '../../components/user-benefit/UserBenefit';
import useStyles from './OverviewStyle';
import { DownloadApp } from '../../components/download-app/DownloadApp';
import logoImg from '../../assets/images/favicon.png';
import logoImg152 from '../../assets/images/favicon-152.png';
import { SocialLinks } from '../../components/social-links/SocialLinks';
import { OverviewHero } from '../../components/overview-hero/OverviewHero';

const Overview: React.FC = () => {
    //jss style
    const classes = useStyles();
    return (
        <Grid container direction="column">
            {/* top corner social links */}
            <Hidden xsDown>
                <SocialLinks />
            </Hidden>
            {/* hero section */}
            <div className={classes.heroContainer}>
                <OverviewHero />
            </div>
            {/* bussiness benefit section */}
            <div className={classes.benifitContainer}>
                <BusinessBenefit />
            </div>
            {/* features section */}
            <div className={classes.feature}>
                <Feature />
            </div>
            {/* user benefit section  */}
            <div className={classes.userBenefit}>
                <UserBenefit />
            </div>
            {/* download app section */}
            <div className={classes.download}>
                <img src={logoImg} alt="#" className={classes.logoBg} srcSet={logoImg152 + " 300w, " + logoImg + " 550w"} />
                <DownloadApp />
            </div>
            <Hidden smUp>
                <Divider />
            </Hidden>
        </Grid>
    );
}

export default Overview