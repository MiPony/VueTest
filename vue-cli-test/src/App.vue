<template>
  <div id="app">
    <h2>SET SHEDULE</h2>
    <div class="header">
      <i></i>
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
    <div class="main">
      <div>
        <p>MO</p>
        <span class="firstSpan"><input type="checkbox" id="cb1"> <label for="cb1"></label></span>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <p>TU</p>
        <span><input type="checkbox" id="cb2"> <label for="cb2"></label></span>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <p>WE</p>
        <span><input type="checkbox" id="cb3"> <label for="cb3"></label></span>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <p>TH</p>
        <span><input type="checkbox" id="cb4"> <label for="cb4"></label></span>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <p>FR</p>
        <span><input type="checkbox" id="cb5"> <label for="cb5"></label></span>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <p>SA</p>
        <span><input type="checkbox" id="cb6"> <label for="cb6"></label></span>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <p class="lastP">SU</p>
        <span class="lastSpan"><input type="checkbox" id="cb7"> <label for="cb7"></label></span>
        <table class="lastTable">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
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
  margin: 100px 0 20px 0;
}
i{
  width: 60px;
}
strong{
  line-height: 24px;
  width: 60px;
}
ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  padding-top: 16px;
}
li{
  font-size: 14px;
  width: 75px;
  font-weight: 600;
  border-left: 3px solid #2c3e50;
  text-align: left;
}
li:last-child{
  width: 80px;
}
.main div{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
p{
  margin: 0;
  width: 54px;
  height: 52px;
  line-height: 55px;
  color: #cccccc;
  font-weight: 500;
  border-top: 3px solid #cccccc;
  border-left: 3px solid #cccccc;
  border-right: 3px solid #cccccc;
}
.lastP{
  border-bottom: 3px solid #cccccc;
}





span{
  width: 60px;
  height: 52px;
  line-height: 55px;
  background: #2c3e50;
  border-top: 3px solid #cccccc;
}
.firstSpan{
  border-top: 0px solid #cccccc;
  height: 55px;
}
.lastSpan{
  border-bottom: 3px solid #cccccc;
  height: 52px;
}
input{
  margin: 0;
}
input[type="checkbox"]:checked, 
input[type="checkbox"]:not(:checked)
{
    position: absolute;
    left: -9999px;
}
input[type="checkbox"]:checked + label, 
input[type="checkbox"]:not(:checked) + label{
    display: inline-block;
    position: relative;
    cursor: pointer;
}
input[type="checkbox"]:checked + label:before, 
input[type="checkbox"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: -10px;
    top: -18px;
    width: 20px;
    height: 20px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
}
input[type="checkbox"]:checked + label:before, 
input[type="checkbox"]:not(:checked) + label:before {
    border-radius: 10px;
}
input[type="checkbox"]:checked + label:after, 
input[type="checkbox"]:not(:checked) + label:after {
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
input[type="checkbox"]:checked + label:after, 
input[type="checkbox"]:not(:checked) + label:after {
    left: -5px;
    top: -15px;
    width: 15px;
    height: 5px;
    border-radius: 1px;
    border-left: 4px solid #2c3e50;
    border-bottom: 4px solid #2c3e50;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
input[type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
}

input[type="checkbox"]:checked + label:after {
    opacity: 1;
}







table{
  padding: 0;
  margin: 0;
  border-spacing: 0;
}
td{
  border-left: 3px solid #cccccc;
  border-top: 3px solid #cccccc;
  width: 21px;
  height: 50px;
}
td:last-child{
  border-left: 3px solid #cccccc;
  border-top: 3px solid #cccccc;
  border-right: 3px solid #cccccc;
  width: 23px; 
}
.lastTable td{
  border-bottom: 3px solid #cccccc;
}
</style>
