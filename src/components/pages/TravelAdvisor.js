import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./travelAdvisor/Header/Header";
import List from "./travelAdvisor/List/List";
import Map from "./travelAdvisor/Map/Map";
import { getPlacesData } from "../../api";

const TravelAdvisor = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

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
    console.log(coordinates, bounds);
    getPlacesData()
      //.then - because getPlacesData async
      .then((data) => {
        setPlaces(data);
      });
  }, [coordinates, bounds]);
  //[] - it will show at the start of our application

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TravelAdvisor;
