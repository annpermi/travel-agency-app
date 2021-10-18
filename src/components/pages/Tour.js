import React, { Fragment, useState } from "react";
import "../../App.css";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns"; // choose your lib
// import deLocale from "date-fns/locale/ru";
import Footer from "./Footer";
import DatePicker from "./DatePicker";
import "./Tours.css";

const Tour = () => {
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" style={{ height: "80vh" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="primary"
              style={{ fontWeight: 500 }}
            >
              Заказать тур
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Ваше имя"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Ваш телефон"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Ваш e-mail"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="country"
                    label="Выберите страну"
                    type="country"
                    id="country"
                    // autoComplete="country"
                  />
                </Grid>
                <DatePicker />
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="people"
                    label="Сколько летит человек?"
                    name="people"
                    type="people"
                    // autoComplete="people"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // required
                    fullWidth
                    id="requirements"
                    label="Дополнительные пожелания"
                    name="requirements"
                    // autoComplete="requirements"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    style={{ marginLeft: "0" }}
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Подписаться на новостные рассылки"
                  />
                </Grid>
              </Grid>

              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Подтвердить
              </Button> */}
              <button className="btn-tours" type="submit">
                Подтвердить
              </button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Tour;
