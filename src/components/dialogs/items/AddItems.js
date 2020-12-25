import React from 'react';
import EntityDialog from '../../common/EntityDialog';
import { addItem } from '../../../api';
import { emptyEvents } from '../../../constants/utils';
import fields from './fields';

const AddItems = ({ children, events = emptyEvents }) => {
  const handleSubmit = (values) => {
    return addItem(values).then((response) => {
      if (response.done) {
        events.emit('refresh');
      }
      return response;
    });
  };
  return (
    <EntityDialog
      title="Добавление товара"
      submit="Добавить"
      fields={fields}
      onSubmit={handleSubmit}
    >
      {children}
    </EntityDialog>
  );
};

export default AddItems;
