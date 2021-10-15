import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./travelAdvisor/Header/Header";
import List from "./travelAdvisor/List/List";
import Map from "./travelAdvisor/Map/Map";
import { getPlacesData } from "../../api";

const TravelAdvisor = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //bounds to get data from exact square
  const [bounds, setBounds] = useState({});

  /* Lifting the state up */
  const [childClicked, setChildClicked] = useState(null);

  //Get user current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //Get places at current location by default
  useEffect(() => {
    setIsLoading(true);

    getPlacesData(bounds.sw, bounds.ne) //bounds.sw, bounds.ne
      //.then - because getPlacesData async
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TravelAdvisor;
