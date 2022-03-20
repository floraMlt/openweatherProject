<template>
  <div class="inputs-header">

    <!-- Input for minimal temperature -->
    <div class="input">
      <div class="input__infos">
        <p class="input__infos__input-title">MIN TEMP</p>
        <h3 class="input__infos__input-value">{{ inputMinTemp }}°C</h3>
      </div>
      <div class="input__container">
        <input v-on:input="$emit('update:inputMinTemp', parseInt($event.target.value))" 
          :value="inputMinTemp" type="range" 
          :min="minTemp" :max="inputMaxTemp"
          class="input__slider"/>
      </div>   
    </div>
    
    <!-- Input for maximal temperature -->
    <div class="input">
      <div class="input__infos">
        <p class="input__infos__input-title">MAX TEMP</p>
        <h3 class="input__infos__input-value">{{ inputMaxTemp }}°C</h3>
      </div>
      <div class="input__container">
        <input v-on:input="$emit('update:inputMaxTemp', parseInt($event.target.value))" 
          :value="inputMaxTemp" type="range" 
          :min="inputMinTemp" :max="maxTemp"
          class="input__slider"/>
      </div>
    </div>
  </div>
</template>

<script>
/** Inputs for filtering forecasts by minimum and maximum temperature */

export default {
  name: "InputsHeader",
  props: {
    inputMinTemp: {
      type: Number,
      default: 0
    },
    inputMaxTemp: {
      type: Number,
       default: 30
    },
    minTemp: {
      type: Number,
      default: 0
    },
    maxTemp: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style lang="scss">
.inputs-header {
  display: flex;
  flex-direction: row;
  margin-top: 8px;

  .input {
    display: flex;
    flex-direction: column;
    margin: 32px;

    &__infos {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &__input-title {
        color: #fff;
      }

      &__input-value {
        font-size: 16px;
        color: #8458FF;
      }
    }

    &__container {
      padding: 1px 10px 7px 10px;
      border-radius: 35px;
      background-color: rgba(#fff, 0.5);
    }

    /** style inputs range */
    &__slider {
      height: 3px;
      background-color: rgba(#fff, 0.8);
      -webkit-appearance:none;
      border-radius:1.5rem;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background:  #8458FF;
        cursor: pointer;
      }

      &::-moz-range-thumb {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background:  #8458FF;
        cursor: pointer;
      }
    }
  }
}
</style>
