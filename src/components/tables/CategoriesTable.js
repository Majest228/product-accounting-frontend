import React from 'react';
import { Typography, Button } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getCategories } from '../../api';
import AddCategory from '../dialogs/AddCategory';
import ButtonsContainer from '../ButtonsContainer';
import EventEmitter from '../../constants/eventEmitter';

const columns = [new Column('id', 'Номер категории'), new Column('name', 'Название категории')];
const events = new EventEmitter();

const CategroiesTable = () => {
  console.log(events);
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

      <DatabaseTable columns={columns} events={events} getData={getCategories} />
    </>
  );
};

export default CategroiesTable;
