import React from 'react';
import { Typography } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getProducts } from '../../api';

const columns = [
  new Column('id', 'Номер Продукта'),
  new Column('product_name', 'Название продукта'),
  new Column('manufacturer_name', 'Название фирмы'),
  new Column('category_name', 'Название категории'),
];

const ProductsTable = () => (
  <>
    <Typography variant="h3">Продукты</Typography>
    <DatabaseTable columns={columns} getData={getProducts} />
  </>
);

export default ProductsTable;
