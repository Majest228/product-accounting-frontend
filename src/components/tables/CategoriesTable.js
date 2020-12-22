import React from 'react';
import { Typography } from '@material-ui/core';
import DatabaseTable from '../middleware/DatabaseTable';
import Column from '../../constants/column';
import { getCategories } from '../../api';

const columns = [new Column('id', 'Номер категории'), new Column('name', 'Название категории')];

const CategroiesTable = () => (
  <>
    <Typography variant="h3">Категории</Typography>
    <DatabaseTable columns={columns} getData={getCategories} />
  </>
);

export default CategroiesTable;
