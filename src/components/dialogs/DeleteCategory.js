import React from 'react';
import { deleteCategory } from '../../api';
import { emptyEvents } from '../../constants/utils';
import DeleteDialog from '../common/DeleteDialog';

const DeleteCategory = ({ children, id, events = emptyEvents }) => {
  const handleSubmit = () => {
    return deleteCategory({
      id,
    }).then((response) => {
      if (response.done) {
        events.emit('refresh');
      }
      return response;
    });
  };
  return (
    <DeleteDialog id={id} onSubmit={handleSubmit}>
      {children}
    </DeleteDialog>
  );
};

export default DeleteCategory;
