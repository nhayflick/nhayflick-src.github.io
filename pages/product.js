import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button } from '@material-ui/core'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../src/styles'
import withRoot from '../src/withRoot'

import {Link} from '../routes'

class Product extends React.Component {

    render() {
        const { classes, content, url } = this.props;
        const products = content.map(sections => sections.products).reduce((a, b) => a.concat(b))
        const productIndex = products.findIndex(product => product.slug == url.query.slug)
        const product = productIndex > -1 ? products[productIndex] : null

        if (product == null) { return false }
        const nextProduct =  productIndex + 1 < products.length ? products[productIndex + 1] : products[0]

        return (
            <div className={classes.root}>
                <Header classes={classes}/>
                <div className={classes.outerContainer}>
                    <div className={classes.innerContainer}>
                        <div className={classes.contentSection}>
                            <Grid container wrap="nowrap" spacing={32} className={classes.bigLineSpacing}>
                                <Grid item xs={5} style={{paddingLeft: 24, paddingRight: 24}}>
                                    <Typography variant="display2">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body1" className={classes.bigLineSpacing}>
                                        {product.body}
                                    </Typography>
                                    <Link route="product" params={{slug: nextProduct.slug}}>
                                        <Button className={classes.nextLink} disableRipple={true}>
                                            Up Next: {nextProduct.title}
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={7}>
                                    <img src={product.imageUrl} alt={product.title} className={classes.objectFitCover} style={{backgroundColor: product.color}}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                <Footer classes={classes}/>
            </div>
        )
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired
}
  
export default withRoot(withStyles(styles)(Product))