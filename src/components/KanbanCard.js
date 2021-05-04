import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { KanbanStyles } from '../utils/StyleUI';
import CardKanban from './Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ControlPoint from '@material-ui/icons/ControlPoint';

const KanbanList = ({kanbanCardList, indexKanban}) => {
    const classes = KanbanStyles();
    console.log(indexKanban)
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
                <CardKanban />
            </Grid>
            <Button>
                <ControlPoint /> &nbsp; New Task
            </Button>
        </div>
    );
};

export default KanbanList;