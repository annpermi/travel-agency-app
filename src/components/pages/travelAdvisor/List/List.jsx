import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]); //get places
  // console.log({ places });
  /* When user click on the icon inside map, we will see that on left side inside list */
  useEffect(() => {
    /* Array constructor to place as many places, .fill - will start filling the array, when you loop over it,
      _, - we don't need to use a first parameter
      if ref not exists, create new - createRef()  */
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]); //recall everytime when the places change

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Рестораны, отели и развлечения вокруг тебя
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Выбрать тип</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Рестораны</MenuItem>
              <MenuItem value="hotels">Отели</MenuItem>
              <MenuItem value="attractions">Развлечения</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Рейтинг</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">Все</MenuItem>
              <MenuItem value="3">Выше 3.0</MenuItem>
              <MenuItem value="4">Выше 4.0</MenuItem>
              <MenuItem value="4.5">Выше 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {/* ? - if you have places */}
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
