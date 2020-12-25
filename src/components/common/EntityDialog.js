import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, makeStyles } from '@material-ui/core';
import { Formik } from 'formik';
import ThemedDialog from '../themed/ThemedDialog';
import { promiseNoop } from '../../constants/utils';
import AdvancedField from './AdvancedField';

const prepareValues = (values) =>
  Object.entries(values).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      acc[key] = value.id;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'grid',
    gridAutoRows: 'max-content',
    gap: theme.spacing(2),
  },
}));

const EntityDialog = ({
  children,
  title,
  submit,
  fields = [],
  values = {},
  onSubmit = promiseNoop,
}) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const initialValues = fields.reduce((acc, field) => {
    if (field.isReference) {
      acc[field.name] = field.reference.toOption(values);
    } else {
      acc[field.name] = values[field.name] || '';
    }

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
    onSubmit(prepareValues(values))
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
      <ThemedDialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
            <>
              <DialogContent className={classes.content}>
                {fields.map((field) => (
                  <AdvancedField
                    field={field}
                    label={field.text}
                    name={field.name}
                    value={values[field.name]}
                    required={field.required}
                    error={Boolean(touched[field.name] && errors[field.name])}
                    helperText={touched[field.name] && errors[field.name]}
                    onChange={field.isReference ? setFieldValue : handleChange}
                    key={field.name}
                  />
                ))}
                <pre>{JSON.stringify(values, null, 4)}</pre>
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
                  {submit}
                </Button>
              </DialogActions>
            </>
          )}
        </Formik>
      </ThemedDialog>
    </>
  );
};

export default EntityDialog;
