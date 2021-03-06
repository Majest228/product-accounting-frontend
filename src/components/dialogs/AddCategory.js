import React from 'react';
import EntityDialog from '../common/EntityDialog';
import Field from '../../constants/field';
import { addCategory } from '../../api';
import { emptyEvents } from '../../constants/utils';

const fields = [new Field('name', 'Название категории')];

const AddCategory = ({ children, events = emptyEvents }) => {
  const handleSubmit = (values) => {
    return addCategory(values).then((response) => {
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

export default AddCategory;
