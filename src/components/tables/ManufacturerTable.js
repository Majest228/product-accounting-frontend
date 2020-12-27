import React from 'react';
import { Typography, Button, IconButton } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import { Edit, DeleteOutline } from '@material-ui/icons';
import Column from '../../constants/column';
import { getManufacturer } from '../../api';
import AddManufacturer from '../dialogs/manufacturers/AddManufacturer';
import EditManufacturer from '../dialogs/manufacturers/EditManufacturer';
import DeleteManufacturer from '../dialogs/manufacturers/DeleteManufacturer';
import ButtonsContainer from '../ButtonsContainer';
import EventEmitter from '../../constants/eventEmitter';
import { prepareDataForExport } from '../../constants/utils';
import ExportPdf from '../common/ExportPdf';

const columns = [new Column('id', 'Номер фирмы'), new Column('name', 'Название фирмы')];
const events = new EventEmitter();

const ManufacturerTable = () => {
  const exportPdf = (createPdf) => {
    getManufacturer().then((data) => {
      createPdf(
        columns.map((column) => column.text),
        ['auto', '*'],
        prepareDataForExport(data.list, columns)
      );
    });
  };
  return (
    <>
      <Typography variant="h3">Фирмы</Typography>
      <ButtonsContainer>
        <AddManufacturer events={events}>
          {(handleOpen, handleClose) => (
            <Button color="primary" variant="contained" onClick={handleOpen}>
              Добавить фирму
            </Button>
          )}
        </AddManufacturer>
        <ExportPdf filename="Фирмы">
          {(handleClick) => (
            <Button color="secondary" variant="contained" onClick={() => exportPdf(handleClick)}>
              Export PDF
            </Button>
          )}
        </ExportPdf>
      </ButtonsContainer>

      <DatabaseTable columns={columns} events={events} getData={getManufacturer}>
        {(entry) => (
          <>
            <EditManufacturer id={entry.id} values={entry} events={events}>
              {(handleOpen, handleClose) => (
                <IconButton color="primary" onClick={handleOpen}>
                  <Edit />
                </IconButton>
              )}
            </EditManufacturer>
            <DeleteManufacturer id={entry.id} events={events}>
              {(handleOpen, handleClose) => (
                <IconButton color="primary" onClick={handleOpen}>
                  <DeleteOutline />
                </IconButton>
              )}
            </DeleteManufacturer>
          </>
        )}
      </DatabaseTable>
    </>
  );
};
export default ManufacturerTable;
