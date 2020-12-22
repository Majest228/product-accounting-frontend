import React, { useState } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import AdvancedTable from '../common/AdvancedTable';
import { track } from '../../constants/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.action.disabledBackground,
  },
}));

const DatabaseTable = ({ columns, getData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleChange = (order, pagination) => {
    setLoading(true);

    track(
      getData({
        ...order,
        ...pagination,
      }).then((value) => setData(value))
    ).then(() => setLoading(false));
  };

  return (
    <div className={classes.root}>
      <AdvancedTable
        columns={columns}
        data={data.list}
        total={data.total}
        onChange={handleChange}
      />
      {loading && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default DatabaseTable;
