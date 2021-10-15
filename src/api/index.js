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

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
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
          "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_API_KEY,
          "x-rapidapi-key":
            "c0db406f2cmshcf57f894ffe1793p139ab4jsn56ab9df751ef",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
