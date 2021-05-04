import { makeStyles } from '@material-ui/core/styles';

export const homeStyles = makeStyles((theme) => ({
    root: {
      marginTop: 20
    },
    titleApp: {
        margin: '10px 0'
    }
}));

export const KanbanStyles = makeStyles((theme) => ({
    backgroundKanban1: {
        backgroundColor: '#FFF9FB',
        border: '1px solid #EB2F96',
        borderRadius: '4px',
        padding: '12px',
        marginRight: 10
    },
    backgroundKanban2: {
        backgroundColor: '#FCFAFD',
        border: '1px solid #7B61FF',
        borderRadius: '4px',
        padding: '12px',
        marginRight: 10
    },
    backgroundKanban3: {
        backgroundColor: '#F7FAFF',
        border: '1px solid #2F54EB',
        borderRadius: '4px',
        padding: '12px',
        marginRight: 10
    },
    backgroundKanban4: {
        backgroundColor: '#F8FEF1',
        border: '1px solid #52C41A',
        borderRadius: '4px',
        padding: '12px',
        marginRight: 10
    },
    titleKanban1: {
        background: '#FFF0F6',
        border: '1px solid #FFADD2',
        borderRadius: '2px',
        padding: '1px 8px',
        width: '86px',
        fontSize: '12px',
        color: '#EB2F96',
    },
    titleKanban2: {
        background: '#FCFAFD',
        border: '1px solid #7B61FF',
        borderRadius: '2px',
        padding: '1px 8px',
        width: '86px',
        fontSize: '12px',
        color: '#7B61FF;',
    },
    titleKanban3: {
        background: '#F7FAFF',
        border: '1px solid #2F54EB',
        borderRadius: '2px',
        padding: '1px 8px',
        width: '86px',
        fontSize: '12px',
        color: '#2F54EB',
    },
    titleKanban4: {
        background: '#F8FEF1',
        border: '1px solid #52C41A',
        borderRadius: '2px',
        padding: '1px 8px',
        width: '86px',
        fontSize: '12px',
        color: '#52C41A;',
    }
}));

export const cardStyles = makeStyles((theme) => ({
    cardComp: {
        border: '1px solid #E4E4E8',
        borderRadius: '4px',
        margin: '5px 0'
    },
    sizeTask: {
        fontSize: '14px',
        fontWeight: '500',
    },
    percentaseTask: {
        fontSize: '12px',
        fontWeight: '400',
        color: '#8C8C8C',
    },
    gridStyle: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto'
    },
    progressBar: {
        marginRight: 10
    },
    menuButton: {
        display: 'flex',
        marginLeft: 'auto',
    }
}));
