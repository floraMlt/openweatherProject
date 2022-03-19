<template>
  <div class="forecasts-page-container">
    <h1  class="forecasts-page-container__title">Weather forecast</h1>
    <h4 class="forecasts-page-container__subtitle">NEXT 7 DAYS</h4>

    <InputsHeader :inputMinTemp.sync="inputMinTemp" :inputMaxTemp.sync="inputMaxTemp"/>

    <div class="forecasts-page-container__list">
      <div v-for="item in filteredForecasts" :key="item.dt" class="forecasts-page-container__forecast-card">
        <ForecastCard :forecastData="item"/>
      </div>
    </div>
  </div>
</template>

<script>
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
    getForecasts().then((items) => (this.forecasts = items))
  },
  computed: {
    filteredForecasts() {
      return this.forecasts.filter(
        (item) => item.temp.min > this.inputMinTemp && item.temp.max < this.inputMaxTemp
      )
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
