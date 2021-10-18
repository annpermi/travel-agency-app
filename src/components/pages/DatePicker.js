import React, { Fragment, useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import deLocale from "date-fns/locale/ru";
import Grid from "@mui/material/Grid";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
      <Fragment>
        <Grid item xs={12} sm={6}>
          <KeyboardDatePicker
            autoOk
            minDate={new Date()}
            variant="inline"
            inputVariant="outlined"
            label="Вылет с"
            format="dd/MM/yyyy"
            value={startDate}
            InputAdornmentProps={{ position: "end" }}
            onChange={(date) => setStartDate(date)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <KeyboardDatePicker
            autoOk
            minDate={new Date()}
            variant="inline"
            inputVariant="outlined"
            label="По"
            format="dd/MM/yyyy"
            value={endDate}
            InputAdornmentProps={{ position: "end" }}
            onChange={(date) => setEndDate(date)}
          />
        </Grid>
      </Fragment>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
