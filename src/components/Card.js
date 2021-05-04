import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {cardStyles} from '../utils/StyleUI'
import { Grid } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 8,
      width: 90,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const CardKanban = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = cardStyles();
    return (
      <>
        <Card className={classes.cardComp}>
            <CardContent>
                <Typography className={classes.sizeTask} variant="h5" component="h2">
                    Re-designed the zero-g doggie bags. No more spills!
                </Typography>
                <Grid >
                  <Grid className={classes.gridStyle}>
                    <Grid item xs={6} className={classes.gridStyle}>
                      <BorderLinearProgress className={classes.progressBar} variant="determinate" value={50} />
                      <Typography className={classes.percentaseTask} variant="subtitle1">50%</Typography>
                    </Grid>
                    <Button className={classes.menuButton} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}><MoreHoriz /></Button>
                  </Grid>
                </Grid>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  anchorOrigin='right'
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Move Left</MenuItem>
                  <MenuItem onClick={handleClose}>Move Right</MenuItem>
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
            </CardContent>
        </Card>
      </>
    );
};

export default CardKanban;