import {Link} from '../routes'

import { Typography, Toolbar, Button, AppBar } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

import PropTypes from 'prop-types';

class Header extends React.Component {

    render() {
  
      const { classes } = this.props;
  
      return (
        <AppBar position="static" elevation={0} style={{backgroundColor: blueGrey[50]}}>
            <Toolbar>
                <Link route='index'>
                    <Typography variant="title" color="inherit" className={[this.props.classes.flex, classes.alignLeft].join(' ')}>
                        Nathan Hayflick
                    </Typography>
                </Link>
                <Link route='index'>
                    <Button color="inherit">Work</Button>
                </Link>
                <Button color="inherit" href='https://soundcloud.com/manhattoes/tracks' target="on_blank">Sound</Button>
            </Toolbar>
        </AppBar>
      )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default Header