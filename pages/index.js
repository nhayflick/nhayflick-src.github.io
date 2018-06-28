import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Button } from '@material-ui/core'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import IconChevronRight from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

import Footer from '../components/Footer'
import Header from '../components/Header'
import {Link} from '../routes'
import withRoot from '../src/withRoot';
import styles from '../src/styles'

class Index extends React.Component {

  render() {

    const { classes, content } = this.props;

    return (
      <div className={classes.root}>
        <Header classes={classes}/>
        <div className={classes.outerContainer} style={{backgroundColor: blueGrey[50]}}>
          <div className={[classes.contentSection, classes.innerContainer].join(' ')}>
            <Typography variant="display3" className={classes.bigLineSpacing}>
              Hi, I'm Nathan.
            </Typography>
            
            <Typography variant="display1">
              I'm a product-focused software engineer at Uber working in mobile and web.
            </Typography>

            <Typography variant="display1" className={classes.bigLineSpacing }>
              Here's what I've been upto lately.
            </Typography>
          </div>
        </div>
        <div className={classes.outerContainer}>
          <div className={classes.innerContainer}>
          {content.map(section => (
                  <GridList color="primary" cellHeight={180} className={[classes.gridList, classes.bigLineSpacing].join(' ')} key={section.title} cols={12}>
                    <GridListTile style={{ height: 'auto' }} cols={12}>
                      <ListSubheader component="div">
                        <Typography variant="title" style={{paddingTop: 24, paddingBottom: 12}}>
                          {section.title}
                        </Typography>
                        <Typography variant="subheading" style={{paddingBottom: 24}}>
                          {section.body}
                          </Typography>
                      </ListSubheader>
                    </GridListTile>
                    {section.products.map(product => (
                        <GridListTile key={product.title} cols={4} xs={12} className={classes.productItem}>
                          <Link route="product" params={{slug: product.slug}} passHref >
                            <img src={product.thumbnailImageUrl || product.imageUrl} alt={product.title} className={classes.objectFitCover} style={{backgroundColor: product.color}}/>
                          </Link>
                          <Link route="product" params={{slug: product.slug}} passHref >
                          <GridListTileBar
                            title={product.title}
                            actionIcon={
                              <IconButton className={classes.icon}>
                                <IconChevronRight />
                              </IconButton>
                            }
                          />
                      </Link>
                    </GridListTile>
                  ))}
              </GridList>
            ))}
          </div>
        </div>
        <Footer classes={classes}/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired
};

export default withRoot(withStyles(styles)(Index));