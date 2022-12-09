import { Grid, Typography } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import React from 'react'
import { CryptoItemType } from '../../model/model'
import useStyles from './CryptoItemStyle'

export const CryptoItem: React.FC<CryptoItemType> = ({ title, image, text }: CryptoItemType) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={4} >
            <Grid container className={classes.card} direction="column">
                <Typography variant="h4" className={classes.title}> {title}
                </Typography>
                <div className={classes.logoWrapper} style={title === 'PetraX' ? { backgroundColor: "#feb146", borderWidth: 0 } : {}}>
                    <img src={image} alt={title} width="30" height="40" />
                    {title === 'PetraX' && <Clear className={classes.logo} />}
                </div>
                <Typography variant="body1" className={classes.text} > {text}
                </Typography>
            </Grid>
        </Grid>
    )
}
