import React from 'react';
import { Typography, Button } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getStashy } from '../../api';
import ExportPdf from '../common/ExportPdf';
import { prepareDataForExport } from '../../constants/utils';
import ButtonsContainer from '../ButtonsContainer';

const columns = [
  new Column('id', 'Номер Продукта'),
  new Column('product_name', 'Название продукта'),
  new Column('manufacturer_name', 'Название фирмы'),
  new Column('category_name', 'Название категории'),
  new Column('count', 'Количество'),
];

const StashyTable = () => {
  const exportPdf = (createPdf) => {
    getStashy().then((data) => {
      createPdf(
        columns.map((column) => column.text),
        ['auto', '*', '*', '*', '*'],
        prepareDataForExport(data.list, columns)
      );
    });
  };
  return (
    <>
      <Typography variant="h3">Продукты</Typography>
      <ButtonsContainer>
        <ExportPdf filename="Склад">
          {(handleClick) => (
            <Button color="secondary" variant="contained" onClick={() => exportPdf(handleClick)}>
              Export PDF
            </Button>
          )}
        </ExportPdf>
      </ButtonsContainer>
      <DatabaseTable columns={columns} getData={getStashy} />
    </>
  );
};
export default StashyTable;
