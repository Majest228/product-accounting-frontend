import React, { useState, useEffect } from 'react';
// import { debounce } from '../../../constants/utils';
import ThemedAutocomplete from '../../themed/ThemedAutocomplete';
import { TextField, CircularProgress } from '@material-ui/core';

const AsyncField = ({ reference, ...props }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(undefined);

  const load = (value = '') => {
    setLoading(true);

    reference.getOptions({ start: value }).then((data) => {
      if (open) {
        setOptions(data.list);
      }

      setLoading(false);
    });
  };

  // const debouncedLoad = debounce(load, 500);

  useEffect(() => {
    setId(`${Math.random().toString(36).slice(2)}_${props.name}`);
    load();
  }, []);

  useEffect(() => {
    if (open && options.length === 0) {
      load();
    }

    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (event, value) => {
    props.onChange(props.name, value);
  };

  const handleUpdate = (event) => {
    // const value = event.target.value;
    // debouncedLoad(value);
  };

  const getOptionSelected = (option, value) => {
    return option.id === value.id;
  };

  return (
    <ThemedAutocomplete
      id={id}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      loading={loading}
      value={props.value || null}
      getOptionSelected={getOptionSelected}
      getOptionLabel={reference.getLabel}
      onChange={handleChange}
      renderOption={reference.renderOption}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          onChange={handleUpdate}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          {...props}
        />
      )}
    />
  );
};

export default AsyncField;
