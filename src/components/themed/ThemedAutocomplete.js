import { withStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const ThemedAutocomplete = withStyles((theme) => ({
  option: {
    '& > span': {
      marginRight: 10,
      fontStyle: 'italic',
    },
  },
}))(Autocomplete);

export default ThemedAutocomplete;
