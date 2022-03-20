<template>
  <div class="forecasts-page-container">
    <h1  class="forecasts-page-container__title">Weather forecast</h1>
    <h4 class="forecasts-page-container__subtitle">NEXT 7 DAYS</h4>

    <InputsHeader 
      :inputMinTemp.sync="inputMinTemp" 
      :inputMaxTemp.sync="inputMaxTemp" 
      :maxTemp="maxTemp" 
      :minTemp="minTemp"
    />

    <div class="forecasts-page-container__list">
      <div v-for="item in filteredForecasts" :key="item.dt" 
        class="forecasts-page-container__forecast-card">
        <ForecastCard :forecastData="item"/>
      </div>
    </div>
  </div>
</template>

<script>
/** Page displaying the next 7 days forecasts in Paris */

import { getForecasts } from "../services/api/openweathermap"
import InputsHeader from  "./InputsHeader"
import ForecastCard from  "./ForecastCard"

export default {
  name: "ForecastsPage",
  components: {
    InputsHeader,
    ForecastCard
  },
  data() {
    return {
      forecasts: [],
      inputMinTemp: 0,
      inputMaxTemp: 30
    }
  },
  mounted() {
    getForecasts().then((items) => {
      this.forecasts = items
      this.inputMinTemp = this.minTemp
      this.inputMaxTemp = this.maxTemp
    })
  },
  computed: {
    /** Filter the list of forecasts according to the minimum and maximum temperature entered in the inputs */
    filteredForecasts() {
      return this.forecasts.filter(
        (item) => item.temp.min > this.inputMinTemp 
          && item.temp.max < this.inputMaxTemp
      )
    },
    /** Take the highest temperature in the forecast list and use it as the maximum temperature of the inputs */
    maxTemp() {
      return Math.ceil(Math.max(...this.forecasts.map(item => item.temp.max)))
    },
    /** Take the lowest temperature from the list of forecasts and use it as the minimum temperature for inputs */
    minTemp() {
      return Math.floor(Math.min(...this.forecasts.map(item => item.temp.min)))
    }
  }
}
</script>

<style lang="scss">
.forecasts-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16px 0;

  p {
    font-size: 10px;
  }

  &__title {
    color: #fff;
    font-size: 40px;
    margin: 16px
  }

  &__subtitle {
    color: #8458FF;
    font-size: 14px;
    margin: 8px;
  }

  &__list {
    width: 40%;

    > div:not(:first-child) {
      margin-top: 12px;
    }
  }
}
</style>
