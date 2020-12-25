import React from 'react';
import { Typography } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getStashy } from '../../api';

const columns = [
  new Column('id', 'Номер Продукта'),
  new Column('product_name', 'Название продукта'),
  new Column('manufacturer_name', 'Название фирмы'),
  new Column('category_name', 'Название категории'),
  new Column('count', 'Количество'),
];

const StashyTable = () => (
  <>
    <Typography variant="h3">Продукты</Typography>
    <DatabaseTable columns={columns} getData={getStashy} />
  </>
);

export default StashyTable;
