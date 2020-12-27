import React from 'react';
import { Typography, Button, IconButton } from '@material-ui/core';
import { Edit, DeleteOutline } from '@material-ui/icons';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getCategories } from '../../api';
import AddCategory from '../dialogs/AddCategory';
import EditCategory from '../dialogs/EditCategory';
import DeleteCategory from '../../components/dialogs/DeleteCategory';
import ButtonsContainer from '../ButtonsContainer';
import EventEmitter from '../../constants/eventEmitter';

const columns = [new Column('id', 'Номер категории'), new Column('name', 'Название категории')];
const events = new EventEmitter();

const CategroiesTable = () => {
  return (
    <>
      <Typography variant="h3">Категории</Typography>
      <ButtonsContainer>
        <AddCategory events={events}>
          {(handleOpen, handleClose) => (
            <Button color="primary" variant="contained" onClick={handleOpen}>
              Добавить категорию
            </Button>
          )}
        </AddCategory>
      </ButtonsContainer>

      <DatabaseTable columns={columns} events={events} getData={getCategories}>
        {(entry) => (
          <>
            <EditCategory id={entry.id} values={entry} events={events}>
              {(handleOpen, handleClose) => (
                <IconButton color="primary" onClick={handleOpen}>
                  <Edit />
                </IconButton>
              )}
            </EditCategory>
            <DeleteCategory id={entry.id} events={events}>
              {(handleOpen, handleClose) => (
                <IconButton color="primary" onClick={handleOpen}>
                  <DeleteOutline />
                </IconButton>
              )}
            </DeleteCategory>
          </>
        )}
      </DatabaseTable>
    </>
  );
};

export default CategroiesTable;
