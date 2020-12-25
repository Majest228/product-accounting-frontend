import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';
import { Formik } from 'formik';
import ThemedDialog from '../themed/ThemedDialog';
import { promiseNoop } from '../../constants/utils';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'grid',
    gridAutoRows: 'max-content',
    gap: theme.spacing(2),
  },
}));

const AddDialog = ({ children, title, fields = [], onSubmit = promiseNoop }) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = '';

    return acc;
  }, {});
  const validate = (values) => {
    const errors = {};

    for (const field of fields) {
      if (field.required && (values[field.name] === null || values[field.name] === '')) {
        errors[field.name] = 'Поле является обязательным';
      }
    }

    return errors;
  };
  const handleSubmit = (values) => {
    setSubmitting(true);
    onSubmit(values)
      .then((response) => {
        if (response.done) {
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
      <ThemedDialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <DialogContent className={classes.content}>
                {fields.map((field) => (
                  <TextField
                    label={field.text}
                    name={field.name}
                    value={values[field.name]}
                    required={field.required}
                    error={Boolean(touched[field.name] && errors[field.name])}
                    helperText={touched[field.name] && errors[field.name]}
                    onChange={handleChange}
                    key={field.name}
                  />
                ))}
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={handleClose} disabled={submitting}>
                  Закрыть
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  Добавить
                </Button>
              </DialogActions>
            </>
          )}
        </Formik>
      </ThemedDialog>
    </>
  );
};

export default AddDialog;
