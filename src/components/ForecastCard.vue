<template>
  <div class="forecast-card-container">

    <img :src="`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`"/>
    <h3 class="forecast-card-container__date">
      {{ forecastData.date }}
    </h3>

    <div class="forecast-card-container__temps-details">
      <div class="forecast-card-container__temps-details__item">
        <p class="forecast-card-container__temps-details__item__title">
          MIN TEMP
        </p>
        <h3 class="forecast-card-container__temps-details__item__value">
          {{ forecastData.temp.min }}°C
        </h3>
      </div>
    
      <div class="forecast-card-container__temps-details__item">
        <p class="forecast-card-container__temps-details__item__title">
          MAX TEMP
        </p>
        <h3 class="forecast-card-container__temps-details__item__value">
          {{ forecastData.temp.max }}°C
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForecastCard",
  props: {
    forecastData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.forecast-card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;

  background-color: rgba(#fff, 0.5);
  border-radius: 20px;

  &__date {
    width: min-content;
    margin-left: 16px;
    color: #323232;
    font-size: 16px;
  }

  & > div, h3 {
    padding-right: 8px;
  }

  &__temps-details {
    width: 30%;
    margin-left: auto;

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &__title {
        margin: 0;
        color: #323232;
      }

      &__value {
        margin-left: 4px;
        font-size: 16px;
        color: #8458FF;
      }
    }
  }
}
</style>
