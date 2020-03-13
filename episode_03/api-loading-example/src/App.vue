<template>
  <div class="app">
    <div v-if="!loading">
      <div v-if="error">
        <h2 class="error">Error: {{error}}</h2>
      </div>
      <div v-else>
        <h2>Data loaded!</h2>
        <ul v-if="data.features && data.features.length">
          <li v-for="country in data.features" :key="country.attributes.OBJECTID">
            <p>{{country.attributes.Province_State}}, {{country.attributes.Country_Region}}</p>
            <p><strong>{{country.attributes.Confirmed}}</strong></p>
          </li>
        </ul>
        <h3 v-else>No data!</h3>
      </div>
    </div>
    <h2 v-else>Loading data...</h2>
  </div>
</template>

<script>
const url = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc%2CCountry_Region%20asc%2CProvince_State%20asc&resultOffset=0&resultRecordCount=1000&cacheHint=false';

export default {
  name: 'App',
  data: () => ({
    loading: false,
    data: null,
    error: '',
  }),
  async created() {
    console.log('Component created...');
    this.loading = true;
    try {      
      const response = await fetch(url);
      const json = await response.json();
      this.data = json;
    } catch (error) {
      this.error = error.message;
    }
    this.loading = false;
  },
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.error {
  color: red;
}
</style>
