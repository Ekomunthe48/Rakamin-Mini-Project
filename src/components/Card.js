import React, {useEffect, useState} from 'react';
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
import {MoreHoriz, ArrowForward, ArrowBack, Edit, Delete} from '@material-ui/icons/';
import DeleteModal from './DeleteModal';
import { deleteTask, updateTask } from '../store/actions/tasksActions'
import { useDispatch, useSelector } from 'react-redux';
import FormModal from './FormModal';

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

const CardKanban = ({id, todo_id, name, progress_percentage}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleCloseLeft = (id, todo_id, name, progress_percentage) => {
    let payload = {
        name,
        progress_percentage,
        todo_id
      }
    dispatch(updateTask(todo_id, id, payload))
    setAnchorEl(null);
  };

  const handleCloseRight = (id, todo_id, name, progress_percentage) => {
    let payload = {
        name,
        progress_percentage,
        todo_id
      }
    dispatch(updateTask(todo_id, id, payload))
    setAnchorEl(null);
  };

  const handleClickOpenDelete = () => {
    setOpenModalDelete(true);
    setAnchorEl(null);
  };

  const handleClickOpenModal = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };

  const handleDelete = (idKanban, idTask) => {
    console.log(idKanban, idTask)
    dispatch(deleteTask(idKanban, idTask))
    setOpenModalDelete(false)
  }

  const handleCloseModal = (idKanban, idTask, payload) => {
    dispatch(updateTask(idKanban, idTask, payload))
    setOpenModal(false);
  };

  const classes = cardStyles();

  return (
    <>
      <Card className={classes.cardComp}>
              <CardContent>
                  <Typography className={classes.sizeTask} variant="h5" component="h2">
                      {name}
                  </Typography>
                  <Grid >
                    <Grid className={classes.gridStyle}>
                      <Grid item xs={6} className={classes.gridStyle}>
                        <BorderLinearProgress className={classes.progressBar} variant="determinate" value={progress_percentage} />
                        <Typography className={classes.percentaseTask} variant="subtitle1">{progress_percentage}%</Typography>
                      </Grid>
                      <Button className={classes.menuButton} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}><MoreHoriz /></Button>
                    </Grid>
                  </Grid>
                  <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    anchorOrigin='vertical'
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleCloseLeft}><ArrowBack /> Move Left</MenuItem>
                    <MenuItem onClick={handleCloseRight}><ArrowForward /> Move Right</MenuItem>
                    <MenuItem onClick={handleClickOpenModal}><Edit /> Edit</MenuItem>
                    <MenuItem onClick={handleClickOpenDelete}><Delete /> Delete</MenuItem>
                    
                    <DeleteModal handleDelete={handleDelete} open={openModalDelete} idKanban={todo_id} idTask={id}/>
                    <FormModal idKanban={todo_id} idTask={id} nameTask={name} progress_percentage_task={progress_percentage} open={openModal} handleClose={handleCloseModal}/>
                  </Menu>

              </CardContent>
          </Card>
    </>
  );
};

export default CardKanban;