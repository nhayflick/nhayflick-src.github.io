import {Link} from '../routes'

import Divider from '@material-ui/core/Divider';
import { Typography, Button } from '@material-ui/core'
import Computer from '@material-ui/icons/Computer'
import Pets from '@material-ui/icons/Pets'
import Work from '@material-ui/icons/Work'
import blueGrey from '@material-ui/core/colors/blueGrey'

import PropTypes from 'prop-types'

class Footer extends React.Component {

    render() {
  
      const { classes } = this.props;
  
      return (
        <div style={{marginTop: 32}}>
            <Divider/>
            <div className={classes.innerContainer}>
                <div className={classes.contentSection}>
                    <div className={classes.footerContainer}>
                        <div className={classes.footerIcon}>
                            <Button href='https://www.linkedin.com/pub/nathan-hayflick/35/a14/8b1'  target="on_blank">
                                <Work />
                            </Button>
                        </div>
                        <div className={classes.footerIcon}>
                            <Button href='https://github.com/nhayflick' target="on_blank">
                                <Computer />
                            </Button>
                        </div>
                        <div className={classes.footerIcon}>
                            <Button  target="on_blank">
                                <Pets />
                            </Button>
                        </div>
                    </div>
                    <Typography variant="caption" className={classes.footerContainer}>
                        Nathan Hayflick // 2018
                    </Typography>
                </div>
            </div>
        </div>
      )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Footer