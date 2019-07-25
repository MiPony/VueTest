<template>
  <div id="app">
    <h2>SET SHEDULE</h2>
    <div class="header">
      <strong>ALL<br>DAY</strong>
      <ul>
        <li>00:00</li>
        <li>03:00</li>
        <li>06:00</li>
        <li>09:00</li>
        <li>12:00</li>
        <li>15:00</li>
        <li>18:00</li>
        <li>21:00</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
h2{
  margin: 100px 0 100px 0;
}
strong{
  line-height: 24px;
}
ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  padding-top: 16px;
  margin-left: 10px;
}
li{
  font-size: 14px;
  margin-right: 30px;
  font-weight: 600;
  border-left: 2px solid #2c3e50;
}
</style>
