import React from 'react';
import { Typography } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getItem } from '../../api';

const columns = [
  new Column('id', 'Номер Товара'),
  new Column('name', 'Название товара'),
  new Column('price', 'Цена'),
];

const ItemsTable = () => (
  <>
    <Typography variant="h3">Товары</Typography>
    <DatabaseTable columns={columns} getData={getItem} />
  </>
);

export default ItemsTable;
