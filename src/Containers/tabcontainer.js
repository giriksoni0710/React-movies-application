import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MediaCard from './moviescontainer'
import MediaCard2 from './tvshowscontainer'
import SearchCard from './searchcontainer'
import Multiselect from '../Components/Multiselect';
import Multiselect2 from '../Components/Multiselect2';
import Multiselect3 from '../Components/Multiselect3'
import { textAlign } from '@material-ui/system';



function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '68%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 40,
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  },
}));

export default function FullWidthTabs(props) {

    const {moviesmultiselect,tvshowsmultiselect} = props

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="MOVIES" {...a11yProps(0)} />
          <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
          <Tab label="TV SHOWS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Multiselect2 moviesmultiselect={moviesmultiselect} style={{textAlign: "center"}}></Multiselect2>
          <MediaCard2 value={value}></MediaCard2>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h1>Please enter a search</h1>

          <SearchCard></SearchCard>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Multiselect3 tvshowsmultiselect = {tvshowsmultiselect}></Multiselect3>
        <MediaCard value={value}></MediaCard>
        
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}