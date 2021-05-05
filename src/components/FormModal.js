import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormModal = ({idKanban, idTask, open, handleClose, nameTask, progress_percentage_task}) => {
    const [name, setName] = useState()
    const [progress_percentage, setProgress_percentage] = useState()

    useEffect(() => {
      setName(nameTask)
      setProgress_percentage(progress_percentage_task)
    }, [nameTask, progress_percentage_task])

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleProgress = (e) => {
        setProgress_percentage(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        let payload = {
          name,
          progress_percentage,
          todo_id: idKanban
        }
        console.log(payload)
        handleClose(idKanban, idTask, payload)
    }
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task Name"
              type="text"
              fullWidth
              value={name}
              onChange={handleName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="progress"
              label="Progress"
              type="text"
              value={progress_percentage}
              onChange={handleProgress}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleForm} color="primary">
              Save Task
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default FormModal;