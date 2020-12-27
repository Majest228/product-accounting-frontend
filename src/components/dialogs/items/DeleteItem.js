import React from 'react';
import DeleteDialog from '../../common/DeleteDialog';
import { emptyEvents } from '../../../constants/utils';
import { deleteItem } from '../../../api';

const DeleteItem = ({ children, id, events = emptyEvents }) => {
  const handleSubmit = () => {
    return deleteItem({
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

export default DeleteItem;
