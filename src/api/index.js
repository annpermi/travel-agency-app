import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat, //top right
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // bl_latitude: "11.847676",
        // tr_latitude: "12.838442",
        // bl_longitude: "109.095887",
        // tr_longitude: "109.149359",
        lang: "ru_RU",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "c48aef431bmshe33bd7abce1859bp1b8b3bjsn47c9af310a48",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
