import React from 'react';
import DeleteDialog from '../../common/DeleteDialog';
import { emptyEvents } from '../../../constants/utils';
import { deleteManufacturer } from '../../../api';

const DeleteManufacturer = ({ children, id, events = emptyEvents }) => {
  const handleSubmit = () => {
    return deleteManufacturer({
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

export default DeleteManufacturer;
