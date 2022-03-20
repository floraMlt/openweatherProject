const DOMAIN = "https://api.openweathermap.org/"
const API_ID = process.env.VUE_APP_OPENWEATHER_API_ID

import axios from "axios"

/** Convert timestamp to local date format */
const toLocalDate = (timestamp) => {
  let date = new Date(timestamp * 1000)

  return date.toLocaleDateString("en-GB", { weekday: "short", month: "long", day: "numeric" }).replace(',', '.')
}

/** Get from the api the list of forecasts for the next 7 days in Paris */
const getForecasts = async () => {
  try {
    return axios
      .get(
        `${DOMAIN}data/2.5/forecast/daily?q=paris&cnt=7&units=metric&appid=${API_ID}`
      )
      .then((response) => {
        let forecasts = response?.data?.list

        return forecasts.map((item) => {
          item.date = toLocalDate(item.dt)
          return item
        })
      })
  } catch (err) {
    throw new Error(err)
  }
}

export { getForecasts }
