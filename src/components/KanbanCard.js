import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { cardStyles, KanbanStyles } from '../utils/StyleUI';
import CardKanban from './Card';
import Button from '@material-ui/core/Button';
import ControlPoint from '@material-ui/icons/ControlPoint';
import FormModal from './FormModal';
import { fetchTasks, createTask } from '../store/actions/tasksActions'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const KanbanList = ({kanbanCardList, kanbanList, kanbanId, indexKanban}) => {
    const classes = KanbanStyles();
    const cardClasses = cardStyles();
    const { taskLists } = useSelector((state) => state.task)
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks(kanbanCardList.id))
    }, [kanbanCardList])
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (id, idTask, payload) => {
        console.log(payload)
      dispatch(createTask(id, payload))
      setOpen(false);
    };
    
    return (
        <Grid item xs={12} md={3}>
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

            {
                taskLists?.map((task, idx) => {
                    if (taskLists.length !== 0) {
                        return <Grid item xs={12} key={task?.id}>
                            <CardKanban 
                                id={task?.id}
                                todo_id={task?.todo_id}
                                name={task?.name}
                                progress_percentage={task?.progress_percentage}
                            />
                        </Grid> 
                    } else {
                        return <Grid item xs={12}>
                            <Card className={cardClasses.cardComp}>
                                <CardContent>
                                    <Typography className={cardClasses.sizeTask} variant="h5" component="h2">
                                        No Task Available !
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>     
                    }
                })
            }

            <Button onClick={handleClickOpen}>
                <ControlPoint /> &nbsp; New Task
            </Button>

            <FormModal idKanban={kanbanCardList.id} open={open} handleClose={handleClose}/>
        </div>
        </Grid>
    );
};

export default KanbanList;