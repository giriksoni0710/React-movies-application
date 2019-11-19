import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Multiselect = [
  {
    id: '1',
    label: 'multi',
  },
  {
    id: '2',
    label: 'movie',
  },
  {
    id: '3',
    label: 'tv-show',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Search type"
          className={classes.textField}
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {Multiselect.map(option => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}