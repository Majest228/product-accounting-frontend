import React from 'react';
import AddDialog from '../common/AddDialog';
import Field from '../../constants/field';
import { addCategory } from '../../api';
import { emptyEvents } from '../../constants/utils';

const fields = [new Field('name', 'Название категории')];

const AddCategory = ({ children, events = emptyEvents }) => {
  const handleSubmit = (...args) => {
    return addCategory(...args).then((response) => {
      if (response.done) {
        events.emit('refresh');
      }
      return response;
    });
  };
  return (
    <AddDialog title="Добавление категории" fields={fields} onSubmit={handleSubmit}>
      {children}
    </AddDialog>
  );
};

export default AddCategory;
