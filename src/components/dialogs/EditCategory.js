import React from 'react';
import EntityDialog from '../common/EntityDialog';
import Field from '../../constants/field';
import { editCategory } from '../../api';
import { emptyEvents } from '../../constants/utils';

const fields = [new Field('name', 'Название категории')];

const EditCategory = ({ children, id = null, values, events = emptyEvents }) => {
  const handleSubmit = (values) => {
    return editCategory({
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

export default EditCategory;
