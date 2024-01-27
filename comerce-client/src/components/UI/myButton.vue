<template>
  <button type="button" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "myButton"
}
/*
* {"access":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6ImNscXkwcXJ2NTAwMDBmcWZxMmk1MGd5Nm8iLCJsb2dpbiI6Im1hbnVsIiwicGFzc3dvcmQiOiIxOTNkZmRlNGEyZDNhYjAyODA5ZDQwYjEyZTM1Y2NmNWI5NWFlZmI2NTI2ZTJmMTk1YTQ5ZmUyYzdmMzY1YTU1In0sImlhdCI6MTcwNDMwMDkyMCwiZXhwIjoxNzA0MzAyNzIwfQ.joT1avJhK_55Y8q3CtsHbLeQvikDYz3aRHaurqcv4WY","refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZleUpwWkNJNkltTnNjWGt3Y1hKMk5UQXdNREJtY1daeE1tazFNR2Q1Tm04aUxDSnNiMmRwYmlJNkltMWhiblZzSWl3aWNHRnpjM2R2Y21RaU9pSXhPVE5rWm1SbE5HRXlaRE5oWWpBeU9EQTVaRFF3WWpFeVpUTTFZMk5tTldJNU5XRmxabUkyTlRJMlpUSm1NVGsxWVRRNVptVXlZemRtTXpZMVlUVTFJbjBzSW1saGRDSTZNVGN3TkRNd01Ea3lNQ3dpWlhod0lqb3hOekEwTXpBeU56SXdmUS5qb1QxYXZKaEtfNTVZOHEzQ3RzSGJMZVF2aWtEWXozYVJIYXVycWN2NFdZIiwiaWF0IjoxNzA0MzAwOTIwLCJleHAiOjE3MDQzODczMjB9.TTiK3QCDleOM_7I7wUVPnXI-WwRypepehR01wenxGMs"}
* */
</script>

<style scoped>
.btn{
  background-color: var(--color3);
  color: white;
}
</style>