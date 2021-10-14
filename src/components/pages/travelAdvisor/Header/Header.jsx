import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" classes={{ root: classes.appbar }}>
      <Toolbar className={classes.toolbar}>
        {/* <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography> */}
        <Box display="flex" classes={{ root: classes.box }}>
          <Typography variant="h6" className={classes.title}>
            Исследуй новые места
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Поиск..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
