import React from 'react';
import EntityDialog from '../../common/EntityDialog';
import Field from '../../../constants/field.js';
import { addManufacturer } from '../../../api';
import { emptyEvents } from '../../../constants/utils';

const fields = [new Field('name', 'Название категории')];

const AddManufacturer = ({ children, events = emptyEvents }) => {
  const handleSubmit = (values) => {
    return addManufacturer(values).then((response) => {
      if (response.done) {
        events.emit('refresh');
      }
      return response;
    });
  };
  return (
    <EntityDialog
      title="Добавление категории"
      submit="Добавить"
      fields={fields}
      onSubmit={handleSubmit}
    >
      {children}
    </EntityDialog>
  );
};

export default AddManufacturer;
