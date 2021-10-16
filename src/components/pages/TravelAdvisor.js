import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./travelAdvisor/Header/Header";
import List from "./travelAdvisor/List/List";
import Map from "./travelAdvisor/Map/Map";
import { getPlacesData, getWeatherData } from "../../api";

const TravelAdvisor = () => {
  const [type, setType] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [rating, setRating] = useState("");
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //bounds to get data from exact square
  const [bounds, setBounds] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  /* Lifting the state up */
  const [childClicked, setChildClicked] = useState(null);

  //Get user current location - start at the start
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  /* only for rating */
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  //Get places at current location by default
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      /* Get weather info from api */
      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );
      console.log({ weatherData });

      /* Get places info from api */
      getPlacesData(type, bounds.sw, bounds.ne) //bounds.sw, bounds.ne
        //.then - because getPlacesData async
        .then((data) => {
          setPlaces(
            data?.filter((place) => place.name && place.num_reviews > 0)
          ); /* clear dummy data */
          setFilteredPlaces([]); /* reset filtered places */
          setIsLoading(false);
        });
    }
  }, [type, bounds]); //remove coordinates, because we changed in the header

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={
              filteredPlaces.length ? filteredPlaces : places
            } /* if where is filteredPlaces, only show whem */
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TravelAdvisor;
