import React, { useState, useEffect } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';
import { noop, emptyEvents } from '../../constants/utils';

export const Order = {
  Ascending: 'asc',
  Descending: 'desc',
};

export const sizes = [5, 10, 15, 20, 25];

const AdvancedTable = ({
  columns = [],
  data = [],
  total = 0,
  events = emptyEvents,
  onChange = noop,
  ...props
}) => {
  const [order, setOrder] = useState({
    column: null,
    direction: Order.Ascending,
  });

  const [pagination, setPagination] = useState({
    page: 0,
    size: sizes[0],
  });

  useEffect(() => {
    events.on('refresh', () => {
      onChange(order, pagination);
    });
    onChange(order, pagination);
  }, [order, pagination]);

  const changeOrder = (column) =>
    setOrder((order) => {
      const nextDirection =
        order.direction === Order.Ascending ? Order.Descending : Order.Ascending;

      return {
        column,
        direction: order.column === column ? nextDirection : order.direction,
      };
    });

  const handleChangePage = (event, page) => setPagination((state) => ({ ...state, page }));

  const handleChangeSize = (event) => {
    const value = Number(event.target.value);

    setPagination((state) => ({
      page: Math.max(0, Math.min(state.page, Math.ceil(total / value) - 1)),
      size: value,
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.name}>
                {column.sortable ? (
                  <TableSortLabel
                    active={order.column === column.name}
                    direction={order.direction}
                    onClick={() => changeOrder(column.name)}
                  >
                    {column.text}
                  </TableSortLabel>
                ) : (
                  column.text
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((entry, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.name}>{entry[column.name]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={sizes}
              colSpan={columns.length}
              count={total}
              rowsPerPage={pagination.size}
              page={pagination.page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeSize}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default AdvancedTable;
