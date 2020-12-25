import React from 'react';
import EntityDialog from '../../common/EntityDialog';
import { editItem } from '../../../api';
import { emptyEvents } from '../../../constants/utils';
import fields from './fields';

const EditItems = ({ children, id = null, values, events = emptyEvents }) => {
  const handleSubmit = (values) => {
    return editItem({
      id,
      ...values,
    }).then((response) => {
      if (response.done) {
        events.emit('refresh');
      }
      return response;
    });
  };
  return (
    <EntityDialog
      title="Изменение категории"
      submit="Изменить"
      fields={fields}
      values={values}
      onSubmit={handleSubmit}
    >
      {children}
    </EntityDialog>
  );
};

export default EditItems;
