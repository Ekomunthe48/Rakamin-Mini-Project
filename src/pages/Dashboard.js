import React, { useEffect } from 'react';
import {Grid, Typography} from '@material-ui/core/';
import Container from '@material-ui/core/Container'
import KanbanList from '../components/KanbanCard';
import { homeStyles } from '../utils/StyleUI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/actions/todosActions'

const Dashboard = () => {
    const classes = homeStyles();
    const { kanbanList } = useSelector((state) => state.kanban)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <Container className={classes.root}>
            <Typography className={classes.titleApp} variant='h6'>
                Product Roadmap
            </Typography>
            <Grid container>
                {
                    kanbanList?.map((kanbanCardList, idx) => {
                        const taskListThatBelongsToThisGroup = []
                        
                        return <KanbanList key={kanbanCardList.id} kanbanList={kanbanList} kanbanCardList={kanbanCardList} indexKanban={idx} />
                    })
                }
            </Grid>
        </Container>
    );
};

export default Dashboard;