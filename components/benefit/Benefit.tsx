import { Grid, Typography, Card } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { BenefitType } from '../../model/model'
import useStyles from './BenefitStyles'

export const Benefit: React.FC<BenefitType> = ({ leftStyle = true, title, text, navText, image1, image2 }: BenefitType) => {

    const classes = useStyles({ leftStyle });

    return (

        <Grid container xs={12} className={classes.benefit} justifyContent="space-evenly">
            <Grid container xs={12} sm={5} direction="column" className={classes.content}>
                <div>
                    <Typography variant="h4" color="textPrimary" className={classes.title}>{title}</Typography>
                </div>
                <Typography variant="body1" color="textPrimary" className={classes.text}>{text}</Typography>
                {navText &&
                    <Link to="/get-in-touch" className={classes.navLink}>
                        <Typography variant="body1" color="textPrimary" >
                            {navText}&nbsp;&nbsp; {'>'}
                        </Typography>

                    </Link>}
            </Grid>
            <Grid item xs={12} sm={5} className={classes.cardContainer}>
                <img src={image1} className={classes.img} alt="user benefits" />
                <Card className={classes.card}>
                    <img
                        className={classes.media}
                        src={image2}
                        alt="benefit image"
                    />
                </Card>
            </Grid>
        </Grid>



    )
}
