import React from 'react';
import { Typography, Button, IconButton } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getItem } from '../../api';
import ButtonsContainer from '../ButtonsContainer';
import EventEmitter from '../../constants/eventEmitter';
import { Edit, DeleteOutline } from '@material-ui/icons';
import AddItems from '../dialogs/items/AddItems';
import EditItems from '../dialogs/items/EditItems';
import DeleteItem from '../dialogs/items/DeleteItem';
import { prepareDataForExport } from '../../constants/utils';
import ExportPdf from '../common/ExportPdf';
const columns = [
  new Column('id', 'Номер Товара'),
  new Column('name', 'Название товара'),
  new Column('price', 'Цена'),
];
const events = new EventEmitter();

const ItemsTable = () => {
  const exportPdf = (createPdf) => {
    getItem().then((data) => {
      createPdf(
        columns.map((column) => column.text),
        ['auto', '*', '*'],
        prepareDataForExport(data.list, columns)
      );
    });
  };
  return (
    <>
      <Typography variant="h3">Товары</Typography>
      <ButtonsContainer>
        <AddItems events={events}>
          {(handleOpen, handleClose) => (
            <Button color="primary" variant="contained" onClick={handleOpen}>
              Добавить товар
            </Button>
          )}
        </AddItems>
        <ExportPdf filename="Товары">
          {(handleClick) => (
            <Button color="secondary" variant="contained" onClick={() => exportPdf(handleClick)}>
              Export PDF
            </Button>
          )}
        </ExportPdf>
      </ButtonsContainer>

      <DatabaseTable columns={columns} events={events} getData={getItem}>
        {(entry) => (
          <>
            <EditItems id={entry.id} values={entry} events={events}>
              {(handleOpen, handleClose) => (
                <IconButton color="primary" onClick={handleOpen}>
                  <Edit />
                </IconButton>
              )}
            </EditItems>
            <DeleteItem id={entry.id} events={events}>
              {(handleOpen, handleClose) => (
                <IconButton color="primary" onClick={handleOpen}>
                  <DeleteOutline />
                </IconButton>
              )}
            </DeleteItem>
          </>
        )}
      </DatabaseTable>
    </>
  );
};

export default ItemsTable;
