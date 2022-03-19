<template>
  <div id="app">
    <ForecastsPage />
  </div>
</template>

<script>
import ForecastsPage from "./components/ForecastsPage"

export default {
  name: "App",
  components: {
    ForecastsPage,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;600;700&display=swap');
</style>

<style lang="scss">
body {
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(to bottom right, #CFC6FF, #AA9CF0, #DCD7F6);
  font-family: 'Karla', sans-serif;
}
</style>