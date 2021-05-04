import { Container, Grid, Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { KanbanStyles, cardStyles } from '../utils/StyleUI';
import CardKanban from './Card';
import Button from '@material-ui/core/Button';
import ControlPoint from '@material-ui/icons/ControlPoint';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/actions/tasksActions'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormModal from './FormModal';

const KanbanList = ({kanbanCardList, indexKanban, idKanban}) => {
    const classes = KanbanStyles();
    // const cardClasses = cardStyles()
    // const [taskList, setTaskList] = useState([])
    // const { taskLists } = useSelector((state) => state.task)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchTasks(kanbanCardList?.id))
    // }, [kanbanCardList?.id])

    // useEffect(() => {
    //     setTaskList(taskLists)
    // }, [taskLists])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div
            className={
                (indexKanban % 3 === 0 && indexKanban !== 0) ? classes.backgroundKanban4
                : (indexKanban % 2 === 0 && indexKanban !== 0) ? classes.backgroundKanban3
                : (indexKanban === 1 || indexKanban % 2 !== 0) ? classes.backgroundKanban2
                : classes.backgroundKanban1
        }>
            <Typography
                className={
                    (indexKanban % 3 === 0 && indexKanban !== 0) ? classes.titleKanban4
                    : (indexKanban % 2 === 0 && indexKanban !== 0) ? classes.titleKanban3
                    : (indexKanban === 1 || indexKanban % 2 !== 0) ? classes.titleKanban2
                    : classes.titleKanban1
                }
                variant="h6"
            >
                {kanbanCardList.title}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
                {kanbanCardList.description}
            </Typography>

            <Grid item xs={12}>
                <CardKanban idKanban={idKanban}/>
                {/* {
                    taskList?.map((task) => {
                        if (task.todo_id === idKanban) {
                            return  */}
                        {/* } else {
                            return <Card className={cardClasses.cardComp}>
                                <CardContent>
                                <Typography className={cardClasses.sizeTask} variant="h5" component="h2">
                                    No Tasks Available !
                                </Typography>
                                </CardContent>
                            </Card>
                        }  
                    })
                } */}
            </Grid>
            <Button onClick={handleClickOpen}>
                <ControlPoint /> &nbsp; New Task
            </Button>
            <FormModal open={open} handleClose={handleClose}/>
        </div>
    );
};

export default KanbanList;