import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { promiseNoop } from '../../constants/utils';

const DeleteDialog = ({ children, id, onSubmit = promiseNoop }) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    setSubmitting(true);
    onSubmit(id)
      .then((response) => {
        if (response.done) {
          setSubmitting(false);
          handleClose();
        } else {
          alert(response.error);
          setSubmitting(false);
        }
      })
      .catch(() => {
        setSubmitting(false);
      });
  };
  return (
    <>
      {children(handleOpen, handleClose)}
      <Dialog open={open}>
        <DialogTitle>Удаление</DialogTitle>
        <DialogContent>
          <DialogContentText>Вы действительно хотите удалить запись ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose} disabled={submitting}>
            Закрыть
          </Button>
          <Button color="primary" variant="contained" onClick={handleSubmit} disabled={submitting}>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
