import React from 'react';
import { Typography } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getManufacturer } from '../../api';

const columns = [new Column('id', 'Номер фирмы'), new Column('name', 'Название фирмы')];

const ManufacturerTable = () => (
  <>
    <Typography variant="h3">Фирмы</Typography>
    <DatabaseTable columns={columns} getData={getManufacturer} />
  </>
);

export default ManufacturerTable;
