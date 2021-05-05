import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteModal = ({idKanban, idTask, open, handleDelete}) => {

    const handleForm = (e) => {
        e.preventDefault()
        handleDelete(idKanban, idTask)
    }

    return (
      <div>
        <Dialog open={open} onClose={handleDelete} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure to delete this task ? <br/>
                your action can't reverted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete}>
              Cancel
            </Button>
            <Button onClick={handleForm} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default DeleteModal;